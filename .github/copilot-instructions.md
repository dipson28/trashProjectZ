## Quick context

This repo is a small Playwright test suite. Key paths:

- `playwright.config.js` — project config (projects, reporter, trace settings). Note: config sets `testDir: './tests'` and `reporter: 'html'`.
- `tests/` — test suites organized by feature (e.g. `GoogleNews/`, `MultipleWebsites/`).
- `utils/` — small helper modules (CommonJS `module.exports`) such as `browserContext.spec.js` and `googleNewsNavigator.spec.js`.
- `screenshots/` — tests write screenshots to repo-relative `./screenshots/...` paths.

Dev deps: `@playwright/test` (see `package.json`). There are no `scripts` defined in `package.json`; prefer invoking Playwright directly with `npx playwright test`.

## What matters for an AI coding agent

1. Test style: files use Playwright's `test` API but are written in CommonJS (`const { test, expect } = require('@playwright/test')`) while `playwright.config.js` uses ESM `import`/`export default`. When editing tests or helpers keep CommonJS exports unless you change the whole runtime.

2. Screenshots and artifacts: many tests call `page.screenshot({ path: './screenshots/...', fullPage: true })`. Preserve these relative paths and the `fullPage` flag when adding or updating tests.

3. Viewport usage: tests call `test.use ({viewPort:{...}})`. Be consistent with existing tests (they use the `viewPort` casing), but note Playwright's option name is `viewport` (lowercase) — do not silently refactor casing across many files; flag this as a potential repo-wide inconsistency to the human.

4. Playwright config quirks:
   - `playwright.config.js` enables `fullyParallel`, `reporter: 'html'`, `trace: 'on-first-retry'` and a `chromium` project.
   - There's a typo/duplication: both `retries` and `retires` appear. Do NOT auto-fix this without a PR note; point it out and suggest removing `retires`.
   - CI-sensitive flags exist (`forbidOnly`, `workers`, `retries`). When adding tests that use `.only`, remove them before merge.

5. Helper modules: `utils/` helpers use Playwright lower-level API (e.g., `chromium.launch()`) and are CommonJS. When writing new helpers follow the same export pattern (`module.exports = { ... }`).

6. Test patterns to follow (examples from repo):
   - Navigation/assertion: `await page.goto('https://google.com')` then `const title = await page.title(); expect(title).toContain('Google')` (see `tests/GoogleNews/testPageOpen.test.js`).
   - Use locator strategies already used: `page.getByLabel`, `page.getByPlaceholder`, `page.locator('//xpath')` and `frameLocator(...)`. Prefer to reuse the same strategies in a test file for consistency.

7. Third-party libs: some tests import `@faker-js/faker` for test data (see `tests/MultipleWebsites/multipleDropdowns.spec.js`). If you add data generation, add it as a dev dependency and document it in PR description.

## How to run & debug (Windows PowerShell)

Use Playwright CLI from repo root. Examples:

```powershell
# run all tests (use npx since package.json has no scripts)
npx playwright test

# run a single file
npx playwright test tests/GoogleNews/testPageOpen.test.js

# run headed in Chromium for debugging
npx playwright test --project=chromium --headed

# open the HTML report after a run
npx playwright show-report
```

When debugging, keep `--headed` and optionally `--debug` or `PWDEBUG=1` env var.

## Rules for editing and PRs (actionable)

- Preserve CommonJS vs ESM choices unless the change is a deliberate repo-wide migration and documented in PR.
- Point out and isolate any Playwright config fixes (e.g., remove `retires`), do not silently change them in a single commit.
- Keep screenshot paths and folder structure; if you rename screenshot directories, update tests that reference them.
- Avoid leaving `test.only` in source. The config will not allow it on CI (`forbidOnly`), so catch/clear `.only` before submitting.

## When you can't find something

- If a test fails due to missing `npm` scripts, prefer running with `npx` and ask the maintainer whether they want scripts added to `package.json`.
- If you see mixed ESM/CommonJS causing runtime errors, report the inconsistency and propose a small migration PR rather than changing both styles in a single automated edit.

## Where to look for examples

- `tests/GoogleNews/testPageOpen.test.js` — navigation, frame locators, screenshots.
- `tests/MultipleWebsites/multipleDropdowns.spec.js` — use of `faker`, form interactions, screenshots.
- `utils/browserContext.spec.js` — shared browser context helper pattern.

If any of these assumptions are incomplete or you want a different tone/level of detail, tell me which sections to expand or examples to add.
