# Contributing to Antropogenez Dashboard

Thanks for your interest in improving the dashboard! This guide explains how to report problems, suggest features, and send changes.

## Reporting bugs and requesting features

Use GitHub Issues: <https://github.com/ptitsynamv/antropogenez-dashboard/issues>

- **Bugs:** describe what you did, what you expected, and what happened. Include your browser, Node version (`node -v`), and any console or network errors.
- **Feature requests:** describe the problem you want to solve and, if you have one, your proposed solution.
- Search existing issues first to avoid duplicates.
- Issues and comments in English are welcome.

**Do not report security vulnerabilities in public issues.** See [SECURITY.md](SECURITY.md).

## Sending changes (pull requests)

1. Fork the repository and create a branch from `master` (for example `fix/login-redirect`).
2. Set up the project as described in the [README](README.md#getting-started) (Node 12 is required).
3. Make your change, keeping it focused on one topic.
4. Run the checks locally:

   ```bash
   npx ng lint
   npx ng test --watch=false
   npm run build-prod
   ```

5. Open a pull request against `master` with a clear description of what changed and why. Link the related issue if there is one.

The maintainer reviews pull requests on GitHub. CI must pass before a PR is merged.

## Requirements for acceptable contributions

- **Coding style:** follow the existing patterns. This is an Angular 8 project that uses NgModules, constructor injection, and the `app-` selector prefix. Formatting follows [.editorconfig](.editorconfig) (2 spaces, UTF-8, final newline).
- **Lint:** `npx ng lint` (TSLint, see [tslint.json](tslint.json)) must pass with no new warnings.
- **Feature layout:** new features go in `src/app/modules/<feature>/` with the module, routing module, `components/`, `services/`, and `interfaces/` structure described in the README.
- **HTTP calls:** go through `ApiService`; don't call `HttpClient` directly from feature code.
- **No secrets:** never commit credentials, tokens, or private server details. Environment values belong in `src/environments/`, and deployment secrets in GitHub Actions secrets.
- **Tests:** see the policy below.
- **License:** by contributing, you agree that your contribution is licensed under the [MIT License](LICENSE).

## Test policy

- Any major new functionality (a new feature module, service, guard, or significant behavior change) must come with automated unit tests (Karma/Jasmine `*.spec.ts` next to the code).
- Bug fixes should include a test that reproduces the bug where practical.
- Tests run in CI on every push and pull request (see [.github/workflows/ci.yml](.github/workflows/ci.yml)).

## Changelog

User-facing changes should be recorded in [CHANGELOG.md](CHANGELOG.md) under the `Unreleased` section.
