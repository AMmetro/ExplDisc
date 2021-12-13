import {
  extractPartnerHostnameFromWebsite,
  forcePartnerWebsiteRedirect,
  mainWebsiteToPartnerWebsite,
} from './partnerWebsite'

describe('partnerWebsite lib', () => {
  describe('extractPartnerHostnameFromWebsite', () => {
    test('returns hostname from string', () => {
      expect(
        extractPartnerHostnameFromWebsite(
          'https://toddw.test.juiceplus.com/ca/fr/portal/dashboard'
        )
      ).toBe('toddw')
    })

    test('returns hostname from url object', () => {
      expect(
        extractPartnerHostnameFromWebsite(
          new URL('https://toddw.test.juiceplus.com/ca/fr/portal/dashboard')
        )
      ).toBe('toddw')
    })
  })

  describe('mainWebsiteToPartnerWebsite', () => {
    test('returns string url with partner hostname from string', () => {
      const resultUrl = mainWebsiteToPartnerWebsite(
        'https://my.test.juiceplus.com/ca/fr/portal/dashboard',
        'toddw'
      )

      expect(typeof resultUrl).toBe('string')
      expect(resultUrl).toBe(
        'https://toddw.test.juiceplus.com/ca/fr/portal/dashboard'
      )
    })

    test('returns url object with partner hostname from url object', () => {
      const resultUrl = mainWebsiteToPartnerWebsite(
        new URL('https://my.test.juiceplus.com/ca/fr/portal/dashboard'),
        'toddw'
      )

      expect(resultUrl).toBeInstanceOf(URL)
      expect(resultUrl.toString()).toBe(
        'https://toddw.test.juiceplus.com/ca/fr/portal/dashboard'
      )
    })
  })

  describe('forcePartnerWebsiteRedirect', () => {
    test('returns string url with force parameter from string', () => {
      const resultUrl = forcePartnerWebsiteRedirect(
        'https://toddw.test.juiceplus.com/ca/fr/portal/dashboard'
      )

      expect(typeof resultUrl).toBe('string')
      expect(resultUrl).toBe(
        'https://toddw.test.juiceplus.com/ca/fr/portal/dashboard?forceRedirect=true'
      )
    })

    test('returns url object with force parameter from url object', () => {
      const resultUrl = forcePartnerWebsiteRedirect(
        new URL('https://toddw.test.juiceplus.com/ca/fr/portal/dashboard')
      )

      expect(resultUrl).toBeInstanceOf(URL)
      expect(resultUrl.toString()).toBe(
        'https://toddw.test.juiceplus.com/ca/fr/portal/dashboard?forceRedirect=true'
      )
    })
  })
})
