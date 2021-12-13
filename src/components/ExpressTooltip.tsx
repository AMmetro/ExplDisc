import classNames from 'classnames'
import type {ReactNode} from 'react'

import {QuestionMarkTooltip} from './ui/icons'

type Props = {
  message: ReactNode
  daysLeft: number
}

export function ExpressTooltip({message, daysLeft}: Props) {
  return (
    <div>
      <div className="relative group">
        <QuestionMarkTooltip
          className={classNames(
            'group-hover:text-orange-hover group-hover:cursor-pointer text-24',
            daysLeft > 0 ? 'bg-plum-light text-beet' : 'bg-grey-6 text-grey-3'
          )}
        />
        <div className="group-hover:block absolute -top-5 bg-white min-w-[295px] -translate-y-full -translate-x-64 border border-grey-6 rounded-[10px] z-auto shadow-tooltip hidden">
          <div className="text-13 leading-5 text-emerald text-center px-4 py-5">
            {message}
          </div>
          <i className="absolute right-3 ml-5 w-7 h-4 overflow-hidden after:absolute after:w-4 after:h-4 after:left-1/2 after:bg-white after:shadow-tooltip after:transform after:rotate-45 after:-translate-x-1/2 after:-translate-y-1/2" />
        </div>
      </div>
    </div>
  )
}
