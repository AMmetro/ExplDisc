import type {NextApiRequest, NextApiResponse} from 'next'

import {
  dashboardApi,
  parseCustomerSearchType,
} from '../../lib/juiceplus/dashboardApi'

export default async function dashboard(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({error: 'Method Not Allowed'})
  }

  try {
    const authToken = req.cookies['react-auth-token']
    const customerSearchType = parseCustomerSearchType(
      req.query['customers'] ?? 'direct'
    )
    if (!authToken) {
      return res.status(403).json({error: 'Authentication Failed'})
    }

    const result = await dashboardApi(authToken, customerSearchType)

    return res.status(200).json(result)
  } catch (e) {
    console.error(e)
    return res.status(500).json({error: 'Internal Server Error'})
  }
}
