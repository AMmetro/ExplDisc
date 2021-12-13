import {rest} from 'msw'

import {aemHost} from '../../../lib/config/env'

export type CountriesMap = {[key: string]: string}

export const countries = rest.get<CountriesMap>(
  `${aemHost}/:country/:language/_jcr_content.countries.json`,
  async (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        mx: 'Mexico',
        ie: 'Ireland',
        us: 'United States of America',
        ca: 'Canada',
      })
    )
  }
)
