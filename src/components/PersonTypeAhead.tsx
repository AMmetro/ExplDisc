import type {StateChangeOptions} from 'downshift'
import Downshift from 'downshift'
import {debounce} from 'lodash'
import React, {useMemo, useState} from 'react'

import {SearchBig} from '../../src/components/ui/icons/'
import type {Person} from '../lib/juiceplus/persons'
import type {AuthenticatedUser} from '../lib/user'
import {Spinner} from './Spinner'

type Sponsor = {
  firstName: string
  imageUrl: string | null
  lastName: string
  hostname: string
}

type Props = {
  sponsor: Sponsor
  partnerId: string
  setPartnerId(t: string): void
  setPartner(t: AuthenticatedUser['sponsor']): void
  setSearching(t: boolean): void
}

function itemStringify(item?: Person | null) {
  return item ? personToString(item) : ''
}

function personToString(person: Person): string {
  const firstName = formatFirstName(person.firstName) ?? ''
  const lastName = formatName(person.lastName) ?? ''

  return [firstName, lastName].filter((name) => name.length > 0).join(' ')
}

function formatFirstName(string: string | null) {
  if (string) {
    let split = string.split(' ')

    if (split[1]) {
      let formattedString = ''

      split.forEach((s) => {
        formattedString += ' ' + formatName(s)
      })

      return formattedString.slice(1)
    } else {
      return formatName(string)
    }
  } else {
    return ''
  }
}

function formatName(string: string | null) {
  if (string) {
    return (
      string.charAt(0).toLocaleUpperCase() + string.slice(1).toLocaleLowerCase()
    )
  } else {
    return ''
  }
}

async function getPersonsApiCall(inputValue: string) {
  const res = await fetch(`/api/persons?input=${inputValue}`, {
    method: 'POST',
  })

  return await res.json()
}

function PersonTypeAhead({
  sponsor,
  partnerId,
  setPartnerId,
  setPartner,
  setSearching,
}: Props) {
  const noResultsfound: Person = {
    firstName: 'No results found',
    lastName: '',
    email: null,
    homePhone: null,
    id: '',
    imageUrl: null,
    partnerId: null,
  }

  const sponsorPerson: Person = {
    firstName: sponsor.firstName,
    lastName: sponsor.lastName,
    email: null,
    homePhone: null,
    id: partnerId,
    imageUrl: null,
    partnerId: null,
  }

  const selectedSponsor = {
    firstName: '',
    lastName: '',
    imageUrl: '',
    email: '',
    hostname: '',
  }

  let [people, setPeople] = useState<Person[]>([])
  let [value, setValue] = useState<Person>(sponsorPerson)
  let [loading, setLoading] = useState(false)

  const handleInput = (changes: StateChangeOptions<Person>) => {
    if (loading) {
      return
    }

    // eslint-disable-next-line no-prototype-builtins
    if (changes.hasOwnProperty('selectedItem')) {
      let selectedItem = changes.selectedItem
      if (selectedItem?.partnerId) {
        setPartnerId(selectedItem?.partnerId)
      }

      selectedSponsor.firstName = selectedItem?.firstName ?? ''
      selectedSponsor.lastName = selectedItem?.lastName ?? ''

      if (selectedSponsor) {
        setPartner(selectedSponsor)
      }
    } else if (
      // eslint-disable-next-line no-prototype-builtins
      changes.hasOwnProperty('inputValue') &&
      changes.type !== '__autocomplete_controlled_prop_updated_selected_item__'
    ) {
      if (changes.inputValue && changes.inputValue.length > 3) {
        setLoading(true)
        setSearching(true)

        getPersonsApiCall(changes.inputValue)
          .then((persons) => {
            setSearching(false)

            if (persons.totalCount == 0) {
              setValue(noResultsfound)
            } else {
              setLoading(false)
              setPeople(persons.persons)
            }
          })
          .catch(() => {
            console.error('error')
          })
      }
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedChangeHandler = useMemo(() => debounce(handleInput, 500), [])
  return (
    <div className="w-full">
      <Downshift
        selectedItem={value}
        onStateChange={debouncedChangeHandler}
        itemToString={itemStringify}
      >
        {({getInputProps, getMenuProps, getItemProps, isOpen}) => (
          <div>
            {loading && (
              <div className="flex justify-center">
                <Spinner />
              </div>
            )}
            {!loading && (
              <>
                <div className="relative">
                  <SearchBig
                    className={'text-orange absolute top-2 mx-[500px]'}
                  />
                  <input
                    className="w-full px-12 border-orange border-2 rounded-3xl focus:outline-none font-body focus:ring-1 focus:ring-apple focus:border-transparent hover:border-apple"
                    type="text"
                    {...getInputProps({
                      placeholder: 'Enter Partner name',
                    })}
                  />
                </div>
                <div className="relative">
                  <ul
                    className="w-full p-0 mt-0 absolute bg-white w-full max-h-48 overflox-x-hidden overflow-y-auto scrollbar-none border-grey-4"
                    {...getMenuProps()}
                  >
                    {isOpen &&
                      people.map((item, index) => (
                        <li
                          className="relative cursor-pointer block h-auto text-left normal-case shadow-none whitespace-normal px-3 py-2 hover:bg-peach-light"
                          key={item.id}
                          {...getItemProps({
                            item,
                            index,
                          })}
                        >
                          <div className="flex justify-between font-body">
                            <div>
                              {formatFirstName(item.firstName)}{' '}
                              {formatName(item.lastName)}
                            </div>
                            <div>{item.partnerId}</div>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        )}
      </Downshift>
    </div>
  )
}

export default React.memo(PersonTypeAhead)
