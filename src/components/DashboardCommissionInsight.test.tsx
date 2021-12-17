import {screen} from '@testing-library/react'

import type {Insight} from '../lib/insight'
import {renderForTest} from '../lib/renderForTest'
import {DashboardCommissionInsight} from './DashboardCommissionInsight'

describe('<DashboardCommissionInsight />', () => {
  test('almost level', () => {
    const insight: Insight = {
      level: 'almost',
      value: null,
    }

    renderForTest(<DashboardCommissionInsight insight={insight} />)

    expect(
      screen.getByText(
        'You are almost there. Just a little push and you are going to reach your sales commission. You will get 5% on your teams sales.'
      )
    ).toBeInTheDocument()
  })

  test('finish level when singular', () => {
    const insight: Insight = {
      level: 'finish',
      value: 1,
    }

    renderForTest(<DashboardCommissionInsight insight={insight} />)

    expect(
      screen.getByText(
        '1 day left! Give it a push now to increase your pay out.'
      )
    ).toBeInTheDocument()
  })

  test('finish level when plural', () => {
    const insight: Insight = {
      level: 'finish',
      value: 5,
    }

    renderForTest(<DashboardCommissionInsight insight={insight} />)

    expect(
      screen.getByText(
        '5 days left! Give it a push now to increase your pay out.'
      )
    ).toBeInTheDocument()
  })

  test('low level', () => {
    const insight: Insight = {
      level: 'low',
      value: null,
    }

    renderForTest(<DashboardCommissionInsight insight={insight} />)

    expect(
      screen.getByText(
        "You haven't qualified for your commission yet. Start now: you can do this!"
      )
    ).toBeInTheDocument()
  })

  test('reached level', () => {
    const insight: Insight = {
      level: 'reached',
      value: 3,
    }

    renderForTest(<DashboardCommissionInsight insight={insight} />)

    expect(
      screen.getByText(
        "Up to 3% commissions are paid on your customer volume, plus the difference between your commission level and your team members' commission levels."
      )
    ).toBeInTheDocument()
  })

  test('standard level', () => {
    const insight: Insight = {
      level: 'standard',
      value: null,
    }

    renderForTest(<DashboardCommissionInsight insight={insight} />)

    expect(
      screen.getByText(
        'In order to get any sales profit or commission you and your team have to sell some products. Start today!'
      )
    ).toBeInTheDocument()
  })
})
