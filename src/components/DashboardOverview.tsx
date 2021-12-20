import type {ReactNode} from 'react'

import {DashboardOverviewStats} from './DashboardOverviewStats'
import {Spinner} from './Spinner'
import {Card} from './ui/Card'

type Stat = {
  href: string
  label: ReactNode
  value: number
  percentage: number
}

type Props = {
  header: ReactNode
  stats: {
    new: Stat
    total: Stat
  }
  isLoading?: boolean
  children: ReactNode
}

export function DashboardOverview({header, stats, isLoading, children}: Props) {
  return (
    <div>
      <Card>
        <div className="grid grid-cols-1 divide-y divide-grey-5">
          <div className="p-6">{header}</div>

          {!isLoading ? (
            <>
              <DashboardOverviewStats stats={stats} />
              {children}
            </>
          ) : (
            <div className="p-6 flex justify-center items-center">
              <Spinner />
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}
