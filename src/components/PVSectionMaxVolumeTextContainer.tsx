import {defineMessages, FormattedMessage, useIntl} from 'react-intl'

import type {PromotionalProductVolumeRule} from '../lib/juiceplus/promotionTab'
import {PVTooltip} from './PVTooltip'

enum MessageType {
  fromHousehold = 'fromHousehold',
  fromEachLine = 'fromEachLine',
}

type PVSectionMaxVolumeText = {
  messageType: MessageType
  value: string | number
}

type Props = {
  rule: PromotionalProductVolumeRule
}

const messages = defineMessages({
  fromHousehold: {
    id: '5776f6e93350',
    defaultMessage: 'Max. {value} from own household.',
    description: 'Promotion Volume label for showing value from own household.',
  },
  fromEachLine: {
    id: '2b60a132b6f0',
    defaultMessage: 'Max. {value}% of volume from each line.',
    description:
      'Promotion Volume label for showing percentage value of volume from each line.',
  },
})

export function PVSectionMaxVolumeText({
  messageType,
  value,
}: PVSectionMaxVolumeText) {
  return (
    <span className="text-grey-2 text-13 leading-5">
      <FormattedMessage {...messages[messageType]} values={{value}} />
    </span>
  )
}

export function PVSectionMaxVolumeTextContainer({rule}: Props) {
  const intl = useIntl()

  const {maxHouseholdPPVAllowedValue, maxPerLinePPVPercentageValue} = rule
  return (
    <>
      {maxHouseholdPPVAllowedValue && (
        <PVSectionMaxVolumeText
          messageType={MessageType.fromHousehold}
          value={intl.formatNumber(maxHouseholdPPVAllowedValue)}
        />
      )}
      {maxPerLinePPVPercentageValue && (
        <div className="flex flex-row">
          <PVSectionMaxVolumeText
            messageType={MessageType.fromEachLine}
            value={maxPerLinePPVPercentageValue}
          />
          <PVTooltip
            message={
              <FormattedMessage
                id="21a227f2789f"
                defaultMessage="This only applies to Promotion track and not Express track."
                description="Title for the max volume per line tooltip"
              />
            }
          />
        </div>
      )}
    </>
  )
}
