import type {ReactNode} from 'react'

import type {PersonSummary} from '../lib/juiceplus/dashboard'
import {DashboardActionCardAvatarList} from './DashboardActionCardAvatarList'
import {Link} from './Link'
import {ArrowRight} from './ui/icons'

type Props = {
  href: string
  title: ReactNode
  message: ReactNode
  persons?: PersonSummary[]
  count?: number
}

export function DashboardOverviewAction({
  title,
  href,
  message,
  persons,
  count,
}: Props) {
  return (
    <Link href={href}>
      <a className="grid gap-2 focus:outline-none group">
        <div className="flex items-center justify-between">
          <span className="font-bold">{title}</span>
          <div className="flex justify-between">
            {persons && (
              <DashboardActionCardAvatarList persons={persons} count={count} />
            )}
            <ArrowRight className="text-24 text-orange-hover transform duration-100 group-hover:translate-x-2 ml-5" />
          </div>
        </div>
        <span className="text-grey-2 text-14 min-h-full">{message}</span>
      </a>
    </Link>
  )
}
