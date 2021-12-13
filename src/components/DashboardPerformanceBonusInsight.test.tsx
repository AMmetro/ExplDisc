import {screen} from '@testing-library/react'

import type {Insight} from '../lib/insight'
import {renderForTest} from '../lib/renderForTest'
import {DashboardPerformanceBonusInsight} from './DashboardPerformanceBonusInsight'

describe('<DashboardPerformanceBonusInsight />', () => {
  test('almost level', () => {
    const insight: Insight = {
      level: 'almost',
      value: null,
    }

    renderForTest(<DashboardPerformanceBonusInsight insight={insight} />)

    expect(
      screen.getByText(
        'You are almost there. Just a little push and you will get your Performance Bonus!'
      )
    ).toBeInTheDocument()
  })

  test('finish level when singular', () => {
    const insight: Insight = {
      level: 'finish',
      value: 1,
    }

    renderForTest(<DashboardPerformanceBonusInsight insight={insight} />)

    expect(
      screen.getByText(
        '1 day left! Give it a push now to get your Performance Bonus!'
      )
    ).toBeInTheDocument()
  })

  test('finish level when plural', () => {
    const insight: Insight = {
      level: 'finish',
      value: 5,
    }

    renderForTest(<DashboardPerformanceBonusInsight insight={insight} />)

    expect(
      screen.getByText(
        '5 days left! Give it a push now to get your Performance Bonus!'
      )
    ).toBeInTheDocument()
  })

  test('low level', () => {
    const insight: Insight = {
      level: 'low',
      value: null,
    }

    renderForTest(<DashboardPerformanceBonusInsight insight={insight} />)

    expect(
      screen.getByText(
        'You Performance Bonus is a bit low. Start now: you can do this!'
      )
    ).toBeInTheDocument()
  })

  test('qualify level', () => {
    const insight: Insight = {
      level: 'qualify',
      value: null,
    }

    renderForTest(<DashboardPerformanceBonusInsight insight={insight} />)

    expect(
      screen.getByText(
        'You qualify using your last months excess. Push further to not loose your excess.'
      )
    ).toBeInTheDocument()
  })

  test('reached level', () => {
    const insight: Insight = {
      level: 'reached',
      value: 2,
    }

    renderForTest(<DashboardPerformanceBonusInsight insight={insight} />)

    expect(
      screen.getByText(
        'You will earn 2% on your team through 3-5 generations in each line.'
      )
    ).toBeInTheDocument()
  })

  test('standard level', () => {
    const insight: Insight = {
      level: 'standard',
      value: null,
    }

    renderForTest(<DashboardPerformanceBonusInsight insight={insight} />)

    expect(
      screen.getByText(
        'You must reach ether volume or legs goal to get your Performance Bonus.'
      )
    ).toBeInTheDocument()
  })
})
