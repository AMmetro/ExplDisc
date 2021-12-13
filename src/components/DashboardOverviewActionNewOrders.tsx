import {defineMessages, FormattedMessage} from 'react-intl'

import {CustomerSearchType} from '../lib/juiceplus/atd/sdk'
import {DashboardOverviewAction} from './DashboardOverviewAction'

let messages = defineMessages({
  title: {
    id: '9e04f06eb5a8',
    defaultMessage: '{n} {n, plural, one {New Order} other {New Orders}}',
    description: 'action title for customers with new orders',
  },
  subtitle: {
    id: 'eb2a3cefcbd8',
    defaultMessage: 'There are {n} new orders this month.',
    description: 'action message for customers with new orders',
  },
})

type Props = {
  type?: CustomerSearchType
  n: number
}

export function DashboardOverviewActionNewOrders({
  n,
  type = CustomerSearchType.Direct,
}: Props) {
  let qs = new URLSearchParams({
    customerSearchType: type,
    sortBy: 'customerEntryDate',
    newOrders: 'true',
  })

  return (
    <DashboardOverviewAction
      href={`/portal/customers?${qs}`}
      title={<FormattedMessage {...messages.title} values={{n}} />}
      message={<FormattedMessage {...messages.subtitle} values={{n}} />}
    />
  )
}
