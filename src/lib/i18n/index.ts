import type {IntlConfig} from 'react-intl'

import type {Locale} from './locale'
import {localeToLanguageIdentifier} from './locale'
import {loadMessages} from './messages'

export type PrefetchIntlConfig = Pick<IntlConfig, 'locale' | 'messages'>

export async function prefetchIntlConfig(
  locale: Locale | string
): Promise<PrefetchIntlConfig> {
  const langId =
    typeof locale === 'string' ? locale : localeToLanguageIdentifier(locale)

  return {
    locale: langId,
    messages: await loadMessages(locale),
  }
}

export function extendIntlConfig(
  prefetchConfig: PrefetchIntlConfig
): IntlConfig {
  const handleError: IntlConfig['onError'] = (err) => {
    if (err.code === 'MISSING_TRANSLATION') {
      // Don't notify about missed translations because they would be added in production
      return
    }
    console.error(err)
  }

  return {
    ...prefetchConfig,
    onError: handleError,
  }
}
