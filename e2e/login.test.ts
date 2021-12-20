import {getDocument, queries} from 'playwright-testing-library'

const {getByPlaceholderText, getAllByText, findByText} = queries

beforeEach(async () => {
  await page.goto('http://localhost:4000/us/en/login/partner')
})

afterEach(async () => {
  await context.clearCookies()
})

xtest('fails', async () => {
  let $document = await getDocument(page)

  let username = await getByPlaceholderText($document, 'Username')
  let password = await getByPlaceholderText($document, 'Password')
  let [, button] = await getAllByText($document, 'Login')

  await username.type('fail@example.com')
  await password.type('invalid')

  await button.click()

  await findByText(
    $document,
    'login credentials you used are not correct',
    {exact: false},
    {timeout: 15000}
  )
})

xtest('succeeds', async () => {
  let $document = await getDocument(page)

  let username = await getByPlaceholderText($document, 'Username')
  let password = await getByPlaceholderText($document, 'Password')
  let [, button] = await getAllByText($document, 'Login')

  await username.type('anne@example.com')
  await password.type('valid')

  await button.click()

  await page.waitForNavigation({url: (url) => url.pathname === '/session'})
  await page.waitForNavigation({url: (url) => url.pathname === '/dashboard'})
})
