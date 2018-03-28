const puppeteer = require('puppeteer')

const BASE_URL = 'http://localhost:3000'
let browser
let page
const waitOpts = { waitUntil: 'load' }

beforeAll(async () => {
  browser = await puppeteer.launch({
  	args: ['--no-sandbox'],
  	executablePath: 'google-chrome'
  })
  page = await browser.newPage()
})

test('React App browser title displays', async () => {
  await page.goto(BASE_URL)
  let browserTitle = await page.title()
  expect(browserTitle).toBe('React App')
})

test('GitHub repo content displays', async () => {
	await page.goto(BASE_URL)
	let requireHubLogoCount = await page.$$eval('[requirement=requirehub-logo',
		logos => logos.length
	)
	let gitHubLogoCount = await page.$$eval('[requirement=github-logo',
		logos => logos.length
	)
	let projectDropDownBoxCount = await page.$$eval('[requirement=project-dropdown-menu-box',
		boxes => boxes.length
	)
	let projectDropDownMenuCount = await page.$$eval('[requirement=project-dropdown-menu-button',
		menus => menus.length
	)
	let gitHubRepoContent = requireHubLogoCount
		+ gitHubLogoCount + projectDropDownBoxCount + projectDropDownMenuCount
	expect(gitHubRepoContent).toBe(4)
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

test('requirement-key displays on home after adding empty requirement', async () => {
	await page.goto(BASE_URL)
	await page.click('[requirement=add-requirement-button]')
	await page.waitForSelector('[requirement=save-button]')
	await page.click('[requirement=save-button]')
	let keyCount = await page.$$eval('[requirement=requirement-key]',
		keys => keys.length
	)
	expect(keyCount).toBeGreaterThan(0)
})

test('Add non-empty requirement to home screen', async ()=> {
	await page.goto(BASE_URL)
	await page.click('[requirement=add-requirement-button]')
	await page.waitForSelector('[requirement=save-button]')
	await page.type('[requirement=title-input]', 'e2e test')
	await page.type('[requirement=steps-input]',
		'1. First step.\n2. Second step.\n3. Third step.')
	await page.type('[requirement=expected-input]', 'e2e expected result')
	await page.click('[requirement=save-button]')
	await page.waitForSelector('[requirement=add-requirement-button]')
	let requirementTitles = await page.$$('[requirement=requirement-title')
	let requirementTitleHandles = await Promise.all(
		requirementTitles.map(
			title => title.getProperty('innerHTML')
		)
	)
	let requirementTitleValues = await Promise.all(
		requirementTitleHandles.map(
			title => title.jsonValue()
		)
	)
	let requirementTitleIndex = await requirementTitleValues
		.findIndex(titleCopy => titleCopy === "e2e test")
	expect(requirementTitleIndex).toBeGreaterThanOrEqual(0)
})