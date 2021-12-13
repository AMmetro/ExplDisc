import type getConfig from 'next/config'

const envVariablesMock = {
  AEM_HOST: 'http://www.example.com',
  API_HOST: 'http://api.example.com',
  GRAPHQL_ENDPOINT: 'http://api.example.com/graphql',
  PARTNER_LOYALTY_API_HOST: 'http://partner-loyalty.example.com',
  MOCKS_ENABLED: 'true',
}

const getConfigMock: typeof getConfig = () => ({
  serverRuntimeConfig: envVariablesMock,
})

jest.mock('next/config', () => getConfigMock)

Object.assign(process.env, envVariablesMock)

// eslint-disable-next-line @typescript-eslint/no-empty-function,import/no-anonymous-default-export
export default () => {}
