// @license
// Copyright (c) 2026 tssuite
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import { defineConfig, devices } from '@playwright/test';

const port = 5173;
const baseURL = `http://localhost:${port}`;

// Playwright drives the browser e2e tests (*.e2e.ts) and stores screenshot
// snapshots under test/golden/snapshots.
//
// Snapshot policy: missing snapshots are written and treated as passing
// ("updateSnapshots: 'missing'"); existing ones are compared. The actual
// review of the rendered output happens via git diff of the committed PNGs.
export default defineConfig({
  testDir: './test/e2e',
  testMatch: '**/*.e2e.ts',

  // Golden screenshots live in test/golden/snapshots (testDir is test/e2e).
  snapshotPathTemplate:
    '{testDir}/../golden/snapshots/{testFileName}/{arg}-{projectName}{ext}',

  updateSnapshots: 'missing',

  // Font rendering differs between machines: the same diagram comes out a
  // pixel or two off on another Linux box, and Windows differs again. A
  // small tolerance keeps the goldens portable while a real change to the
  // rendered output — different labels, boxes, colours — still trips the
  // comparison.
  expect: {
    toHaveScreenshot: { maxDiffPixelRatio: 0.02 },
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: 'list',

  use: {
    baseURL,
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  webServer: {
    command: `pnpm exec vite --port ${port} --strictPort`,
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
