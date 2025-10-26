const {test, expect} = require('@playwright/test')
test.use ({viewPort:{width:1526, height: 738}}) 	//set browser pageSize width:1526 * height:738

//Verify Google URL & Title
test ("Searching through search box using manual inputs", async function ({page}){
	await page.goto ("https://google.com")	//open Google page

	await page.waitForLoadState('domcontentloaded')
	// verified searchBox is present
	expect(page.locator("//body//div[@jsname='RNNXgb']")).toHaveClass("RNNXgb")
	
	expect(page.locator("//body//div[@jsname='uFMOof']")).toHaveClass("iblpc")
	
	expect(page.locator("//body//div[@jsname='gLFyf']")).toHaveClass("a4bIc")
	
	expect(page.locator("//body//textarea[@title='Search']")).toHaveId("APjFqb")
	
	expect(page.locator("//body//div[@jsname='F7uqIe']")).toHaveAttribute('aria-label','Search by voice')
	
	expect(page.locator("//body//div[@jsname='R5mgy']")).toHaveAttribute('aria-label','Search by image')
	
	expect(page.locator("//div[@class='u4Uk3c']//span[2]")).toHaveText('AI Mode')
	
	expect(page.locator("(//div/center/input[@aria-label='Google Search'])[2]")).toHaveValue('Google Search')
	
	expect(page.locator("(//body//center//input[@class='RNmpXc'])[2]")).toHaveValue("I'm Feeling Lucky")

	const langGoogle = await page.locator("//body//div[@id='SIvCob'] //a").allTextContents()
	expect(langGoogle).toContain["हिन्दी","বাংলা","తెలుగు","मराठी","தமிழ்","ગુજરાતી","ಕನ್ನಡ","മലയാളം","ਪੰਜਾਬੀ"]

	expect(page.locator("(//*[name()='svg'][@class='lnXdpd'])[1]")).toHaveAttribute('aria-label','Google')

	
	// await page.locator("//form/button[@aria-label='Advanced search']").click()  //still in progress have to add ingredients..
	
	// //taking dynamic-SS
	// const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
	// const dynamicScreenshotName = `GoogleNewsAdvSrch-${timestamp}.png`
	// await page.screenshot({ path: `./screenshots/testPageOpen/${dynamicScreenshotName}`});

})