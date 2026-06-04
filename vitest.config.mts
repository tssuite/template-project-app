// @license
// Copyright (c) 2026 tssuite
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

/// <reference types="vitest" />

import { defineConfig } from 'vite';

// Vitest runs the unit tests (*.spec.ts) in a jsdom environment.
// Playwright e2e tests (*.e2e.ts) are handled separately and excluded here.
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./test/setup/test-setup.ts'],
      include: ['**/test/**/*.spec.ts'],
      exclude: ['**/test/e2e/**', '**/node_modules/**', '**/dist/**'],

      reporters: ['default'],
      coverage: {
        enabled: true,
        provider: 'v8',
        reporter: ['text', 'json', 'html'],
        include: ['src/**/*.ts'],
        // main.ts is the DOM bootstrap (covered by e2e); *.d.ts are types only.
        exclude: ['src/main.ts', 'src/**/*.d.ts'],
        all: true,
        thresholds: {
          statements: 100,
          branches: 100,
          functions: 100,
          lines: 100,
        },
        checkCoverage: true,
      },
    },
    define: {
      'import.meta.vitest': mode !== 'production',
    },
  };
});
