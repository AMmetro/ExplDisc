import {screen} from '@testing-library/react'

import type {InsightLevel} from '../lib/insight'
import {renderForTest} from '../lib/renderForTest'
import type {DashboardInsightProps} from './DashboardInsight'
import {DashboardInsight} from './DashboardInsight'

describe('<DashboardInsight />', () => {
  const defaultProps = {
    level: 'almost' as InsightLevel,
    message: {
      id: '75c6a87a0236',
      defaultMessage: 'Test message',
      description: 'Commission insights almost message',
    },
  }

  const setupComponentTree = (props?: Partial<DashboardInsightProps>) => {
    return renderForTest(<DashboardInsight {...defaultProps} {...props} />)
  }

  test('should render defaultMessage', () => {
    setupComponentTree()
    expect(screen.getByText('Test message')).toBeInTheDocument()
  })

  test('should render Insight message for almost level ', () => {
    setupComponentTree()
    expect(screen.getByText('Insight')).toBeInTheDocument()
  })

  test('should render Insight message for finish level ', () => {
    setupComponentTree({level: 'finish'})
    expect(screen.getByText('Insight')).toBeInTheDocument()
  })

  test('should render Insight message for low level ', () => {
    setupComponentTree({level: 'low'})
    expect(screen.getByText('Insight')).toBeInTheDocument()
  })

  test('should render Insight message for standard level ', () => {
    setupComponentTree({level: 'standard'})
    expect(screen.getByText('Insight')).toBeInTheDocument()
  })

  test('should render Insight message for total.halved level ', () => {
    setupComponentTree({level: 'total.halved'})
    expect(screen.getByText('Insight')).toBeInTheDocument()
  })

  test('should render Congratulations message for qualify level ', () => {
    setupComponentTree({level: 'qualify'})
    expect(screen.getByText('Congratulations')).toBeInTheDocument()
  })

  test('should render Congratulations message for reached level ', () => {
    setupComponentTree({level: 'reached'})
    expect(screen.getByText('Congratulations')).toBeInTheDocument()
  })
})
