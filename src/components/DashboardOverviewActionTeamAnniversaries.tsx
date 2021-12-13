import {defineMessages, FormattedMessage} from 'react-intl'

import type {PersonSummary} from '../lib/juiceplus/dashboard'
import {DashboardOverviewAction} from './DashboardOverviewAction'

let messages = defineMessages({
  title: {
    id: '6281b29487d2',
    defaultMessage: '{n} {n, plural, one {Anniversary} other {Anniversaries}}',
    description: 'action title for partners close to their anniversary',
  },
  subtitle: {
    id: 'e78422844d2f',
    defaultMessage:
      'You have {n} {n, plural, one {team member who celebrates his/her Juice Plus+ anniversary soon. Remind him/her to renew his/her membership} other {team members who celebrate their Juice Plus+ anniversary soon. Remind them to renew their membership}}.',
    description: 'action message for partners close to their anniversary',
  },
})

type Props = {
  n: number
  persons?: PersonSummary[]
}

export function DashboardOverviewActionTeamAnniversaries({n, persons}: Props) {
  return (
    <DashboardOverviewAction
      href="/portal/team?anniversary=true"
      title={<FormattedMessage {...messages.title} values={{n}} />}
      message={<FormattedMessage {...messages.subtitle} values={{n}} />}
      persons={persons}
      count={n}
    />
  )
}
