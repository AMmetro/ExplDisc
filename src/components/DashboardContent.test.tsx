import {fireEvent, screen} from '@testing-library/react'
import {cloneDeep} from 'lodash'

import {CustomerSearchType} from '../lib/juiceplus/atd/sdk'
import {parser} from '../lib/juiceplus/dashboard'
import {renderForTest} from '../lib/renderForTest'
import {knownUsers} from '../mocks/factories/user'
import {
  mockDashboard,
  mockStats,
  mockActions,
} from '../mocks/handlers/dashboard'
import {mockPromotionProgress} from '../mocks/handlers/partner-loyalty'
import {DashboardContent} from './DashboardContent'

describe('<DashboardContent />', () => {
  let props = {
    ...parser.parse({
      dashboard: mockDashboard(),
      ...mockStats(),
      ...mockActions(),
      promotionProgress: mockPromotionProgress(),
    }),
    customerSearchType: CustomerSearchType.Direct,
    rank: 1,
    isPending: false,
    user: knownUsers[0],
  }

  test('show commission and promotion for rank 1', () => {
    let rankOneProps = cloneDeep(props)
    hideTab(rankOneProps.dashboard.data?.promoteOutBonus)
    hideTab(rankOneProps.dashboard.data?.performanceBonus)
    rankOneProps.rank = 1

    renderForTest(<DashboardContent {...rankOneProps} />)

    const elems = screen.getAllByText('Commission')
    expect(elems.length).toBe(2)
    expect(screen.getByText('Promotion')).toBeInTheDocument()
  })

  test('show commission and promotion for rank 2', () => {
    let rankTwoProps = cloneDeep(props)
    hideTab(rankTwoProps.dashboard.data?.promoteOutBonus)
    hideTab(rankTwoProps.dashboard.data?.performanceBonus)
    rankTwoProps.rank = 2

    renderForTest(<DashboardContent {...rankTwoProps} />)

    const elems = screen.getAllByText('Commission')
    expect(elems.length).toBe(2)
    expect(screen.getByText('Promotion')).toBeInTheDocument()
  })

  test('show commission, pb, and promotion for rank 3', () => {
    let rankThreeProps = cloneDeep(props)
    hideTab(rankThreeProps.dashboard.data?.promoteOutBonus)
    rankThreeProps.rank = 3

    renderForTest(<DashboardContent {...rankThreeProps} />)

    const elems = screen.getAllByText('Commission')
    expect(elems.length).toBe(2)
    expect(screen.getByText('Performance Bonus')).toBeInTheDocument()
    expect(screen.getByText('Promotion')).toBeInTheDocument()
  })

  test('Should see all tabs for rank greater than 3', () => {
    renderForTest(<DashboardContent {...props} rank={4} />)

    const elems = screen.getAllByText('Commission')
    expect(elems.length).toBe(2)
    expect(screen.getByText('Performance Bonus')).toBeInTheDocument()
    expect(screen.getByText('Promote Out Bonus')).toBeInTheDocument()
    expect(screen.getByText('Promotion')).toBeInTheDocument()
  })

  test('change the visible content via the tabs', () => {
    renderForTest(<DashboardContent {...props} rank={4} />)

    fireEvent.click(screen.getAllByText('Performance Bonus')[0])

    expect(screen.getByText('PB Volume')).toBeInTheDocument()
  })

  function hideTab(tab?: {visible: boolean} | null) {
    if (tab) {
      tab.visible = false
    }
  }
})
