import classNames from 'classnames'
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
import type {ActivePartner} from '../lib/user'
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
  user: ActivePartner
}

function isEligibleForPromotion(track: PromotionTrack): boolean {
  const {evaluationStatus} = track
  return evaluationStatus === 'Successful' || evaluationStatus === 'Queued'
}

function PromotionHeader({promotion, selectedTrack, onTrackSelected}: Props) {
  const track = promotion.tracks[selectedTrack]
  const {trackTime} = track

  const showTrackTimeframe = selectedTrack === 'promotion'
  const displayedTimeframe = showTrackTimeframe
    ? tryExtractTrackTimeframe(trackTime)
    : null

  return (
    <div className="flex items-center justify-between pb-4">
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
  )
}

export function DashboardPromotionContent({
  promotion,
  selectedTrack,
  onTrackSelected,
  user,
}: Props) {
  const [submitted, setSubmitted] = useState(false)

  const track = promotion.tracks[selectedTrack]
  const hasExpressTrack = selectedTrack === 'promotion'
  const expressTrack = promotion.tracks['express']
  const {rules} = track

  const orderRules = useMemo(
    () => pick(rules, ['personalOrder', 'customerOrder']),
    [rules]
  )

  const trackReached =
    isEligibleForPromotion(track) ||
    (hasExpressTrack && isEligibleForPromotion(expressTrack))

  const expressTimeframe = tryExtractTrackTimeframe(expressTrack.trackTime)
  const showExpressTrack =
    hasExpressTrack &&
    expressTrack.trackTime.numberOfDaysLeftForPromotion !== null &&
    expressTimeframe !== null
  const daysLeft = expressTrack.trackTime.numberOfDaysLeftForPromotion ?? 0

  const showVolumeMessages =
    rules.personalCustomerVolume ||
    rules.promotionalProductVolume?.maxHouseholdPPVAllowedValue ||
    rules.promotionalProductVolume?.maxPerLinePPVPercentageValue

  let columns: JSX.Element[] = []

  if (rules.promotionalProductVolume) {
    columns.push(
      <PromotionalProductVolume
        key="promotional-product-volume"
        rule={rules.promotionalProductVolume}
        trackType={selectedTrack}
      />
    )
  }

  if (!isEmpty(orderRules)) {
    columns.push(
      <div className="flex" key="promotion-orders-section">
        <DividerWithIcon />
        <PromotionOrdersSection
          rules={orderRules}
          rank={promotion.levelRankToBeEvaluated}
        />
      </div>
    )
  }

  if (rules.teamStructure) {
    columns.push(
      <div className="flex" key="promotion-team-section">
        <DividerWithIcon />
        <PromotionTeamSection rule={rules.teamStructure} />
      </div>
    )
  }

  const columnCount = columns.length
  const maximumGridColumnCount = 3
  const displayRewardsOutsideGrid = columnCount === maximumGridColumnCount
  const showSecondRow =
    showVolumeMessages || displayRewardsOutsideGrid || showExpressTrack

  return (
    <Card className="p-8">
      <div className="divide-y">
        <PromotionHeader
          promotion={promotion}
          selectedTrack={selectedTrack}
          onTrackSelected={onTrackSelected}
          user={user}
        />

        <div className="grid grid-cols-3 pt-4">
          {/* columns are determined dynamically above */}
          {columns.map((col) => col)}

          {!displayRewardsOutsideGrid && (
            <div
              className={classNames(
                'border-l border-grey-5 h-full pl-8 flex flex-col items-end justify-center',
                {
                  'col-span-2': columnCount === 1,
                }
              )}
            >
              <TitleReward reached={trackReached} />
              {trackReached && (
                <div className="py-4">
                  <SubmitPromotionButton
                    submitted={submitted}
                    setSubmitted={setSubmitted}
                    promotion={promotion}
                    selectedTrack={selectedTrack}
                    user={user}
                    expressPromotion={isEligibleForPromotion(expressTrack)}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {showSecondRow && (
        <div
          className={classNames('flex justify-between', {
            'pt-4': displayRewardsOutsideGrid || showVolumeMessages,
          })}
        >
          {/* this is to ensure the express track always displays at the end */}
          {!showVolumeMessages && !displayRewardsOutsideGrid && <div />}
          {showVolumeMessages && (
            <div className="min-w-[265px] mr-8 self-start grid grid-cols-1 gap-2">
              {rules.personalCustomerVolume && (
                <PersonalCustomerVolume rule={rules.personalCustomerVolume} />
              )}
              {rules.promotionalProductVolume && (
                <PVSectionMaxVolumeTextContainer
                  rule={rules.promotionalProductVolume}
                />
              )}
            </div>
          )}
          {displayRewardsOutsideGrid && (
            <div className="pr-8">
              <TitleReward reached={false} />
            </div>
          )}
          <div
            className={classNames('flex flex-col', {
              'justify-center': showVolumeMessages,
            })}
          >
            <div className="flex flex-col items-end">
              {showExpressTrack && (
                <ExpressTrack
                  daysLeft={daysLeft}
                  expressRewards={expressTrack.rewards}
                  promotionRewards={track.rewards}
                  reached={isEligibleForPromotion(expressTrack)}
                  timeframe={expressTimeframe}
                />
              )}
              {displayRewardsOutsideGrid && trackReached && (
                <div
                  className={classNames({
                    'pt-2': showExpressTrack,
                  })}
                >
                  <SubmitPromotionButton
                    submitted={submitted}
                    setSubmitted={setSubmitted}
                    promotion={promotion}
                    selectedTrack={selectedTrack}
                    user={user}
                    expressPromotion={isEligibleForPromotion(expressTrack)}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Card>
  )
}
