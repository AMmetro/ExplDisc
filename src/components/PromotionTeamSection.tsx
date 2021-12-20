import classNames from 'classnames' //!!!!
import {FormattedMessage} from 'react-intl'
import {defineMessages} from 'react-intl' //!!!

import type {TeamStructureRule} from '../lib/juiceplus/promotionTab'
import {ArrowRightLink} from './ArrowRightLink' //!!!!
import {GeneralTeams} from './ui/icons' //!!!!

type Props = {
  rule: TeamStructureRule
}
// ---------------------------------------------------
enum MessageType {
  personalOrder = 'personalOrder',
  customerOrder = 'customerOrder',
}

type CustomerTextWithValue = {
  messageType: MessageType
  value?: string | number
  achieved: boolean
}
// ????
const messages = defineMessages({
  /* изменить название посути по смыслу  */
  personalOrder: {
    defaultMessage: 'of {value} {br} Partner+',
    id: '642e4c7491ac',
    description: 'Personal order text',
  },
  customerOrder: {
    defaultMessage: 'of {value} {br} QSC ',
    id: '06328bb599a8',
    description: 'Customer order text',
  },
})

// ---------------------------------------------------

export function PromotionTeamSection({rule}: Props) {
  // -------------------add code --------------------------------

  // проверка достигнул ли уровень
  const ruleLevelpartnerQCSRequired =
    rule.requiredValue.overallTeamMemberRules[1].teamMembersRequired
  const resultLevelpartnerQCSAchieved =
    rule.achievedValue.overallTeamMemberResults[1].teamMembersAchieved

  if (resultLevelpartnerQCSAchieved >= ruleLevelpartnerQCSRequired) {
    console.log('achived value, set color green for partnerQCS')
  }

  const ruleLevelPartnerPlusRequired =
    rule.requiredValue.overallTeamMemberRules[0].teamMembersRequired
  const resultLevelPartnerPlusAchieved =
    rule.achievedValue.overallTeamMemberResults[0].teamMembersAchieved

  if (resultLevelPartnerPlusAchieved >= ruleLevelPartnerPlusRequired) {
    console.log('achived value, set color green for partnerPLUS')
  }

  const showPartnerPlusPromotion =
    rule.requiredValue.overallTeamMemberRules[0].teamMembersLevelRequired > 0

  const showPartnerQCSPromotion =
    rule.requiredValue.overallTeamMemberRules[1].teamMembersLevelRequired > 0
  alert(showPartnerQCSPromotion)

  // console.log(rule.requiredValue.overallTeamMemberRules[1].teamMembersRequired)

  // define color or text
  const customerProgressComplete = true // mock variable
  const orderProgressComplete = false // mock variable
  const showPartnerPlus = true // mock variable
  const showQSC = true // mock variable

  function CustomerTextWithValue({
    messageType,
    value,
    achieved,
  }: CustomerTextWithValue) {
    return (
      <span
        className={classNames(
          'text-13 font-bold px-1 min-w-32',
          achieved ? 'text-apple' : 'text-grey-2'
        )}
      >
        <FormattedMessage
          {...messages[messageType]}
          values={{value, br: <br />}}
        />
      </span>
    )
  }
  // ---------------------------------------------------

  const partnerPlus =
    rule.requiredValue.overallTeamMemberRules[0]?.teamMembersLevelRequired
  const partnerQCS =
    rule.requiredValue.overallTeamMemberRules[1]?.teamMembersLevelRequired
  return (
    <div className="pl-12 pr-8 w-full" /*w-full added */>
      {/* --------TEAM---------- */}
      <div
        className="flex justify-between"
        style={{backgroundColor: 'lightYellow', width: '100%'}} // !!!!
      >
        <h3 className="uppercase font-bold text-13 text-grey-2">
          <FormattedMessage
            id="1cea3f8a8484" // ???? вычисляемое значение само
            defaultMessage="Team"
            description="Title for promotion team section" //??? для переводчика
          />
        </h3>
        <ArrowRightLink href="add new link ???" />
      </div>

      {/* -------Partner + ---------- */}
      {/* ???? */}
      {showPartnerPlus && (
        <div
          className={classNames(
            'flex flex-row mt-5',
            customerProgressComplete ? 'text-apple' : 'text-emerald'
          )}
        >
          <div
            className="flex flex-row items-center gap-4"
            style={{
              justifyContent: 'space-between',
              width: '70%',
            }} // !!!!
          >
            <span className="text-44 text-center font-bold w-8 font-heading">
              {/* {partnerPlus} */}?
            </span>

            <CustomerTextWithValue
              messageType={MessageType.personalOrder}
              value={partnerPlus}
              achieved={customerProgressComplete}
            />

            <div
              className={classNames(
                customerProgressComplete ? 'text-apple' : 'text-grey-3'
              )}
            >
              <GeneralTeams />
            </div>
          </div>
        </div>
      )}
      {/* -----------Q C S -------------- */}
      {showQSC && (
        <div
          className={classNames(
            'flex flex-row mt-5',
            orderProgressComplete ? 'text-apple' : 'text-emerald'
          )}
        >
          <div
            className="flex flex-row items-center gap-4"
            style={{
              justifyContent: 'space-between',
              width: '70%',
            }} // !!!!
          >
            <span className="text-44 text-center font-bold w-8 font-heading">
              {/* {partnerQCS} */}?
            </span>
            <CustomerTextWithValue
              messageType={MessageType.customerOrder}
              value={partnerQCS}
              achieved={orderProgressComplete}
            />
            <div
              className={classNames(
                orderProgressComplete ? 'text-apple' : 'text-grey-3'
              )}
            >
              <GeneralTeams />
            </div>
          </div>
        </div>
      )}

      {/* ------------------ */}
    </div>
  )
}
