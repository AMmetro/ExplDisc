import type {MessageDescriptor} from 'react-intl'
import {FormattedMessage} from 'react-intl'

import type {InsightLevel} from '../lib/insight'
import {Lightbulb, Celebrate} from './ui/icons'

function InsightHeading() {
  return (
    <>
      <div className="bg-beet-background rounded-full p-1 flex mr-2">
        <Lightbulb className="text-24 text-white" />
      </div>
      <h3 className="text-14 font-bold text-beet">
        <FormattedMessage
          id="2cbe31df605f"
          defaultMessage="Insight"
          description="Title for insight header of stats card"
        />
      </h3>
    </>
  )
}

function CongratulationsHeading() {
  return (
    <>
      <div className="bg-celebrate rounded-full p-1 flex mr-2">
        <Celebrate className="text-24 text-white" />
      </div>
      <h3 className="text-14 font-bold text-apple">
        <FormattedMessage
          id="7b5d619acd65"
          defaultMessage="Congratulations"
          description="Title for congratulations header of stats card"
        />
      </h3>
    </>
  )
}

type HeadingProps = {
  level: InsightLevel
}

function Heading({level}: HeadingProps) {
  switch (level) {
    case 'qualify':
    case 'reached':
      return <CongratulationsHeading />

    case 'almost':
    case 'finish':
    case 'low':
    case 'standard':
    case 'total.halved':
      return <InsightHeading />

    default:
      throw new TypeError(`Unknown level: ${level}`)
  }
}

export type DashboardInsightProps = {
  level: InsightLevel
  message: MessageDescriptor
  value?: number | null
}

export function DashboardInsight({
  level,
  message,
  value,
}: DashboardInsightProps) {
  return (
    <div>
      <div className="flex items-center">
        <Heading level={level} />
      </div>

      <div className="py-2" />

      <p className="text-14 text-grey-2">
        <FormattedMessage {...message} values={{value}} />
      </p>
    </div>
  )
}
