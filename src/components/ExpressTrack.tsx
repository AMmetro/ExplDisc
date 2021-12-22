import classNames from 'classnames'
import {FormattedMessage} from 'react-intl'

import type {TrackTimeUnit} from '../lib/juiceplus/promotionTab'
import type {Rewards} from '../lib/juiceplus/sdk/partner-loyalty'
import {ExpressTooltip} from './ExpressTooltip'
import {RushClock} from './ui/icons'

type ExpressTooltipMessageProps = {
  timeframe: {
    duration: number
    temporalUnit: TrackTimeUnit
  }
  isExpired: boolean
  expressRewards: Rewards
  promotionRewards: Rewards
}

function ExpressTooltipMessage({
  isExpired,
  expressRewards,
  promotionRewards,
  timeframe,
}: ExpressTooltipMessageProps) {
  if (isExpired) {
    return (
      <FormattedMessage
        id="152ea022d847"
        defaultMessage="Sorry you did not reach all your targets for Express Track."
        description="Tooltip message for expire express track"
      />
    )
  }

  const expressRewardObject = expressRewards.find(({rewardType}) => {
    return rewardType === 'Title Reward Payout'
  })
  const promotionRewardObject = promotionRewards.find(({rewardType}) => {
    return rewardType === 'Title Reward Payout'
  })

  if (
    !promotionRewardObject ||
    promotionRewardObject.rewardValue === null ||
    !expressRewardObject ||
    expressRewardObject.rewardValue === null
  ) {
    return null
  }

  return (
    <FormattedMessage
      id="95ab11902630"
      defaultMessage={
        'If you reach all your targets in your first {timeframeDuration} {timeframeUnit, select, ' +
        'Days {days} ' +
        'Months {months} ' +
        'other {{timeframeUnit}} ' +
        '}, you will get an extra {rewardCurrency}{extraReward}.'
      }
      description="Tooltip message for active express track"
      values={{
        timeframeDuration: timeframe.duration,
        timeframeUnit: timeframe.temporalUnit,
        rewardCurrency: expressRewardObject.valueTypeSymbol,
        extraReward:
          expressRewardObject.rewardValue - promotionRewardObject.rewardValue,
      }}
    />
  )
}

type Props = {
  daysLeft: number
  expressRewards: Rewards
  promotionRewards: Rewards
  reached: boolean
  timeframe: {
    duration: number
    temporalUnit: TrackTimeUnit
  }
}

export function ExpressTrack({
  daysLeft,
  expressRewards,
  promotionRewards,
  reached,
  timeframe,
}: Props) {
  const isInProgress = !reached && daysLeft > 0
  const isExpired = !reached && daysLeft <= 0

  return (
    <div className="-mr-8 max-w-64 flex items-end">
      <div
        className={classNames(
          'text-13 flex flex-row rounded-l-full items-center h-8',
          isExpired ? 'bg-grey-6 text-grey-3' : 'bg-plum-light text-beet'
        )}
      >
        <div className="ml-4 mr-3 my-2">
          <RushClock className="text-16" />
        </div>
        {isInProgress && (
          <div className="inset-0 flex justify-center font-bold mr-3 whitespace-nowrap">
            <FormattedMessage
              id="e105008d1a6d"
              defaultMessage="Express track: {daysLeft} days left"
              description="Express track days left"
              values={{
                daysLeft,
              }}
            />
          </div>
        )}

        <div className="mr-6 my-1 hover:text-orange-hover">
          <ExpressTooltip
            message={
              <ExpressTooltipMessage
                timeframe={timeframe}
                isExpired={isExpired}
                expressRewards={expressRewards}
                promotionRewards={promotionRewards}
              />
            }
          />
        </div>
      </div>
    </div>
  )
}
