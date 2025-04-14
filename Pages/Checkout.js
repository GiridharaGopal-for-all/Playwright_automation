// pages/CheckoutPage.js
export class CheckoutPage {
    constructor(page) {
      this.page = page;
      this.cartCheckoutButton = page.locator('a.nav-link.btn.btn-primary');
      this.individualPrices = page.locator('.table-hover tr td:nth-child(4) strong');
      this.totalPriceText = page.locator('.table-hover tr td h3 strong');
      this.proceedButton = page.locator('button.btn.btn-success');
    }
  
    async verifyAndProceedToCheckout() {
      await this.cartCheckoutButton.click();
  
      const itemPrices = await this.individualPrices.all();
      let calculatedTotal = 0;
      for (const priceElement of itemPrices) {
        const priceText = await priceElement.textContent();
        const amount = parseInt(priceText.trim().split(' ')[1]);
        calculatedTotal += amount;
      }
      console.log(`Calculated total from items: ${calculatedTotal}`);
  
      const displayedTotalText = await this.totalPriceText.textContent();
      const displayedTotal = parseInt(displayedTotalText.trim().split(' ')[1]);
      console.log(`Displayed total: ${displayedTotal}`);
  
      if (calculatedTotal !== displayedTotal) {
        throw new Error('Total price mismatch!');
      }
  
      await this.proceedButton.click();
    }
  }
  