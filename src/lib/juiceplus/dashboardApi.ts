import {GraphQLClient} from 'graphql-request'

import {graphqlEndpoint} from '../config'
import {getUser, isActivePartner} from '../user'
import {CustomerSearchType, getSdk} from './atd/sdk'
import type {DashboardData} from './dashboard'
import * as api from './dashboard'

export function parseCustomerSearchType(s: string | string[]) {
  const searchType = Array.isArray(s) ? s[0] : s

  switch (searchType.toLowerCase()) {
    case 'direct':
      return CustomerSearchType.Direct
    case 'all':
      return CustomerSearchType.All
    default:
      throw new Error(`Unknown customer search type: ${searchType}`)
  }
}

export async function dashboardApi(
  token: string,
  customerSearchType: CustomerSearchType
): Promise<DashboardData> {
  let user = await getUser(token)
  if (isActivePartner(user)) {
    const graphQLClient = new GraphQLClient(graphqlEndpoint, {
      timeout: 15000,
      headers: {
        Cookie: `auth-token=${token}`,
      },
    })

    let sdk = getSdk(graphQLClient)
    return await api.byCurrentPartner(sdk, user, customerSearchType)
  } else {
    throw new Error("User isn't an active partner")
  }
}
