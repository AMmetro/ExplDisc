import type {TypeOf} from 'zod'
import {z} from 'zod'

import type {
  PersonCriteriaInput,
  Sdk,
  Scalars,
  GetPersonsQueryVariables,
} from './atd/sdk'

let person = z
  .object({
    id: z.number().nullable(),
    partnerId: z.string().nullable(),
    firstName: z.string().nullable(),
    lastName: z.string().nullable(),
    imageUrl: z.string().nullable(),
    homePhone: z.string().nullable(),
    email: z.string().nullable(),
  })
  .transform(
    ({id, partnerId, firstName, lastName, imageUrl, homePhone, email}) => {
      return {
        id: String(id),
        partnerId: partnerId,
        firstName: firstName,
        lastName: lastName,
        imageUrl: imageUrl,
        homePhone: homePhone,
        email: email,
      }
    }
  )

export type Person = TypeOf<typeof person>

let personsData = z.object({
  totalCount: z.number().nullable(),
  nextPage: z.boolean().nullable(),
  persons: z.array(person),
})

export type PersonsData = TypeOf<typeof personsData>

export let getPersons = async (
  sdk: Sdk,
  criteria: PersonCriteriaInput
): Promise<PersonsData> => {
  let size: Scalars['Int'] = 25

  let variables: GetPersonsQueryVariables = {size, criteria}

  const persons = await sdk.getPersons(variables)

  if (!persons.data?.results?.data) {
    console.error(persons.errors)
    console.error(persons.data?.results?.error)
    throw new Error('Get Persons failed ')
  }

  return personsData.parse({
    ...persons.data.results?.data,
  })
}
