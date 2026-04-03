import { test, expect } from '@playwright/test';

test('Search input should not break UI when space is entered', async ({ page }) => {
    await page.goto('https://thetaswap.org/swap');
    await expect(page).toHaveURL(/swap/);

    const searchInput = page.locator('input[placeholder="Search tokens and pairs..."]');

    await expect(searchInput).toBeVisible();

    await searchInput.click();
    await searchInput.fill('BTC');
    await searchInput.press('Space');

    const swapTitle = page.locator('.title', { hasText: 'Swap' });
    await expect(swapTitle).toBeVisible();
});

test('Swap page should display main UI elements', async ({ page }) => {
    await page.goto('https://thetaswap.org/swap');

    await expect(page).toHaveURL(/swap/);

    await expect(page.locator('.title', { hasText: 'Swap' })).toBeVisible();
    await expect(page.locator('input[placeholder="Search tokens and pairs..."]')).toBeVisible();
    await expect(page.locator('text=Select A Token').first()).toBeVisible();
});