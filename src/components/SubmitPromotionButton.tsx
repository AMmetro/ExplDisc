import classNames from 'classnames'
import {useState} from 'react'
import {FormattedMessage} from 'react-intl'

import type {
  PromotionTabContent,
  PromotionTrackType,
} from '../lib/juiceplus/promotionTab'
import type {ActivePartner} from '../lib/user'
import {WhoHelpedModal} from './WhoHelpedModal'
import {Check} from './ui/icons'

type Props = {
  submitted: boolean
  setSubmitted(t: boolean): void
  promotion: PromotionTabContent
  user: ActivePartner
  selectedTrack: PromotionTrackType
  expressPromotion: boolean
}

export function SubmitPromotionButton({
  submitted,
  setSubmitted,
  promotion,
  user,
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

  let submitWithHelp = (name: string, id: string) => {
    if (name.length < 3 || name === null) {
      console.log('error')
      console.error('Name must have value')
    }

    console.log('submit api with ' + name + ' ' + id)
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
      //TODO: remove these lines and add real API call
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
            'text-16 text-white text-center w-min rounded-full h-10 flex items-center justify-center font-bold font-heading p-2',
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
      {showModal && (
        <WhoHelpedModal
          setShowModal={setShowModal}
          submit={submitWithHelp}
          user={user}
        />
      )}
    </div>
  )
}
