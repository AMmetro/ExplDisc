const {
  AEM_HOST = 'http://www.example.com',
  API_HOST = 'http://api.example.com',
  GRAPHQL_ENDPOINT = 'http://api.example.com/graphql',
  PARTNER_LOYALTY_API_HOST = 'http://partner-loyalty.example.com',
  MOCKS_ENABLED = 'false',
} = process.env

module.exports = {
  env: {
    MOCKS_ENABLED,
    AEM_HOST,
    API_HOST,
    GRAPHQL_ENDPOINT,
    PARTNER_LOYALTY_API_HOST,
  },
  serverRuntimeConfig: {
    AEM_HOST,
    API_HOST,
    GRAPHQL_ENDPOINT,
    PARTNER_LOYALTY_API_HOST,
  },
}
