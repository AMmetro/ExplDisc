import {render} from '@testing-library/react'
import {RouterContext} from 'next/dist/shared/lib/router-context'
import type {NextRouter} from 'next/router'
import {IntlProvider} from 'react-intl'

import type {RequiredNextRouter} from './router'

export const mockRouter: RequiredNextRouter = {
  pathname: '/[country]/[language]',
  asPath: '/us/en',
  query: {
    country: 'us',
    language: 'en',
  },
  async push() {
    return true
  },
}

export let renderForTest = (children: JSX.Element) =>
  render(
    <RouterContext.Provider value={mockRouter as unknown as NextRouter}>
      <IntlProvider locale="en">{children}</IntlProvider>
    </RouterContext.Provider>
  )
