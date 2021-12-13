import cookie from 'cookie'
import type {NextApiRequest, NextApiResponse} from 'next'
import scp from 'set-cookie-parser'

import {apiHost} from '../../lib/config'

const DEFAULT_MAX_AGE = 60 * 60 * 24

export default async function authenticate(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({error: 'Method Not Allowed'})
  }

  try {
    let response = await fetch(`${apiHost}/api/authenticate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    })

    if (!response.ok) {
      console.error(await response.json())
      return res.status(response.status).json({error: 'Authentication Failed'})
    }

    let cookies = scp.parse(
      scp.splitCookiesString(response.headers.get('set-cookie') ?? ''),
      {map: true}
    )
    let authToken = cookies['auth-token']
    res.setHeader(
      'set-cookie',
      cookie.serialize('react-auth-token', authToken.value, {
        path: '/',
        maxAge: authToken.maxAge ?? DEFAULT_MAX_AGE,
        httpOnly: true,
        sameSite: 'lax',
        // TODO: use a better check
        secure: process.env.NODE_ENV === 'production',
      })
    )
    return res.json({message: 'hey!'})
  } catch (e) {
    console.error(e)
    return res.status(500).json({error: 'Internal Server Error'})
  }
}
