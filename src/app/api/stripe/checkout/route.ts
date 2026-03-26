import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { createClient } from '@/lib/supabase/server'

const PRICE_MAP: Record<string, string | undefined> = {
  light: process.env.STRIPE_PRICE_LIGHT,
  standard: process.env.STRIPE_PRICE_STANDARD,
  premium: process.env.STRIPE_PRICE_PREMIUM,
}

export async function POST(request: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { facilityId, plan } = await request.json()

    if (!facilityId || !plan || !PRICE_MAP[plan]) {
      return NextResponse.json({ error: 'Invalid plan or facility' }, { status: 400 })
    }

    const { data: facility } = await supabase
      .from('facilities')
      .select('id, name, stripe_customer_id')
      .eq('id', facilityId)
      .single()

    if (!facility) {
      return NextResponse.json({ error: 'Facility not found' }, { status: 404 })
    }

    let customerId = facility.stripe_customer_id
    if (!customerId) {
      const customer = await stripe.customers.create({
        email: user.email,
        metadata: { facility_id: facilityId, user_id: user.id },
      })
      customerId = customer.id
    }

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      mode: 'subscription',
      line_items: [{ price: PRICE_MAP[plan]!, quantity: 1 }],
      metadata: { facility_id: facilityId, plan },
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/facilities/${facilityId}?upgrade=success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/billing`,
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
