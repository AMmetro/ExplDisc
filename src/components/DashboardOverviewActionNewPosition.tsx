import {defineMessages, FormattedMessage} from 'react-intl'

import type {PersonSummary} from '../lib/juiceplus/dashboard'
import {DashboardOverviewAction} from './DashboardOverviewAction'

let messages = defineMessages({
  title: {
    id: '48dbd8019541',
    defaultMessage: '{n} {n, plural, one {New Position} other {New Positions}}',
    description: 'action title for partners with a new position',
  },
  subtitle: {
    id: 'aced0a1eb78c',
    defaultMessage:
      'You have {n} {n, plural, one {team member} other {team members}} who got a new title this month.',
    description: 'action message for partners with a new position',
  },
})

type Props = {
  n: number
  persons?: PersonSummary[]
}

export function DashboardOverviewActionNewPosition({n, persons}: Props) {
  return (
    <DashboardOverviewAction
      href="/portal/team?newPosition=true"
      title={<FormattedMessage {...messages.title} values={{n}} />}
      message={<FormattedMessage {...messages.subtitle} values={{n}} />}
      persons={persons}
      count={n}
    />
  )
}
