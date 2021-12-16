import {
  addDays,
  endOfMonth,
  format,
  startOfMonth,
  subDays,
  subMonths,
} from 'date-fns'
import type {TypeOf, ZodTypeAny} from 'zod'
import {z} from 'zod'

import {parseLevel} from '../insight'
import type {ActivePartner} from '../user'
import type {Cms} from './atd/cms'
import {CustomerSearchType} from './atd/sdk'
import type {Sdk} from './atd/sdk'
import * as authenticatedShellApi from './authenticatedShell'
import type {AuthenticatedShellContent} from './authenticatedShell'
import * as dashboardResourceDropdownMenuItems from './dashboardResourceDropdownMenuItems'
import type {DashboardResourceDropdownMenuItems} from './dashboardResourceDropdownMenuItems'
import {transformEvaluationResult} from './promotionTab'
import {evaluationResult, getPromotionProgress} from './sdk/partner-loyalty'
import {withError} from './withError'

let personSummary = z.object({
  id: z.number().or(z.string()),
  firstName: z.string(),
  lastName: z.string(),
  imageUrl: z.string().nullable(),
})

export type PersonSummary = TypeOf<typeof personSummary>

let kpi = z
  .object({
    percentage: z.number(),
    paid: z.number(),
    pending: z.number(),
    total: z.number(),
    insightText: z.string(),
    insightValue: z.number().nullable(),
  })
  .transform(
    ({percentage, paid, pending, total, insightText, insightValue}) => ({
      percentage,
      paid,
      pending,
      total,
      insight: {level: parseLevel(insightText), value: insightValue},
    })
  )

export let withVisibility = <T extends ZodTypeAny>(data: T) =>
  z
    .object({
      visible: z.literal(false),
    })
    .or(
      z
        .object({
          visible: z.literal(true),
        })
        .and(data)
    )

let legs = z
  .object({
    legCount: z.number(),
    maxLegCount: z.number(),
    legPartners: z.array(personSummary),
  })
  .transform(({legCount: value, maxLegCount: max, legPartners: partners}) => ({
    value,
    max,
    partners,
  }))

let kpis = z.object({
  commission: withVisibility(kpi),
  performanceBonus: withVisibility(kpi.and(legs)),
  promoteOutBonus: withVisibility(kpi.and(legs)),
})

export type Kpis = TypeOf<typeof kpis>

let stat = z.object({
  percentage: z.number(),
  value: z.number(),
})

let dashboard = z
  .object({
    lastUpdatedDate: z.string(),
    clubLevel: z.number().optional(),
  })
  .and(kpis)

let count = z.object({count: z.number()})

export type ActionCount = TypeOf<typeof count>

let countWithPreview = z
  .object({
    totalCount: z.number(),
    persons: z.array(personSummary),
  })
  .transform(({totalCount: count, persons}) => ({
    count,
    persons,
  }))

export type ActionCountWithPreview = TypeOf<typeof countWithPreview>

export let parser = z
  .object({
    dashboard: withError(dashboard),

    newTeamStats: withError(stat),
    totalTeamStats: withError(stat),
    newCustomersStats: withError(stat),
    totalCustomersStats: withError(stat),

    partnersCloseToPb: withError(countWithPreview),
    partnersCloseToPob: withError(countWithPreview),
    partnersNewPosition: withError(countWithPreview),
    partnersNotRenewed: withError(countWithPreview),
    partnersAnniversaries: withError(countWithPreview),
    partnersBirthdays: withError(countWithPreview),

    customersPaymentIssues: withError(count),
    customersNextShipment: withError(count),
    customersCancelledOrders: withError(count),
    customersPendingCarts: withError(count),
    customersAnniversaries: withError(count),
    customersNewOrders: withError(count),
    customersBirthdays: withError(count),

    promotionProgress: evaluationResult,
  })
  .strict()
  // Reformat the data returned from the API into the shape we want. The cool
  // thing about this is that the `TypeOf` helper can then infer this type.
  .transform(
    ({
      dashboard,

      newTeamStats,
      totalTeamStats,
      newCustomersStats,
      totalCustomersStats,

      partnersCloseToPb,
      partnersCloseToPob,
      partnersNewPosition,
      partnersNotRenewed,
      partnersAnniversaries,
      partnersBirthdays,

      customersPaymentIssues,
      customersNextShipment,
      customersCancelledOrders,
      customersPendingCarts,
      customersAnniversaries,
      customersNewOrders,
      customersBirthdays,

      promotionProgress,
    }) => {
      return {
        dashboard: dashboard.error
          ? dashboard
          : {
              error: null,
              data: {
                ...dashboard.data,
                promotion: transformEvaluationResult(promotionProgress),
              },
            },

        stats: {
          team: {
            new: newTeamStats,
            total: totalTeamStats,
          },
          customers: {
            new: newCustomersStats,
            total: totalCustomersStats,
          },
        },

        actions: {
          partners: {
            closeToPb: partnersCloseToPb,
            closeToPob: partnersCloseToPob,
            newPosition: partnersNewPosition,
            notRenewed: partnersNotRenewed,
            anniversaries: partnersAnniversaries,
            birthdays: partnersBirthdays,
          },
          customers: {
            paymentIssues: customersPaymentIssues,
            nextShipment: customersNextShipment,
            cancelledOrders: customersCancelledOrders,
            pendingCarts: customersPendingCarts,
            anniversaries: customersAnniversaries,
            newOrders: customersNewOrders,
            birthdays: customersBirthdays,
          },
        },
      }
    }
  )

export type DashboardData = TypeOf<typeof parser>
export type DashboardContent = {
  authenticatedShell: AuthenticatedShellContent
  resourceMenuItems: DashboardResourceDropdownMenuItems
}

export type PartnersActions = DashboardData['actions']['partners']
export type CustomersActions = DashboardData['actions']['customers']

export type Actions = {
  partners: PartnersActions
  customers: CustomersActions
}

export let byCurrentPartner = async (
  sdk: Sdk,
  {id, partnerId}: ActivePartner,
  customerSearchType = CustomerSearchType.Direct
): Promise<DashboardData> => {
  let now = new Date()
  let today = format(now, 'yyyy-MM-dd')
  let firstDayOfMonth = format(startOfMonth(now), 'yyyy-MM-dd')
  let thirtyDaysAgo = format(subDays(now, 30), 'yyyy-MM-dd')
  let oneDayAgo = format(subDays(now, 1), 'yyyy-MM-dd')
  let thirtyDaysFromNow = format(addDays(now, 30), 'yyyy-MM-dd')
  let fourteenDaysFromNow = format(addDays(now, 14), 'yyyy-MM-dd')
  let lastDayOfPreviousMonth = format(
    endOfMonth(subMonths(now, 1)),
    'yyyy-MM-dd'
  )

  const atdDashboard = await sdk.dashboard({
    partnerId,
    customerSearchType,
    today,
    firstDayOfMonth,
    thirtyDaysAgo,
    oneDayAgo,
    thirtyDaysFromNow,
    fourteenDaysFromNow,
    lastDayOfPreviousMonth,
  })
  const promotionProgress = await getPromotionProgress(id)

  // console.log('----promotionProgress------')
  // console.log(promotionProgress)
  // console.log(promotionProgress.trackResults[1].trackRuleResults[6].rule.overallTeamMemberRules)
  // console.log(promotionProgress.trackResults[1].trackRuleResults[6].overallTeamMemberResults)

  // console.log('----atdDashboard------')
  // console.log(atdDashboard)

  // let yyy = parser.parse({...atdDashboard.data, promotionProgress})

  // console.log('----after parcer parse Data: ------')
  // console.log(yyy.dashboard.data)

  return parser.parse({
    ...atdDashboard.data,
    promotionProgress,
  })
}

export let getContent = async (cms: Cms): Promise<DashboardContent> => {
  return {
    authenticatedShell: await authenticatedShellApi.getContent(cms),
    resourceMenuItems: await dashboardResourceDropdownMenuItems.getContent(cms),
  }
}
