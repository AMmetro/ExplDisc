import type {PropsWithChildren} from 'react'

export function Card({children}: PropsWithChildren<unknown>) {
  return (
    <div className="bg-white shadow-menu overflow-hidden rounded-2xl">
      {children}
    </div>
  )
}
