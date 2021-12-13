import getConfig from 'next/config'

const {
  serverRuntimeConfig: {
    AEM_HOST,
    API_HOST,
    GRAPHQL_ENDPOINT,
    PARTNER_LOYALTY_API_HOST,
  },
} = getConfig()

if (typeof AEM_HOST !== 'string') {
  throw new TypeError('AEM_HOST not set')
}

export const aemHost = AEM_HOST

if (typeof API_HOST !== 'string') {
  throw new TypeError('API_HOST not set')
}

export const apiHost = API_HOST

if (typeof PARTNER_LOYALTY_API_HOST !== 'string') {
  throw new TypeError('PARTNER_LOYALTY_API_HOST not set')
}

export const partnerLoyaltyApiHost = PARTNER_LOYALTY_API_HOST

if (typeof GRAPHQL_ENDPOINT !== 'string') {
  throw new TypeError('GRAPHQL_ENDPOINT not set')
}

export const graphqlEndpoint = GRAPHQL_ENDPOINT
