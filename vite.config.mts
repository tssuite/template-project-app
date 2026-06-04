// @license
// Copyright (c) 2026 tssuite
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import { defineConfig } from 'vite';

// Standard Vite browser-app config (no library mode).
// https://vitejs.dev/config/
export default defineConfig({
  // Use a relative base so the built app also works when served from a
  // sub-path (e.g. GitHub Pages or a `vite preview` mount point).
  base: './',
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
