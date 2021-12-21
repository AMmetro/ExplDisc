import {FormattedMessage} from 'react-intl'

import type {TeamStructureRule} from '../lib/juiceplus/promotionTab'

type Props = {
  rule: TeamStructureRule
}

export function PromotionTeamSection({rule}: Props) {
  console.debug(rule)

  return (
    <div className="pl-12 pr-8">
      <h3 className="uppercase font-bold text-13 text-grey-2">
        <FormattedMessage
          id="1cea3f8a8484"
          defaultMessage="Team"
          description="Title for promotion team section"
        />
      </h3>
    </div>
  )
}
