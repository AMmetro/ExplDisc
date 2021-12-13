import {getDocument, queries, waitFor} from 'playwright-testing-library'

const {findByText, queryByText} = queries

test('has the cookie banner', async () => {
  context.clearCookies()
  await page.goto('http://localhost:4000/')

  let document = await getDocument(page)

  await expect(
    findByText(document, 'This website uses cookies', {exact: false})
  ).resolves.toBeDefined()
})

xtest('clears the cookie banner', async () => {
  context.clearCookies()
  await page.goto('http://localhost:4000/')

  let document = await getDocument(page)
  let button = await findByText(document, 'Got it')

  await button.click()

  return waitFor(() =>
    expect(
      queryByText(document, 'This website uses cookies', {exact: false})
    ).resolves.toBeNull()
  )
})
