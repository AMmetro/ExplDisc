import type {ComponentType} from 'react'

import type {JpError} from '../lib/juiceplus/atd/sdk'

type Props =
  | {
      error: null
      data: {count: number}
      component: ComponentType<{n: number}>
    }
  | {
      error: JpError
      data: null
      component: ComponentType<{n: number}>
    }

export function DashboardOverviewActionTotalCount({
  component: Component,
  ...props
}: Props) {
  if (props.error !== null) {
    return null
  }

  if (props.data.count === 0) {
    return null
  }

  return <Component n={props.data.count} />
}
