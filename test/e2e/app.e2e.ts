// @license
// Copyright (c) 2026 tssuite
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import { expect, test } from '@playwright/test';

test.describe('template-project-app', () => {
  test('renders the app and matches the screenshot', async ({ page }) => {
    await page.goto('/');

    // The app is mounted and shows its title.
    const title = page.getByTestId('title');
    await expect(title).toBeVisible();
    await expect(title).toHaveText('@tssuite/template-project-app');

    // Visual snapshot of the rendered app. Stored under
    // test/golden/snapshots; reviewed via git diff of the committed PNG.
    await expect(page).toHaveScreenshot('app.png', {
      fullPage: true,
    });
  });
});
