import type {CmsClient} from '../../cms/client'

export type CountriesMap = {
  [key: string]: string
}

export const countries = async (client: CmsClient): Promise<CountriesMap> => {
  return await client.request('_jcr_content.countries.json')
}
