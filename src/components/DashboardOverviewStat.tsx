import classNames from 'classnames'
import type {ReactNode} from 'react'
import {FormattedNumber} from 'react-intl'

import {Link} from './Link'
import {
  ArrowRight,
  ArrowSelectUp,
  ArrowSelectDown,
  ArrowSelectRight,
} from './ui/icons'

type PercentageIndicatorProps = {
  percentage: number
}

function PercentageIndicator({percentage}: PercentageIndicatorProps) {
  return (
    // This icon is badly sized in its viewbox
    <div className="-m-2">
      {percentage > 0 ? <ArrowSelectUp className="text-36 text-apple" /> : null}
      {percentage < 0 ? (
        <ArrowSelectDown className="text-36 text-mango" />
      ) : null}
      {percentage === 0 ? (
        <ArrowSelectRight className="text-36 text-grey-3" />
      ) : null}
    </div>
  )
}

type Props = {
  href: string
  label: ReactNode
  value: number
  percentage: number
}

export function DashboardOverviewStat({href, label, value, percentage}: Props) {
  return (
    <Link href={href}>
      <a className="grid gap-2 focus:outline-none group">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="font-bold">
              <FormattedNumber value={value} />
            </span>

            <div className="px-1">
              <PercentageIndicator percentage={percentage} />
            </div>

            <span
              // Negative top margin, because fonts 🤷‍♂️
              className={classNames('text-14 mt-[-2px]', {
                'text-grey-2': percentage === 0,
                'text-apple': percentage > 0,
                'text-mango': percentage < 0,
              })}
            >
              <FormattedNumber
                value={Math.abs(percentage / 100)}
                style="percent"
              />
            </span>
          </div>
          <ArrowRight className="text-24 text-orange-hover transform duration-100 group-hover:translate-x-2" />
        </div>

        <span className="text-grey-2 text-14">{label}</span>
      </a>
    </Link>
  )
}
