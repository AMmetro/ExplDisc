import type {JpError} from './juiceplus/atd/sdk'

type Count = {count: number}

type Arg =
  | {
      data: Count
      error: null
    }
  | {
      data: null
      error: JpError
    }

/**
 * Abstraction around a potentially errored `count`-holding object.
 * Ignores the error, and runs the callback if count > 0
 */
export function withCount(arg: Arg, cb: (count: number) => JSX.Element) {
  if (arg.error !== null) {
    return null
  }

  if (arg.data.count === 0) {
    return null
  }

  return cb(arg.data.count)
}
