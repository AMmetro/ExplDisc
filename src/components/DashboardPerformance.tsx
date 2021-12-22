import {useState} from 'react'

import type {Kpis} from '../lib/juiceplus/dashboard'
import type {
  PromotionTab,
  PromotionTrackType,
} from '../lib/juiceplus/promotionTab'
import type {ActivePartner} from '../lib/user'
import {DashboardPerformanceContent} from './DashboardPerformanceContent'
import type {Selection} from './DashboardPerformanceTabs'
import {DashboardPerformanceTabs} from './DashboardPerformanceTabs'

type Props = {
  rank: number
  kpis: Kpis
  promotion: PromotionTab
  user: ActivePartner
}

export function DashboardPerformance({kpis, promotion, rank, user}: Props) {
  const [selected, setSelected] = useState<Selection>('commission')
  const [selectedTrack, setSelectedTrack] =
    useState<PromotionTrackType>('promotion')

  const percentages = {
    commission: kpis.commission.visible ? kpis.commission.percentage : 0,
    promoteOutBonus: kpis.promoteOutBonus.visible
      ? kpis.promoteOutBonus.percentage
      : 0,
    performanceBonus: kpis.performanceBonus.visible
      ? kpis.performanceBonus.percentage
      : 0,
    promotion: promotion.visible
      ? promotion.tracks[selectedTrack].percentage
      : 0,
  }

  return (
    <div className="grid grid-cols-1 gap-y-2">
      <DashboardPerformanceTabs
        selected={selected}
        kpis={kpis}
        promotion={promotion}
        onChangeTabIntent={setSelected}
        percentages={percentages}
      />

      <DashboardPerformanceContent
        selected={selected}
        kpis={kpis}
        promotion={promotion}
        rank={rank}
        selectedTrack={selectedTrack}
        onTrackSelected={setSelectedTrack}
        user={user}
      />
    </div>
  )
}
