import classNames from 'classnames'

import {Gift} from './ui/icons'

type Props = {
  reached: boolean
}

export function TitleReward({reached}: Props) {
  return (
    <div
      className={classNames(
        'rounded-3xl text-13 font-bold flex items-center w-full p-5',
        {
          'bg-apple-background': reached,
          'text-apple': reached,

          'bg-grey-6': !reached,
          'text-grey-3': !reached,
        }
      )}
    >
      <div className="pr-3">
        <Gift className="text-20" />
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </div>
    </div>
  )
}
