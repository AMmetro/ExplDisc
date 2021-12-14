import {isEmpty, pick} from 'lodash'
import {useMemo, useState} from 'react'
import {FormattedMessage} from 'react-intl'

import type {
  PromotionTabContent,
  PromotionTrack,
  PromotionTrackType,
  TrackTime,
  TrackTimeUnit,
} from '../lib/juiceplus/promotionTab'
import {DividerWithIcon} from './DividerWithIcon'
import {ExpressTrack} from './ExpressTrack'
import {PVSectionMaxVolumeTextContainer} from './PVSectionMaxVolumeTextContainer'
import {PersonalCustomerVolume} from './PersonalCustomerVolume'
import {PromotionOrdersSection} from './PromotionOrdersSection'
import {PromotionTeamSection} from './PromotionTeamSection'
import {PromotionalProductVolume} from './PromotionalProductVolume'
import {SubmitPromotionButton} from './SubmitPromotionButton'
import {TitleReward} from './TitleReward'
import {TrackToggle} from './TrackToggle'
import {Card} from './ui/Card'
import {GeneralCirclePending} from './ui/icons'

type PromotionTitleProps = {
  promotion: PromotionTabContent
}

function PromotionTitle({promotion}: PromotionTitleProps) {
  return (
    <h3 className="font-bold text-16 text-emerald">
      <FormattedMessage
        id="9867aecef215"
        defaultMessage={
          'Promotion to {rank, select, ' +
          '2 {Partner+} ' +
          '3 {Qualifying Sales Coordinator} ' +
          '4 {Sales Coordinator} ' +
          'other {{rank}}' +
          '}'
        }
        description="Title for promotion tab that says to what rank the person will be promoted"
        values={{rank: promotion.levelRankToBeEvaluated}}
      />
    </h3>
  )
}

type TrackTimeframeProps = {
  timeframe: {
    duration: number
    temporalUnit: TrackTimeUnit
  }
}

function tryExtractTrackTimeframe(
  trackTime: TrackTime
): TrackTimeframeProps['timeframe'] | null {
  if (trackTime.periodsEvaluated === null || trackTime.temporalUnit === null) {
    return null
  }

  return {
    duration: trackTime.periodsEvaluated,
    temporalUnit: trackTime.temporalUnit,
  }
}

function TrackTimeframe({timeframe}: TrackTimeframeProps) {
  return (
    <FormattedMessage
      id="06206b9786da"
      defaultMessage={
        '{n} {unit, select, ' +
        'Days {day} ' +
        'Months {month} ' +
        'other {{unit}} ' +
        '} timeframe'
      }
      description="Timeframe in what promotion progress is evaluated"
      values={{
        n: timeframe.duration,
        unit: timeframe.temporalUnit,
      }}
    />
  )
}

type Props = {
  promotion: PromotionTabContent
  selectedTrack: PromotionTrackType
  onTrackSelected(t: PromotionTrackType): void
}

function isEligibleForPromotion(track: PromotionTrack): boolean {
  const {evaluationStatus} = track
  return evaluationStatus === 'Successful' || evaluationStatus === 'Queued'
}

export function DashboardPromotionContent({
  promotion,
  selectedTrack,
  onTrackSelected,
}: Props) {
  const [submitted, setSubmitted] = useState(false)

  const track = promotion.tracks[selectedTrack]
  const hasExpressTrack = selectedTrack === 'promotion'
  const expressTrack = promotion.tracks['express']
  const {trackTime, rules} = track
  const showTrackTimeframe = selectedTrack === 'promotion'
  const displayedTimeframe = showTrackTimeframe
    ? tryExtractTrackTimeframe(trackTime)
    : null

  const expressTimeframe = tryExtractTrackTimeframe(expressTrack.trackTime)
  const orderRules = useMemo(
    () => pick(rules, ['personalOrder', 'customerOrder']),
    [rules]
  )
  const trackReached =
    isEligibleForPromotion(track) ||
    (hasExpressTrack && isEligibleForPromotion(expressTrack))

  return (
    <Card>
      <div className="divide-y">
        <div className="flex items-center justify-between px-8 pb-4 pt-8">
          <PromotionTitle promotion={promotion} />
          <div className="flex items-center">
            {displayedTimeframe && (
              <div className="flex items-center">
                <div className="bg-beet-background rounded-full p-[6px] mr-3">
                  <GeneralCirclePending className="text-20 text-white" />
                </div>
                <div className="pr-7 text-14 font-bold text-beet">
                  <TrackTimeframe timeframe={displayedTimeframe} />
                </div>
              </div>
            )}
            <div className="flex lg:flex-none items-center justify-end col-span-2">
              <TrackToggle
                selectedTrack={selectedTrack}
                onChangeTrackView={onTrackSelected}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 pb-6 pt-4 px-8">
          {rules.promotionalProductVolume && (
            <PromotionalProductVolume
              rule={rules.promotionalProductVolume}
              trackType={selectedTrack}
            />
          )}
          {!isEmpty(orderRules) && (
            <div className="flex">
              <DividerWithIcon />
              <PromotionOrdersSection
                rules={orderRules}
                rank={promotion.levelRankToBeEvaluated}
              />
            </div>
          )}
          {rules.teamStructure && (
            <div className="flex">
              <DividerWithIcon />
              <PromotionTeamSection rule={rules.teamStructure} />
            </div>
          )}
          <div className="border-l border-grey-5 h-full p-5 flex flex-col items-end">
            <TitleReward reached={trackReached} />
            {trackReached && (
              <div className="pt-2">
                <SubmitPromotionButton
                  submitted={submitted}
                  setSubmitted={setSubmitted}
                  promotion={promotion}
                  selectedTrack={selectedTrack}
                  expressPromotion={isEligibleForPromotion(expressTrack)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="pl-8 pb-8 flex justify-between">
        <div>
          {rules.personalCustomerVolume && (
            <PersonalCustomerVolume rule={rules.personalCustomerVolume} />
          )}
          {rules.promotionalProductVolume && (
            <PVSectionMaxVolumeTextContainer
              rule={rules.promotionalProductVolume}
            />
          )}
        </div>
        <div>
          {hasExpressTrack &&
            expressTrack.trackTime.numberOfDaysLeftForPromotion !== null &&
            expressTimeframe !== null && (
              <ExpressTrack
                daysLeft={expressTrack.trackTime.numberOfDaysLeftForPromotion}
                expressRewards={expressTrack.rewards}
                promotionRewards={track.rewards}
                reached={isEligibleForPromotion(expressTrack)}
                timeframe={expressTimeframe}
              />
            )}
        </div>
      </div>
    </Card>
  )
}
