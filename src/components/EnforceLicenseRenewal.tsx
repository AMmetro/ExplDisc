import {isBefore, parseISO, startOfDay, subDays} from 'date-fns'
import {useEffect} from 'react'

import {useRouter} from '../lib/router'
import type {ActivePartner} from '../lib/user'

const SKIP_LICENSE_RENEWAL_STORAGE_KEY = 'skipLicenseRenewal'
const NOTIFY_ABOUT_MEMBERSHIP_EXPIRATION_IN_DAYS = 30

function shouldRedirectToLicenceRenewalPage(user: ActivePartner): boolean {
  if (!user.membershipRenewalDate) {
    return false
  }

  if (localStorage.getItem(SKIP_LICENSE_RENEWAL_STORAGE_KEY)) {
    return false
  }

  let now = new Date()
  let today = startOfDay(now)
  let notifyFromDate = subDays(
    parseISO(user.membershipRenewalDate),
    NOTIFY_ABOUT_MEMBERSHIP_EXPIRATION_IN_DAYS
  )
  return !isBefore(today, notifyFromDate)
}

type Props = {
  user: ActivePartner
}

export function EnforceLicenseRenewal({user}: Props) {
  const router = useRouter()

  useEffect(() => {
    if (shouldRedirectToLicenceRenewalPage(user)) {
      router.push('/portal/license-renewal')
    }
  }, [router, user])

  return null
}
