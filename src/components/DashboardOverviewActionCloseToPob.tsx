import {defineMessages, FormattedMessage} from 'react-intl'

import type {PersonSummary} from '../lib/juiceplus/dashboard'
import {DashboardOverviewAction} from './DashboardOverviewAction'

let messages = defineMessages({
  title: {
    id: 'eb3b13228c05',
    defaultMessage: '{n} Close to POB',
    description: 'action title for partners who are close to pb',
  },
  subtitle: {
    id: 'edbb82f42a5c',
    defaultMessage:
      'Check in on your team! {n} {n, plural, one {team member is about to qualify for a Promote Out Bonus} other {are about to qualify for a Promote Out Bonus}}',
    description: 'action message for partners who are close to pb',
  },
})

type Props = {
  n: number
  persons?: PersonSummary[]
}

export function DashboardOverviewActionCloseToPob({n, persons}: Props) {
  return (
    <DashboardOverviewAction
      href="/portal/team?closeToPob=true"
      title={<FormattedMessage {...messages.title} values={{n}} />}
      message={<FormattedMessage {...messages.subtitle} values={{n}} />}
      persons={persons}
      count={n}
    />
  )
}
