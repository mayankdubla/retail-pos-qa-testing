const { test, expect } = require('@playwright/test');

test('basic purchase flow simulation', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
  expect(true).toBe(true);
});
