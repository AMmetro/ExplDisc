import type {PropsWithChildren} from 'react'

import type {PersonSummary} from '../lib/juiceplus/dashboard'

type Props = PropsWithChildren<{
  persons: PersonSummary[]
  count?: number
}>

export function DashboardActionCardAvatarList({persons, count}: Props) {
  const getInitialLettersFromName = (firstName: string, lastName: string) =>
    firstName.charAt(0).toLocaleUpperCase() +
    lastName.charAt(0).toLocaleUpperCase()

  return (
    <ul className="flex">
      {persons.length > 0 ? (
        persons.map((person, index) => (
          <li className="order-2" key={index}>
            <div className="flex items-center justify-center text-14 text-grey-1 w-7 h-7 rounded-full border border-gray-300 bg-white">
              {person.imageUrl ? (
                <img
                  className="w-7 h-7 rounded-full"
                  src={person.imageUrl}
                  alt={`${person.firstName} ${person.lastName}'s avatar`}
                />
              ) : (
                <>
                  {getInitialLettersFromName(person.firstName, person.lastName)}
                </>
              )}
            </div>
          </li>
        ))
      ) : (
        <>
          <div className="flex items-center justify-center text-14 text-grey-1 w-7 h-7 rounded-full border border-gray-300 bg-white" />
        </>
      )}
      {count && count > persons.length && (
        <li className="flex items-center justify-center order-2 w-7 h-7 rounded-full  border-gray-300 bg-grey-5">
          <span className="text-grey-1 text-14 items-center ">
            {'+'}
            {count - persons.length}{' '}
          </span>
        </li>
      )}
    </ul>
  )
}
