import {GraphQLClient} from 'graphql-request'

import {graphqlEndpoint} from '../../config'
import {getSdk} from '../atd/sdk'

const client = new GraphQLClient(graphqlEndpoint, {
  timeout: 15000,
})

export default getSdk(client)
