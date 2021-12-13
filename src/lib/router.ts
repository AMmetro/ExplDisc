import type {ParsedUrlQuery} from 'querystring'
import type {UrlObject} from 'url'

import type {NextRouter} from 'next/router'
import {useRouter as useNextRouter} from 'next/router'
import {useMemo} from 'react'

import type {Locale} from './i18n/locale'
import {assertLocale, isLocale} from './i18n/locale'

export function tryExtractRouterLocale(query: ParsedUrlQuery): Locale | null {
  const locale = {
    country: query.country,
    language: query.language,
  }
  if (isLocale(locale)) {
    assertLocale(locale)
    return locale
  }
  return null
}

export function extractRouterLocale(query: ParsedUrlQuery) {
  const locale = tryExtractRouterLocale(query)
  if (locale === null) {
    throw new Error('Locale is required in query parameters')
  }
  return locale
}

export type Url = UrlObject | string

export function extendHrefWithLocale(href: Url, locale?: Locale | false) {
  if (!locale) {
    return href
  }

  let pathname
  let query
  let restHrefProps

  if (typeof href === 'string') {
    const hrefParts = href.split('?')
    pathname = hrefParts[0]
    query = hrefParts[1]
  } else {
    ;({pathname, query, ...restHrefProps} = href)
  }

  if (typeof query === 'string') {
    const urlParams = new URLSearchParams(query)
    query = Object.fromEntries(
      urlParams as unknown as Iterable<[string, string]>
    )
  }

  const LOCALE_PATH_PATTERN = '/[country]/[language]'
  if (
    !pathname ||
    !pathname.startsWith('/') ||
    pathname.startsWith(`${LOCALE_PATH_PATTERN}/`)
  ) {
    return href
  }

  const newPathname = LOCALE_PATH_PATTERN + pathname
  const newQuery = {
    ...(query || {}),
    country: locale.country,
    language: locale.language,
  }

  return {
    ...(restHrefProps || {}),
    pathname: newPathname,
    query: newQuery,
  }
}

export interface TransitionOptions {
  shallow?: boolean
  locale?: Locale | false
  scroll?: boolean
}

// Pick only required fields from next router for better tracking of what we are using (e.g. for mocking in tests)
export type RequiredNextRouter = Pick<
  NextRouter,
  'pathname' | 'query' | 'asPath' | 'push'
>

export type Router = Pick<NextRouter, 'pathname' | 'query' | 'asPath'> & {
  locale: Locale | false
  push(url: Url, as?: Url, options?: TransitionOptions): Promise<boolean>
}

export function useRouter(): Router {
  const nextRouter = useNextRouter() as RequiredNextRouter

  return useMemo(() => {
    const {pathname, query, asPath} = nextRouter
    const currentLocale = tryExtractRouterLocale(query)
    const {push: nextPush} = nextRouter

    return {
      pathname,
      query,
      asPath,
      locale: currentLocale || false,
      push(url, as, options) {
        const {locale, ...restOptions} = options || {}
        const newUrl = extendHrefWithLocale(url, currentLocale || locale)
        return nextPush(newUrl, as, restOptions)
      },
    }
  }, [nextRouter])
}
