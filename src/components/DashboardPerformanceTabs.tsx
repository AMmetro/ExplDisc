import classNames from 'classnames'
import type {MouseEvent, ReactNode} from 'react'
import {FormattedMessage, FormattedNumber} from 'react-intl'

import type {Kpis} from '../lib/juiceplus/dashboard'
import type {PromotionTab} from '../lib/juiceplus/promotionTab'
import {Card} from './ui/Card'
import {SelectedTabArrow} from './ui/icons'

type ProgressBarProps = {
  percentage: number
}

function ProgressBar({percentage}: ProgressBarProps) {
  return (
    <div className="rounded-full bg-grey-5 h-2 overflow-hidden">
      <div
        className="h-2 rounded-full bg-apple"
        style={{width: `${percentage}%`}}
      />
    </div>
  )
}

type TabProps = {
  title: ReactNode
  percentage: number
  current?: boolean
  onClick?(e: MouseEvent<HTMLButtonElement>): void
  iconId: string
}

function Tab({title, percentage, current = false, onClick, iconId}: TabProps) {
  return (
    <div className="grid grid-cols-1">
      <button
        className="text-left focus:outline-none rounded-2xl hover:text-orange-hover hover:font-bold hover:shadow-2xl text-grey-1"
        onClick={onClick}
      >
        <Card>
          <div className="p-6 grid grid-cols-1 gap-4">
            <h3
              className={classNames('text-14 font-header', {
                'font-bold': current,
              })}
            >
              {title}
            </h3>

            <div className="flex items-center">
              <span className="text-14 font-bold text-apple">
                <FormattedNumber
                  value={Math.abs(percentage / 100)}
                  style="percent"
                />
              </span>

              <div className="px-2 w-32 ">
                <ProgressBar percentage={percentage} />
              </div>
            </div>
          </div>
        </Card>
      </button>

      <div className="grid grid-cols-1 p-0 -mt-2">
        <div
          className={classNames(
            'flex justify-center',
            current ? 'visible' : 'invisible'
          )}
        >
          <SelectedTabArrow id={iconId} />
        </div>
      </div>
    </div>
  )
}

export type Selection =
  | 'commission'
  | 'performanceBonus'
  | 'promoteOutBonus'
  | 'promotion'

export type Props = {
  selected: Selection
  kpis: Kpis
  promotion: PromotionTab
  onChangeTabIntent(s: Selection): void
  percentages: {
    [key in Selection]: number
  }
}

export function DashboardPerformanceTabs({
  selected,
  kpis,
  promotion,
  percentages,
  onChangeTabIntent,
}: Props) {
  const getCommonTabProps = (tab: Selection) => ({
    current: selected === tab,
    onClick: () => onChangeTabIntent(tab),
    percentage: percentages[tab],
    iconId: tab,
  })

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {kpis.commission.visible && (
        <Tab
          {...getCommonTabProps('commission')}
          title={
            <FormattedMessage
              id="f28a141225ae"
              defaultMessage="Commission"
              description="Label for commission tab"
            />
          }
        />
      )}

      {kpis.performanceBonus.visible && (
        <Tab
          {...getCommonTabProps('performanceBonus')}
          title={
            <FormattedMessage
              id="4dab15a9aaa8"
              defaultMessage="Performance Bonus"
              description="Label for performance bonus tab"
            />
          }
        />
      )}

      {kpis.promoteOutBonus.visible && (
        <Tab
          {...getCommonTabProps('promoteOutBonus')}
          title={
            <FormattedMessage
              id="1da8222924dd"
              defaultMessage="Promote Out Bonus"
              description="Label for promote out bonus tab"
            />
          }
        />
      )}

      {promotion.visible && (
        <Tab
          {...getCommonTabProps('promotion')}
          title={
            <FormattedMessage
              id="2494135f2f03"
              defaultMessage="Promotion"
              description="Label for promotion tab"
            />
          }
        />
      )}
    </div>
  )
}
