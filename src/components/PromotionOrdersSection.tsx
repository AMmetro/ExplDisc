import classNames from 'classnames'
import {defineMessages, FormattedMessage} from 'react-intl'

import type {
  CustomerOrderRule,
  PersonalOrderRule,
} from '../lib/juiceplus/promotionTab'
import {ArrowRightLink} from './ArrowRightLink'
import {Profile, CustomerCare} from './ui/icons'

type Props = {
  rules: {
    personalOrder?: PersonalOrderRule
    customerOrder?: CustomerOrderRule
  }
  rank: number
}
enum MessageType {
  personalOrder = 'personalOrder',
  customerOrder = 'customerOrder',
}
type OrderTextWithValue = {
  messageType: MessageType
  value?: string | number
  achieved: boolean
}

type CustomerTextWithValue = {
  messageType: MessageType
  value?: string | number
  achieved: boolean
}

const messages = defineMessages({
  personalOrder: {
    defaultMessage: 'of {value} {br}personal order ',
    id: '1d631842696e',
    description: 'Personal order text',
  },
  customerOrder: {
    defaultMessage: 'of {value} {br}new customers ',
    id: '5ae93e37c88b',
    description: 'Customer order text',
  },
})

function OrderTextWithValue({
  messageType,
  value,
  achieved,
}: OrderTextWithValue) {
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

export function PromotionOrdersSection({rules, rank}: Props) {
  const customerProgressComplete = rules.customerOrder?.status === 'Successful'
  const orderProgressComplete = rules.personalOrder?.status === 'Successful'

  return (
    <div className="flex flex-col pl-12 pr-8 w-full">
      <div className="flex justify-between">
        <h3 className="uppercase font-bold text-13 text-grey-2">
          <FormattedMessage
            id="efce7b57c2d6"
            defaultMessage="Orders"
            description="Title for promotion orders section"
          />
        </h3>
        <ArrowRightLink href="/portal/dashboard/orders" />
      </div>

      <div>
        {rank < 4 && (
          <div
            className={classNames(
              'flex flex-row mt-5',
              customerProgressComplete ? 'text-apple' : 'text-emerald'
            )}
          >
            <div className="flex flex-row items-center gap-4">
              <span className="text-44 text-center font-bold w-8 font-heading">
                {rules.customerOrder?.achievedValue}
              </span>
              <CustomerTextWithValue
                messageType={MessageType.customerOrder}
                value={rules.customerOrder?.requiredValue}
                achieved={customerProgressComplete}
              />
              <div
                className={classNames(
                  customerProgressComplete ? 'text-apple' : 'text-grey-3'
                )}
              >
                <CustomerCare />
              </div>
            </div>
          </div>
        )}
        <div
          className={classNames(
            'flex flex-row mt-5',
            orderProgressComplete ? 'text-apple' : 'text-emerald'
          )}
        >
          <div className="flex flex-row items-center gap-4">
            <span className="text-44 text-center font-bold w-8 font-heading">
              {rules.personalOrder?.achievedValue}
            </span>
            <OrderTextWithValue
              messageType={MessageType.personalOrder}
              value={rules.personalOrder?.requiredValue}
              achieved={orderProgressComplete}
            />
            <div
              className={classNames(
                orderProgressComplete ? 'text-apple' : 'text-grey-3'
              )}
            >
              <Profile className="text-24" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
