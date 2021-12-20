import {FormattedMessage} from 'react-intl'

import type {
  PromotionalProductVolumeRule,
  PromotionTrackType,
} from '../lib/juiceplus/promotionTab'
import {ArrowRightLink} from './ArrowRightLink'
import {PaymentsVolumeProgressGauge} from './PaymentsVolumeProgressGauge'

type Props = {
  rule: PromotionalProductVolumeRule
  trackType: PromotionTrackType
}

export function PromotionalProductVolume({rule, trackType}: Props) {
  const reportLink =
    '/portal/dashboard/promotional-volume?' +
    new URLSearchParams({track: trackType})

  return (
    <div className="grid gap-6">
      <h3 className="uppercase font-bold text-13 text-grey-2 flex justify-between pr-8">
        <FormattedMessage
          id="d8416a41d00e"
          defaultMessage="Promotional Volume"
          description="Title for Promotional Product Volume rule"
        />
        <ArrowRightLink href={reportLink} />
      </h3>
      <PaymentsVolumeProgressGauge
        achieved={rule.achievedValue}
        required={rule.requiredValue}
      />
    </div>
  )
}
