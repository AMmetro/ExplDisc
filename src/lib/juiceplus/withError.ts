import type {ZodTypeAny} from 'zod'
import {z} from 'zod'

import type {JpError} from './error'
import {error} from './error'

export let withError = <T extends ZodTypeAny>(data: T) =>
  z
    .object({
      data,
      error: z.null(),
    })
    .or(
      z.object({
        data: z.null(),
        error,
      })
    )

export type WithError<T> = {data: T; error: null} | {data: null; error: JpError}

/**
 * Wraps an error received from the API into one that can be passed around,
 * console.error(...)-ed, etc.
 */
class APIError extends Error {
  error: JpError
  constructor(error: JpError) {
    super(error.message)
    this.error = error
  }
}

/**
 * Assert that the passed in `WithError<T>` is, in fact, free of errors.
 * Throws the error if there is one.
 */
export let assertOk: <T>(
  input: WithError<T>
) => asserts input is {data: T; error: null} = (input) => {
  if (input.error !== null) {
    throw new APIError(input.error)
  }
}
