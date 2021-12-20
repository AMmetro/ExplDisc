import {FormattedMessage, defineMessages} from 'react-intl'

import useDashboardContext from '../lib/dashboardContext'
import DateFormat from '../lib/dateFormat'
import {CustomerSearchType} from '../lib/juiceplus/atd/sdk'
import type {CustomersActions, DashboardData} from '../lib/juiceplus/dashboard'
import {LoadingTypes} from '../lib/juiceplus/useDashboardApi'
import {assertOk} from '../lib/juiceplus/withError'
import {withCount} from '../lib/withCount'
import {DashboardOverview} from './DashboardOverview'
import {DashboardOverviewActionCancelledOrders} from './DashboardOverviewActionCancelledOrders'
import {DashboardOverviewActionCustomerBirthdays} from './DashboardOverviewActionCustomerBirthdays'
import {DashboardOverviewActionCustomersAnniversaries} from './DashboardOverviewActionCustomersAnniversaries'
import {DashboardOverviewActionNewOrders} from './DashboardOverviewActionNewOrders'
import {DashboardOverviewActionNextShipment} from './DashboardOverviewActionNextShipment'
import {DashboardOverviewActionPaymentIssue} from './DashboardOverviewActionPaymentIssues'
import {DashboardOverviewActionPendingCarts} from './DashboardOverviewActionPendingCarts'
import {DashboardOverviewActions} from './DashboardOverviewActions'
import {DirectAllToggle} from './DirectAllToggle'

let messages = defineMessages({
  title: {
    id: '0f4c71ad7703',
    defaultMessage: 'Customers',
    description: 'Title for Customers overview box on Dashboard',
  },
  newDirectCustomers: {
    id: '7e11152bbda4',
    defaultMessage: 'New Direct Customers',
    description: 'Label underneath new direct customers stats',
  },
  totalDirectCustomers: {
    id: 'ba403286e865',
    defaultMessage: 'Total Direct Customers',
    description: 'Label underneath total direct customers stats',
  },
  newAllCustomers: {
    id: 'bd151cd326ec',
    defaultMessage: 'New All Customers',
    description: 'Label underneath new all customers stats',
  },
  totalAllCustomers: {
    id: '3dcf6863e43d',
    defaultMessage: 'Total All Customers',
    description: 'Label underneath total all customers stats',
  },
  noCustomerActionsTitle: {
    id: 'cb3eb39b2769',
    defaultMessage: 'No news is good news!',
    description: 'title shown when there are no customer actions',
  },
  noCustomerActionsText: {
    id: 'b64986883056',
    defaultMessage: 'There are no customer issues at the moment.',
    description: 'text shown when there are no customer actions',
  },
})

type LabelProps = {
  type: CustomerSearchType
}

function NewLabel({type}: LabelProps) {
  switch (type) {
    case CustomerSearchType.Direct:
      return <FormattedMessage {...messages.newDirectCustomers} />
    case CustomerSearchType.All:
      return <FormattedMessage {...messages.newAllCustomers} />
    default:
      throw new Error(`Unknown customer search type ${type}`)
  }
}

function TotalLabel({type}: LabelProps) {
  switch (type) {
    case CustomerSearchType.Direct:
      return <FormattedMessage {...messages.totalDirectCustomers} />
    case CustomerSearchType.All:
      return <FormattedMessage {...messages.totalAllCustomers} />
    default:
      throw new Error(`Unknown customer search type ${type}`)
  }
}

type DirectProps = Pick<
  CustomersActions,
  | 'paymentIssues'
  | 'nextShipment'
  | 'cancelledOrders'
  | 'pendingCarts'
  | 'anniversaries'
  | 'birthdays'
>

function Direct({
  paymentIssues,
  nextShipment,
  cancelledOrders,
  pendingCarts,
  anniversaries,
  birthdays,
}: DirectProps) {
  return (
    <DashboardOverviewActions
      emptyMessage={{
        title: <FormattedMessage {...messages.noCustomerActionsTitle} />,
        text: <FormattedMessage {...messages.noCustomerActionsText} />,
      }}
    >
      {withCount(paymentIssues, (n) => (
        <DashboardOverviewActionPaymentIssue
          n={n}
          type={CustomerSearchType.Direct}
        />
      ))}

      {withCount(nextShipment, (n) => (
        <DashboardOverviewActionNextShipment
          n={n}
          type={CustomerSearchType.Direct}
        />
      ))}

      {withCount(cancelledOrders, (n) => (
        <DashboardOverviewActionCancelledOrders
          n={n}
          type={CustomerSearchType.Direct}
        />
      ))}

      {withCount(pendingCarts, (n) => (
        <DashboardOverviewActionPendingCarts
          n={n}
          type={CustomerSearchType.Direct}
        />
      ))}

      {withCount(anniversaries, (n) => (
        <DashboardOverviewActionCustomersAnniversaries
          n={n}
          type={CustomerSearchType.Direct}
        />
      ))}

      {withCount(birthdays, (n) => (
        <DashboardOverviewActionCustomerBirthdays n={n} />
      ))}
    </DashboardOverviewActions>
  )
}

type AllProps = Pick<CustomersActions, 'paymentIssues' | 'newOrders'>

function All({paymentIssues, newOrders}: AllProps) {
  return (
    <DashboardOverviewActions
      emptyMessage={{
        title: <FormattedMessage {...messages.noCustomerActionsTitle} />,
        text: <FormattedMessage {...messages.noCustomerActionsText} />,
      }}
    >
      {withCount(paymentIssues, (n) => (
        <DashboardOverviewActionPaymentIssue
          n={n}
          type={CustomerSearchType.All}
        />
      ))}

      {withCount(newOrders, (n) => (
        <DashboardOverviewActionNewOrders n={n} type={CustomerSearchType.All} />
      ))}
    </DashboardOverviewActions>
  )
}

type Props = {
  stats: DashboardData['stats']['customers']
  actions: CustomersActions
  selected: CustomerSearchType
  isPending: boolean
  customerSearchType?: CustomerSearchType
}

export function DashboardOverviewCustomers({
  stats,
  actions,
  selected,
  isPending,
}: Props) {
  assertOk(stats.new)
  assertOk(stats.total)

  let newQueryString = new URLSearchParams({
    customerSearchType: selected,
    sortBy: 'customerEntryDate',
    customerEntryDate: DateFormat.getFirstDayOfMonth(new Date()),
  })
  let totalQueryString = new URLSearchParams({
    customerSearchType: selected,
    sortBy: 'customerEntryDate',
  })

  const {onChangeCustomerSearchType, loadingState} = useDashboardContext()

  const isLoading =
    loadingState.isLoading &&
    loadingState.loadingType === LoadingTypes.CustomerSearchType

  return (
    <DashboardOverview
      isLoading={isLoading}
      header={
        <div className="flex flex-wrap items-center">
          <h3 className="font-bold leading-7 flex-1">
            <FormattedMessage {...messages.title} />
          </h3>

          <div className="flex-auto lg:flex-none">
            <DirectAllToggle
              onToggle={onChangeCustomerSearchType}
              selected={selected}
              isPending={isPending}
            />
          </div>
        </div>
      }
      stats={{
        new: {
          href: `/portal/customers?${newQueryString}`,
          label: <NewLabel type={selected} />,
          ...stats.new.data,
        },
        total: {
          href: `/portal/customers?${totalQueryString}`,
          label: <TotalLabel type={selected} />,
          ...stats.total.data,
        },
      }}
    >
      {selected === CustomerSearchType.Direct ? (
        <Direct
          paymentIssues={actions.paymentIssues}
          nextShipment={actions.nextShipment}
          cancelledOrders={actions.cancelledOrders}
          pendingCarts={actions.pendingCarts}
          anniversaries={actions.anniversaries}
          birthdays={actions.birthdays}
        />
      ) : null}

      {selected === CustomerSearchType.All ? (
        <All
          paymentIssues={actions.paymentIssues}
          newOrders={actions.newOrders}
        />
      ) : null}
    </DashboardOverview>
  )
}
