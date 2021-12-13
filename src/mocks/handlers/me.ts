import {format} from 'date-fns'
import faker from 'faker'
import {Factory} from 'fishery'
import jwt from 'jsonwebtoken'
import {graphql} from 'msw'

import {knownUsers, userFactory} from '../factories/user'

type Me = {
  id: number
  email: string
  firstName: string
  hasPCIAgreement: boolean | null
  lastName: string
  membershipRenewalDate: string | null
  partnerId: string
  partnerStatus: string
  processingOnboarding: boolean
  rank: {rank: number; title: string}
  sponsor: {
    firstName: string
    lastName: string
    imageUrl: string | null
    website: string
  }
}

let meFactory = Factory.define<Me>(({sequence: id}) => {
  let firstName = faker.name.firstName()
  let lastName = faker.name.lastName()
  let email = faker.internet.exampleEmail(firstName, lastName)
  let partnerId = `USM000000${faker.datatype.number({min: 1, max: 9})}`
  let membershipRenewalDate = format(faker.date.future(2), 'yyyy-MM-dd')
  let rank = {
    rank: faker.datatype.number(13),
    title: 'P',
  }
  let sponsor = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    imageUrl: faker.image.avatar(),
    website: 'https://toddw.test.juiceplus.com',
  }

  return {
    id,
    email,
    firstName,
    lastName,
    hasPCIAgreement: true,
    membershipRenewalDate,
    partnerId,
    partnerStatus: 'Active',
    processingOnboarding: false,
    rank,
    sponsor,
  }
})

export let me = graphql.query('me', (req, res, ctx) => {
  let token = req.cookies['auth-token']

  if (!token || ['null', 'undefined'].includes(token)) {
    return res(
      ctx.data({
        me: {
          data: null,
          error: {
            details: 'com.juiceplus.api.unauthorized: Unauthorized',
            message: 'Unauthorized',
            status: 401,
            translationKey: 'com.juiceplus.api.unauthorized',
          },
        },
      })
    )
  }

  let {email, partnerId, rank} = jwt.decode(token, {json: true}) ?? {}

  let user =
    knownUsers[email] ??
    // Hack to remove undefined properties so they don't override defaults
    userFactory.build(JSON.parse(JSON.stringify({email, partnerId, rank})))

  let data = meFactory.build({
    email: user.email,
    firstName: user.name.first,
    lastName: user.name.last,
    partnerId: user.partnerId,
    rank: user.rank,
    sponsor: {
      firstName: user.sponsor.firstName,
      lastName: user.sponsor.lastName,
      imageUrl: user.sponsor.imageUrl,
      website: `https://${user.sponsor.hostname}.test.juiceplus.com`,
    },
    hasPCIAgreement: user.hasPCIAgreement,
    membershipRenewalDate: user.membershipRenewalDate,
    processingOnboarding: user.processingOnboarding,
  })

  return res(
    ctx.data({
      me: {
        data,
        error: null,
      },
    })
  )
})
