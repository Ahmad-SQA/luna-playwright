import { expect, test, locator } from "@playwright/test";

export class Loginpage {

    constructor(page) {
        this.page = page


        //Login selectors
        this.Email_input = '#email'
        this.password_input = 'input[name="login[password]"]'
        this.SignIn_Button = '.action.login'
        this.SignIn_Link = 'a[href="https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/"]';


    }

    async SignIn() {
        await this.page.goto('/')
        await this.page.click(this.SignIn_Link);
        await this.page.locator(this.Email_input).fill('user53877+test@mailosaur.net')
        await this.page.locator(this.password_input).fill('w%xg3Yglas@2')
        await this.page.locator(this.SignIn_Button).click()
        // 

    }
}