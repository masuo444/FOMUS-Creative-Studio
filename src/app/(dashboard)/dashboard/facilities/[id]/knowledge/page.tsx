import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import KnowledgeManager from '@/components/facilities/KnowledgeManager'

export default async function KnowledgePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()

  const { data: facility } = await supabase
    .from('facilities')
    .select('name, industry_type_id')
    .eq('id', id)
    .single()
  if (!facility) notFound()

  const { data: items } = await supabase
    .from('knowledge_base')
    .select('*')
    .eq('facility_id', id)
    .order('category')
    .order('sort_order')

  const { data: categories } = await supabase
    .from('template_categories')
    .select('slug, name_ja')
    .eq('industry_type_id', facility.industry_type_id)
    .order('sort_order')

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">ナレッジベース</h1>
      <p className="text-sm text-gray-500 mb-8">{facility.name} — AIが応答時に参照する情報</p>
      <KnowledgeManager
        facilityId={id}
        items={items || []}
        categories={categories || []}
      />
    </div>
  )
}
