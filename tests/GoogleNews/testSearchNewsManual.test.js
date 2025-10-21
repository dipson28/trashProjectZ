const {test, expect} = require('@playwright/test')
test.use ({viewPort:{width:1526, height: 738}}) 	//set browser pageSize width:1526 * height:738

//Verify Google URL & Title
test ("Searching through search box using manual inputs", async function ({page}){
	await page.goto ("https://google.com")	//open Google page
	
	// verified searchBox is present
	expect(page.locator("//form[@role='search']")).toBeTruthy
	
	await page.locator("//form/button[@aria-label='Advanced search']").click()  //still in progress have to add ingredients..
	
	
	//taking dynamic-SS
	const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
	const dynamicScreenshotName = `GoogleNewsAdvSrch-${timestamp}.png`
	await page.screenshot({ path: `./screenshots/testPageOpen/${dynamicScreenshotName}`});

})