import { test, expect } from '@playwright/test';

test.describe('Work Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/work');
  });
  test('loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Work/);
  });

  test('displays current role and education', async ({ page }) => {
    await expect(page.getByText('Current Role')).toBeVisible();
    const aboutContainer = page.locator('.about-details-container');

    await expect(aboutContainer.filter({ has: page.getByText('QA Automation Engineer') })).toBeVisible();
    await expect(aboutContainer.filter({ has: page.getByText('Encyclopedia Britannica') })).toBeVisible();

    await expect(page.getByText('Loyola University Chicago')).toBeVisible();
    await expect(page.getByText('Bachelors of Science - 2025')).toBeVisible();
    await expect(page.getByText('Computer Science')).toBeVisible();
  });

  test('displays projects with GitHub links', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible();
    await expect(page.getByText('bag pattern generator')).toBeVisible();
    await expect(page.getByText('.jpeg - ASCII art')).toBeVisible();
    await expect(page.getByText('Snake Game')).toBeVisible();
    await expect(page.getByText('Schedule Builder')).toBeVisible();

    const asciiLink = page.getByRole('link', { name: 'Github' }).first();
    await expect(asciiLink).toHaveAttribute('href', 'https://github.com/davidludington/bag-pattern-generator');
  });

  test('displays skills and frameworks', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Experience' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Frameworks' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Languages' })).toBeVisible();

    await expect(page.getByText('Selenium').first()).toBeVisible();
    await expect(page.getByText('Appium').first()).toBeVisible();
    await expect(page.getByText('Pytest').first()).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Java', exact: true })).toBeVisible();
    await expect(page.getByText('Python').first()).toBeVisible();
  });

  test('has contact section with email and LinkedIn', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Contact Me' })).toBeVisible();

    const emailLink = page.getByRole('link', { name: /diludington@gmail.com/ });
    await expect(emailLink).toBeVisible();
    await expect(emailLink).toHaveAttribute('href', 'mailto:diludington@gmail.com');

    const linkedinLink = page.getByRole('link', { name: 'LinkedIn' }).last();
    await expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/david-ludington-903389249/');
  });
});
