import {defineMessages, FormattedMessage} from 'react-intl'

import type {CustomerSearchType} from '../lib/juiceplus/atd/sdk'
import {DashboardOverviewAction} from './DashboardOverviewAction'

let messages = defineMessages({
  title: {
    id: '8aae66b83d75',
    defaultMessage: '{n} {n, plural, one {Shipment} other {Shipments}}',
    description: 'action title for customers with upcoming shipments',
  },
  subtitle: {
    id: '43224dfb48c7',
    defaultMessage:
      '{n, plural, one {1 customer has shipments going out within the next 15 days. Make sure they get all they need!} other {You have {n} shipments going out within the next 15 days. Be sure to follow up with your customers.}}',
    description: 'action message for customers with upcoming shipments',
  },
})

type Props = {
  type: CustomerSearchType
  n: number
}

export function DashboardOverviewActionNextShipment({n, type}: Props) {
  let qs = new URLSearchParams({
    customerSearchType: type,
    sortBy: 'customerEntryDate',
    nextShipment: 'true',
  })

  return (
    <DashboardOverviewAction
      href={`/portal/customers?${qs}`}
      title={<FormattedMessage {...messages.title} values={{n}} />}
      message={<FormattedMessage {...messages.subtitle} values={{n}} />}
    />
  )
}
