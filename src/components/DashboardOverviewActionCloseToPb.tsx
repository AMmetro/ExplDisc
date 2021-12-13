import {defineMessages, FormattedMessage} from 'react-intl'

import type {PersonSummary} from '../lib/juiceplus/dashboard'
import {DashboardOverviewAction} from './DashboardOverviewAction'

let messages = defineMessages({
  title: {
    id: '75ecb73ea510',
    defaultMessage: '{n} Close to PB',
    description: 'action title for partners who are close to pb',
  },
  subtitle: {
    id: '7ba1b8300fbe',
    defaultMessage:
      'You have {n} {n, plural, one {team member who has almost qualified for Performance Bonus. Check in with her/him} other {team members who have almost qualified for Performance Bonus. Check in with them}}. ',
    description: 'action message for partners who are close to pb',
  },
})

type Props = {
  n: number
  persons?: PersonSummary[]
}

export function DashboardOverviewActionCloseToPb({n, persons}: Props) {
  return (
    <DashboardOverviewAction
      href="/portal/team?closeToPb=true"
      title={<FormattedMessage {...messages.title} values={{n}} />}
      message={<FormattedMessage {...messages.subtitle} values={{n}} />}
      persons={persons}
      count={n}
    />
  )
}
