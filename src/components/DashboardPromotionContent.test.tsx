import {screen} from '@testing-library/react'
import {noop} from 'lodash'

import type {PromotionTabContent} from '../lib/juiceplus/promotionTab'
import {transformEvaluationResult} from '../lib/juiceplus/promotionTab'
import type {EvaluationResult} from '../lib/juiceplus/sdk/partner-loyalty'
import {renderForTest} from '../lib/renderForTest'
import {knownUsers} from '../mocks/factories/user'
import {mockPromotionProgress} from '../mocks/handlers/partner-loyalty'
import {DashboardPromotionContent} from './DashboardPromotionContent'

describe('<DashboardPromotionContent />', () => {
  test('displays promotional volume section', () => {
    const promotion = mockPromotionTabContent()
    const user = knownUsers['anne@example.com']

    if (!promotion.tracks.promotion.rules.promotionalProductVolume) {
      throw new Error(
        'Incorrect test data: promotionalProductVolume rule should present in promotion track'
      )
    }

    renderForTest(
      <DashboardPromotionContent
        promotion={promotion}
        selectedTrack="promotion"
        onTrackSelected={noop}
        user={user}
      />
    )

    expect(
      screen.getByRole('heading', {level: 3, name: 'Promotional Volume'})
    ).toBeInTheDocument()
  })

  test('displays orders section', () => {
    const promotion = mockPromotionTabContent()
    const user = knownUsers['anne@example.com']

    const {rules} = promotion.tracks.promotion
    if (!rules.personalOrder && !rules.customerOrder) {
      throw new Error(
        'Incorrect test data: rules for order section should present in promotion track'
      )
    }

    renderForTest(
      <DashboardPromotionContent
        promotion={promotion}
        selectedTrack="promotion"
        onTrackSelected={noop}
        user={user}
      />
    )

    expect(
      screen.getByRole('heading', {level: 3, name: 'Orders'})
    ).toBeInTheDocument()
  })

  test('displays team section', () => {
    const promotion = mockPromotionTabContent()
    const user = knownUsers['anne@example.com']

    if (!promotion.tracks.promotion.rules.teamStructure) {
      throw new Error(
        'Incorrect test data: team structure rule should present in promotion track'
      )
    }

    renderForTest(
      <DashboardPromotionContent
        promotion={promotion}
        selectedTrack="promotion"
        onTrackSelected={noop}
        user={user}
      />
    )

    expect(
      screen.getByRole('heading', {level: 3, name: 'Team'})
    ).toBeInTheDocument()
  })

  function mockPromotionTabContent(): PromotionTabContent {
    const promotion = transformEvaluationResult(
      mockPromotionProgress() as EvaluationResult
    )

    if (!promotion.visible) {
      throw new Error('Incorrect test data: promotion track should be visible')
    }

    return promotion
  }
})
