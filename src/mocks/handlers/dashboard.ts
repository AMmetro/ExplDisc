import {formatISO, subHours} from 'date-fns'
import faker from 'faker'
import {graphql} from 'msw'

let randomCount = () => faker.datatype.number(20)
let randomPeople = (n = faker.datatype.number(5)) =>
  new Array(n).fill(null).map(() => ({
    id: faker.datatype.number(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    imageUrl: faker.image.avatar(),
  }))
let randomKpi = (kpi: string) => {
  let total = faker.datatype.number(2000)
  let paid = faker.datatype.number(total)
  let pending = faker.datatype.number(2000)
  let percentage = Math.min(Math.round((paid / total) * 100), 100)
  let level = faker.random.arrayElement([
    'almost',
    'finish',
    'low',
    'qualify',
    'reached',
    'standard',
    'total.halved',
  ])
  let insightText = `dashboard.${kpi}.insight.${level}`
  let insightValue = faker.datatype.number(20)
  let legCount = faker.datatype.number(5)
  let maxLegCount = 5
  let legPartners = randomPeople(legCount)
  let visible = true

  return {
    paid,
    pending,
    total,
    percentage,
    insightText,
    insightValue,
    legCount,
    maxLegCount,
    legPartners,
    visible,
  }
}
let randomPercent = () => faker.datatype.number({min: -100, max: 100})
let randomStat = () => faker.datatype.number({min: 0, max: 2000})
let randomCountWithPreview = () => {
  const totalCount = faker.datatype.number({min: 0, max: 10})
  return {
    totalCount,
    persons: randomPeople(Math.min(totalCount, 4)),
  }
}
let randomTimestamp = (h = 12) =>
  formatISO(subHours(new Date(), Math.max(1, Math.random() * h)))
export let mockDashboard = () => ({
  data: {
    lastUpdatedDate: randomTimestamp(),
    clubLevel: faker.datatype.number(100),
    commission: randomKpi('pv'),
    performanceBonus: randomKpi('pb'),
    promoteOutBonus: randomKpi('pob'),
  },
  error: null,
})
export let mockStats = () => ({
  newTeamStats: {
    data: {percentage: randomPercent(), value: randomStat()},
    error: null,
  },
  totalTeamStats: {
    data: {percentage: randomPercent(), value: randomStat()},
    error: null,
  },
  newCustomersStats: {
    data: {percentage: randomPercent(), value: randomStat()},
    error: null,
  },
  totalCustomersStats: {
    data: {percentage: randomPercent(), value: randomStat()},
    error: null,
  },
})
export let mockActions = () => ({
  partnersCloseToPb: {data: randomCountWithPreview(), error: null},
  partnersCloseToPob: {data: randomCountWithPreview(), error: null},
  partnersNewPosition: {data: randomCountWithPreview(), error: null},
  partnersNotRenewed: {data: randomCountWithPreview(), error: null},
  partnersAnniversaries: {data: randomCountWithPreview(), error: null},
  partnersBirthdays: {data: randomCountWithPreview(), error: null},

  customersPaymentIssues: {data: {count: randomCount()}, error: null},
  customersNextShipment: {data: {count: randomCount()}, error: null},
  customersCancelledOrders: {data: {count: randomCount()}, error: null},
  customersPendingCarts: {data: {count: randomCount()}, error: null},
  customersAnniversaries: {data: {count: randomCount()}, error: null},
  customersNewOrders: {data: {count: randomCount()}, error: null},
  customersBirthdays: {data: {count: randomCount()}, error: null},
})

export let dashboard = graphql.query('dashboard', (_req, res, ctx) =>
  res(
    ctx.data({
      dashboard: mockDashboard(),
      ...mockStats(),
      ...mockActions(),
    })
  )
)
