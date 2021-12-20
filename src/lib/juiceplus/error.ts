import type {TypeOf} from 'zod'
import {z} from 'zod'

export let error = z.object({
  status: z.number(),
  details: z.string(),
  message: z.string(),
  translationKey: z.string(),
})

export type JpError = TypeOf<typeof error>
