import type {TypeOf} from 'zod'
import {z} from 'zod'

import type {Cms} from './atd/cms'

export const parser = z.array(
  z.object({
    href: z.string(),
    id: z.string(),
    defaultMessage: z.string(),
    description: z.string(),
  })
)

export type DashboardResourceDropdownMenuItems = TypeOf<typeof parser>

export const getContent = async (
  cms: Cms
): Promise<DashboardResourceDropdownMenuItems> => {
  const resourceMenuItems = await cms.resourceMenuItems()

  return parser.parse(resourceMenuItems)
}
