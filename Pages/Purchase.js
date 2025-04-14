// pages/PurchasePage.js
export class PurchasePage {
    constructor(page) {
      this.page = page;
      this.countryInput = page.locator('#country');
      this.countrySuggestions = page.locator('.suggestions ul a');
      this.termsCheckbox = page.locator('[for="checkbox2"]');
      this.purchaseButton = page.locator('[value="Purchase"]');
      this.successMessage = page.locator('.alert.alert-success.alert-dismissible strong');
    }
  
    async completePurchase() {
      await this.countryInput.type('Ind');
      await this.page.waitForSelector('.suggestions ul a');  // wait for suggestions to appear
  
      const countryElements = await this.countrySuggestions.all();
      for (let country of countryElements) {
        const countryText = await country.textContent();
        if (countryText.trim() === 'India') {
          await country.click();
          break;
        }
      }
  
      await this.termsCheckbox.click();
      await this.purchaseButton.click();
      await this.successMessage.waitFor();  // Wait for success message
  
      const successText = await this.successMessage.textContent();
      if (successText.trim() !== 'Success!') {
        throw new Error('Purchase was not successful!');
      }
    }
  }
  