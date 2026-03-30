'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

type CompanySize = 'small' | 'large'

export default function SubsidySimulator() {
  const [companySize, setCompanySize] = useState<CompanySize>('small')
  const [participants, setParticipants] = useState(5)
  const [costPerPerson, setCostPerPerson] = useState(200000)

  const result = useMemo(() => {
    const expenseRate = companySize === 'small' ? 0.75 : 0.60
    const wagePerHour = companySize === 'small' ? 1000 : 500
    const trainingHours = 10

    const totalCost = costPerPerson * participants
    const expenseSubsidy = Math.floor(totalCost * expenseRate)
    const wageSubsidy = wagePerHour * trainingHours * participants
    const actualCost = totalCost - expenseSubsidy - wageSubsidy
    const reductionRate = totalCost > 0 ? Math.round(((totalCost - actualCost) / totalCost) * 100) : 0

    return {
      totalCost,
      expenseSubsidy,
      wageSubsidy,
      actualCost: Math.max(0, actualCost),
      reductionRate: Math.min(100, reductionRate),
    }
  }, [companySize, participants, costPerPerson])

  const formatYen = (n: number) => n.toLocaleString('ja-JP')

  const handleParticipants = (val: string) => {
    const n = parseInt(val, 10)
    if (isNaN(n)) return
    setParticipants(Math.max(1, Math.min(100, n)))
  }

  const handleCost = (val: string) => {
    const n = parseInt(val.replace(/,/g, ''), 10)
    if (isNaN(n)) return
    setCostPerPerson(Math.max(0, n))
  }

  return (
    <div className="bg-white rounded-2xl overflow-hidden max-w-[720px] mx-auto">
      {/* 入力エリア */}
      <div className="px-6 md:px-10 py-8 md:py-10">
        <h3 className="text-[18px] md:text-[20px] font-bold text-[#1F2937] mb-6">助成金シミュレーター</h3>

        {/* 企業規模 */}
        <div className="mb-6">
          <p className="text-[14px] font-bold text-[#4B5563] mb-3">企業規模</p>
          <div className="flex gap-3">
            <label
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border cursor-pointer transition-all text-[15px] font-medium ${
                companySize === 'small'
                  ? 'border-[#059669] bg-[#F0FDF4] text-[#059669]'
                  : 'border-[#E5E7EB] text-[#6B7280] hover:border-[#D1D5DB]'
              }`}
            >
              <input
                type="radio"
                name="companySize"
                value="small"
                checked={companySize === 'small'}
                onChange={() => setCompanySize('small')}
                className="sr-only"
              />
              <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                companySize === 'small' ? 'border-[#059669]' : 'border-[#D1D5DB]'
              }`}>
                {companySize === 'small' && <span className="w-2 h-2 rounded-full bg-[#059669]" />}
              </span>
              中小企業
            </label>
            <label
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border cursor-pointer transition-all text-[15px] font-medium ${
                companySize === 'large'
                  ? 'border-[#059669] bg-[#F0FDF4] text-[#059669]'
                  : 'border-[#E5E7EB] text-[#6B7280] hover:border-[#D1D5DB]'
              }`}
            >
              <input
                type="radio"
                name="companySize"
                value="large"
                checked={companySize === 'large'}
                onChange={() => setCompanySize('large')}
                className="sr-only"
              />
              <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                companySize === 'large' ? 'border-[#059669]' : 'border-[#D1D5DB]'
              }`}>
                {companySize === 'large' && <span className="w-2 h-2 rounded-full bg-[#059669]" />}
              </span>
              大企業
            </label>
          </div>
        </div>

        {/* 受講人数 */}
        <div className="mb-6">
          <p className="text-[14px] font-bold text-[#4B5563] mb-3">受講人数</p>
          <div className="relative">
            <input
              type="number"
              min={1}
              max={100}
              value={participants}
              onChange={(e) => handleParticipants(e.target.value)}
              className="w-full rounded-xl border border-[#E5E7EB] px-4 py-3 text-[16px] text-[#1F2937] focus:outline-none focus:border-[#059669] focus:ring-1 focus:ring-[#059669] transition-colors"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[14px] text-[#9CA3AF]">名</span>
          </div>
        </div>

        {/* 1人あたり研修費用 */}
        <div className="mb-8">
          <p className="text-[14px] font-bold text-[#4B5563] mb-3">1人あたり研修費用</p>
          <div className="relative">
            <input
              type="text"
              inputMode="numeric"
              value={formatYen(costPerPerson)}
              onChange={(e) => handleCost(e.target.value)}
              className="w-full rounded-xl border border-[#E5E7EB] px-4 py-3 text-[16px] text-[#1F2937] focus:outline-none focus:border-[#059669] focus:ring-1 focus:ring-[#059669] transition-colors"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[14px] text-[#9CA3AF]">円</span>
          </div>
        </div>

        {/* 結果 */}
        <div className="bg-[#F9FAFB] rounded-xl p-6 space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-[#E5E7EB]">
            <span className="text-[14px] text-[#6B7280]">研修費用合計</span>
            <span className="text-[15px] text-[#1F2937] font-bold">{formatYen(result.totalCost)}円</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-[#E5E7EB]">
            <span className="text-[14px] text-[#059669]">経費助成（{companySize === 'small' ? '75' : '60'}%）</span>
            <span className="text-[15px] text-[#059669] font-bold">-{formatYen(result.expenseSubsidy)}円</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-[#E5E7EB]">
            <span className="text-[14px] text-[#059669]">賃金助成（{companySize === 'small' ? '1,000' : '500'}円/h x 10h x {participants}名）</span>
            <span className="text-[15px] text-[#059669] font-bold">-{formatYen(result.wageSubsidy)}円</span>
          </div>
          <div className="flex justify-between items-center pt-3">
            <span className="text-[16px] text-[#1F2937] font-bold">御社の実質負担額</span>
            <div className="text-right">
              <span className="text-[36px] md:text-[44px] text-[#059669] font-bold leading-none">{formatYen(result.actualCost)}</span>
              <span className="text-[16px] text-[#059669] font-bold ml-1">円</span>
            </div>
          </div>
          <div className="text-center pt-2">
            <span className="inline-block text-[14px] text-[#059669] bg-[#D1FAE5] px-5 py-2 rounded-full font-bold">
              削減率 {result.reductionRate}%OFF
            </span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 md:px-10 pb-8">
        <Link
          href="/contact"
          className="flex items-center justify-center w-full bg-[#059669] text-white px-8 py-4 rounded-full text-[16px] font-bold hover:bg-[#047857] transition-all min-h-[52px]"
        >
          助成金の活用方法を相談する
        </Link>
        <p className="text-[#9CA3AF] text-[11px] text-center mt-4 leading-[1.8]">
          ※ 助成金額は目安です。正確な金額は管轄の労働局にご確認ください。
        </p>
      </div>
    </div>
  )
}
