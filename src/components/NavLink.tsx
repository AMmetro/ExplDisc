import classNames from 'classnames'
import type {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from 'react'

import {useRouter} from '../lib/router'
import {Link} from './Link'

export {NavLink}

type Props = PropsWithChildren<
  {
    href: string
    exact?: boolean
    className?: string
    activeClassName?: string
  } & Omit<
    DetailedHTMLProps<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >,
    'className'
  >
>

function NavLink({
  href,
  exact = false,
  className,
  activeClassName,
  children,
  ...props
}: Props) {
  const {pathname} = useRouter()
  const isActive = exact
    ? pathname === href
    : pathname.startsWith('/[country]/[language]' + href)
  return (
    <Link href={href}>
      <a
        className={classNames(className, [isActive ? activeClassName : ''])}
        {...props}
      >
        {children}
      </a>
    </Link>
  )
}
