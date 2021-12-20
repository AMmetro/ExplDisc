import NextLink from 'next/link'

import type {Locale} from '../lib/i18n/locale'
import {useRouter, extendHrefWithLocale} from '../lib/router'

type NextLinkProps = Parameters<typeof NextLink>[0]

export type LinkProps = Omit<NextLinkProps, 'locale'> & {
  locale?: Locale | false
}

export function Link({locale, href, ...props}: LinkProps) {
  const router = useRouter()
  const extHref = extendHrefWithLocale(href, locale || router.locale)

  return <NextLink href={extHref} {...props} />
}
