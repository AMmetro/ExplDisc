import {screen} from '@testing-library/react'

import type {Insight} from '../lib/insight'
import {renderForTest} from '../lib/renderForTest'
import {DashboardPromoteOutBonusInsight} from './DashboardPromoteOutBonusInsight'

describe('<DashboardPromoteOutBonusInsight />', () => {
  test('almost level', () => {
    const insight: Insight = {
      level: 'almost',
      value: null,
    }

    renderForTest(<DashboardPromoteOutBonusInsight insight={insight} />)

    expect(
      screen.getByText(
        'You are almost there. Just a little push and you will get your Promote Out Bonus!'
      )
    ).toBeInTheDocument()
  })

  test('finish level when singular', () => {
    const insight: Insight = {
      level: 'finish',
      value: 1,
    }

    renderForTest(<DashboardPromoteOutBonusInsight insight={insight} />)

    expect(
      screen.getByText(
        '1 day left! Give it a push now to get your Promote Out Bonus!'
      )
    ).toBeInTheDocument()
  })

  test('finish level when plural', () => {
    const insight: Insight = {
      level: 'finish',
      value: 5,
    }

    renderForTest(<DashboardPromoteOutBonusInsight insight={insight} />)

    expect(
      screen.getByText(
        '5 days left! Give it a push now to get your Promote Out Bonus!'
      )
    ).toBeInTheDocument()
  })

  test('low level', () => {
    const insight: Insight = {
      level: 'low',
      value: null,
    }

    renderForTest(<DashboardPromoteOutBonusInsight insight={insight} />)

    expect(
      screen.getByText(
        'You Promote Out Bonus is a bit low. Start now: you can do this!'
      )
    ).toBeInTheDocument()
  })

  test('qualify level', () => {
    const insight: Insight = {
      level: 'qualify',
      value: null,
    }

    renderForTest(<DashboardPromoteOutBonusInsight insight={insight} />)

    expect(
      screen.getByText(
        'You qualify using your last months excess. Push further to not loose your excess.'
      )
    ).toBeInTheDocument()
  })

  test('reached level', () => {
    const insight: Insight = {
      level: 'reached',
      value: 3,
    }

    renderForTest(<DashboardPromoteOutBonusInsight insight={insight} />)

    expect(
      screen.getByText(
        'You will earn 3% on all SCs and above and their Promote Out Bonus Volume, through the first SC who is qualifying for POB.'
      )
    ).toBeInTheDocument()
  })

  test('standard level', () => {
    const insight: Insight = {
      level: 'standard',
      value: null,
    }

    renderForTest(<DashboardPromoteOutBonusInsight insight={insight} />)

    expect(
      screen.getByText(
        'You must reach ether volume or legs goal to get your Promote Out Bonus.'
      )
    ).toBeInTheDocument()
  })

  test('total.halved level', () => {
    const insight: Insight = {
      level: 'total.halved',
      value: null,
    }

    renderForTest(<DashboardPromoteOutBonusInsight insight={insight} />)

    expect(
      screen.getByText(
        'You have 2 POB lines, your volume target has been reduced.'
      )
    ).toBeInTheDocument()
  })
})
