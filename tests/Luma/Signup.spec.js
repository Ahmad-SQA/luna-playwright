import { test, expect } from '@playwright/test';
import { SignUpPage } from '../../pages/Signup';
import { Helper } from '../../support/Helper'


test('SignUp to Luma', async ({ page }) => {

  const helper = new Helper();
  const signUpPage = new SignUpPage(page);
  const email = helper.generateRandomEmail();
  const password = helper.generateRandomPassword();

  console.log('Generated Email:', email);
  console.log('Generated Password:', password);

  await signUpPage.navigateToSignUp()
  await signUpPage.CreateAccount()
  await signUpPage.PersonalInformation(email, password)


}) 
