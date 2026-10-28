import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('can navigate between all main pages from header', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to Work
    await page.getByRole('link', { name: 'Work' }).first().click();
    await page.waitForURL(/\/work/);
    await expect(page).toHaveURL(/\/work/);
    await expect(page).toHaveTitle(/Work/);
    
    // Navigate to Creative
    await page.getByRole('link', { name: 'Creative' }).first().click();
    await page.waitForURL(/\/creative/);
    await expect(page).toHaveURL(/\/creative/);
    await expect(page).toHaveTitle(/Creative/);
    
    // Navigate back to Home
    await page.getByRole('link', { name: 'David Ludington' }).first().click();
    await page.waitForURL(/^https:\/\/davidludington\.com\/?$/);
    await expect(page).toHaveURL(/^https:\/\/davidludington\.com\/?$/);
  });

  test('footer navigation works', async ({ page }) => {
    await page.goto('/work');
    
    const footerNav = page.locator('footer, nav').last();
    await footerNav.getByRole('link', { name: 'Home' }).click();
    await expect(page).toHaveURL(/^https:\/\/davidludington\.com\/?$/);
    
    await footerNav.getByRole('link', { name: 'Work' }).click();
    await expect(page).toHaveURL(/\/work/);
    
    await footerNav.getByRole('link', { name: 'Creative' }).click();
    await expect(page).toHaveURL(/\/creative/);
  });

  test('contact link from home goes to work contact section', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Contact Info' }).click();
    await page.waitForURL(/\/work/);
    await expect(page).toHaveURL(/\/work/);
  });
});
