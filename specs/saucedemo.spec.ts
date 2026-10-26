import { test, expect } from '@playwright/test';

test.describe('Saucedemo Test Cases', () => {

  test('TC-CP-001: Add item to cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await page.click('#add-to-cart-sauce-labs-backpack');

    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  });

  test('TC-CKO-002: Complete checkout process', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await page.click('#add-to-cart-sauce-labs-backpack');
    await page.click('.shopping_cart_link');

    await page.click('#checkout');
    await page.fill('#first-name', 'Test');
    await page.fill('#last-name', 'User');
    await page.fill('#postal-code', '10110');
    await page.click('#continue');

    await page.click('#finish');
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
  });

  test('TC-CP-002: Remove item from cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('#add-to-cart-sauce-labs-backpack');

    await page.click('.shopping_cart_link');

    await page.click('#remove-sauce-labs-backpack');

    await expect(page.locator('.shopping_cart_badge')).not.toBeVisible();
  });

});