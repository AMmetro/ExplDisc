export type Locale = {
  country: string
  language: string
}

export function isLocale(input: unknown): boolean {
  if (typeof input !== 'object') {
    return false
  }

  const inputObj = input as Record<string, unknown>

  return (
    typeof inputObj['country'] === 'string' &&
    typeof inputObj['language'] === 'string'
  )
}

export function assertLocale(input: unknown): asserts input is Locale {
  if (!isLocale(input)) {
    throw new Error('Invalid locale object: country and language are required')
  }
}

export type LanguageIdentifier = string

export function localeToLanguageIdentifier({
  country,
  language,
}: Locale): LanguageIdentifier {
  return `${language.toLocaleLowerCase()}-${country.toLocaleUpperCase()}`
}
