import {fireEvent, screen, waitFor} from '@testing-library/react'

import {renderForTest} from '../../../../lib/renderForTest'
import type {ActivePartner} from '../../../../lib/user'
import {ProfileMenu} from './ProfileMenu'

let user: ActivePartner = {
  token: 'sometoken',
  kind: 'Authenticated',
  id: 1000,
  partnerId: 'GB00000001',
  membershipRenewalDate: '2022-05-10',
  email: 'test@example.com',
  hasPCIAgreement: true,
  name: {
    first: 'anne',
    last: 'example',
  },
  partnerStatus: 'Active',
  processingOnboarding: false,
  rank: {
    rank: 0,
    title: 'P',
  },
  sponsor: {
    firstName: 'german',
    lastName: 'example',
    imageUrl: null,
    hostname: 'toddw',
  },
}

describe('<ProfileMenu />', () => {
  test('shows the user name', () => {
    renderForTest(<ProfileMenu user={user} />)

    expect(screen.getByText(user.name.first)).toBeInTheDocument()
  })

  test('opens when clicked', () => {
    renderForTest(<ProfileMenu user={user} />)

    fireEvent.click(screen.getByText('Open user menu'))

    expect(screen.getByText('Profile')).toBeInTheDocument()
  })

  test('closes when clicked again', () => {
    renderForTest(<ProfileMenu user={user} />)

    expect(screen.queryByText('Profile')).toBeNull()

    fireEvent.click(screen.getByText('Open user menu'))
    fireEvent.click(screen.getByText('Open user menu'))

    waitFor(() => expect(screen.queryByText('Profile')).toBeNull())
  })

  test('closes when pressing escape', () => {
    renderForTest(<ProfileMenu user={user} />)

    fireEvent.click(screen.getByText('Open user menu'))

    fireEvent.keyUp(document.body, {
      key: 'Escape',
      code: 'Escape',
      keyCode: 27,
      charCode: 27,
    })

    waitFor(() => expect(screen.queryByText('Profile')).toBeNull())
  })
})
