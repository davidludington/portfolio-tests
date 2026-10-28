# Portfolio Tests

Automated end-to-end tests for [davidludington.com](https://davidludington.com), a personal portfolio website. Built with [Playwright](https://playwright.dev/) and TypeScript.

## Purpose

This test suite validates the functionality and content of the portfolio website, ensuring:
- All pages load correctly with proper titles and content
- Navigation works between Home, Work, and Creative pages
- Key links (CV download, social profiles, project GitHub repos) are present and correct
- Contact information and portfolio sections display as expected

## Related Repositories

- **Portfolio Website**: [github.com/davidludington/portfolio](https://github.com/davidludington/portfolio) - The source code for the website being tested

## Test Coverage

| Test File | Coverage |
|-----------|----------|
| `tests/home.spec.ts` | Home page content, CV/contact links, social links, profile image |
| `tests/work.spec.ts` | Work page, current role/education, projects with GitHub links, skills/frameworks, contact section |
| `tests/creative.spec.ts` | Creative gallery, project links to subpages |
| `tests/navigation.spec.ts` | Cross-page navigation, footer links, anchor links |

## Setup

### Prerequisites
- Node.js
- npm

### Installation
```bash
npm install
npx playwright install
```

## Running Tests

```bash
# Run all tests
npx playwright test

# Run tests in headed mode
npx playwright test --headed

# Run specific test file
npx playwright test tests/home.spec.ts

# Run tests for a specific browser
npx playwright test --project=chromium

# View HTML report
npx playwright show-report
```

## Configuration

Tests run against `https://davidludington.com` as configured in `playwright.config.ts`. The suite runs across Chromium, Firefox, and WebKit browsers in parallel.

## CI

GitHub Actions workflow is configured in `.github/` for automated test runs.
