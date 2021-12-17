function normalizeUrlReturnType(
  inputUrl: string | URL,
  url: URL
): string | URL {
  return typeof inputUrl === 'string' ? url.toString() : url
}

export function extractPartnerHostnameFromWebsite(
  website: string | URL
): string {
  const websiteUrl = new URL(website)
  const separatorIndex = websiteUrl.host.indexOf('.')
  if (separatorIndex <= 0) {
    throw new Error(`Could not find partner host in url ${website}`)
  }
  return websiteUrl.host.substring(0, separatorIndex)
}

export function mainWebsiteToPartnerWebsite(
  website: string,
  partnerHostname: string
): string
export function mainWebsiteToPartnerWebsite(
  website: URL,
  partnerHostname: string
): URL
export function mainWebsiteToPartnerWebsite(
  mainWebsite: string | URL,
  partnerHostname: string
): string | URL {
  const partnerWebsite = new URL(mainWebsite)
  const separatorIndex = partnerWebsite.host.indexOf('.')
  if (separatorIndex >= 0) {
    partnerWebsite.host =
      partnerHostname + partnerWebsite.host.substring(separatorIndex)
  }
  return normalizeUrlReturnType(mainWebsite, partnerWebsite)
}

export function forcePartnerWebsiteRedirect(website: string): string
export function forcePartnerWebsiteRedirect(website: URL): URL
export function forcePartnerWebsiteRedirect(
  website: string | URL
): string | URL {
  const forcedWebsite = new URL(website)
  forcedWebsite.searchParams.set('forceRedirect', 'true')
  return normalizeUrlReturnType(website, forcedWebsite)
}
