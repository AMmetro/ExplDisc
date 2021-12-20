import type {ReactNode} from 'react'

import {DashboardOverviewStat} from './DashboardOverviewStat'

type Stat = {
  href: string
  label: ReactNode
  value: number
  percentage: number
}

type Props = {
  stats: {
    new: Stat
    total: Stat
  }
}

export function DashboardOverviewStats({stats}: Props) {
  return (
    <div className="py-6 grid grid-cols-2 divide-x divide-grey-5">
      <div className="px-6">
        <DashboardOverviewStat {...stats.new} />
      </div>

      <div className="px-6">
        <DashboardOverviewStat {...stats.total} />
      </div>
    </div>
  )
}
