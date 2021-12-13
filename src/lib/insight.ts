export type InsightLevel =
  | 'almost'
  | 'finish'
  | 'low'
  | 'qualify'
  | 'reached'
  | 'standard'
  | 'total.halved'

export type Insight = {
  value?: number | null
  level: InsightLevel
}

/**
 * Extract the insight level from an insight translation key.
 */
export function parseLevel(s: string): InsightLevel {
  let [, level] =
    s.match(
      /dashboard.(?:pv|pb|pob).insight.(almost|finish|low|qualify|reached|standard|total.halved)/
    ) ?? []
  switch (level) {
    case 'almost':
    case 'finish':
    case 'low':
    case 'qualify':
    case 'reached':
    case 'standard':
    case 'total.halved':
      return level

    default:
      throw new Error(`Unable to parse level ${level}`)
  }
}

export type PartnerSummary = {
  firstName: string
  lastName: string
}
