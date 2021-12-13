import {defineMessages, FormattedMessage} from 'react-intl'

import type {CustomerSearchType} from '../lib/juiceplus/atd/sdk'
import {DashboardOverviewAction} from './DashboardOverviewAction'

let messages = defineMessages({
  title: {
    id: '75f6dbfd76bc',
    defaultMessage:
      '{n, plural, one {{n} Payment Issue} other {{n} Payment Issues}}',
    description: 'action title for customers with payment issues',
  },
  subtitle: {
    id: '4389b8151918',
    defaultMessage:
      'You have {n} {n, plural, one {customer with payment issues. Follow up with her/him} other {customers with payment issues. Follow up with them}}.',
    description: 'action title for customers with payment issues',
  },
})

type Props = {
  type: CustomerSearchType
  n: number
}

export function DashboardOverviewActionPaymentIssue({n, type}: Props) {
  let qs = new URLSearchParams({
    customerSearchType: type,
    sortBy: 'customerEntryDate',
    paymentIssues: 'true',
  })

  return (
    <DashboardOverviewAction
      href={`/portal/customers?${qs}`}
      title={<FormattedMessage {...messages.title} values={{n}} />}
      message={<FormattedMessage {...messages.subtitle} values={{n}} />}
    />
  )
}
