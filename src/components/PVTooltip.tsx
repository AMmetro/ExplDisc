import type {ReactNode} from 'react'

import {QuestionMarkTooltip} from './ui/icons'

type Props = {
  message: ReactNode
}

export function PVTooltip({message}: Props) {
  return (
    <div>
      <div className="relative group">
        <QuestionMarkTooltip className="group-hover:text-orange-hover group-hover:cursor-pointer text-grey-3 text-24" />
        <div className="group-hover:block absolute -top-5 -ml-1.5 -left-1/2 bg-white min-w-[295px] -translate-x-1/3 -translate-y-full border border-grey-6 rounded-[10px] z-auto shadow-tooltip hidden">
          <div className="text-13 leading-5 text-emerald text-center px-4 py-5">
            {message}
          </div>
          <i className="absolute top-full left-1/3 ml-4 w-7 h-4 overflow-hidden after:absolute after:w-4 after:h-4 after:left-1/2 after:bg-white after:shadow-tooltip after:transform after:rotate-45 after:-translate-x-1/2 after:-translate-y-1/2" />
        </div>
      </div>
    </div>
  )
}
