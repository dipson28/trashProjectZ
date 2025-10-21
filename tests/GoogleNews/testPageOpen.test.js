const {test, expect} = require('@playwright/test')
const { log } = require('console')
test.use ({viewPort:{width:1526, height: 738}}) 	//set browser pageSize width:1526 * height:738

//Verify Google URL & Title
test ("Opening Google Url in Browser", async function ({page}){
	await page.goto ("https://google.com")	//open Google page
	
	const url = await page.url()
	expect(url).toContain ("https://www.google.com/")	// verified URL
	
	const title = await page.title()
	expect(title).toContain ("Google") //verified Title

	})
	
//Verify the Google page is open & contents in pages
test ("Verify leftFrameTitles", async function ({page}){
	
	await page.goto("https://www.google.com/")

	const img = page.getByRole('img', { name: 'Google' })
	await expect(img).toBeVisible()

	})

// Verify Google News page and verify contents in page
test.only ("Verify Google News", async function ({page}){

	await page.goto("https://www.google.com/")
	await page.getByLabel("Google apps").click()
	
	//Navigation to Google News Page 
	const iframe = page.frameLocator ("//iframe[@name='app']")
	await iframe.getByLabel("Google apps").hover()
	await iframe.getByLabel("Google apps").click()

	//verifying Google News Logo
	await iframe.locator("(//a[contains(@aria-label, 'News')])").hover()
	await iframe.locator("(//a[contains(@aria-label, 'News')])").click()
	const newsImg = page.locator("(//a[contains(@aria-label, 'Google News')])[2]")
	expect(newsImg).toBeVisible
	await page.locator("(//a[contains(@aria-label, 'Google News')])[2]").screenshot({ path: './screenshots/testPageOpen/logoGoogleNews.png', fullPage: true}) //taking screenshot	

	//verifying Weather Widget
	const weatherWidget = await page.locator("//c-wiz[@class='yPI8Rb']")
	expect(weatherWidget).toBeVisible	
	
	//verifying Weather Widget expanded
	await page.getByLabel("Expand to view forecast").click()
	const expandWeatWidget = await page.locator("//button[contains(@class,'HDbYSe') and @aria-expanded='true']").getAttribute('aria-expanded')
	//console.log("when expanded: "+expandWeatWidget)
	expect(expandWeatWidget).toBe('true')		//check
	await page.screenshot({ path: './screenshots/testPageOpen/expandWeatherWidget.png', fullPage: true}) //taking screenshot

	// collape Weather Widget
	await page.getByLabel("Collapse forecast").click()	
	const collapseWeatWidget = await page.locator("//button[contains(@class,'HDbYSe') and @aria-expanded='false']").getAttribute('aria-expanded')
	//console.log("when collapsed: "+collapseWeatWidget)
	expect(collapseWeatWidget).toBe('false')  //check
	await page.screenshot({ path: './screenshots/testPageOpen/collapseWeatherWidget.png', fullPage: true}) //taking screenshot
	
	//expand widget again
	await page.getByLabel("Expand to view forecast").click()
	//console.log("when re-expanded: "+expandWeatWidget)
	expect(expandWeatWidget).toBe('true')	//check
	await page.screenshot({ path: './screenshots/testPageOpen/expandWeatherWidget.png', fullPage: true}) //taking screenshot


	//taking dynamic-SS
	// const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
	// const dynamicScreenshotName = `GoogleNewsPg-${timestamp}.png`
	// await page.screenshot({ path: `./screenshots/testPageOpen/${dynamicScreenshotName}`});

})