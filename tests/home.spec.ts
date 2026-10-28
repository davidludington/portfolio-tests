import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('loads with correct title and content', async ({ page }) => {
    await page.goto('/');
    
    await expect(page).toHaveTitle(/David Ludington/);
    await expect(page.getByRole('heading', { name: 'David Ludington' })).toBeVisible();
    await expect(page.getByText('Quality Assurance Engineer')).toBeVisible();
  });

  test('has CV download and contact links', async ({ page }) => {
    await page.goto('/');
    
    const cvLink = page.getByRole('link', { name: 'Download CV' });
    await expect(cvLink).toBeVisible();
    await expect(cvLink).toHaveAttribute('href', '/David-Ludington.pdf');
    
    const contactLink = page.getByRole('link', { name: 'Contact Info' });
    await expect(contactLink).toBeVisible();
    await expect(contactLink).toHaveAttribute('href', '/work#contact');
  });

  test('has social links', async ({ page }) => {
    await page.goto('/');
    
    const linkedinLink = page.getByRole('link').filter({ has: page.locator('img[alt*="LinkedIn"]') });
    await expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/david-ludington-903389249/');
    
    const githubLink = page.getByRole('link').filter({ has: page.locator('img[alt*="Github"]') });
    await expect(githubLink).toHaveAttribute('href', 'https://github.com/davidludington');
  });

  test('profile image is visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('img', { name: 'David Ludington profile picture' })).toBeVisible();
  });
});
