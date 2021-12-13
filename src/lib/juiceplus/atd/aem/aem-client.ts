import type {Locale} from '../../../i18n/locale'
import type {CmsClient} from '../../cms/client'
import supportedLocales from './content-mocks/supported-locales.json'

const MOCKS_FOLDER = './content-mocks'

export class AemClient implements CmsClient {
  baseUrl: string
  globalMocksUrl = `${MOCKS_FOLDER}/global`
  countryMocksUrl?: string
  countryLanguageMocksUrl?: string

  constructor(host: string, locale?: Locale) {
    if (!locale) {
      this.baseUrl = host
    } else {
      const localeCountry = locale.country.toLocaleUpperCase()
      const localeLanguage = locale.language.toLocaleLowerCase()
      const countryPath = locale.country.toLocaleLowerCase()
      const languagePath = locale.language.toLocaleLowerCase()

      const isSupportedLocale = supportedLocales.some(
        ({country: sc, language: sl}) =>
          sc === localeCountry && sl === localeLanguage
      )

      if (!isSupportedLocale) {
        throw new Error(
          `Unsupported AEM locale: /${countryPath}/${languagePath}`
        )
      }

      this.baseUrl = `${host}/${countryPath}/${languagePath}`
      this.countryMocksUrl = `${MOCKS_FOLDER}/${countryPath}`
      this.countryLanguageMocksUrl = `${MOCKS_FOLDER}/${countryPath}/${languagePath}`
    }
  }

  async request<T, V>(resourceUrl: string, params?: V): Promise<T> {
    let queryParamsUrl = ''

    if (params) {
      const paramsString = new URLSearchParams(
        params as unknown as Record<string, string>
      ).toString()
      queryParamsUrl = `?${paramsString}`
    }

    const response = await fetch(
      `${this.baseUrl}/${resourceUrl}${queryParamsUrl}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    if (!response.ok) {
      console.error(await response.json())
      throw new Error('Could not fetch')
    }

    return await response.json()
  }

  async requestMock<T>(url: string): Promise<T> {
    if (this.countryLanguageMocksUrl) {
      try {
        return await require(`${this.countryLanguageMocksUrl}/${url}`)
      } catch (_) {
        // next try country folder
      }
    }

    if (this.countryMocksUrl) {
      try {
        return await require(`${this.countryMocksUrl}/${url}`)
      } catch (_) {
        // next try global folder
      }
    }

    return await require(`${this.globalMocksUrl}/${url}`)
  }
}
