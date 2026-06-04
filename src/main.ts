// @license
// Copyright (c) 2026 tssuite
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import { renderApp } from './app.ts';
import './style.css';

const mount = document.querySelector<HTMLDivElement>('#app');
if (mount) {
  renderApp(mount);
}
