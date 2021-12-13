import type {PropsWithChildren} from 'react'
import {FormattedMessage} from 'react-intl'

import {DashboardResourceDropdown} from './DashboardResourceDropdown'
function Info({children}: PropsWithChildren<unknown>) {
  return (
    <span className="px-2 text-13 leading-5 font-normal text-grey-2">
      {children}
    </span>
  )
}

type Props = {
  id: string
  name: string
  clubLevel?: number
  rank: {
    rank: number
    title: string
  }
  resourceMenuItems: {
    href: string
    id: string
    defaultMessage: string
    description: string
  }[]
}

export function DashboardHeader({
  id,
  rank,
  name,
  clubLevel,
  resourceMenuItems,
}: Props) {
  return (
    <header className="flex items-center flex-col md:flex-row md:items-baseline justify-between pt-9 pb-7">
      <div className="flex items-center flex-col md:flex-row md:items-baseline">
        <h1 className="text-44 font-heading font-bold leading-5 text-emerald">
          <FormattedMessage
            id="ae9af77621f6"
            defaultMessage="Hi, {name}!"
            values={{name}}
            description="Greeting to user in dashboard header"
          />
        </h1>

        <span className="grid grid-flow-col divide-x divide-grey-5">
          <Info>{rank.title}</Info>

          {clubLevel ? (
            <Info>
              <FormattedMessage
                id="952f1aedcefe"
                defaultMessage="Club Level {n}"
                values={{n: clubLevel}}
                description="The user's club level"
              />
            </Info>
          ) : null}

          <Info>
            <FormattedMessage
              id="3008fc665b44"
              defaultMessage="ID: {id}"
              values={{id}}
              description="The user's partner id"
            />
          </Info>
        </span>
      </div>
      {resourceMenuItems.length > 0 && (
        <DashboardResourceDropdown menuItems={resourceMenuItems} />
      )}
    </header>
  )
}
