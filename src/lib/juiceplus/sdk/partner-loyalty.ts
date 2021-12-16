import type {TypeOf} from 'zod'
import {z} from 'zod'

import {partnerLoyaltyApiHost} from '../../config'

const RewardType = z.enum([
  'Promotion',
  'Title Reward Payout',
  'Title Reward Payout Time Deferred',
  'Sponsor Reward Payout',
  'Conference Ticket',
  'Sales Profit',
  'Commission',
  'Performance Bonus',
  'Promote Out Bonus',
  'Leads',
  'Leadership Training',
  'Business Investment Bonus',
  'Holiday Check',
  'Benefits Package',
  'Tier Support',
])

const loyaltyReward = z.object({
  rewardType: RewardType,
  rewardValue: z.number().nullable(),
  valueTypeSymbol: z.string().nullable(),
})

export type LoyaltyReward = TypeOf<typeof loyaltyReward>

const loyaltyTrackType = z.enum([
  'Cumulative',
  'Express Track',
  'Promotion Track',
])

export type LoyaltyTrackType = TypeOf<typeof loyaltyTrackType>

const rewards = z.array(loyaltyReward)

export type Rewards = TypeOf<typeof rewards>

const evaluationTemporalUnit = z.enum(['Days', 'Months'])

export type EvaluationTemporalUnit = TypeOf<typeof evaluationTemporalUnit>

const evaluationDateType = z.enum([
  'First Ship Date',
  'First Of Month',
  'Rolling Date',
  'Consecutive Month',
])

export type EvaluationDateType = TypeOf<typeof evaluationDateType>

const ruleEvaluationStatus = z.enum(['Successful', 'Queued', 'Failed'])

export type RuleEvaluationStatus = TypeOf<typeof ruleEvaluationStatus>
const trackTime = z.object({
  periodsEvaluated: z.number().nullable(),
  temporalUnit: evaluationTemporalUnit.nullable(),
  evaluateFromDate: evaluationDateType,
  numberOfDaysLeftForPromotion: z.number().nullable(),
})

export type TrackTime = TypeOf<typeof trackTime>

const trackEvaluationStatus = z.enum(['Successful', 'Queued', 'Failed'])

export type TrackEvaluationStatus = TypeOf<typeof trackEvaluationStatus>

export const checkHoldRule = z.object({
  _type_: z.literal('CheckHoldRule'),
  // added next lines !!!!!
  // sequence: z.number(),
  // shouldIncludeProgressPercentage: z.number().nullable(),
  // excludedCheckHoldCodes: z.string().array(), // ????? ['PCI'] correct description ?
  // queueWhenUnsatisfied: z.number().nullable(),
})

export type CheckHoldRule = TypeOf<typeof checkHoldRule>

export const customerOrderRule = z.object({
  _type_: z.literal('CustomerOrderRule'),
  totalCustomerOrdersRequired: z.number(),
})

export type CustomerOrderRule = TypeOf<typeof customerOrderRule>

export const personalCustomerVolumeRule = z.object({
  _type_: z.literal('PersonalCustomerVolumeRule'),
  promotionalProductVolumeRequired: z.number(),
})

export type PersonalCustomerVolumeRule = TypeOf<
  typeof personalCustomerVolumeRule
>

export const paymentMethodRule = z.object({
  _type_: z.literal('PaymentMethodRule'),
  // !!!!! add next lines ненужно
  // sequence: z.number(),
  // shouldIncludeProgressPercentage: z.number().nullable(),
  // maxOrdersPerPaymentMethod: z.number(),
  // queueWhenUnsatisfied: z.boolean(),
})

export type PaymentMethodRule = TypeOf<typeof paymentMethodRule>

export const performanceBonusVolumeRule = z.object({
  _type_: z.literal('PerformanceBonusVolumeRule'),
})

export type PerformanceBonusVolumeRule = TypeOf<
  typeof performanceBonusVolumeRule
>

export const personalOrderRule = z.object({
  _type_: z.literal('PersonalOrderRule'),
  personalOrdersRequired: z.number(),
  // !!!!! =added more types down here= ненужно
  // sequence: z.number(),
  // shouldIncludeProgressPercentage: z.number().nullable(),
  // queueWhenUnsatisfied: z.boolean(),
})

export type PersonalOrderRule = TypeOf<typeof personalOrderRule>

export const promotionalProductVolumeRule = z.object({
  _type_: z.literal('PromotionalProductVolumeRule'),
  promotionalProductVolumeRequired: z.number(),
  maxHouseholdPPVAllowed: z.number().nullable(),
  maxPerLinePPVPercentage: z.number().nullable(),
  // !!!!!  =added more types down here= ненужно
  // sequence: z.number(),
  // shouldIncludeProgressPercentage: z.number().nullable(),
  // maxTreeDepthEvaluated: z.number(),
  // excludeDownlineCustomerOrders: z.number().nullable(),
})

export type PromotionalProductVolumeRule = TypeOf<
  typeof promotionalProductVolumeRule
>
// !!!!!  =added types=      Names Rule or rule"S" ???
export const overallTeamMemberRule = z.object({
  _type_: z.literal('OverallTeamMemberRule'), //allowed add literals !!!!!
  sequence: z.number(),
  teamMembersRequired: z.number(),
  teamMembersLevelRequired: z.number(),
  shouldIncludeProgressPercentage: z.number().nullable(),
  totalCustomerOrdersRequired: z.number().nullable(),
})

export type OverallTeamMemberRule = TypeOf<typeof overallTeamMemberRule>

export const teamStructureRule = z.object({
  _type_: z.literal('TeamStructureRule'),
  // added next lines !!!!!
  sequence: z.number(),
  shouldIncludeProgressPercentage: z.number().nullable(),
  // maxTreeDepthEvaluated: z.number().nullable(),
  // separateDownlines: z.number().nullable(),
  overallTeamMemberRules: z.array(overallTeamMemberRule), //is this correct implementation ?????
  // overallTeamMemberRules: z.array(Experement),
})

export type TeamStructureRule = TypeOf<typeof teamStructureRule>

export const secondaryBonusRule = z.object({
  _type_: z.literal('SecondaryBonusRule'),
})

export type SecondaryBonusRule = TypeOf<typeof secondaryBonusRule>

export const rapidPromotionDelayRule = z.object({
  _type_: z.literal('RapidPromotionDelayRule'),
})

export type RapidPromotionDelayRule = TypeOf<typeof rapidPromotionDelayRule>

export const loyaltyRule = checkHoldRule
  .or(customerOrderRule)
  .or(personalCustomerVolumeRule)
  .or(paymentMethodRule)
  .or(performanceBonusVolumeRule)
  .or(personalOrderRule)
  .or(promotionalProductVolumeRule)
  .or(teamStructureRule)
  .or(secondaryBonusRule)
  .or(rapidPromotionDelayRule)
// ----------------------------------!!!!! Added more rules here ????
// .or(overallTeamMemberRule)

export const checkHoldResult = z.object({
  _type_: z.literal('CheckHoldResult'),
  // checkHoldCodes: z.any().array(), // Как описать [], ?????
})

export type CheckHoldResult = TypeOf<typeof checkHoldResult>

export const customerOrderResult = z.object({
  _type_: z.literal('CustomerOrderResult'),
  totalCustomerOrdersAchieved: z.number(),
})

export type CustomerOrderResult = TypeOf<typeof customerOrderResult>

export const personalCustomerVolumeResult = z.object({
  _type_: z.literal('PersonalCustomerVolumeResult'),
  promotionalProductVolumeAchieved: z.number(),
})

export type PersonalCustomerVolumeResult = TypeOf<
  typeof personalCustomerVolumeResult
>

export const paymentMethodResult = z.object({
  _type_: z.literal('PaymentMethodResult'),
  // added next lines !!!!! ненужно
  // maxOrdersPaymentMethodUsed: z.number(),
})

export type PaymentMethodResult = TypeOf<typeof paymentMethodResult>

export const performanceBonusVolumeResult = z.object({
  _type_: z.literal('PerformanceBonusVolumeResult'),
})

export type PerformanceBonusVolumeResult = TypeOf<
  typeof performanceBonusVolumeResult
>

export const personalOrderResult = z.object({
  _type_: z.literal('PersonalOrderResult'),
  personalOrdersAchieved: z.number(),
})

export type PersonalOrderResult = TypeOf<typeof personalOrderResult>

export const promotionalProductVolumeResult = z.object({
  _type_: z.literal('PromotionalProductVolumeResult'),
  promotionalProductVolumeAchieved: z.number(),
  // added two more lines here !!!!! ненужно
  // maxDownlineVolume: z.number(),
  // householdVolume: z.number(),
})

export type PromotionalProductVolumeResult = TypeOf<
  typeof promotionalProductVolumeResult
>

// added next line here !!!!!
export const overallTeamMemberResult = z.object({
  _type_: z.literal('OverallTeamMemberResult'),
  teamMembersAchieved: z.number(),
  teamMembersLevelRequired: z.number(),
  totalCustomerOrders: z.number().nullable(),
  satisfyingFrontlinePartnerIds: z.number().array(), // how describe [491870] ?????!!!!!
})

export type OverallTeamMemberResult = TypeOf<typeof overallTeamMemberResult>

export const teamStructureResult = z.object({
  _type_: z.literal('TeamStructureResult'),
  overallTeamMemberResults: z.array(overallTeamMemberResult), //????
})

export type TeamStructureResult = TypeOf<typeof teamStructureResult>

export const secondaryBonusPaidResult = z.object({
  _type_: z.literal('SecondaryBonusPaidResult'),
})

export type SecondaryBonusPaidResult = TypeOf<typeof secondaryBonusPaidResult>

export const rapidPromotionDelayResult = z.object({
  _type_: z.literal('RapidPromotionDelayResult'),
})

export type RapidPromotionDelayResult = TypeOf<typeof rapidPromotionDelayResult>

export const loyaltyResult = checkHoldResult
  .or(customerOrderResult)
  .or(personalCustomerVolumeResult)
  .or(paymentMethodResult)
  .or(performanceBonusVolumeResult)
  .or(personalOrderResult)
  .or(promotionalProductVolumeResult)
  .or(teamStructureResult)
  .or(secondaryBonusPaidResult)
  .or(rapidPromotionDelayResult)
// add more types !!!!!
// .or(overallTeamMemberResult)

export type LoyaltyRule = TypeOf<typeof loyaltyRule>

export const evaluationRuleResult = z.object({
  rule: loyaltyRule,
  result: loyaltyResult,
  ruleEvaluationStatus: ruleEvaluationStatus,
  ruleProgressPercentage: z.number(),
})

export type EvaluationRuleResult = TypeOf<typeof evaluationRuleResult>

export const evaluationTrackResult = z.object({
  trackType: loyaltyTrackType,
  trackTime: trackTime,
  trackEvaluationStatus: trackEvaluationStatus,
  promotionProgressPercentage: z.number(),
  rewards: rewards,
  trackRuleResults: z.array(evaluationRuleResult),
})

export type EvaluationTrackResult = TypeOf<typeof evaluationTrackResult>

export const evaluationResult = z.object({
  levelRankToBeEvaluated: z.number(),
  trackResults: z.array(evaluationTrackResult),
})

export type EvaluationResult = TypeOf<typeof evaluationResult>

export async function getPromotionProgress(
  partnerId: number
): Promise<EvaluationResult> {
  partnerId = resolveTestPartnerId(partnerId)
  const response = await fetch(
    `${partnerLoyaltyApiHost}/partnerLoyalty/${partnerId}/promotionProgress`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )

  if (!response.ok) {
    console.error(await response.json())
    throw new Error('Could not fetch promotion progress')
  }

  const data = await response.json()

  // тут проверка данных на соответсвие их типам в ЗОТ
  // console.log('--------------ZOT lib------------------')
  // let ZOTlib = evaluationResult.parse(data)
  // console.log(ZOTlib.trackResults[1].trackRuleResults[6].rule.overallTeamMemberRules)
  // console.log(ZOTlib.trackResults[1].trackRuleResults[6].result.overallTeamMemberResults)

  return evaluationResult.parse(data)
}

type LoyaltyEnvsConfig = {
  [key: string]: {
    defaultId: number
    whitelistedIds: number[]
  }
}

const loyaltyEnvsConfig: LoyaltyEnvsConfig = {
  'https://partner-loyalty.test.juiceplus.net': {
    defaultId: 33116093,
    whitelistedIds: [
      97452, 1420271, 5320996, 781390, 3828737, 4625760, 2399893, 5205972,
      2400042, 2577245, 1112918, 1391304, 2282903, 2417080, 5342812,
    ],
  },
  'https://partner-loyalty.stg.juiceplus.net': {
    defaultId: 5799912,
    whitelistedIds: [],
  },
}

/*
  Loyalty API requires partners to be evaluated prior to being used.
  In the future evaluation will happen automatically, but currently only some test partners are evaluated and can be used,
  for all other partners fallback to partner id from examples
*/
function resolveTestPartnerId(partnerId: number): number {
  const envConfig = loyaltyEnvsConfig[partnerLoyaltyApiHost]
  if (!envConfig) {
    return partnerId
  }

  if (envConfig.whitelistedIds.includes(partnerId)) {
    return partnerId
  }

  return envConfig.defaultId
}
