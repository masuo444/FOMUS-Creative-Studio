import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { createAdminClient } from '@/lib/supabase/admin'
import Stripe from 'stripe'

export async function POST(request: Request) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')

  if (!signature) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  const admin = createAdminClient()

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      const facilityId = session.metadata?.facility_id
      const plan = session.metadata?.plan

      if (facilityId && plan) {
        await admin
          .from('facilities')
          .update({
            plan,
            stripe_customer_id: session.customer as string,
            stripe_subscription_id: session.subscription as string,
            updated_at: new Date().toISOString(),
          })
          .eq('id', facilityId)
      }
      break
    }

    case 'customer.subscription.updated': {
      const subscription = event.data.object as Stripe.Subscription & { current_period_end?: number }
      const customerId = subscription.customer as string

      const { data: facility } = await admin
        .from('facilities')
        .select('id')
        .eq('stripe_customer_id', customerId)
        .single()

      if (facility) {
        const priceId = subscription.items.data[0]?.price?.id
        const plan = getPlanFromPriceId(priceId)

        await admin
          .from('facilities')
          .update({
            plan,
            plan_expires_at: subscription.status === 'active' && subscription.current_period_end
              ? new Date(subscription.current_period_end * 1000).toISOString()
              : null,
            updated_at: new Date().toISOString(),
          })
          .eq('id', facility.id)
      }
      break
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data.object as Stripe.Subscription
      const customerId = subscription.customer as string

      await admin
        .from('facilities')
        .update({
          plan: 'free',
          stripe_subscription_id: null,
          plan_expires_at: null,
          updated_at: new Date().toISOString(),
        })
        .eq('stripe_customer_id', customerId)
      break
    }

    case 'invoice.payment_failed': {
      const invoice = event.data.object as Stripe.Invoice
      console.error('Payment failed for customer:', invoice.customer)
      // TODO: Send notification email to facility owner
      break
    }
  }

  return NextResponse.json({ received: true })
}

function getPlanFromPriceId(priceId: string | undefined): string {
  if (!priceId) return 'free'
  if (priceId === process.env.STRIPE_PRICE_LIGHT) return 'light'
  if (priceId === process.env.STRIPE_PRICE_STANDARD) return 'standard'
  if (priceId === process.env.STRIPE_PRICE_PREMIUM) return 'premium'
  return 'free'
}
