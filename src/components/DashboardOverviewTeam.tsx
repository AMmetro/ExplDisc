import {FormattedMessage, defineMessages} from 'react-intl'

import DateFormat from '../lib/dateFormat'
import type {DashboardData, PartnersActions} from '../lib/juiceplus/dashboard'
import {assertOk} from '../lib/juiceplus/withError'
import {withCount} from '../lib/withCount'
import {DashboardOverview} from './DashboardOverview'
import {DashboardOverviewActionCloseToPb} from './DashboardOverviewActionCloseToPb'
import {DashboardOverviewActionCloseToPob} from './DashboardOverviewActionCloseToPob'
import {DashboardOverviewActionDidNotRenew} from './DashboardOverviewActionDidNotRenew'
import {DashboardOverviewActionNewPosition} from './DashboardOverviewActionNewPosition'
import {DashboardOverviewActionTeamAnniversaries} from './DashboardOverviewActionTeamAnniversaries'
import {DashboardOverviewActionTeamBirthdays} from './DashboardOverviewActionTeamBirthdays'
import {DashboardOverviewActions} from './DashboardOverviewActions'

let messages = defineMessages({
  title: {
    id: '5a9d0f79954c',
    defaultMessage: 'Team',
    description: 'Title for Team overview box on Dashboard',
  },
  newTeamMembers: {
    id: '59a5f21f3d38',
    defaultMessage: 'New Team Members',
    description: 'Label underneath new team members stats',
  },
  totalTeamMembers: {
    id: 'eea96814fdcf',
    defaultMessage: 'Total Team Members',
    description: 'Label underneath total team members stats',
  },
  noTeamActionsTitle: {
    id: '291c4b344ff4',
    defaultMessage: "It's a bit quiet here",
    description: 'Title that is shown when there are no team actions',
  },
  noTeamActionsText: {
    id: '3ec36870c4c9',
    defaultMessage: "There isn't much going on with your team at the moment.",
    description: 'Text that is shown when there are no team actions',
  },
})

type Props = {
  stats: DashboardData['stats']['team']
  actions: PartnersActions
}

export function DashboardOverviewTeam({stats, actions}: Props) {
  assertOk(stats.new)
  assertOk(stats.total)

  let queryString = new URLSearchParams({
    memberSince: DateFormat.getFirstDayOfMonth(new Date()),
  })

  return (
    <DashboardOverview
      header={
        <h3 className="font-bold leading-7">
          <FormattedMessage {...messages.title} />
        </h3>
      }
      stats={{
        new: {
          href: `/portal/team?${queryString}`,
          label: <FormattedMessage {...messages.newTeamMembers} />,
          ...stats.new.data,
        },
        total: {
          href: `/portal/team`,
          label: <FormattedMessage {...messages.totalTeamMembers} />,
          ...stats.total.data,
        },
      }}
    >
      <DashboardOverviewActions
        emptyMessage={{
          title: <FormattedMessage {...messages.noTeamActionsTitle} />,
          text: <FormattedMessage {...messages.noTeamActionsText} />,
        }}
      >
        {withCount(actions.closeToPb, (n) => (
          <DashboardOverviewActionCloseToPb
            n={n}
            persons={actions.closeToPb.data?.persons}
          />
        ))}

        {withCount(actions.closeToPob, (n) => (
          <DashboardOverviewActionCloseToPob
            n={n}
            persons={actions.closeToPob.data?.persons}
          />
        ))}

        {withCount(actions.newPosition, (n) => (
          <DashboardOverviewActionNewPosition
            n={n}
            persons={actions.newPosition.data?.persons}
          />
        ))}

        {withCount(actions.notRenewed, (n) => (
          <DashboardOverviewActionDidNotRenew
            n={n}
            persons={actions.notRenewed.data?.persons}
          />
        ))}

        {withCount(actions.anniversaries, (n) => (
          <DashboardOverviewActionTeamAnniversaries
            n={n}
            persons={actions.anniversaries.data?.persons}
          />
        ))}
        {withCount(actions.birthdays, (n) => (
          <DashboardOverviewActionTeamBirthdays
            n={n}
            persons={actions.birthdays.data?.persons}
          />
        ))}
      </DashboardOverviewActions>
    </DashboardOverview>
  )
}
