import {defineMessages, FormattedMessage} from 'react-intl'

import type {PersonSummary} from '../lib/juiceplus/dashboard'
import {DashboardOverviewAction} from './DashboardOverviewAction'

const messages = defineMessages({
  title: {
    id: '5b5f03c062d9',
    defaultMessage: '{n} {n, plural, one {Birthday} other {Birthdays}}',
    description:
      'action title for partners who are celebrating their birthday today',
  },
  subtitle: {
    id: 'a575074da7ea',
    defaultMessage:
      '{n} {n, plural, one {team member celebrates his/her birthday today. Send him/her your wishes!} other {team members celebrate their birthday today. Send them your wishes!}}',
    description:
      'action message for partners who are celebrating their birthday today',
  },
})

type Props = {
  n: number
  persons?: PersonSummary[]
}

export function DashboardOverviewActionTeamBirthdays({n, persons}: Props) {
  let queryString = new URLSearchParams({
    birthday: 'true',
  })

  return (
    <DashboardOverviewAction
      href={`/portal/team?${queryString}`}
      title={<FormattedMessage {...messages.title} values={{n}} />}
      message={<FormattedMessage {...messages.subtitle} values={{n}} />}
      persons={persons}
      count={n}
    />
  )
}
