import {GraphQLClient} from 'graphql-request'

import {graphqlEndpoint} from '../config'
import {getSdk} from './atd/sdk'
import type {PersonCriteriaInput} from './atd/sdk'
import * as api from './persons'
import type {PersonsData} from './persons'

export async function personsApi(
  token: string,
  input: string
): Promise<PersonsData> {
  const graphQLClient = new GraphQLClient(graphqlEndpoint, {
    timeout: 90000,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  let sdk = getSdk(graphQLClient)

  let criteria: PersonCriteriaInput = {
    firstName: {
      contains: input,
    },
  }

  return await api.getPersons(sdk, criteria)
}
