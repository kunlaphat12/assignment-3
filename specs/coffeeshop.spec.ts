import { test, expect } from '@playwright/test';

test.describe('Coffee Shop Test Cases', () => {

  test('TC-CS-001: Add item to cart', async ({ page }) => {
    await page.goto('https://seleniumbase.io/coffee/');
    await page.click('[data-sb="Espresso"]');
    await page.click('text=cart');
    await expect(page.locator('body')).toContainText('Espresso');
  });

  test('TC-CS-002: Remove item from cart', async ({ page }) => {
    await page.goto('https://seleniumbase.io/coffee/');
    await page.click('[data-sb="Espresso"]');
    await page.click('text=cart');
    await page.click('button:has-text("x"), .delete');
    await expect(page.locator('body')).not.toContainText('Espresso');
  });

  test('TC-CS-003: Increase item quantity in cart', async ({ page }) => {
    await page.goto('https://seleniumbase.io/coffee/');

    await page.click('[data-sb="Espresso"]');
    await page.click('text=cart');
    
    await page.getByRole('button', { name: 'Add one Espresso' }).click();
    
    await expect(page.locator('body')).toContainText('Total: $20.00');
  });

});