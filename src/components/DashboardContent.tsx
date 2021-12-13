import {parseISO} from 'date-fns'

import type {CustomerSearchType} from '../lib/juiceplus/atd/sdk'
import type {Actions, DashboardData} from '../lib/juiceplus/dashboard'
import {assertOk} from '../lib/juiceplus/withError'
import {DashboardOverviews} from './DashboardOverviews'
import {DashboardPerformance} from './DashboardPerformance'
import {DashboardThisMonth} from './DashboardThisMonth'

type Props = {
  dashboard: DashboardData['dashboard']
  stats: DashboardData['stats']
  actions: Actions
  customerSearchType: CustomerSearchType
  rank: number
  isPending: boolean
}

export function DashboardContent({
  dashboard,
  stats,
  actions,
  customerSearchType,
  rank,
  isPending,
}: Props) {
  assertOk(dashboard)

  let lastUpdatedDate = parseISO(dashboard.data.lastUpdatedDate)

  return (
    <div className="grid gap-y-8">
      <DashboardThisMonth lastUpdatedDate={lastUpdatedDate} />
      <DashboardPerformance
        kpis={dashboard.data}
        promotion={dashboard.data.promotion}
        rank={rank}
      />

      <DashboardOverviews
        stats={stats}
        actions={actions}
        customerSearchType={customerSearchType}
        isPending={isPending}
      />
    </div>
  )
}
