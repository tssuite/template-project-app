// @license
// Copyright (c) 2026 tssuite
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

/**
 * Options for {@link renderApp}.
 */
export interface RenderAppOptions {
  /** The headline shown by the example app. */
  title?: string;
}

/** The default headline used when no title is provided. */
export const defaultTitle = '@tssuite/template-project-app';

/**
 * Renders the example app into the given mount element.
 *
 * This is the reusable, framework-free entry point of the template. Replace
 * its body with your own app while keeping it testable: it takes the mount
 * element (so unit tests can pass a jsdom element) and returns it.
 * @param mount - The element the app is rendered into.
 * @param options - Optional render options, see {@link RenderAppOptions}.
 * @returns The mount element, for convenient chaining in tests.
 */
export const renderApp = (
  mount: HTMLElement,
  options: RenderAppOptions = {},
): HTMLElement => {
  const title = options.title ?? defaultTitle;

  mount.innerHTML = '';

  const heading = document.createElement('h1');
  heading.textContent = title;
  heading.dataset.testid = 'title';

  const description = document.createElement('p');
  description.dataset.testid = 'description';
  description.textContent =
    'A tssuite browser app template with Playwright e2e tests and ' +
    'screenshot snapshots.';

  mount.append(heading, description);
  return mount;
};
