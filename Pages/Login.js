// pages/LoginPage.js
export class LoginPage {
    constructor(page) {
      this.page = page;
      this.usernameInput = page.locator('#username');
      this.passwordInput = page.locator('#password');
      this.signInButton = page.locator('#signInBtn');
      this.checkbox = page.locator('input[type="checkbox"]');
      this.dropdown = page.locator('select.form-control');
    }
  
    async enterCredentials() {
      await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
      await this.usernameInput.fill('rahulshettyacademy');
      await this.passwordInput.fill('learning');
      await this.dropdown.selectOption({ label: 'Student' });
      await this.checkbox.check();
      await this.signInButton.click();
      // No sleep in Playwright needed! Playwright auto-waits intelligently.
    }
  }
  