import {defineMessages, FormattedMessage} from 'react-intl'

import type {CustomerSearchType} from '../lib/juiceplus/atd/sdk'
import {DashboardOverviewAction} from './DashboardOverviewAction'

let messages = defineMessages({
  title: {
    id: 'eee02e8783b0',
    defaultMessage: '{n} {n, plural, one {Pending Cart} other {Pending Carts}}',
    description: 'action title for customers with pending carts',
  },
  subtitle: {
    id: '41c197676e3a',
    defaultMessage:
      '{n} {n, plural, one {customer has a pending cart. Follow up with her/him} other {customers have pending carts. Follow up with them}}.',
    description: 'action title for customers with pending carts',
  },
})

type Props = {
  type: CustomerSearchType
  n: number
}

export function DashboardOverviewActionPendingCarts({n, type}: Props) {
  let qs = new URLSearchParams({
    customerSearchType: type,
    sortBy: 'customerEntryDate',
    pendingCarts: 'true',
  })

  return (
    <DashboardOverviewAction
      href={`/portal/customers?${qs}`}
      title={<FormattedMessage {...messages.title} values={{n}} />}
      message={<FormattedMessage {...messages.subtitle} values={{n}} />}
    />
  )
}
