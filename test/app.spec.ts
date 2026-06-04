// @license
// Copyright (c) 2026 tssuite
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import { beforeEach, describe, expect, it } from 'vitest';

import { defaultTitle, renderApp } from '../src/app.ts';

describe('renderApp', () => {
  let mount: HTMLDivElement;

  beforeEach(() => {
    document.body.innerHTML = '';
    mount = document.createElement('div');
    mount.id = 'app';
    document.body.append(mount);
  });

  it('renders the default title', () => {
    renderApp(mount);
    const title = mount.querySelector('[data-testid="title"]');
    expect(title).not.toBeNull();
    expect(title!.textContent).toBe(defaultTitle);
  });

  it('renders a custom title', () => {
    renderApp(mount, { title: 'Hello' });
    expect(mount.querySelector('[data-testid="title"]')!.textContent).toBe(
      'Hello',
    );
  });

  it('renders a description', () => {
    renderApp(mount);
    const description = mount.querySelector('[data-testid="description"]');
    expect(description).not.toBeNull();
    expect(description!.textContent).toContain('tssuite browser app template');
  });

  it('clears previous content on re-render', () => {
    renderApp(mount);
    renderApp(mount);
    expect(mount.querySelectorAll('[data-testid="title"]')).toHaveLength(1);
  });

  it('returns the mount element', () => {
    expect(renderApp(mount)).toBe(mount);
  });
});
