import {defineMessages, FormattedMessage} from 'react-intl'

import type {CustomerSearchType} from '../lib/juiceplus/atd/sdk'
import {DashboardOverviewAction} from './DashboardOverviewAction'

let messages = defineMessages({
  title: {
    id: '29cced504ef9',
    defaultMessage: '{n} {n, plural, one {Anniversary} other {Anniversaries}}',
    description: 'action title for customers close to their anniversary',
  },
  subtitle: {
    id: 'e61f661e1153',
    defaultMessage:
      'You have {n} {n, plural, one {customer who celebrates his/her Juice Plus+ anniversary soon} other {customers who celebrate their Juice Plus+ anniversary soon}}.',
    description: 'action title for customers close to their anniversary',
  },
})

type Props = {
  type: CustomerSearchType
  n: number
}

export function DashboardOverviewActionCustomersAnniversaries({
  n,
  type,
}: Props) {
  let qs = new URLSearchParams({
    customerSearchType: type,
    sortBy: 'customerEntryDate',
    anniversary: 'true',
  })

  return (
    <DashboardOverviewAction
      href={`/portal/customers?${qs}`}
      title={<FormattedMessage {...messages.title} values={{n}} />}
      message={<FormattedMessage {...messages.subtitle} values={{n}} />}
    />
  )
}
