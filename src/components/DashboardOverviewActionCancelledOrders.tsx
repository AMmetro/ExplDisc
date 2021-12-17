import {defineMessages, FormattedMessage} from 'react-intl'

import type {CustomerSearchType} from '../lib/juiceplus/atd/sdk'
import {DashboardOverviewAction} from './DashboardOverviewAction'

let messages = defineMessages({
  title: {
    id: '0cc978d6bb7b',
    defaultMessage:
      '{n} {n, plural, one {Cancelled Order} other {Cancelled Orders}}',
    description: 'action title for customers with cancelled orders',
  },
  subtitle: {
    id: 'ce68acc2d6a8',
    defaultMessage:
      '{n} {n, plural, one {customer has cancelled/returned his/her order. Follow up with her/him} other {customers have cancelled/renewed their orders. Follow up with them}}.',
    description: 'action message for customers with cancelled orders',
  },
})

type Props = {
  type: CustomerSearchType
  n: number
}

export function DashboardOverviewActionCancelledOrders({n, type}: Props) {
  let qs = new URLSearchParams({
    customerSearchType: type,
    sortBy: 'customerEntryDate',
    cancelledOrders: 'true',
  })

  return (
    <DashboardOverviewAction
      href={`/portal/customers?${qs}`}
      title={<FormattedMessage {...messages.title} values={{n}} />}
      message={<FormattedMessage {...messages.subtitle} values={{n}} />}
    />
  )
}
