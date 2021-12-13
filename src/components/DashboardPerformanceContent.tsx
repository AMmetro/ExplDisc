import {Transition} from '@headlessui/react'
import type {ReactNode} from 'react'
import {FormattedMessage, FormattedNumber} from 'react-intl'

import type {Kpis} from '../lib/juiceplus/dashboard'
import type {
  PromotionTab,
  PromotionTrackType,
} from '../lib/juiceplus/promotionTab'
import {ArrowRightLink} from './ArrowRightLink'
import {DashboardCommissionInsight} from './DashboardCommissionInsight'
import {DashboardPerformanceBonusInsight} from './DashboardPerformanceBonusInsight'
import {DashboardPerformanceLegs} from './DashboardPerformanceLegs'
import {DashboardPromoteOutBonusInsight} from './DashboardPromoteOutBonusInsight'
import {DashboardPromotionContent} from './DashboardPromotionContent'
import {PaymentsVolumeProgressGauge} from './PaymentsVolumeProgressGauge'
import {Card} from './ui/Card'

type HeaderProps = {
  title: ReactNode
  subtitle: ReactNode
  show: boolean
}

function Header({title, subtitle, show}: HeaderProps) {
  return (
    <Transition
      appear
      show={show}
      enter="transform duration-75"
      enterFrom="translate-x-full"
      enterTo="translate-x-0"
      leave="transform duration-75"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
      className="col-start-1 row-start-1"
    >
      <div className="grid gap-2">
        <h3 className="font-bold text-16 text-emerald">{title}</h3>
        <h4 className="font-bold text-14 text-grey-2 uppercase">{subtitle}</h4>
      </div>
    </Transition>
  )
}

function ArrowForDashboard({selected}: {selected: Selection}) {
  return (
    <div>
      {selected === 'commission' ? (
        <ArrowRightLink href="/portal/dashboard/pv-detail-report" />
      ) : null}
      {selected === 'performanceBonus' ? (
        <ArrowRightLink href="/portal/dashboard/pb-detail-report" />
      ) : null}
      {selected === 'promoteOutBonus' ? (
        <ArrowRightLink href="/portal/dashboard/pob-detail-report" />
      ) : null}
    </div>
  )
}

function DashboardPerformanceHeader({selected}: {selected: Selection}) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between">
      <Header
        show={selected === 'commission'}
        title={
          <FormattedMessage
            id="2fb20fc88f4c"
            defaultMessage="Commission"
            description="Title for KPIs commission"
          />
        }
        subtitle={
          <FormattedMessage
            id="93b54116c451"
            defaultMessage="Commission Volume"
            description="Subtitle for commission KPI"
          />
        }
      />

      <Header
        show={selected === 'performanceBonus'}
        title={
          <FormattedMessage
            id="9ec9fc77f7f3"
            defaultMessage="Performance Bonus Qualification "
            description="Title for PB KPI"
          />
        }
        subtitle={
          <FormattedMessage
            id="1232746bf9fe"
            defaultMessage="PB Volume"
            description="Subtitle for PB KPI"
          />
        }
      />

      <Header
        show={selected === 'promoteOutBonus'}
        title={
          <FormattedMessage
            id="5413cdd7ad89"
            defaultMessage="Promote Out Bonus Qualification "
            description="Title for POB commission"
          />
        }
        subtitle={
          <FormattedMessage
            id="eda5191e8bcf"
            defaultMessage="POB Volume"
            description="Subtitle for POB KPI"
          />
        }
      />
      <ArrowForDashboard selected={selected} />
    </div>
  )
}

type KpiContentProps = {
  selected: keyof Kpis
  kpis: Kpis
  rank: number
}

function DashboardKpisContent({selected, kpis, rank}: KpiContentProps) {
  const kpi = kpis[selected]

  if (!kpi.visible) {
    throw new Error(
      `Selected tab should be always visible. But ${selected} tab is not visible.`
    )
  }

  const {paid, pending, total, insight} = kpi

  return (
    <Card>
      <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 divide-y lg:divide-y-0 divide-x divide-grey-5">
        <div className="py-6 grid gap-6 pl-6 pr-10">
          <div>
            <DashboardPerformanceHeader selected={selected} />
          </div>
          {rank !== 1 ? (
            <div className="flex flex-col lg:flex-row items-center">
              <div className="px-6">
                <PaymentsVolumeProgressGauge
                  achieved={paid}
                  pending={pending}
                  required={total}
                />
              </div>

              <div className="flex flex-col items-center lg:items-start p-4">
                <span className="bg-apple-background text-apple font-bold text-14 my-1 px-3 py-2 rounded-full">
                  <FormattedMessage
                    id="57ba47e5e6f5"
                    defaultMessage="Paid: {n}"
                    description="paid label for dashboard performance chart"
                    values={{n: <FormattedNumber value={paid} />}}
                  />
                </span>

                <span className="bg-mango-background text-mango font-bold text-14 my-1 px-3 py-2 rounded-full">
                  <FormattedMessage
                    id="1efc1441cc0e"
                    defaultMessage="Pending: {n}"
                    description="pending label for dashboard performance chart"
                    values={{n: <FormattedNumber value={pending} />}}
                  />
                </span>
              </div>
            </div>
          ) : (
            <div className="flex flex-row items-center divide-x">
              <div className="relative pr-6">
                <span className="text-[2rem] font-heading font-bold leading-5 text-emerald">
                  <FormattedNumber value={paid} />
                </span>
                <span className="text-14 text-emerald font-bold px-1">
                  <FormattedMessage
                    id="f31d72742329"
                    defaultMessage="Paid"
                    description="Label for Paid"
                  />
                </span>
              </div>
              <div className="relative px-6">
                <span className="text-[2rem] font-heading leading-5 text-grey-3 font-bold">
                  <FormattedNumber value={pending} />
                </span>
                <span className="text-14 text-grey-3 font-bold px-1">
                  <FormattedMessage
                    id="7791986d8278"
                    defaultMessage="Pending"
                    description="Label for Pending"
                  />
                </span>
              </div>
            </div>
          )}
        </div>

        {selected === 'commission' ? (
          <div className="p-6 flex items-center">
            <DashboardCommissionInsight insight={insight} />
          </div>
        ) : null}

        {selected === 'performanceBonus' && kpis.performanceBonus.visible ? (
          <div className="grid grid-cols-2 divide-x divide-grey-5">
            <div className="p-6 flex items-center">
              <DashboardPerformanceLegs
                title={
                  <FormattedMessage
                    id="533584b7c82a"
                    defaultMessage="PB Legs"
                    description="title for pb legs"
                  />
                }
                emptyMessage={
                  <FormattedMessage
                    id="4f06f50e228e"
                    defaultMessage="No PB legs yet"
                    description="empty message for pb legs"
                  />
                }
                {...kpis.performanceBonus}
              />
            </div>
            <div className="p-6 flex items-center">
              <DashboardPerformanceBonusInsight insight={insight} />
            </div>
          </div>
        ) : null}

        {selected === 'promoteOutBonus' && kpis.promoteOutBonus.visible ? (
          <div className="grid grid-cols-2 divide-x divide-grey-5">
            <div className="p-6 flex items-center">
              <DashboardPerformanceLegs
                title={
                  <FormattedMessage
                    id="740250cb1f93"
                    defaultMessage="POB Legs"
                    description="title for pob legs"
                  />
                }
                emptyMessage={
                  <FormattedMessage
                    id="350cc68e0067"
                    defaultMessage="No POB legs yet"
                    description="empty message for pob legs"
                  />
                }
                {...kpis.promoteOutBonus}
              />
            </div>
            <div className="p-6 flex items-center">
              <DashboardPromoteOutBonusInsight insight={insight} />
            </div>
          </div>
        ) : null}
      </div>
    </Card>
  )
}

export type Selection =
  | 'commission'
  | 'performanceBonus'
  | 'promoteOutBonus'
  | 'promotion'

export type Props =
  | {
      selected: keyof Kpis
      kpis: Kpis
      rank: number
    }
  | {
      selected: 'promotion'
      promotion: PromotionTab
      selectedTrack: PromotionTrackType
      onTrackSelected(t: PromotionTrackType): void
    }

export function DashboardPerformanceContent(props: Props) {
  if (props.selected === 'promotion') {
    const {selected, promotion, selectedTrack, onTrackSelected} = props

    if (!promotion.visible) {
      throw new Error(
        `Selected tab should be always visible. But ${selected} tab is not visible.`
      )
    }

    return (
      <DashboardPromotionContent
        promotion={promotion}
        selectedTrack={selectedTrack}
        onTrackSelected={onTrackSelected}
      />
    )
  }

  const {selected, kpis, rank} = props
  return <DashboardKpisContent selected={selected} kpis={kpis} rank={rank} />
}
