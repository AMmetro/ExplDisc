import classNames from 'classnames'
import type {MouseEvent, ReactNode} from 'react'
import {FormattedMessage} from 'react-intl'

import {CustomerSearchType} from '../lib/juiceplus/atd/sdk'

type ButtonProps = {
  selected: boolean
  children: ReactNode
  onClick(e: MouseEvent<HTMLButtonElement>): void
}

function Button({selected, onClick, children}: ButtonProps) {
  return (
    <button onClick={onClick}>
      <a className="inset-0 rounded-full px-8 py-0.5 text-13 focus:outline-none z-10 relative">
        <span
          className={classNames(
            'absolute inset-0 flex justify-center items-center py-0.5',
            {
              // Hacky margin needed to aviod layout shift. This is almost
              // certainly a bug but I have no idea how to avoid it.
              'font-bold -mt-px': selected,
              'mt-px': !selected,
            }
          )}
        >
          {children}
        </span>
        {/*
      In order to prevent layout jank when bolding the font, we put a hidden
      pre-bolded element here to force the right size of the container
    */}
        <span className={classNames('invisible font-bold')} aria-hidden>
          {children}
        </span>
      </a>
    </button>
  )
}

type Props = {
  selected: CustomerSearchType
  isPending: boolean
  onToggle(customerSearchType: CustomerSearchType): void
}

export function DirectAllToggle({selected, isPending, onToggle}: Props) {
  return (
    <div
      className={classNames(
        'grid grid-cols-2 gap-2 p-1 bg-peach-light rounded-full relative',
        {
          'animate-pulse': isPending,
        }
      )}
    >
      <div
        className={classNames(
          'absolute transform transition-transform duration-150 h-full p-1 w-1/2',
          {
            'translate-x-full': selected === CustomerSearchType.All,
          }
        )}
      >
        <div className="w-full h-full rounded-full bg-white" />
      </div>

      <Button
        onClick={() => onToggle(CustomerSearchType.Direct)}
        selected={selected === CustomerSearchType.Direct}
      >
        <FormattedMessage
          id="0dd51cb9bf7f"
          defaultMessage="Direct"
          description="Direct label for direct/all toggle"
        />
      </Button>
      <Button
        onClick={() => onToggle(CustomerSearchType.All)}
        selected={selected === CustomerSearchType.All}
      >
        <FormattedMessage
          id="8082c4a0cce8"
          defaultMessage="All"
          description="All label for direct/all toggle"
        />
      </Button>
    </div>
  )
}
