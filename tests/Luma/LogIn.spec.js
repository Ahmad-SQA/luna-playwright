import {test ,expect} from '@playwright/test'
import { Loginpage } from '../../pages/LogIn'


test('Login to Luma', async ({ page }) => {

    const logInpage=new Loginpage(page)
    await logInpage.SignIn()

    }) 
