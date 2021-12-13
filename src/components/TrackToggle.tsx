import classNames from 'classnames'
import type {MouseEvent, ReactNode} from 'react'
import {FormattedMessage} from 'react-intl'

import type {PromotionTrackType} from '../lib/juiceplus/promotionTab'

type ButtonProps = {
  onClick?(e: MouseEvent<HTMLButtonElement>): void
  title: ReactNode
  selected: boolean
}

function ToggleButton({title, onClick, selected}: ButtonProps) {
  return (
    <button onClick={onClick} className="leading-3 p-1">
      <a className="inset-0 rounded-full text-13 focus:outline-none z-10 relative p-1">
        <span
          className={classNames(
            'absolute inset-0 flex justify-center items-center font-bold pb-1',
            selected ? 'text-grey-1' : 'text-beet'
          )}
        >
          {title}
        </span>
        {/*
      In order to prevent layout jank when bolding the font, we put a hidden
      pre-bolded element here to force the right size of the container
    */}
        <span className="invisible font-bold text-13" aria-hidden>
          {title}
        </span>
      </a>
    </button>
  )
}

type ToggleProps = {
  selectedTrack: PromotionTrackType
  onChangeTrackView(t: PromotionTrackType): void
}

export function TrackToggle({selectedTrack, onChangeTrackView}: ToggleProps) {
  return (
    <div
      className={classNames(
        'grid grid-cols-2 gap-2 bg-plum-light rounded-full relative text-24 p-1'
      )}
    >
      <div
        className={classNames(
          'absolute transform transition-transform duration-150 h-full p-0.5 w-1/2',
          {
            'translate-x-full': selectedTrack === 'cumulative',
          }
        )}
      >
        <div className="w-full h-full rounded-full bg-white" />
      </div>

      <ToggleButton
        onClick={() => onChangeTrackView('promotion')}
        title={
          <FormattedMessage
            id="9b15b5824918"
            defaultMessage="Promotion Track"
            description="Label for promotion toggle button"
          />
        }
        selected={selectedTrack === 'promotion' || selectedTrack === 'express'}
      />
      <ToggleButton
        onClick={() => onChangeTrackView('cumulative')}
        title={
          <FormattedMessage
            id="876bdcd107cc"
            defaultMessage="Cumulative"
            description="Label for cumulative toggle button"
          />
        }
        selected={selectedTrack === 'cumulative'}
      />
    </div>
  )
}
