import type {IntlConfig} from 'react-intl'

import type {Locale} from './locale'
import {localeToLanguageIdentifier} from './locale'

const TRANSLATIONS_FOLDER = './translations/compiled'

type Messages = IntlConfig['messages']

async function tryLoadMessages(langId: string): Promise<Messages | null> {
  try {
    return await require(`${TRANSLATIONS_FOLDER}/${langId}.json`)
  } catch (_) {
    // do nothing because the function is called "try"
    return null
  }
}

export async function loadMessages(locale: Locale | string): Promise<Messages> {
  let messages: Messages | null

  if (typeof locale === 'string') {
    messages = await tryLoadMessages(locale)
  } else {
    messages = await tryLoadMessages(localeToLanguageIdentifier(locale))

    if (!messages) {
      messages = await tryLoadMessages(locale.language)
    }
  }

  if (!messages) {
    console.warn(`Could not load translations for locale`, locale)
    messages = {}
  }

  return messages
}
