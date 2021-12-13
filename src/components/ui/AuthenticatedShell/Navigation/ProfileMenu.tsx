import {Menu, Transition} from '@headlessui/react'
import type {PropsWithChildren, SVGProps} from 'react'
import {Fragment} from 'react'
import {FormattedMessage} from 'react-intl'

import {
  forcePartnerWebsiteRedirect,
  mainWebsiteToPartnerWebsite,
} from '../../../../lib/juiceplus/partnerWebsite'
import type {ActivePartner} from '../../../../lib/user'
import {Link} from '../../../Link'
import {
  ProfileSmall as ProfileSmallIcon,
  PersonalInfo as PersonalInfoIcon,
  Package as PackageIcon,
  Settings as SettingsIcon,
  Profile as ProfileIcon,
  Logout as LogoutIcon,
} from '../../icons'

type ProfileMenuLinkProps = PropsWithChildren<{
  href: string
  icon: React.ComponentType<SVGProps<SVGSVGElement>>
}>

function ProfileMenuLink({children, href, icon: Icon}: ProfileMenuLinkProps) {
  return (
    <Link href={href}>
      <a className="flex items-center text-14 text-grey-1 px-8 py-2.5 font-medium hover:bg-orange-background hover:text-orange">
        <Icon className="text-24 text-grey-4" />
        <div className="mx-2" />
        <span>{children}</span>
      </a>
    </Link>
  )
}

function LogoutLink() {
  return (
    <Link href="/logout">
      <a className="w-full flex items-center text-14 text-grey-1 px-8 py-2.5 appearance-none outline-none focus:outline-none font-medium hover:bg-orange-background hover:text-orange">
        <LogoutIcon className="text-24 text-grey-4" />
        <div className="mx-2" />
        <span>Logout</span>
      </a>
    </Link>
  )
}

type ProfileSponsorItemProps = {
  sponsor: {
    firstName: string
    lastName: string
    imageUrl: string | null
    hostname: string
  }
}

const formatSingleName = (name: string) =>
  name.charAt(0) + name.slice(1).toLocaleLowerCase()

const formatName = (name: string) =>
  name.split(' ').map(formatSingleName).join(' ')

function ProfileSponsorItem({sponsor}: ProfileSponsorItemProps) {
  const {imageUrl = '', firstName, lastName} = sponsor
  const [firstNameInitial] = firstName
  const [lastNameInitial] = lastName

  const initials = `${firstNameInitial}${lastNameInitial}`
  const fullName = `${formatName(firstName)} ${formatName(lastName)}`
  const sponsorLink = forcePartnerWebsiteRedirect(
    mainWebsiteToPartnerWebsite(window.location.origin, sponsor.hostname)
  )

  return (
    <div className="flex items-center mt-4 px-5 py-3 bg-grey-6 rounded">
      {imageUrl ? (
        <img
          alt={`${fullName}'s avatar`}
          src={imageUrl}
          className="rounded-full"
          width={60}
          height={60}
        />
      ) : (
        <div className="flex items-center justify-center text-14 text-grey-2 w-12 h-12 rounded-full border border-gray-300 bg-white">
          {initials}
        </div>
      )}
      <div className="flex flex-col mx-2">
        <span className="font-medium text-14">
          <FormattedMessage
            id="71b7e56612f3"
            defaultMessage="Your Sponsor:"
            description="Profile Sponsor Item"
          />
        </span>
        <Link href={sponsorLink}>
          <a className="font-semibold text-orange text-14">{fullName}</a>
        </Link>
      </div>
    </div>
  )
}

export function ProfileMenuItems() {
  return (
    <>
      <Menu.Item>
        <ProfileMenuLink href="/portal/profile" icon={PersonalInfoIcon}>
          <FormattedMessage
            id="796e2e40e7c7"
            defaultMessage="Profile"
            description="Profile profile menu link"
          />
        </ProfileMenuLink>
      </Menu.Item>

      <Menu.Item>
        <ProfileMenuLink href="/portal/personal-orders" icon={PackageIcon}>
          <FormattedMessage
            id="940b5eeb092d"
            defaultMessage="Personal Orders"
            description="Personal Orders profile menu link"
          />
        </ProfileMenuLink>
      </Menu.Item>

      <Menu.Item>
        <ProfileMenuLink href="/portal/settings" icon={SettingsIcon}>
          <FormattedMessage
            id="ee9a00185ed6"
            defaultMessage="Settings"
            description="Settings profile menu link"
          />
        </ProfileMenuLink>
      </Menu.Item>

      <Menu.Item>
        <ProfileMenuLink href="/portal/partner-page" icon={ProfileIcon}>
          <FormattedMessage
            id="639593d46796"
            defaultMessage="Partner Page"
            description="Partner Page profile menu link"
          />
        </ProfileMenuLink>
      </Menu.Item>
    </>
  )
}

type Props = {
  user: ActivePartner
}

export function ProfileMenu({user}: Props) {
  return (
    <Menu as="div" className="ml-3 relative z-40 h-8">
      {({open}) => (
        <>
          <Menu.Button className="inline-flex items-center px-3.5 h-8 rounded-full font-semibold text-orange bg-peach-light hover:bg-orange-background-hover focus:outline-none">
            <span className="sr-only">Open user menu</span>
            <ProfileSmallIcon className="text-24" />
            <span className="mr-1" />
            <span className="font-heading leading-6 capitalize">
              {user.name.first.toLocaleLowerCase()}
            </span>
          </Menu.Button>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-75 "
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-80"
            unmount={true}
          >
            <Menu.Items className="origin-top-right absolute right-0 py-2.5 mt-4 min-w-[280px] max-w-md rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <ProfileMenuItems />

              <div className="px-6 py-2.5">
                <hr />
              </div>

              <Menu.Item>
                <LogoutLink />
              </Menu.Item>
              {user?.sponsor && (
                <Menu.Item>
                  <ProfileSponsorItem sponsor={user.sponsor} />
                </Menu.Item>
              )}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}
