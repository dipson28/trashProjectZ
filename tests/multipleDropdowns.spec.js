const {test, expect} = require('@playwright/test')
const { log } = require('console')

test ("Verify signup error on password less than 6 chars", async function ({page}) {
    
    await page.goto("https://freelance-learn-automation.vercel.app/signup")
    await page.getByPlaceholder("Name").fill("Rashmi")
    await page.getByPlaceholder("Email").fill("rashmi.shah@corge.com")
    await page.getByPlaceholder("Password").fill("12345")
    await page.locator("(//input[contains(@type, 'checkbox')])[2]").check()
        
    const femaleOption = page.locator("#gender2")
    const maleOption = page.locator("#gender1")
    
        if (maleOption.isChecked(true)) {
             femaleOption.check();
            }

    await page.locator("#state").selectOption({value:"Arunachal Pradesh"})
    //await page.waitForTimeout(3000)
    await page.locator("#hobbies").selectOption(['Playing', 'Swimming'])
    await page.waitForTimeout(3000)
    await page.locator("//button[@type='submit']").click()

    const minCharPassword = await page.locator("//h2[text()='Password must be of atleast 6 characters']").innerText()
    console.log (minCharPassword)
    expect(minCharPassword).toBe("Password must be of atleast 6 characters")
    await page.screenshot({path: './screenshots/multipleDropdowns/SS-errorMinCharPasswrd.png', fullPage: true})
})

test ("Verify duplicate error msg Email registerd", async function ({page}) {
    
    await page.goto("https://freelance-learn-automation.vercel.app/signup")
    await page.getByPlaceholder("Name").fill("Rashmi")
    await page.getByPlaceholder("Email").fill("rashmi.shah3@corge.com")
    await page.getByPlaceholder("Password").fill("123456ASdf")
    await page.locator("(//input[contains(@type, 'checkbox')])[2]").check()
    await page.locator("#gender2").check()
    await page.locator("#state").selectOption({value:"Arunachal Pradesh"})
    await page.locator("#hobbies").selectOption(['Singing', 'Dancing'])
    await page.locator("//button[@type='submit']").click()
    
    const dupErrorEmailMsg = await page.locator("//h2[text()='Email already registered!']").innerText()
    expect(dupErrorEmailMsg).toBe("Email already registered!") //'Email already registered!'
    await page.screenshot({path:'./screenshots/multipleDropdowns/SS-dupliErrorEmailMsg.png', fullPage: true })

 })

 test ("Verify successful signup", async function ({page}) {
    
    await page.goto("https://freelance-learn-automation.vercel.app/signup")
    await page.getByPlaceholder("Name").fill("Rashmi")
    await page.getByPlaceholder("Email").fill("rashmi.shaha1@corge.com")
    await page.getByPlaceholder("Password").fill("123456ASdf")
    await page.locator("(//input[contains(@type, 'checkbox')])[2]").check()
    await page.locator("#gender2").check()
    await page.locator("#state").selectOption({value:"Arunachal Pradesh"})
    await page.locator("#hobbies").selectOption(['Singing', 'Dancing'])
    await page.locator("//button[@type='submit']").click()
    
    const successToastMsg = await page.waitForSelector("//div[@class='Toastify__toast-body']", {state:'visible'})
    const successMsg = await page.locator("//div[text()='Signup successfully, Please login!']").innerText()
    console.log(successMsg) //text: 'Signup successfully, Please login!'
    await page.screenshot({path:'./screenshots/multipleDropdowns/SS-SuccessfulSignin.png', fullPage: true })

 })

 test ("Verify dashboard contents", async function ({page}) {
    
    await page.goto("https://freelance-learn-automation.vercel.app/signup")
    await page.locator("//a[text()='Already a user? Login']").click()
    await page.getByPlaceholder("Enter Email").fill("rashmi.shah3@corge.com")
    await page.getByPlaceholder("Password").fill("123456ASdf")
    await page.locator("//button[text()='Sign in']").click()
    
    await page.locator("(//div[@class='course-card row'])[1]").isVisible()
    const course1 = await page.locator("//h2[text()='Java For Tester']").innerText()  //Course1
    expect(course1).toBe("JAVA FOR TESTER") //text: 'Java For Tester'
    
    await page.locator("(//div[@class='course-card row'])[2]").isVisible()
    const course2 = await page.locator("//h2[text()='Selenium For Web Automation']").innerText()  //Course2
    expect(course2).toBe("SELENIUM FOR WEB AUTOMATION") //text: 'Selenium For Web Automation'
    
    await page.screenshot({path:'./screenshots/multipleDropdowns/SS-dashbrdCourses.png', fullPage: true })

 })