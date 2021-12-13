import {z} from 'zod'

import type {CmsClient} from '../../cms/client'

const gettingStartedEndpointsZ = z.object({
  needHelp: z.string(),
})

export type GettingStartedEndpoints = {
  needHelp: string
}

export const gettingStartedEndpoints = async (
  client: CmsClient
): Promise<GettingStartedEndpoints> => {
  const data = await client.requestMock('getting-started-endpoints.json')

  return gettingStartedEndpointsZ.parse(data)
}
