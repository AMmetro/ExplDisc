/* eslint-env node */

module.exports = {
  browsers: ['chromium'],
  serverOptions: {
    command: 'next start -p 4000',
    port: 4000,
    usedPortAction: 'kill',
    launchTimeout: 10000,
    waitOnScheme: {
      delay: 500,
    },
    debug: false,
  },
  launchOptions: {
    headless: process.env.PLAYWRIGHT_HEADLESS !== 'false',
  },
  contextOptions: {
    ignoreHTTPSErrors: true,
    locale: 'en',
    viewport: {
      width: 1440,
      height: 900,
    },
    storageState: {
      cookies: [
        {
          name: 'CookiesAccepted',
          value: 'true',
          domain: 'localhost:4000',
          path: '/',
        },
      ],
    },
  },
}
