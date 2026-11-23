import { test, expect } from '@playwright/test';

const SWAP_URL = 'https://thetaswap.org/swap';

test('Search input should not break UI when space is entered', async ({ page }) => {
    await page.goto(SWAP_URL);
    await expect(page).toHaveURL(/swap/);

    const searchInput = page.getByPlaceholder('Search tokens, pools, addresses');
    await expect(searchInput).toBeVisible();

    await searchInput.click();
    await searchInput.fill('BTC');
    await searchInput.press('Space');

    // The swap form must stay on screen after unexpected input in the search field
    await expect(page.getByText('You pay', { exact: true })).toBeVisible();
    await expect(page.getByText('You receive', { exact: true })).toBeVisible();
});

test('Swap page should display main UI elements', async ({ page }) => {
    await page.goto(SWAP_URL);
    await expect(page).toHaveURL(/swap/);

    await expect(page.getByPlaceholder('Search tokens, pools, addresses')).toBeVisible();
    await expect(page.getByText('You pay', { exact: true })).toBeVisible();
    await expect(page.getByText('You receive', { exact: true })).toBeVisible();
    await expect(page.locator('input.amount-input').first()).toBeVisible();
    await expect(page.getByRole('button', { name: /connect wallet/i }).first()).toBeVisible();
});
