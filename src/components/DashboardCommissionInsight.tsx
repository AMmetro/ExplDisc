import {defineMessages} from 'react-intl'

import type {Insight, InsightLevel} from '../lib/insight'
import {DashboardInsight} from './DashboardInsight'

let messages = defineMessages<InsightLevel>({
  almost: {
    id: '75c6a87a0236',
    defaultMessage:
      'You are almost there. Just a little push and you are going to reach your sales commission. You will get 5% on your teams sales.',
    description: 'Commission insights almost message',
  },
  finish: {
    id: 'ca7669617798',
    defaultMessage:
      '{value} {value, plural, one {day} other {days}} left! Give it a push now to increase your pay out.',
    description: 'Commission insights finish message',
  },
  low: {
    id: '047e322bfad7',
    defaultMessage:
      "You haven't qualified for your commission yet. Start now: you can do this!",
    description: 'Commission insights low message',
  },
  reached: {
    id: '8965a8302d63',
    defaultMessage:
      "Up to {value}% commissions are paid on your customer volume, plus the difference between your commission level and your team members' commission levels.",
    description: 'Commission insights reached message',
  },
  standard: {
    id: 'f09f1130fab1',
    defaultMessage:
      'In order to get any sales profit or commission you and your team have to sell some products. Start today!',
    description: 'Commission insights standard message',
  },

  // Apparently these should never occur
  qualify: {
    id: '29fe7fc0f6f0',
    defaultMessage: '---',
    description: 'Commission insights qualify message',
  },
  'total.halved': {
    id: '54230fa02136',
    defaultMessage: '---',
    description: 'Commission insights total.halved message',
  },
})

type Props = {
  insight: Insight
}

export function DashboardCommissionInsight({insight: {level, value}}: Props) {
  return (
    <DashboardInsight level={level} message={messages[level]} value={value} />
  )
}
