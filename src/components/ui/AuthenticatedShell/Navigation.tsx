import {Disclosure, Menu} from '@headlessui/react'
import type {PropsWithChildren, SVGProps} from 'react'
import {Fragment} from 'react'
import {FormattedMessage} from 'react-intl'

import type {ActivePartner} from '../../../lib/user'
import {NavLink} from '../../NavLink'
import MyJuicePlus from '../../icons/MyJuicePlus'
import {
  Dashboard as DashboardIcon,
  Teams as TeamsIcon,
  Customer as CustomerIcon,
  Cart as CartIcon,
  Reports as ReportsIcon,
  Hamburger as HamburgerIcon,
  Close as CloseIcon,
} from '../icons'
import {ProfileMenu, ProfileMenuItems} from './Navigation/ProfileMenu'

type MainNavigationLinkProps = PropsWithChildren<{
  href: string
  icon(props: SVGProps<SVGElement>): JSX.Element
}>

function MainNavigationLink({
  href,
  icon: Icon,
  children,
}: MainNavigationLinkProps) {
  return (
    <NavLink
      href={href}
      className="inline-flex justify-center pt-5 pb-4 items-center border-b-2 text-grey-1 border-transparent hover:text-orange"
      activeClassName="border-grey-1"
    >
      <Icon className="text-24" />{' '}
      <span className="hidden ml-4 text-16 font-heading font-medium lg:block">
        {children}
      </span>
    </NavLink>
  )
}

function MainNavigationLinks() {
  return (
    <>
      <MainNavigationLink href="/portal/dashboard" icon={DashboardIcon}>
        <FormattedMessage
          id="cd30309c220a"
          defaultMessage="Dashboard"
          description="Dashboard main navigation link"
        />
      </MainNavigationLink>

      <MainNavigationLink href="/portal/team" icon={TeamsIcon}>
        <FormattedMessage
          id="a78a4d85e89e"
          defaultMessage="Team"
          description="Team main navigation link"
        />
      </MainNavigationLink>

      <MainNavigationLink href="/portal/customers" icon={CustomerIcon}>
        <FormattedMessage
          id="2c67d57a837f"
          defaultMessage="Customers"
          description="Customers main navigation link"
        />
      </MainNavigationLink>

      <MainNavigationLink href="/portal/shop" icon={CartIcon}>
        <FormattedMessage
          id="ee8c2762b203"
          defaultMessage="Shop"
          description="Shop main navigation link"
        />
      </MainNavigationLink>

      <MainNavigationLink href="/portal/reports" icon={ReportsIcon}>
        <FormattedMessage
          id="0cec2e9894d6"
          defaultMessage="Reports"
          description="Reports main navigation link"
        />
      </MainNavigationLink>
    </>
  )
}

type Props = {
  user: ActivePartner
}

export function Navigation({user}: Props) {
  return (
    <>
      <Disclosure as="nav" className="bg-white border-b border-gray-200">
        {({open}) => (
          <>
            <div className="max-w-screen-xl px-4 mx-auto">
              <div className="flex justify-between items-center h-20 pl-safe-left pr-safe-right">
                <div className="flex-shrink-0 flex items-center">
                  <MyJuicePlus className="block h-5 lg:h-8 w-auto text-orange" />
                </div>

                <div className="hidden lg:ml-6 lg:flex lg:items-center">
                  <ProfileMenu user={user} />
                </div>

                <div className="flex items-center lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-white inline-flex items-center justify-center p-2 rounded-md text-orange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                    <span className="sr-only">Open mobile menu</span>
                    {open ? (
                      <CloseIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <HamburgerIcon
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
              <div className="border-t border-grey-5">
                <Menu as={Fragment}>
                  <ProfileMenuItems />
                </Menu>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <nav className="shadow-menu sticky top-0 bg-white z-30">
        <div className="hidden max-w-screen-xl px-4 mx-auto lg:grid grid-flow-col auto-cols-min gap-16 justify-center">
          {/* Desktop navigation bar */}
          <MainNavigationLinks />
        </div>

        <div className="grid items-center grid-flow-col lg:hidden overflow-hidden">
          {/* Mobile navigation bar */}
          <MainNavigationLinks />
        </div>
      </nav>
    </>
  )
}
