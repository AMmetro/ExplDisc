import {defineMessages} from 'react-intl'

import type {InsightLevel, Insight} from '../lib/insight'
import {DashboardInsight} from './DashboardInsight'

let messages = defineMessages<InsightLevel>({
  almost: {
    id: 'eb691dd878b1',
    defaultMessage:
      'You are almost there. Just a little push and you will get your Promote Out Bonus!',
    description: 'Promote out bonus insights almost message',
  },
  finish: {
    id: '0656ff372721',
    defaultMessage:
      '{value} {value, plural, one {day} other {days}} left! Give it a push now to get your Promote Out Bonus!',
    description: 'Promote out bonus insights finish message',
  },
  low: {
    id: 'fa0afd681aff',
    defaultMessage:
      'You Promote Out Bonus is a bit low. Start now: you can do this!',
    description: 'Promote out bonus insights low message',
  },
  qualify: {
    id: '9ba322f2abc9',
    defaultMessage:
      'You qualify using your last months excess. Push further to not loose your excess.',
    description: 'Promote out bonus insights qualify message',
  },
  reached: {
    id: 'fc670f1fd679',
    defaultMessage:
      'You will earn {value}% on all SCs and above and their Promote Out Bonus Volume, through the first SC who is qualifying for POB.',
    description: 'Promote out bonus insights reached message',
  },
  standard: {
    id: 'fd18ef020e8b',
    defaultMessage:
      'You must reach ether volume or legs goal to get your Promote Out Bonus.',
    description: 'Promote out bonus insights standard message',
  },
  'total.halved': {
    id: '01a3a383f7f0',
    defaultMessage:
      'You have 2 POB lines, your volume target has been reduced.',
    description: 'Promote out bonus insights total.halved message',
  },
})

type Props = {
  insight: Insight
}

export function DashboardPromoteOutBonusInsight({
  insight: {level, value},
}: Props) {
  return (
    <DashboardInsight level={level} message={messages[level]} value={value} />
  )
}
