import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/Login';
import { HomePage } from '../Pages/Home';
import { CheckoutPage } from '../Pages/Checkout';
import { PurchasePage } from '../Pages/Purchase';

test('Complete E2E Purchase Flow', async ({ page }) => {
  // Create page objects
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const checkoutPage = new CheckoutPage(page);
  const purchasePage = new PurchasePage(page);

  await loginPage.enterCredentials();

  // Step 2: Add products to cart
  await homePage.addSelectedProductsToCart();

  // Step 3: Verify cart totals and proceed
  await checkoutPage.verifyAndProceedToCheckout();

  // Step 4: Complete the purchase
  await purchasePage.completePurchase();

  // Step 5: Final Assertion (Optional - already inside purchasePage)
  console.log('✅ Test Passed: Order placed successfully!');
});
