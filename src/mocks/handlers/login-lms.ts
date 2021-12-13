import {rest} from 'msw'

import {apiHost} from '../../lib/config/env'

export const loginLms = rest.get(
  `${apiHost}/api/login/lms`,
  async (req, res, ctx) => {
    const token = req.cookies['auth-token']

    if (!token || ['null', 'undefined'].includes(token)) {
      return res(ctx.status(500), ctx.text('Internal Server Error'))
    }

    return res(
      ctx.status(200),
      ctx.text('Mock page that redirects to JuicePlus+ Hub')
    )
  }
)
