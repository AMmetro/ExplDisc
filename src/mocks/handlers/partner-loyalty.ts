import faker from 'faker'
import {rest} from 'msw'

import {partnerLoyaltyApiHost} from '../../lib/config/env'

const randomRank = () => faker.datatype.number({min: 2, max: 5})
const randomPercent = () => faker.datatype.number({min: 0, max: 100})

const randomRuleEvaluationStatus = () =>
  faker.helpers.randomize(['Successful', 'Queued', 'Failed'])

const randomTrackEvaluationStatus = () =>
  faker.helpers.randomize(['Successful', 'Queued', 'Failed'])

const randomPersonalCustomerVolumeRule = () => {
  const achieved = faker.datatype.number(10000)
  const required = achieved + faker.datatype.number(10000)
  return {
    rule: {
      _type_: 'PersonalCustomerVolumeRule',
      promotionalProductVolumeRequired: required,
    },
    result: {
      _type_: 'PersonalCustomerVolumeResult',
      promotionalProductVolumeAchieved: achieved,
    },
    ruleEvaluationStatus: randomRuleEvaluationStatus(),
    ruleProgressPercentage: randomPercent(),
  }
}

const randomPromotionalProductVolumeRule = () => {
  const achieved = faker.datatype.number(10000)
  const required = achieved + faker.datatype.number(10000)
  const maxHouseholdPPVAllowed = faker.datatype.number(10000)
  const maxPerLinePPVPercentage = faker.datatype.number(100)
  return {
    rule: {
      _type_: 'PromotionalProductVolumeRule',
      promotionalProductVolumeRequired: required,
      maxHouseholdPPVAllowed,
      maxPerLinePPVPercentage,
    },
    result: {
      _type_: 'PromotionalProductVolumeResult',
      promotionalProductVolumeAchieved: achieved,
    },
    ruleEvaluationStatus: randomRuleEvaluationStatus(),
    ruleProgressPercentage: randomPercent(),
  }
}

const randomRules = () => [
  randomPromotionalProductVolumeRule(),
  randomPersonalCustomerVolumeRule(),
  {
    rule: {
      _type_: 'CustomerOrderRule',
      totalCustomerOrdersRequired: faker.datatype.number({
        min: 0,
        max: 5,
      }),
    },
    result: {
      _type_: 'CustomerOrderResult',
      totalCustomerOrdersAchieved: faker.datatype.number({
        min: 0,
        max: 5,
      }),
    },
    ruleEvaluationStatus: randomRuleEvaluationStatus(),
    ruleProgressPercentage: randomPercent(),
  },
  {
    rule: {
      _type_: 'PersonalOrderRule',
      personalOrdersRequired: faker.datatype.number({
        min: 0,
        max: 5,
      }),
    },
    result: {
      _type_: 'PersonalOrderResult',
      personalOrdersAchieved: faker.datatype.number({
        min: 0,
        max: 5,
      }),
    },
    ruleEvaluationStatus: randomRuleEvaluationStatus(),
    ruleProgressPercentage: randomPercent(),
  },
  {
    rule: {
      _type_: 'PaymentMethodRule',
    },
    result: {
      _type_: 'PaymentMethodResult',
    },
    ruleEvaluationStatus: randomRuleEvaluationStatus(),
    ruleProgressPercentage: randomPercent(),
  },
  {
    rule: {
      _type_: 'CheckHoldRule',
    },
    result: {
      _type_: 'CheckHoldResult',
    },
    ruleEvaluationStatus: randomRuleEvaluationStatus(),
    ruleProgressPercentage: randomPercent(),
  },
  {
    rule: {
      _type_: 'TeamStructureRule',
    },
    result: {
      _type_: 'TeamStructureResult',
    },
    ruleEvaluationStatus: randomRuleEvaluationStatus(),
    ruleProgressPercentage: randomPercent(),
  },
]

export const mockPromotionProgress = () => ({
  levelRankToBeEvaluated: randomRank(),
  trackResults: [
    {
      trackType: 'Express Track',
      trackTime: {
        periodsEvaluated: 10,
        temporalUnit: 'Days',
        evaluateFromDate: 'First Ship Date',
        numberOfDaysLeftForPromotion: faker.datatype.number({min: 1, max: 10}),
      },
      trackEvaluationStatus: randomTrackEvaluationStatus(),
      rewards: [
        {
          rewardType: 'Promotion',
          rewardValue: null,
          valueType: null,
          valueTypeSymbol: null,
          currencyCode: null,
        },
        {
          rewardType: 'Title Reward Payout',
          rewardValue: 100,
          valueType: 'Monetary',
          valueTypeSymbol: '$',
          currencyCode: 'USD',
        },
        {
          rewardType: 'Sponsor Reward Payout',
          rewardValue: 100,
          valueType: 'Monetary',
          valueTypeSymbol: '$',
          currencyCode: 'USD',
        },
        {
          rewardType: 'Conference Ticket',
          rewardValue: null,
          valueType: null,
          valueTypeSymbol: null,
          currencyCode: null,
        },
        {
          rewardType: 'Sales Profit',
          rewardValue: null,
          valueType: null,
          valueTypeSymbol: null,
          currencyCode: null,
        },
        {
          rewardType: 'Commission',
          rewardValue: 5,
          valueType: 'Percentage',
          valueTypeSymbol: '%',
          currencyCode: null,
        },
      ],
      trackRuleResults: randomRules(),
      promotionProgressPercentage: randomPercent(),
    },
    {
      trackType: 'Promotion Track',
      trackTime: {
        periodsEvaluated: 60,
        temporalUnit: 'Days',
        evaluateFromDate: 'Rolling Date',
        numberOfDaysLeftForPromotion: faker.datatype.number({min: 1, max: 10}),
      },
      trackEvaluationStatus: randomTrackEvaluationStatus(),
      rewards: [
        {
          rewardType: 'Promotion',
          rewardValue: null,
          valueType: null,
          valueTypeSymbol: null,
          currencyCode: null,
        },
        {
          rewardType: 'Title Reward Payout',
          rewardValue: 50,
          valueType: 'Monetary',
          valueTypeSymbol: '$',
          currencyCode: 'USD',
        },
        {
          rewardType: 'Conference Ticket',
          rewardValue: null,
          valueType: null,
          valueTypeSymbol: null,
          currencyCode: null,
        },
        {
          rewardType: 'Sales Profit',
          rewardValue: null,
          valueType: null,
          valueTypeSymbol: null,
          currencyCode: null,
        },
        {
          rewardType: 'Commission',
          rewardValue: 5,
          valueType: 'Percentage',
          valueTypeSymbol: '%',
          currencyCode: null,
        },
      ],
      promotionProgressPercentage: randomPercent(),
      trackRuleResults: randomRules(),
    },
    {
      trackType: 'Cumulative',
      trackTime: {
        periodsEvaluated: 0,
        temporalUnit: 'Days',
        evaluateFromDate: 'First Ship Date',
        numberOfDaysLeftForPromotion: null,
      },
      trackEvaluationStatus: randomTrackEvaluationStatus(),
      rewards: [
        {
          rewardType: 'Promotion',
          rewardValue: null,
          valueType: null,
          valueTypeSymbol: null,
          currencyCode: null,
        },
      ],
      trackRuleResults: randomRules(),
      promotionProgressPercentage: randomPercent(),
    },
  ],
})

export const promotionProgress = rest.get(
  `${partnerLoyaltyApiHost}/partnerLoyalty/:partnerId/promotionProgress`,
  async (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockPromotionProgress()))
  }
)
