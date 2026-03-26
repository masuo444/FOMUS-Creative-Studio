import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import Sidebar from '@/components/dashboard/Sidebar'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/auth/login')

  const { data: facilities } = await supabase
    .from('facilities')
    .select('*')
    .order('created_at', { ascending: true })

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Sidebar facilities={facilities || []} />
      <main className="ml-64 p-8">
        {children}
      </main>
    </div>
  )
}
