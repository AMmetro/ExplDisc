import classNames from 'classnames'
import {FormattedMessage} from 'react-intl'

import type {PersonalCustomerVolumeRule} from '../lib/juiceplus/promotionTab'
import {Check, CirclePending} from './ui/icons'

type Props = {
  rule: PersonalCustomerVolumeRule
}

export function PersonalCustomerVolume({rule}: Props) {
  const minimum = rule.requiredValue
  const ruleAchieved = rule.status === 'Successful'

  return (
    <div className="flex flex-row">
      <div className="text-14 text-grey-2 font-bold">
        <FormattedMessage
          id="523e03e4e7f7"
          defaultMessage="Min. {n} from own customers."
          description="Minimum value from own customers"
          values={{n: minimum}}
        />
      </div>
      <div className="items-center">
        <div
          className={classNames('rounded-full ml-3 w-6 h-6 p-[2px]', {
            'bg-apple': ruleAchieved,
          })}
        >
          {ruleAchieved && <Check className="text-20 text-white" />}
          {!ruleAchieved && <CirclePending className="text-20 text-grey-3" />}
        </div>
      </div>
    </div>
  )
}
