import { test, expect } from '@playwright/test'
import Helper from '../support/Helper';


export class SignUpPage {
    constructor(page) {
        this.page = page;
        // SignUp Selectots
        this.SignIn_Link = 'a[href="https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/"]';
        this.CreateAccount_Link = ('a.action.create.primary');
        this.FirstName_input = '#firstname';
        this.LastName_input = '#lastname';
        this.Email_input = '#email_address';
        this.Password_input = 'input#password';
        this.ConfirmPassword_input = 'input#password-confirmation';
        this.CreateAccount_Button = '.action.submit';
    }

    async navigateToSignUp() {

        await this.page.goto('/')
        // await this.page.locator('li.authorization-link').click()
        await this.page.click(this.SignIn_Link);
    }

    async CreateAccount() {
        await this.page.click(this.CreateAccount_Link)
    }

    async PersonalInformation(email, password) {
        await this.page.locator(this.FirstName_input).fill('playwright')
        await this.page.locator(this.LastName_input).fill('Test')
        await this.page.locator(this.Email_input).fill(email)
        await this.page.locator(this.Password_input).fill(password)
        await this.page.locator(this.ConfirmPassword_input).fill(password)
        await this.page.locator(this.CreateAccount_Button).click()


    }

}