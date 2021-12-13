import '../styles/gordita.css'
import '../styles/halcyon.css'
import '../styles/tailwind.css'

import cookie from 'cookie'
import type {AppContext, AppProps} from 'next/app'
import NextApp from 'next/app'
import Head from 'next/head'
import {IntlProvider} from 'react-intl'

import {CookieBanner} from '../components/CookieBanner'
import type {PrefetchIntlConfig} from '../lib/i18n'
import {prefetchIntlConfig, extendIntlConfig} from '../lib/i18n'
import {tryExtractRouterLocale} from '../lib/router'

if (process.env.MOCKS_ENABLED === 'true') {
  require('../mocks')
}

type Props = AppProps & {
  showCookieBanner: boolean
  intlConfig: PrefetchIntlConfig
}

export default function App({
  Component,
  pageProps,
  showCookieBanner,
  intlConfig,
  router: {asPath},
}: Props) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, viewport-fit=cover, initial-scale=1.0"
        />
      </Head>

      <IntlProvider {...extendIntlConfig(intlConfig)}>
        <Component {...pageProps} />

        <CookieBanner
          href="/privacy-cookie-policy"
          show={showCookieBanner}
          returnTo={asPath}
        />
      </IntlProvider>
    </>
  )
}

App.getInitialProps = async (ctx: AppContext) => {
  const appProps = await NextApp.getInitialProps(ctx)
  const locale = tryExtractRouterLocale(ctx.router.query)
  const {CookiesAccepted} = cookie.parse(ctx.ctx.req?.headers.cookie ?? '')

  const showCookieBanner = CookiesAccepted !== 'true'
  const intlConfig = await prefetchIntlConfig(locale || 'en')

  return {
    ...appProps,
    showCookieBanner,
    intlConfig,
  }
}
