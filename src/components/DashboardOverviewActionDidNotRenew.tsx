import {defineMessages, FormattedMessage} from 'react-intl'

import type {PersonSummary} from '../lib/juiceplus/dashboard'
import {DashboardOverviewAction} from './DashboardOverviewAction'

let messages = defineMessages({
  title: {
    id: 'ea579a0aea2f',
    defaultMessage:
      "{n} {n, plural, one {Partner} other {Partners}} Didn't Renew",
    description: 'action title for partners who have not renewed',
  },
  subtitle: {
    id: '1d5ed20276f0',
    defaultMessage:
      "{n} {n, plural, one {team member didn't renew his/her membership. Follow up with her/him} other {team members didn't renew their memberships. Follow up with them}}.",
    description: 'action message for partners who have not renewed',
  },
})

type Props = {
  n: number
  persons?: PersonSummary[]
}

export function DashboardOverviewActionDidNotRenew({n, persons}: Props) {
  return (
    <DashboardOverviewAction
      href="/portal/team?notRenewedMembership=true"
      title={<FormattedMessage {...messages.title} values={{n}} />}
      message={<FormattedMessage {...messages.subtitle} values={{n}} />}
      persons={persons}
      count={n}
    />
  )
}
