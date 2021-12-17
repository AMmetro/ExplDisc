import {format} from 'date-fns'
import faker from 'faker'
import {Factory} from 'fishery'
import jwt from 'jsonwebtoken'

import type {ActivePartner} from '../../lib/user'

export let userFactory = Factory.define<ActivePartner>(
  ({sequence: id, params}) => {
    let name = {first: faker.name.firstName(), last: faker.name.firstName()}
    let email = faker.internet.exampleEmail(name.first, name.last)
    let partnerId = `USM000000${faker.datatype.number({min: 1, max: 9})}`
    let membershipRenewalDate = format(faker.date.future(2), 'yyyy-MM-dd')
    let payload = {
      email: params.email ?? email,
      partnerId: params.partnerId ?? partnerId,
    }
    let token = jwt.sign(payload, '', {algorithm: 'none', expiresIn: '1w'})
    let rank = {
      rank: 1,
      title: 'P',
    }
    let sponsor = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      imageUrl: faker.image.avatar(),
      hostname: 'toddw',
    }

    return {
      kind: 'Authenticated',
      id,
      email,
      hasPCIAgreement: true,
      membershipRenewalDate,
      name,
      partnerId,
      partnerStatus: 'Active',
      processingOnboarding: false,
      rank,
      sponsor,
      token,
    }
  }
)

export let knownUsers: Record<string, ActivePartner> = {
  'hugo.jobling@juiceplus.com': userFactory.build({
    email: 'hugo.jobling@juiceplus.com',
    hasPCIAgreement: true,
    membershipRenewalDate: '2025-07-21',
    name: {first: 'Hugo', last: 'Jobling'},
    partnerId: 'GB0000001',
    partnerStatus: 'Active',
    processingOnboarding: false,
    rank: {
      rank: 1,
      title: 'P',
    },
    sponsor: {
      firstName: 'German',
      lastName: 'Example',
      imageUrl: '/',
      hostname: 'toddw',
    },
  }),
  'anne@example.com': userFactory.build({
    email: 'anne@example.com',
    hasPCIAgreement: true,
    membershipRenewalDate: '2025-03-08',
    name: {first: 'Anne', last: 'Example'},
    partnerId: 'GB0000001',
    partnerStatus: 'Active',
    processingOnboarding: false,
    rank: {
      rank: 2,
      title: 'P+',
    },
    sponsor: {
      firstName: 'German',
      lastName: 'Example',
      imageUrl: '/',
      hostname: 'toddw',
    },
  }),
}
