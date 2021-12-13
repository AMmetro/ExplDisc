import {rest} from 'msw'

import {apiHost} from '../../lib/config/env'
import {knownUsers, userFactory} from '../factories/user'

type Credentials = {username: string; password: string}

export const authenticate = rest.post<Credentials>(
  `${apiHost}/api/authenticate`,
  async (req, res, ctx) => {
    if (req.body.username === 'fail@example.com') {
      return res(ctx.status(401), ctx.json({detail: 'Forced login failure'}))
    }

    let user = knownUsers[req.body.username] ?? userFactory.build()

    return res(
      ctx.status(200),
      ctx.cookie('auth-token', user.token),
      ctx.json({})
    )
  }
)
