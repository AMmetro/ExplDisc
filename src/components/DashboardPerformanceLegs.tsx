import type {ReactNode} from 'react'
import {FormattedMessage} from 'react-intl'

import type {PersonSummary} from '../lib/juiceplus/dashboard'
import {CircleCancelled} from './ui/icons'

type Props = {
  title: ReactNode
  emptyMessage: ReactNode
  value: number
  max: number
  partners: PersonSummary[]
}

export function DashboardPerformanceLegs({
  title,
  emptyMessage,
  value,
  max,
  partners,
}: Props) {
  return (
    <div className="grid gap-4">
      <div className="flex items-baseline">
        <h3 className="uppercase text-14 text-grey-2 mr-2">{title}</h3>
        <span className="text-14 text-grey-1 font-bold">
          <FormattedMessage
            id="0078bb44c99b"
            defaultMessage="{value} of {max}"
            description="Label showing x of y leg"
            values={{value, max}}
          />
        </span>
      </div>

      {value === 0 ? (
        <div className="flex items-center">
          <CircleCancelled className="text-24 text-grey-2 mr-2" />
          <span className="text-14 text-grey-2">{emptyMessage}</span>
        </div>
      ) : null}

      {value > 0 ? (
        <div className="grid gap-1">
          {partners.map((p) => (
            <div key={p.id} className="text-14 text-grey-1 capitalize">
              {p.firstName.toLocaleLowerCase()} {p.lastName.toLocaleLowerCase()}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}
