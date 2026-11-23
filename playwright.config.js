// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  // Live third-party site: allow extra time for slower CI runners (e.g. Windows)
  expect: { timeout: 15000 },
  retries: process.env.CI ? 1 : 0,
  fullyParallel: false,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});