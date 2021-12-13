import type {CmsClient} from '../cms/client'
import {apiEndpoints} from './aem/api-endpoints'
import {countries} from './aem/countries'
import {resourceMenuItems} from './aem/dashboard-resource-menu-items'
import {footerLegalLinks} from './aem/footer-legal-links'
import {gettingStartedEndpoints} from './aem/getting-started-endpoints'

export type {ApiEndpoints} from './aem/api-endpoints'
export type {CountriesMap} from './aem/countries'
export type {resourceMenuItemsType} from './aem/dashboard-resource-menu-items'
export type {LegalLinkType, LegalLink} from './aem/footer-legal-links'
export type {GettingStartedEndpoints} from './aem/getting-started-endpoints'

export function getCms(client: CmsClient) {
  return {
    apiEndpoints: () => apiEndpoints(client),
    footerLegalLinks: () => footerLegalLinks(client),
    gettingStartedEndpoints: () => gettingStartedEndpoints(client),
    supportedCountries: () => countries(client),
    resourceMenuItems: () => resourceMenuItems(client),
  }
}

export type Cms = ReturnType<typeof getCms>
