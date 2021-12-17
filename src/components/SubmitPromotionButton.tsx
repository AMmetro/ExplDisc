import classNames from 'classnames'
import {useState} from 'react'
import {FormattedMessage} from 'react-intl'

import type {
  PromotionTabContent,
  PromotionTrackType,
} from '../lib/juiceplus/promotionTab'
import {WhoHelpedModal} from './WhoHelpedModal'
import {Check} from './ui/icons'

type Props = {
  submitted: boolean
  setSubmitted(t: boolean): void
  promotion: PromotionTabContent
  selectedTrack: PromotionTrackType
  expressPromotion: boolean
}

export function SubmitPromotionButton({
  submitted,
  setSubmitted,
  promotion,
  selectedTrack,
  expressPromotion,
}: Props) {
  const text = submitted ? (
    <FormattedMessage
      id="cea47fd7c506"
      defaultMessage="Promotion Submitted"
      description="Button text for when promotion is submitted"
    />
  ) : (
    <FormattedMessage
      id="a285d0db72f2"
      defaultMessage="Submit Promotion"
      description="Button text for when promotion can be submitted"
    />
  )

  const [disabled, setDisabled] = useState(false)

  let submitWithHelp = (name: string, id: number) => {
    console.log('submit api with sponsor ' + name + ' ' + id)
    //we will pass name and id from the text fields to here and handle submission API call from here with those values
    setShowModal(false)
    setSubmitted(true)
    setDisabled(true)
  }

  const {tracks} = promotion
  const submitForTrack =
    selectedTrack === 'promotion' && expressPromotion
      ? tracks['express']
      : tracks[selectedTrack]
  const hasSponsorReward = submitForTrack.rewards.some(
    ({rewardType}) => rewardType === 'Sponsor Reward Payout'
  )

  let submit = () => {
    if (hasSponsorReward) {
      setShowModal(true)
    } else {
      setSubmitted(true)
      setDisabled(true)
      console.log('Call Submission API')
    }
  }

  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <button onClick={submit} disabled={disabled}>
        <div
          className={classNames(
            'text-16 text-white rounded-full px-5 py-2 flex items-center',
            submitted ? 'bg-apple' : 'bg-orange'
          )}
        >
          {submitted && (
            <div className="text-24 mr-2">
              <Check />
            </div>
          )}
          <div className="font-bold font-heading uppercase whitespace-nowrap px-3">
            {text}
          </div>
        </div>
      </button>
      {showModal ? (
        <WhoHelpedModal setShowModal={setShowModal} submit={submitWithHelp} />
      ) : null}
    </div>
  )
}
