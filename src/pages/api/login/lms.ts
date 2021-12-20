import {parse as parseCookie} from 'cookie'
import type {NextApiRequest, NextApiResponse} from 'next'

import {apiHost} from '../../../lib/config'

export default async function authenticate(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({error: 'Method Not Allowed'})
  }

  try {
    let cookies = parseCookie(req.headers['cookie'] || '')
    let authToken = cookies['react-auth-token']
    let response = await fetch(`${apiHost}/api/login/lms`, {
      redirect: 'follow',
      headers: {
        Cookie: `auth-token=${authToken}`,
      },
    })

    if (!response.ok) {
      console.error(await response.text())
      throw new Error('/api/login/lms failed')
    }

    return res.status(200).send(await response.text())
  } catch (e) {
    console.error(e)
    return res.status(500).send('Internal Server Error')
  }
}
