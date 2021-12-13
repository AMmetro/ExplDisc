import {defineMessages, FormattedMessage} from 'react-intl'

import {DashboardOverviewAction} from './DashboardOverviewAction'

const messages = defineMessages({
  title: {
    id: '59e83304e5dc',
    defaultMessage: '{n} {n, plural, one {Birthday} other {Birthdays}}',
    description:
      'action title for customers who are celebrating their birthday today',
  },
  subtitle: {
    id: 'b2279594a8f7',
    defaultMessage:
      '{n} {n, plural, one {customer celebrates his/her birthday today. Send him/her your wishes!} other {customers celebrate their birthday today. Send them your wishes!}}',
    description:
      'action message for cutomers who are celebrating their birthday today',
  },
})

type Props = {
  n: number
}

export function DashboardOverviewActionCustomerBirthdays({n}: Props) {
  let queryString = new URLSearchParams({
    birthday: 'true',
  })

  return (
    <DashboardOverviewAction
      href={`/portal/customers?${queryString}`}
      title={<FormattedMessage {...messages.title} values={{n}} />}
      message={<FormattedMessage {...messages.subtitle} values={{n}} />}
    />
  )
}
