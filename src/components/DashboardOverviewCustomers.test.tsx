import {screen} from '@testing-library/react'

import {CustomerSearchType} from '../lib/juiceplus/atd/sdk'
import {renderForTest} from '../lib/renderForTest'
import {DashboardOverviewCustomers} from './DashboardOverviewCustomers'

describe('<DashboardOverviewCustomers />', () => {
  test('Direct', () => {
    renderForTest(
      <DashboardOverviewCustomers
        selected={CustomerSearchType.Direct}
        isPending={false}
        stats={{
          new: {data: {percentage: 100, value: 1}, error: null},
          total: {data: {percentage: 100, value: 1}, error: null},
        }}
        actions={{
          paymentIssues: {data: {count: 2}, error: null},
          nextShipment: {data: {count: 2}, error: null},
          cancelledOrders: {data: {count: 2}, error: null},
          pendingCarts: {data: {count: 2}, error: null},
          newOrders: {data: {count: 2}, error: null},
          anniversaries: {data: {count: 2}, error: null},
          birthdays: {data: {count: 2}, error: null},
        }}
      />
    )

    expect(screen.getByText('2 Payment Issues')).toBeInTheDocument()
    expect(screen.getByText('2 Shipments')).toBeInTheDocument()
    expect(screen.queryByText('2 Cancelled Orders')).toBeNull()
    expect(screen.queryByText('2 Pending Carts')).toBeNull()
    expect(screen.queryByText('2 Anniversaries')).toBeNull()
    expect(screen.queryByText("Anne's Birthday")).toBeNull()

    expect(screen.queryByText('2 New Orders')).toBeNull()
  })

  test('All', () => {
    renderForTest(
      <DashboardOverviewCustomers
        selected={CustomerSearchType.All}
        isPending={false}
        stats={{
          new: {data: {percentage: 100, value: 1}, error: null},
          total: {data: {percentage: 100, value: 1}, error: null},
        }}
        actions={{
          paymentIssues: {data: {count: 2}, error: null},
          nextShipment: {data: {count: 2}, error: null},
          cancelledOrders: {data: {count: 2}, error: null},
          pendingCarts: {data: {count: 2}, error: null},
          newOrders: {data: {count: 2}, error: null},
          anniversaries: {data: {count: 2}, error: null},
          birthdays: {data: {count: 2}, error: null},
        }}
      />
    )

    expect(screen.getByText('2 Payment Issues')).toBeInTheDocument()
    expect(screen.getByText('2 New Orders')).toBeInTheDocument()

    expect(screen.queryByText('2 Shipments')).toBeNull()
    expect(screen.queryByText('2 Cancelled Orders')).toBeNull()
    expect(screen.queryByText('2 Pending Carts')).toBeNull()
    expect(screen.queryByText('2 Anniversaries')).toBeNull()
  })

  test('Empty', () => {
    renderForTest(
      <DashboardOverviewCustomers
        selected={CustomerSearchType.Direct}
        isPending={false}
        stats={{
          new: {data: {percentage: 100, value: 1}, error: null},
          total: {data: {percentage: 100, value: 1}, error: null},
        }}
        actions={{
          paymentIssues: {data: {count: 0}, error: null},
          nextShipment: {data: {count: 0}, error: null},
          cancelledOrders: {data: {count: 0}, error: null},
          pendingCarts: {data: {count: 0}, error: null},
          newOrders: {data: {count: 0}, error: null},
          anniversaries: {data: {count: 0}, error: null},
          birthdays: {data: {count: 0}, error: null},
        }}
      />
    )

    expect(screen.queryByText('Payment Issues', {exact: false})).toBeNull()
    expect(screen.queryByText('Shipments', {exact: false})).toBeNull()
    expect(screen.queryByText('Cancelled Orders', {exact: false})).toBeNull()
    expect(screen.queryByText('Pending Carts', {exact: false})).toBeNull()
    expect(screen.queryByText('Anniversaries', {exact: false})).toBeNull()
    expect(screen.queryByText('New Orders', {exact: false})).toBeNull()
    expect(screen.queryByText('Birthday', {exact: false})).toBeNull()
  })
})
