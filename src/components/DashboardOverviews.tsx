import type {CustomerSearchType} from '../lib/juiceplus/atd/sdk'
import type {Actions, DashboardData} from '../lib/juiceplus/dashboard'
import {DashboardOverviewCustomers} from './DashboardOverviewCustomers'
import {DashboardOverviewTeam} from './DashboardOverviewTeam'

type Props = {
  stats: DashboardData['stats']
  actions: Actions
  customerSearchType: CustomerSearchType
  isPending: boolean
}

export function DashboardOverviews({
  stats,
  actions,
  customerSearchType,
  isPending,
}: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <DashboardOverviewTeam stats={stats.team} actions={actions.partners} />

      <DashboardOverviewCustomers
        stats={stats.customers}
        actions={actions.customers}
        selected={customerSearchType}
        isPending={isPending}
      />
    </div>
  )
}
