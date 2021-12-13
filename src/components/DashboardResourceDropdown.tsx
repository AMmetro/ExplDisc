import {Menu, Transition} from '@headlessui/react'
import type {PropsWithChildren} from 'react'
import {Fragment} from 'react'

import type {DashboardResourceDropdownMenuItems} from './../lib/juiceplus/dashboardResourceDropdownMenuItems'
import {Link} from './Link'
import {Lightbulb} from './ui/icons'

type DashboardResourceDropdownProps = PropsWithChildren<{
  href: string
}>

function ProfileMenuLink({children, href}: DashboardResourceDropdownProps) {
  return (
    <Link href={href}>
      <a
        target="_blank"
        href={href}
        className="flex items-center text-14 text-grey-1 px-2 py-2 font-medium hover:bg-orange-background hover:text-orange"
        rel="noreferrer"
      >
        <span className="mx-4">{children}</span>
      </a>
    </Link>
  )
}
type Props = PropsWithChildren<{
  menuItems: DashboardResourceDropdownMenuItems
}>
export function DashboardResourceDropdownItems({menuItems}: Props) {
  return (
    <>
      {menuItems.length &&
        menuItems.map((item: any) => (
          <Menu.Item key={item.id}>
            <ProfileMenuLink href={item.href}>
              {item.defaultMessage}
            </ProfileMenuLink>
          </Menu.Item>
        ))}
    </>
  )
}

export function DashboardResourceDropdown({menuItems}: Props) {
  return (
    <Menu as="div" className="ml-3 relative h-8">
      {({open}) => (
        <>
          <Menu.Button className="inline-flex items-center px-4 h-8 rounded-full font-semibold text-orange bg-peach-light hover:bg-orange-background-hover focus:outline-none">
            <Lightbulb className="text-24" />
            <span className="font-heading leading-6 text-16 capitalize">
              Resources
            </span>
          </Menu.Button>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-75"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-80"
            unmount={true}
          >
            <Menu.Items className="origin-top-right absolute right-0 py-4 mt-4 min-w-[280px] max-w-[480px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <DashboardResourceDropdownItems menuItems={menuItems} />
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}
