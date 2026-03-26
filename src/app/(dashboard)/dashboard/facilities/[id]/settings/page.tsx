import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import FacilitySettings from '@/components/facilities/FacilitySettings'

export default async function SettingsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()

  const { data: facility } = await supabase
    .from('facilities')
    .select('*')
    .eq('id', id)
    .single()

  if (!facility) notFound()

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">設定</h1>
      <FacilitySettings facility={facility} />
    </div>
  )
}
