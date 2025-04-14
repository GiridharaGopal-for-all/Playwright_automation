// pages/HomePage.js
export class HomePage {
    constructor(page) {
      this.page = page;
      this.productTitles = page.locator('h4.card-title a');
      this.addToCartButtons = page.locator('button.btn.btn-info');
    }
  
    async addSelectedProductsToCart() {
      await this.page.waitForTimeout(3000)
      const text = await this.productTitles.allTextContents();
      const mobiles = ["Nokia Edge", "Blackberry"];
    
    for (let i = 0; i < text.length; i++) {
      if (mobiles.includes(text[i])) {
        await this.addToCartButtons.nth(i).click();
        }
      }


  }}