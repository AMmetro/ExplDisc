import type {TypeOf} from 'zod'
import {z} from 'zod'

import type {CmsClient} from '../../cms/client'

const legalLinkTypeZ = z.enum([
  'terms-of-use',
  'privacy-policy',
  'return-policy',
  'terms-of-service',
])

export type LegalLinkType = TypeOf<typeof legalLinkTypeZ>

const legalLinkZ = z.object({
  type: legalLinkTypeZ,
  href: z.string(),
})

const legalLinksZ = z.array(legalLinkZ)

export type LegalLink = {
  type: LegalLinkType
  href: string
}

export const footerLegalLinks = async (
  client: CmsClient
): Promise<LegalLink[]> => {
  const data = await client.requestMock('footer-legal-links.json')

  return legalLinksZ.parse(data)
}
