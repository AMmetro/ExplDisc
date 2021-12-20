import {defineMessages} from 'react-intl'

import type {Insight, InsightLevel} from '../lib/insight'
import {DashboardInsight} from './DashboardInsight'

let messages = defineMessages<InsightLevel>({
  almost: {
    id: '804e8ebfbc18',
    defaultMessage:
      'You are almost there. Just a little push and you will get your Performance Bonus!',
    description: 'Performance bonus insights almost message',
  },
  finish: {
    id: '6d7a2eadac8a',
    defaultMessage:
      '{value} {value, plural, one {day} other {days}} left! Give it a push now to get your Performance Bonus!',
    description: 'Performance bonus insights finish message',
  },
  low: {
    id: '9f53b37b30bc',
    defaultMessage:
      'You Performance Bonus is a bit low. Start now: you can do this!',
    description: 'Performance bonus insights low message',
  },
  qualify: {
    id: 'bfea1c6b6082',
    defaultMessage:
      'You qualify using your last months excess. Push further to not loose your excess.',
    description: 'Performance bonus insights qualify message',
  },
  reached: {
    id: '727bb182a6a2',
    defaultMessage:
      'You will earn {value}% on your team through 3-5 generations in each line.',
    description: 'Performance bonus insights reached message',
  },
  standard: {
    id: '410344ed890d',
    defaultMessage:
      'You must reach ether volume or legs goal to get your Performance Bonus.',
    description: 'Performance bonus insights standard message',
  },

  // Apparently this should never occur
  'total.halved': {
    id: '9fbd374f1f3b',
    defaultMessage: '---',
    description: 'Performance bonus insights total.halved message',
  },
})

type Props = {
  insight: Insight
}

export function DashboardPerformanceBonusInsight({
  insight: {level, value},
}: Props) {
  return (
    <DashboardInsight level={level} message={messages[level]} value={value} />
  )
}
