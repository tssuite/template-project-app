<!--
@license
Copyright (c) 2026 tssuite

Use of this source code is governed by terms that can be
found in the LICENSE file in the root of this package.
-->

# @tssuite/template-project-app

A tssuite template for **browser apps**. It is the app counterpart to
[`@tssuite/template-project`](https://github.com/tssuite/template-project)
(which targets libraries) and adds:

- A **Vite** browser app (`index.html` + `src/main.ts`).
- **Vitest** unit tests (`test/**/*.spec.ts`, jsdom environment).
- **Playwright** end-to-end tests (`test/e2e/**/*.e2e.ts`).
- **Screenshot snapshots** stored in `test/golden/snapshots`.

## Getting started

```bash
pnpm install
pnpm exec playwright install chromium   # one-time: download the browser
pnpm dev          # start the dev server
pnpm test         # vitest unit tests + coverage + lint
pnpm test:e2e     # playwright e2e tests (writes/compares screenshots)
pnpm build        # type-check + production build
```

## Layout

| Path                     | Purpose                                         |
| ------------------------ | ----------------------------------------------- |
| `src/main.ts`            | DOM bootstrap — mounts the app into `#app`.     |
| `src/app.ts`             | Reusable, testable app logic.                   |
| `test/*.spec.ts`         | Vitest unit tests.                              |
| `test/e2e/*.e2e.ts`      | Playwright e2e tests.                           |
| `test/golden/snapshots/` | Committed screenshot snapshots.                 |
| `playwright.config.ts`   | Playwright config (web server + snapshot path). |

## Snapshot policy

Screenshot snapshots are **written** on first run (`updateSnapshots: 'missing'`)
and **compared** on later runs. The actual review of the rendered output is done
via `git diff` of the committed PNGs — mirroring the golden-file policy of the
tssuite libraries. Use `pnpm updateSnapshots` to refresh them intentionally.

## Deriving a new app

Copy this project, rename it in `package.json` (`name`, `homepage`, `bugs`,
`repository`), then replace `src/app.ts` with your app and adapt the tests.
