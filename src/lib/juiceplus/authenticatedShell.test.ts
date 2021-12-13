import {getContent} from './authenticatedShell'
import {getCms} from './cms'

describe('lib/juiceplus/authenticatedShell', () => {
  const cms = getCms({
    country: 'us',
    language: 'en',
  })

  test('load content success', async () => {
    const content = await getContent(cms)
    expect(content).toEqual({
      classicVirtualOffice: {
        href: 'http://api.example.com/api/login/oldvirtualoffice',
      },
      footerLegalLinks: [
        {
          type: 'terms-of-use',
          href: '/terms-of-use',
        },
        {
          type: 'privacy-policy',
          href: '/privacy-cookie-policy',
        },
        {
          type: 'return-policy',
          href: '/product-return-policy',
        },
      ],
      gettingStartedEndpoints: {
        needHelp:
          'https://rise.articulate.com/share/UPiR7qv5laXYC7D-phOE8B7e_58VclK9#/',
      },
    })
  })

  test('load content failure', async () => {
    expect.assertions(1)

    const fakeCms = {
      ...cms,
      async apiEndpoints() {
        throw new Error('fakeCms.apiEndpoints error')
      },
    }

    const contentPromise = getContent(fakeCms)
    await expect(contentPromise).rejects.toThrow('fakeCms.apiEndpoints error')
  })
})
