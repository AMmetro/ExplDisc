import {getDocument, queries} from 'playwright-testing-library'

import {knownUsers} from '../src/mocks/factories/user'

const {findByText} = queries

let user = knownUsers['anne@example.com']

beforeAll(async () => {
  let cookies = await context.cookies()

  let token = user.token

  cookies.push({
    sameSite: 'None',
    name: 'react-auth-token',
    value: token,
    domain: 'localhost',
    path: '/',
    expires: -1,
    httpOnly: false,
    secure: false,
  })

  await context.addCookies(cookies)

  await page.goto('http://localhost:4000/us/en/portal/dashboard')
})

test('shows the dashboard page', async () => {
  let document = await getDocument(page)

  return expect(
    findByText(document, `Hi, ${user.name.first}!`)
  ).resolves.toBeDefined()
})
