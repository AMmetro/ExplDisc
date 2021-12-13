if (typeof process.env.AEM_HOST !== 'string') {
  throw new TypeError('AEM_HOST not set in environment')
}

export const aemHost = process.env.AEM_HOST

if (typeof process.env.API_HOST !== 'string') {
  throw new TypeError('API_HOST not set in environment')
}

export const apiHost = process.env.API_HOST

if (typeof process.env.GRAPHQL_ENDPOINT !== 'string') {
  throw new TypeError('GRAPHQL_ENDPOINT not set in environment')
}

export const graphqlEndpoint = process.env.GRAPHQL_ENDPOINT

if (typeof process.env.PARTNER_LOYALTY_API_HOST !== 'string') {
  throw new TypeError('PARTNER_LOYALTY_API_HOST not set in environment')
}

export const partnerLoyaltyApiHost = process.env.PARTNER_LOYALTY_API_HOST
