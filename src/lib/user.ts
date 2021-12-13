import {extractPartnerHostnameFromWebsite} from './juiceplus/partnerWebsite'
import sdk from './juiceplus/sdk'

type Name = {
  first: string
  last: string
}

export type AnonymousUser = {
  kind: 'Anonymous'
}

export interface AuthenticatedUser {
  kind: 'Authenticated'
  token: string
  id: number
  email: string
  name: Name
  partnerStatus: string
  processingOnboarding: boolean
  sponsor: {
    firstName: string
    imageUrl: string | null
    lastName: string
    hostname: string
  }
}

export interface ActivePartner extends AuthenticatedUser {
  hasPCIAgreement: boolean
  membershipRenewalDate: string
  partnerId: string
  partnerStatus: 'Active'
  processingOnboarding: false
  rank: {
    rank: number
    title: string
  }
}

export interface InactivePartner extends AuthenticatedUser {
  hasPCIAgreement: boolean | null
  membershipRenewalDate: string | null
  partnerId: string | null
  rank: {
    rank: null
    title: string
  }
}

export type User = AnonymousUser | ActivePartner | InactivePartner

const ANONYMOUS: AnonymousUser = {kind: 'Anonymous'}

export function isActivePartner(u: User): u is ActivePartner {
  if (u.kind === 'Anonymous') {
    return false
  }
  return [
    u?.partnerStatus === 'Active',
    u?.processingOnboarding === false,
    typeof u?.id === 'number',
    typeof u?.name?.first === 'string',
    typeof u?.name?.last === 'string',
    typeof u?.rank.rank === 'number',
    typeof u?.rank.title === 'string',
    typeof u?.partnerId === 'string',
    typeof u?.membershipRenewalDate === 'string',
    typeof u?.hasPCIAgreement === 'boolean',
  ].every(Boolean)
}

export async function getUser(token?: string): Promise<User> {
  if (!token) {
    return ANONYMOUS
  }

  let result = await sdk.me(undefined, {
    Cookie: `auth-token=${token}`,
  })

  if (result.status !== 200) {
    return ANONYMOUS
  }

  if (result.errors) {
    console.error(`[getUser]\n`, result.errors)
    return ANONYMOUS
  }

  if (result.data?.me?.error) {
    console.error(`[getUser]`, result.data?.me?.error.details)
    return ANONYMOUS
  }

  if (result.data?.me?.data == null) {
    console.warn(`[getUser] no errors and no data`)
    return ANONYMOUS
  }

  let {data} = result.data.me

  let sponsor = data.sponsor
    ? {
        firstName: data.sponsor.firstName,
        lastName: data.sponsor.lastName,
        imageUrl: data.sponsor.imageUrl,
        hostname: data.sponsor.website
          ? extractPartnerHostnameFromWebsite(data.sponsor.website)
          : null,
      }
    : null
  return {
    kind: 'Authenticated',
    token,
    id: data.id,
    hasPCIAgreement: data.hasPCIAgreement,
    name: {
      first: data.firstName,
      last: data.lastName,
    },
    email: data.email,
    membershipRenewalDate: data.membershipRenewalDate,
    partnerId: data.partnerId,
    partnerStatus: data.partnerStatus,
    processingOnboarding: data.processingOnboarding,
    rank: data.rank,
    sponsor,
  } as User
}
