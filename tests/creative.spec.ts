import { test, expect } from '@playwright/test';

test.describe('Creative Page', () => {
  test('loads with correct title', async ({ page }) => {
    await page.goto('/creative');
    
    await expect(page).toHaveTitle(/Creative/);
  });

  test('displays introduction text', async ({ page }) => {
    await page.goto('/creative');
    
    await expect(page.getByText(/leatherworker and maker/i)).toBeVisible();
  });

  test('has gallery of creative projects', async ({ page }) => {
    await page.goto('/creative');
    
    // Check for some known project links
    await expect(page.getByRole('link').filter({ has: page.locator('img[alt="Red Leather Bag"]') })).toBeVisible();
    await expect(page.getByRole('link').filter({ has: page.locator('img[alt="Patchwork Leather Bag"]') })).toBeVisible();
    await expect(page.getByRole('link').filter({ has: page.locator('img[alt="Green Leather Bag"]') })).toBeVisible();
    
    // Check they link to subpages
    const redLeatherLink = page.getByRole('link').filter({ has: page.locator('img[alt="Red Leather Bag"]') });
    await expect(redLeatherLink).toHaveAttribute('href', '/creative/red-leather');
  });

  test('gallery has multiple project links', async ({ page }) => {
    await page.goto('/creative');
    
    const projectLinks = page.locator('a[href^="/creative/"]').filter({ has: page.locator('img') });
    await expect(projectLinks.first()).toBeVisible();
    const count = await projectLinks.count();
    expect(count).toBeGreaterThan(5);
  });
});
