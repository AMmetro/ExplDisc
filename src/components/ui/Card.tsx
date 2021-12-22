import classNames from 'classnames'
import type {PropsWithChildren} from 'react'

type Props = PropsWithChildren<{
  className?: string
}>

export function Card({children, className}: Props) {
  return (
    <div
      className={classNames(
        'bg-white shadow-menu overflow-hidden rounded-2xl',
        className
      )}
    >
      {children}
    </div>
  )
}
