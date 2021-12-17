import {screen} from '@testing-library/react'

import {renderForTest} from '../lib/renderForTest'
import {CookieBanner} from './CookieBanner'

describe('<CookieBanner />', () => {
  test('show={false}', async () => {
    let show = false
    let href = 'https://example.com/'

    renderForTest(<CookieBanner href={href} show={show} />)

    return expect(screen.findByText('here')).rejects.toThrow()
  })

  test('show={true}', async () => {
    let show = true
    let href = 'https://example.com/'

    renderForTest(<CookieBanner href={href} show={show} />)

    await expect(screen.findByText('Got it')).resolves.toBeInTheDocument()
    return expect(screen.findByText('here')).resolves.toHaveProperty(
      'href',
      href
    )
  })
})
