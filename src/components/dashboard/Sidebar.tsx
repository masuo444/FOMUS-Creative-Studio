'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard, Building2, MessageSquare, Star,
  BookOpen, Settings, CreditCard, LogOut, ChevronDown
} from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import type { Facility } from '@/lib/types'
import { INDUSTRY_INFO } from '@/lib/types'

interface SidebarProps {
  facilities: Facility[]
  currentFacilityId?: string
}

export default function Sidebar({ facilities, currentFacilityId }: SidebarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [showFacilities, setShowFacilities] = useState(false)

  const currentFacility = facilities.find(f => f.id === currentFacilityId) || facilities[0]

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  const facilityNav = currentFacility ? [
    { href: `/dashboard/facilities/${currentFacility.id}`, label: '概要', icon: LayoutDashboard },
    { href: `/dashboard/facilities/${currentFacility.id}/conversations`, label: '会話ログ', icon: MessageSquare },
    { href: `/dashboard/facilities/${currentFacility.id}/reviews`, label: 'レビュー管理', icon: Star },
    { href: `/dashboard/facilities/${currentFacility.id}/knowledge`, label: 'ナレッジベース', icon: BookOpen },
    { href: `/dashboard/facilities/${currentFacility.id}/settings`, label: '設定', icon: Settings },
  ] : []

  return (
    <aside className="w-64 bg-[var(--sidebar-bg)] text-[var(--sidebar-text)] flex flex-col h-screen fixed left-0 top-0">
      <div className="p-5 border-b border-white/10">
        <Link href="/dashboard" className="text-lg font-bold text-white tracking-tight">
          OMOTE-AI
        </Link>
      </div>

      {/* Facility Selector */}
      {facilities.length > 0 && (
        <div className="p-3 border-b border-white/10">
          <button
            onClick={() => setShowFacilities(!showFacilities)}
            className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-lg">{currentFacility ? INDUSTRY_INFO[currentFacility.industry_type_id]?.icon : '🏢'}</span>
              <span className="text-sm text-white truncate">{currentFacility?.name || '施設を選択'}</span>
            </div>
            <ChevronDown className={`w-4 h-4 transition-transform ${showFacilities ? 'rotate-180' : ''}`} />
          </button>
          {showFacilities && (
            <div className="mt-1 space-y-0.5">
              {facilities.map(f => (
                <Link
                  key={f.id}
                  href={`/dashboard/facilities/${f.id}`}
                  onClick={() => setShowFacilities(false)}
                  className={`flex items-center gap-2 px-2 py-1.5 rounded text-sm transition-colors ${
                    f.id === currentFacilityId ? 'bg-white/10 text-white' : 'hover:bg-white/5'
                  }`}
                >
                  <span>{INDUSTRY_INFO[f.industry_type_id]?.icon}</span>
                  <span className="truncate">{f.name}</span>
                </Link>
              ))}
              <Link
                href="/dashboard/facilities/new"
                className="flex items-center gap-2 px-2 py-1.5 rounded text-sm text-blue-400 hover:bg-white/5 transition-colors"
              >
                + 施設を追加
              </Link>
            </div>
          )}
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
        <NavLink href="/dashboard" icon={LayoutDashboard} label="ダッシュボード" pathname={pathname} exact />
        <NavLink href="/dashboard/facilities" icon={Building2} label="施設一覧" pathname={pathname} />

        {facilityNav.length > 0 && (
          <>
            <div className="pt-4 pb-1 px-2">
              <span className="text-xs text-gray-500 uppercase tracking-wider">
                {currentFacility?.name}
              </span>
            </div>
            {facilityNav.map(item => (
              <NavLink key={item.href} href={item.href} icon={item.icon} label={item.label} pathname={pathname} />
            ))}
          </>
        )}

        <div className="pt-4 pb-1 px-2">
          <span className="text-xs text-gray-500 uppercase tracking-wider">アカウント</span>
        </div>
        <NavLink href="/dashboard/billing" icon={CreditCard} label="プラン・請求" pathname={pathname} />
      </nav>

      <div className="p-3 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm hover:bg-white/5 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          ログアウト
        </button>
      </div>
    </aside>
  )
}

function NavLink({ href, icon: Icon, label, pathname, exact }: {
  href: string; icon: React.ComponentType<{ className?: string }>; label: string; pathname: string; exact?: boolean
}) {
  const isActive = exact ? pathname === href : pathname.startsWith(href)
  return (
    <Link
      href={href}
      className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ${
        isActive ? 'bg-white/10 text-white font-medium' : 'hover:bg-white/5'
      }`}
    >
      <Icon className="w-4 h-4" />
      {label}
    </Link>
  )
}
