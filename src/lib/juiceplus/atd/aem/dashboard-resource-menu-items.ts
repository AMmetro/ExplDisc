import type {CmsClient} from '../../cms/client'

export type resourceMenuItemsType = [
  {
    href: string
    id: string
    defaultMessage: string
    description: string
  }
]

export const resourceMenuItems = async (
  client: CmsClient
): Promise<resourceMenuItemsType> => {
  return await client.requestMock('dashboard-resource-menu-items.json')
}
