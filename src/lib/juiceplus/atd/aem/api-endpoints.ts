import {z} from 'zod'

import {apiHost} from '../../../config'
import type {CmsClient} from '../../cms/client'

const apiEndpointsConfigZ = z.object({
  oldVoUri: z.string(),
})

export type ApiEndpoints = {
  oldVOUrl: string
}

export const apiEndpoints = async (
  client: CmsClient
): Promise<ApiEndpoints> => {
  const data = await client.requestMock(
    'api-endpoints-service-configuration.json'
  )
  const apiEndpointsConfig = apiEndpointsConfigZ.parse(data)

  return {
    oldVOUrl: `${apiHost}${apiEndpointsConfig.oldVoUri}`,
  }
}
