const {test, expect} = require('@playwright/test')
test.use ({viewPort:{width:1536, height: 864}}) 	//set browser pageSize width:1080 * height:1085

//Verify Google URL & Title
test ("Opening Google Url in Browser", async function ({page}){
	await page.goto ("https://google.com")	//open Google page
	
	const url = await page.url()
	expect(url).toContain ("https://www.google.com/")	// verified URL
	
	const title = await page.title()
	expect(title).toContain ("Google") //verified Title

	})
	
	//Verify the Google page contents
test ("Verify leftFrameTitles", async function ({page}){
	
	await page.goto("https://www.google.com/")

	const img = page.getByRole('img', { name: 'Google' })
	await expect(img).toBeVisible()

	})

test.only("Verify Google News", async function ({page}){

	await page.goto("https://www.google.com/")
	await page.getByLabel("Google apps").click()
	
	//Navigation to Google News Page 
	const iframe = await page.frameLocator ("//iframe[@name='app']")
	await iframe.getByLabel("Google apps").hover()
	await iframe.getByLabel("Google apps").click()
	await page.waitForTimeout(3000)

	await iframe.locator("(//a[contains(@aria-label, 'News')])").hover()
	await iframe.locator("(//a[contains(@aria-label, 'News')])").click()
	const newsImg = await page.locator("(//a[contains(@aria-label, 'Google News')])[2]")
	expect(newsImg).toBeVisible	//verifying Google News Logo
	await page.waitForTimeout(3000)

	const weatherWidget = await page.locator("//c-wiz[@class='yPI8Rb']")
	expect(weatherWidget).toBeVisible	//verifying Weather Widget
	await page.waitForTimeout(3000)
		
	await page.getByLabel("Expand to view forecast").click()
	const expandWeatWidget = await page.locator("//c-wiz[@class='yPI8Rb']").toBeVisible
	expect(expandWeatWidget).toBeVisible	//verifying Weather Widget expanded
	await page.waitForTimeout(3000)

	await page.getByLabel("Collapse forecast").click()	// collape Weather Widget
	await page.waitForTimeout(3000)


	//taking dynamic-SS
	const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
	const dynamicScreenshotName = `GoogleNewsPg-${timestamp}.png`
	await page.screenshot({ path: `./screenshots/testPageOpen/${dynamicScreenshotName}`});

})