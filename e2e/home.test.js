const puppeteer = require('puppeteer')

const BASE_URL = 'http://localhost:3000'
let browser
let page

beforeAll(async () => {
  browser = await puppeteer.launch({
  	args: ['--no-sandbox'],
  	executablePath: 'google-chrome-unstable'
  })
  page = await browser.newPage()
})

test('React App browser title displays', async () => {
  await page.goto(BASE_URL)
  const browserTitle = await page.title()
  expect(browserTitle).toBe('React App')
})

test('add-requirement-button displays on home', async () => {
	await page.goto(BASE_URL)
	let addRequirementButtonCopy = await page.$('[requirement=add-requirement-button]')
		.then(
			btn => btn.getProperty('innerHTML')
		)
		.then(
			btn => btn.jsonValue()
		)
	expect(addRequirementButtonCopy).toBe('+')
})