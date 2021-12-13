import {FormattedMessage} from 'react-intl'

import DateFormat from '../lib/dateFormat'

type Props = {
  lastUpdatedDate: Date
}

export function DashboardThisMonth({lastUpdatedDate}: Props) {
  let lastUpdatedAt = DateFormat.formatDateToString(lastUpdatedDate)
  return (
    <div className="flex justify-between items-baseline flex-wrap">
      <h3 className="text-36 font-bold text-emerald font-heading">
        <FormattedMessage
          id="7a176d33c8c0"
          defaultMessage="This month"
          description="This month dashboard section title"
        />
      </h3>
      <p className="text-13 text-grey-2 font-body">
        <FormattedMessage
          id="4afce53f0e4f"
          defaultMessage="Updated {lastUpdatedAt}"
          values={{lastUpdatedAt}}
          description="When the dashboard was last updated"
        />
      </p>
    </div>
  )
}
