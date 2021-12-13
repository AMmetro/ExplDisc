import type {
  Cms,
  LegalLinkType,
  LegalLink,
  GettingStartedEndpoints,
} from './atd/cms'

export type ClassicVirtualOfficeContent = {
  href: string
}

export type {LegalLinkType, LegalLink, GettingStartedEndpoints}

export type AuthenticatedShellContent = {
  classicVirtualOffice: ClassicVirtualOfficeContent
  footerLegalLinks: LegalLink[]
  gettingStartedEndpoints: GettingStartedEndpoints
}

export const getContent = async (
  cms: Cms
): Promise<AuthenticatedShellContent> => {
  const apiEndpoints = await cms.apiEndpoints()
  const footerLegalLinks = await cms.footerLegalLinks()
  const gettingStartedEndpoints = await cms.gettingStartedEndpoints()

  return {
    classicVirtualOffice: {
      href: apiEndpoints.oldVOUrl,
    },
    footerLegalLinks,
    gettingStartedEndpoints,
  }
}
