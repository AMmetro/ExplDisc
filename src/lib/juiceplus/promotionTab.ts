// тайпинги с partnet loyalty
import type {
  EvaluationResult,
  EvaluationRuleResult,
  EvaluationTrackResult,
  LoyaltyTrackType,
  EvaluationTemporalUnit,
  EvaluationDateType,
  TrackTime as ApiTrackTime,
  RuleEvaluationStatus,
  Rewards,
  TrackEvaluationStatus,
  // TeamStructureRule, // import this typing!!!!! - дублируется ниже
  TeamStructureResult, // import this typing!!!!!
  //OverallTeamMemberRule, // import this typing!!!!!
} from './sdk/partner-loyalty'

export type CheckHoldRule = {
  type: 'checkHold'
}

function transformCheckHoldRuleResult(
  ruleResult: EvaluationRuleResult
): CheckHoldRule {
  const {rule} = ruleResult

  if (rule._type_ !== 'CheckHoldRule') {
    throw new Error(`Could not transform ${rule._type_} into check hold rule`)
  }

  return {
    type: 'checkHold',
  }
}

export type CustomerOrderRule = {
  type: 'customerOrder'
  requiredValue: number
  achievedValue: number
  status: RuleEvaluationStatus
  progressPercentage: number
}

function transformCustomerOrderRuleResult(
  ruleResult: EvaluationRuleResult
): CustomerOrderRule {
  const {rule, result, ruleEvaluationStatus, ruleProgressPercentage} =
    ruleResult

  if (rule._type_ !== 'CustomerOrderRule') {
    throw new Error(
      `Could not transform ${rule._type_} into customer order rule`
    )
  }

  if (result._type_ !== 'CustomerOrderResult') {
    throw new Error(
      `Could not transform ${result._type_} into customer order result`
    )
  }

  return {
    type: 'customerOrder',
    requiredValue: rule.totalCustomerOrdersRequired,
    achievedValue: result.totalCustomerOrdersAchieved,
    progressPercentage: ruleProgressPercentage,
    status: ruleEvaluationStatus,
  }
}

export type PersonalCustomerVolumeRule = {
  type: 'personalCustomerVolume'
  requiredValue: number
  achievedValue: number
  status: RuleEvaluationStatus
}

function transformPersonalCustomerVolumeRuleResult(
  ruleResult: EvaluationRuleResult
): PersonalCustomerVolumeRule {
  const {rule, result, ruleEvaluationStatus} = ruleResult

  if (rule._type_ !== 'PersonalCustomerVolumeRule') {
    throw new Error(
      `Could not transform ${rule._type_} into personal customer volume rule`
    )
  }

  if (result._type_ !== 'PersonalCustomerVolumeResult') {
    throw new Error(
      `Could not transform ${result._type_} into personal customer volume rule`
    )
  }

  return {
    type: 'personalCustomerVolume',
    requiredValue: rule.promotionalProductVolumeRequired,
    achievedValue: result.promotionalProductVolumeAchieved,
    status: ruleEvaluationStatus,
  }
}

export type PaymentMethodRule = {
  type: 'paymentMethod'
}

function transformPaymentMethodRuleResult(
  ruleResult: EvaluationRuleResult
): PaymentMethodRule {
  const {rule} = ruleResult

  if (rule._type_ !== 'PaymentMethodRule') {
    throw new Error(
      `Could not transform ${rule._type_} into payment method rule`
    )
  }

  return {
    type: 'paymentMethod',
  }
}

export type PerformanceBonusVolumeRule = {
  type: 'performanceBonusVolume'
}

function transformPerformanceBonusVolumeRuleResult(
  ruleResult: EvaluationRuleResult
): PerformanceBonusVolumeRule {
  const {rule} = ruleResult

  if (rule._type_ !== 'PerformanceBonusVolumeRule') {
    throw new Error(
      `Could not transform ${rule._type_} into performance bonus volume rule`
    )
  }

  return {
    type: 'performanceBonusVolume',
  }
}

export type PersonalOrderRule = {
  type: 'personalOrder'
  requiredValue: number
  achievedValue: number
  status: RuleEvaluationStatus
  progressPercentage: number
}

function transformPersonalOrderRuleResult(
  ruleResult: EvaluationRuleResult
): PersonalOrderRule {
  const {rule, result, ruleEvaluationStatus, ruleProgressPercentage} =
    ruleResult

  if (rule._type_ !== 'PersonalOrderRule') {
    throw new Error(
      `Could not transform ${rule._type_} into personal order rule`
    )
  }
  if (result._type_ !== 'PersonalOrderResult') {
    throw new Error(
      `Could not transform ${result._type_} into personal order rule`
    )
  }

  return {
    type: 'personalOrder',
    requiredValue: rule.personalOrdersRequired,
    achievedValue: result.personalOrdersAchieved,
    status: ruleEvaluationStatus,
    progressPercentage: ruleProgressPercentage,
  }
}

export type PromotionalProductVolumeRule = {
  type: 'promotionalProductVolume'
  requiredValue: number
  achievedValue: number
  maxHouseholdPPVAllowedValue: number | null
  maxPerLinePPVPercentageValue: number | null
}

function transformPromotionalProductVolumeRuleResult(
  ruleResult: EvaluationRuleResult
): PromotionalProductVolumeRule {
  const {rule, result} = ruleResult

  if (rule._type_ !== 'PromotionalProductVolumeRule') {
    throw new Error(
      `Could not transform ${rule._type_} into promotional product volume rule`
    )
  }

  if (result._type_ !== 'PromotionalProductVolumeResult') {
    throw new Error(
      `Could not transform ${result._type_} into promotional product volume rule`
    )
  }

  return {
    type: 'promotionalProductVolume',
    requiredValue: rule.promotionalProductVolumeRequired,
    achievedValue: result.promotionalProductVolumeAchieved,
    maxHouseholdPPVAllowedValue: rule.maxHouseholdPPVAllowed,
    maxPerLinePPVPercentageValue: rule.maxPerLinePPVPercentage,
  }
}

//  закоментирован старый тип
export type TeamStructureRule = {
  type: 'teamStructure'
}

// функция берет теам структуре рулы console.log !!!!!
function transformTeamStructureRuleResult(
  ruleResult: EvaluationRuleResult
): TeamStructureRule {
  const {rule} = ruleResult

  if (rule._type_ !== 'TeamStructureRule') {
    throw new Error(
      `Could not transform ${rule._type_} into team structure rule`
    )
  }

  return {
    type: 'teamStructure',
  }
}

export type SecondaryBonusRule = {
  type: 'secondaryBonus'
}

function transformSecondaryBonusRuleResult(
  ruleResult: EvaluationRuleResult
): SecondaryBonusRule {
  const {rule} = ruleResult

  if (rule._type_ !== 'SecondaryBonusRule') {
    throw new Error(
      `Could not transform ${rule._type_} into secondary bonus rule`
    )
  }

  return {
    type: 'secondaryBonus',
  }
}

export type RapidPromotionDelayRule = {
  type: 'rapidPromotionDelay'
}

function transformRapidPromotionDelayRuleResult(
  ruleResult: EvaluationRuleResult
): RapidPromotionDelayRule {
  const {rule} = ruleResult

  if (rule._type_ !== 'RapidPromotionDelayRule') {
    throw new Error(
      `Could not transform ${rule._type_} into rapid promotion delay rule`
    )
  }

  return {
    type: 'rapidPromotionDelay',
  }
}

export type PromotionRule =
  | CheckHoldRule
  | CustomerOrderRule
  | PersonalCustomerVolumeRule
  | PaymentMethodRule
  | PerformanceBonusVolumeRule
  | PersonalOrderRule
  | PromotionalProductVolumeRule
  | TeamStructureRule
  | SecondaryBonusRule
  | RapidPromotionDelayRule

export type PromotionRules = {
  checkHold?: CheckHoldRule
  customerOrder?: CustomerOrderRule
  personalCustomerVolume?: PersonalCustomerVolumeRule
  paymentMethod?: PaymentMethodRule
  performanceBonusVolume?: PerformanceBonusVolumeRule
  personalOrder?: PersonalOrderRule
  promotionalProductVolume?: PromotionalProductVolumeRule
  teamStructure?: TeamStructureRule
  secondaryBonus?: SecondaryBonusRule
  rapidPromotionDelay?: RapidPromotionDelayRule
}

const ruleResultTransformers = {
  CheckHoldRule: transformCheckHoldRuleResult,
  CustomerOrderRule: transformCustomerOrderRuleResult,
  PersonalCustomerVolumeRule: transformPersonalCustomerVolumeRuleResult,
  PaymentMethodRule: transformPaymentMethodRuleResult,
  PerformanceBonusVolumeRule: transformPerformanceBonusVolumeRuleResult,
  PersonalOrderRule: transformPersonalOrderRuleResult,
  PromotionalProductVolumeRule: transformPromotionalProductVolumeRuleResult,
  TeamStructureRule: transformTeamStructureRuleResult,
  SecondaryBonusRule: transformSecondaryBonusRuleResult,
  RapidPromotionDelayRule: transformRapidPromotionDelayRuleResult,
}

function transformTrackRuleResult(
  trackRuleResult: EvaluationRuleResult
): PromotionRule {
  return ruleResultTransformers[trackRuleResult.rule._type_](trackRuleResult)
}

function transformTrackRuleResults(
  trackRuleResults: EvaluationRuleResult[]
): PromotionRules {
  return trackRuleResults.reduce((res, trackRuleResult) => {
    const rule = transformTrackRuleResult(trackRuleResult)
    return {
      ...res,
      [rule.type]: rule,
    }
  }, {})
}

export type PromotionTrackType = 'cumulative' | 'express' | 'promotion'

function transformLoyaltyTrackType(
  trackType: LoyaltyTrackType
): PromotionTrackType {
  switch (trackType) {
    case 'Cumulative':
      return 'cumulative'
    case 'Express Track':
      return 'express'
    case 'Promotion Track':
      return 'promotion'
  }
}

export type TrackTimeUnit = EvaluationTemporalUnit
export type TrackTimeType = EvaluationDateType
export type TrackTime = ApiTrackTime

export type PromotionTrack = {
  type: PromotionTrackType
  percentage: number
  trackTime: TrackTime
  evaluationStatus: TrackEvaluationStatus
  rewards: Rewards
  rules: PromotionRules
}

function transformTrackResult(
  trackResult: EvaluationTrackResult
): PromotionTrack {
  const {
    trackType,
    promotionProgressPercentage,
    trackTime,
    trackEvaluationStatus,
    rewards,
    trackRuleResults,
  } = trackResult

  const type = transformLoyaltyTrackType(trackType)

  return {
    type,
    percentage: promotionProgressPercentage,
    trackTime: transformTrackTime(trackTime, type),
    evaluationStatus: trackEvaluationStatus,
    rewards,
    rules: transformTrackRuleResults(trackRuleResults),
  }
}

export type PromotionTracks = {
  [key in PromotionTrackType]: PromotionTrack
}

function assertRequiredTracks(tracks: {
  [key in PromotionTrackType]?: PromotionTrack
}): asserts tracks is PromotionTracks {
  if (typeof tracks['promotion'] !== 'object') {
    throw new Error('Promotion track is required to be present in tracks')
  }

  if (typeof tracks['cumulative'] !== 'object') {
    throw new Error('Cumulative track is required to be present in tracks')
  }

  if (typeof tracks['express'] !== 'object') {
    throw new Error('Express track is required to be present in tracks')
  }
}

export type ExpressTrackTime = {
  _type_: 'express'
  periodsEvaluated: number | null
  temporalUnit: EvaluationTemporalUnit | null
  evaluateFromDate: EvaluationDateType
  numberOfDaysLeftForPromotion: number
}

export type PromotionTrackTime = {
  _type_: 'promotion'
  periodsEvaluated: number | null
  temporalUnit: EvaluationTemporalUnit | null
  evaluateFromDate: EvaluationDateType
  numberOfDaysLeftForPromotion: number | null
}

export type CumulativeTrackTime = {
  _type_: 'cumulative'
  periodsEvaluated: number | null
  temporalUnit: EvaluationTemporalUnit | null
  evaluateFromDate: EvaluationDateType
  numberOfDaysLeftForPromotion: number | null
}

export type TrackTimes =
  | ExpressTrackTime
  | PromotionTrackTime
  | CumulativeTrackTime

function transformTrackTime(
  trackTime: TrackTime,
  trackType: PromotionTrackType
): TrackTimes {
  if (trackType === 'express') {
    if (trackTime.numberOfDaysLeftForPromotion === null) {
      throw new Error('Express cant have null value for days left to promotion')
    }

    return {
      _type_: 'express',
      periodsEvaluated: trackTime.periodsEvaluated,
      temporalUnit: trackTime.temporalUnit,
      evaluateFromDate: trackTime.evaluateFromDate,
      numberOfDaysLeftForPromotion: trackTime.numberOfDaysLeftForPromotion,
    }
  } else if (trackType === 'cumulative') {
    return {
      _type_: 'cumulative',
      periodsEvaluated: trackTime.periodsEvaluated,
      temporalUnit: trackTime.temporalUnit,
      evaluateFromDate: trackTime.evaluateFromDate,
      numberOfDaysLeftForPromotion: trackTime.numberOfDaysLeftForPromotion,
    }
  } else {
    return {
      _type_: 'promotion',
      periodsEvaluated: trackTime.periodsEvaluated,
      temporalUnit: trackTime.temporalUnit,
      evaluateFromDate: trackTime.evaluateFromDate,
      numberOfDaysLeftForPromotion: trackTime.numberOfDaysLeftForPromotion,
    }
  }
}

function transformTrackResults(
  trackResults: EvaluationTrackResult[]
): PromotionTracks {
  const tracks = trackResults.reduce((res, trackResult) => {
    const track = transformTrackResult(trackResult)
    return {
      ...res,
      [track.type]: track,
    }
  }, {})

  assertRequiredTracks(tracks)

  return tracks
}

type InvisibleTab = {
  visible: false
}

type VisibleTab = {
  visible: true
}

export type PromotionTabContent = {
  levelRankToBeEvaluated: number
  tracks: PromotionTracks
}

export type PromotionTab = InvisibleTab | (VisibleTab & PromotionTabContent)

export function transformEvaluationResult(
  promotionProgress: EvaluationResult
): PromotionTab {
  const {levelRankToBeEvaluated, trackResults} = promotionProgress

  // входной объект !!!!!
  // console.log('-----trackResults------------')
  // console.log(trackResults[0].trackRuleResults[6].rule)
  // console.log(trackResults[0].trackRuleResults[6].result)

  // результирующий оттрансфримрованный объект !!!!!
  // console.log('-----transformTrackResults------------')
  // let result = transformTrackResults(trackResults)
  // console.log(result.express.rules.teamStructure)
  // console.log(result.cumulative.rules.teamStructure)
  // console.log(result.promotion.rules.teamStructure)

  return {
    visible: true,
    levelRankToBeEvaluated,
    tracks: transformTrackResults(trackResults),
  }
}
