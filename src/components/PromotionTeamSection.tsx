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
  /* изменить название посути по смыслу --> TeamPartnerResultMessage ????  */
  personalOrder: {
    defaultMessage: 'of {value} {br} Partner+',
    id: '642e4c7491ac',
    description: 'Personal order text',
  },
  /* TeamQSCResultMessage ???? */
  customerOrder: {
    defaultMessage: 'of {value} {br} QSC ',
    id: '06328bb599a8',
    description: 'Customer order text',
  },
})

// ---------------------------------------------------

export function PromotionTeamSection({rule}: Props) {
  // -------------------add --------------------------------
  // проверка достигнул ли уровень-> цвет зеленый
  const ruleRequiredPartnerQCS =
    rule.requiredValue.overallTeamMemberRules[1].teamMembersRequired
  const resultLevelAchievedPartnerQCS =
    rule.achievedValue.overallTeamMemberResults[1].teamMembersAchieved

  const ruleRequiredPartnerPlus =
    rule.requiredValue.overallTeamMemberRules[0].teamMembersRequired
  const resultLevelAchievedPartnerPlus =
    rule.achievedValue.overallTeamMemberResults[0].teamMembersAchieved

  // --------------Большое достигнутое значение------------------------
  const resultAchievedPartnerPlus =
    rule.achievedValue.overallTeamMemberResults[0].teamMembersAchieved
  const resultAchievedPartnerQSC =
    rule.achievedValue.overallTeamMemberResults[1].teamMembersAchieved
  // ----------------------- 2 & 3 ---------------------------------
  const ruleLevelRequiredPartnerPlus =
    rule.requiredValue.overallTeamMemberRules[0]?.teamMembersLevelRequired
  const ruleLevelRequiredPartnerQCS =
    rule.requiredValue.overallTeamMemberRules[1]?.teamMembersLevelRequired
  // -------------------------------------------------------------------

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

  return (
    <div className="pl-12 pr-8 w-full" /*w-full added */>
      {/* --------TEAM---------- */}
      <div className="flex justify-between">
        <h3 className="uppercase font-bold text-13 text-grey-2">
          <FormattedMessage
            id="1cea3f8a8484"
            defaultMessage="Team"
            description="Title for promotion team section" //??? для переводчика
          />
        </h3>
        <ArrowRightLink href="add new link ????" />
      </div>

      {/* -------Partner + ---------- */}
      {ruleLevelRequiredPartnerPlus > 0 && (
        <div
          className={classNames(
            'flex flex-row mt-5',
            resultLevelAchievedPartnerPlus >= ruleRequiredPartnerPlus
              ? 'text-apple'
              : 'text-emerald'
          )}
        >
          <div
            className="flex flex-row items-center gap-4 w-full"
            style={{
              justifyContent: 'space-between',
            }}
          >
            <div className=" flex flex-row items-center">
              <span className="text-44 text-center font-bold w-8 font-heading">
                {resultAchievedPartnerPlus}
              </span>

              <CustomerTextWithValue
                messageType={MessageType.personalOrder}
                value={ruleLevelRequiredPartnerPlus}
                achieved={
                  resultLevelAchievedPartnerPlus >= ruleRequiredPartnerPlus
                }
              />
            </div>

            <div
              className={classNames(
                resultLevelAchievedPartnerPlus >= ruleRequiredPartnerPlus
                  ? 'text-apple'
                  : 'text-grey-3'
              )}
            >
              <GeneralTeams />
            </div>
          </div>
        </div>
      )}
      {/* -----------Q C S -------------- */}
      {ruleLevelRequiredPartnerQCS > 0 && (
        <div
          className={classNames(
            'flex flex-row mt-5',
            resultLevelAchievedPartnerQCS >= ruleRequiredPartnerQCS
              ? 'text-apple'
              : 'text-emerald'
          )}
        >
          <div
            className="flex flex-row items-center gap-4 w-full"
            style={{
              justifyContent: 'space-between',
            }} // !!!!
          >
            {/* ------------&&&&&--------------- */}
            <div className=" flex flex-row items-center">
              <span className="text-44 text-center font-bold w-8 font-heading">
                {resultAchievedPartnerQSC}
              </span>
              <CustomerTextWithValue
                messageType={MessageType.customerOrder}
                value={ruleLevelRequiredPartnerQCS}
                achieved={
                  resultLevelAchievedPartnerQCS >= ruleRequiredPartnerQCS
                }
              />
            </div>
            <div
              className={classNames(
                resultLevelAchievedPartnerQCS >= ruleRequiredPartnerQCS
                  ? 'text-apple'
                  : 'text-grey-3'
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
