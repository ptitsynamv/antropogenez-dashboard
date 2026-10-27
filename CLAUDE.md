# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Admin dashboard (Angular **8**, Angular Material 8, RxJS 6, TypeScript 3.5) for the "Antropogenez" backend. It authenticates against a separate OAuth2 server and calls a separate REST API; neither backend lives in this repo.

**Version note:** this is a legacy Angular 8 / NgModule / TSLint codebase. Global rules written for Angular 16 (standalone components, signals, `takeUntilDestroyed`, typed forms, `slg-` prefix, ESLint, `npm run fix-lint`) do not apply as-is — those APIs don't exist here. Match the existing patterns: NgModules, `app-` selector prefix, constructor injection, TSLint.

## Commands

- `npm install` — install deps (Node version must be compatible with Angular CLI 8).
- `npm start` — dev server (`ng serve`, http://localhost:4200).
- `npm run build` — dev build.
- `npm run build-prod` — production build to `dist/antropogenez-dashboard/` (swaps in `environment.prod.ts`).
- `npx ng lint` — TSLint (`tslint.json`, `src/tslint.json`); there is no npm script for it.
- `npx ng test` — Karma/Jasmine. The `*.spec.ts` files are mostly CLI-generated stubs and are not maintained; don't rely on them as a working suite. `npx ng e2e` (Protractor) is likewise boilerplate.

New components default to SCSS (angular.json schematics), though some existing components use `.less`.

## Configuration

`src/environments/environment.ts` / `environment.prod.ts` hold `auth2Url` (OAuth2 server), `auth2ClientId`, and `serverUrl` (REST API). Dev points `serverUrl` at `http://localhost:3003`, so a local API is expected during development.

## Architecture

- **Routing** ([src/app/app-routing.module.ts](src/app/app-routing.module.ts)): everything renders inside `SiteLayoutComponent` (nav + login/logout), guarded by `LoginGuard`. Feature modules are lazy-loaded under `articles`, `f-articles`, `public-service`, each behind `AuthGuard`. `public-service` routes additionally use `AdminGuard`.
- **Auth** ([src/app/modules/core/services/auth2-service.ts](src/app/modules/core/services/auth2-service.ts)): wraps `angular-oauth2-oidc` using the **implicit flow** (`oidc: false`, issuer `auth2Url + '/oauth2'`). `LoginGuard` detects the `#access_token=...` redirect fragment and calls `tryLogin()`. `AuthGuard` only checks `hasValidAccessToken()`. `AdminGuard` fetches the user's role as plain text from the custom `user_role` URL in the OAuth discovery document and compares to `UserRoleE.ADMIN`.
- **HTTP** ([src/app/modules/core/services/api.service.ts](src/app/modules/core/services/api.service.ts)): all feature services go through `ApiService`, which prefixes `serverUrl + '/api/'`, attaches the Bearer token, and centralizes error handling — 404 navigates to the not-found page, 401 logs out and reloads to `/`, everything else is shown via `NotificationService`. Feature code therefore usually doesn't handle errors itself. Errors are normalized into `ErrorResponse` (core interfaces).
- **Notifications**: `NotificationService` exposes `successNotification` / `errorNotification` Subjects; calling `.next(msg)` shows a MatSnackBar. (`ngx-toastr` is also registered but snackbar is what's used.)
- **CoreModule** ([src/app/modules/core/core.module.ts](src/app/modules/core/core.module.ts)): declares the layout, configures `OAuthModule.forRoot()`, and re-exports Forms/ReactiveForms plus `DemoMaterialModule` ([src/app/material-module.ts](src/app/material-module.ts), which bundles all Material/CDK modules). Feature modules import `CoreModule` to get Material and forms.
- **Feature module layout** (`src/app/modules/<feature>/`): `<feature>.module.ts` + `<feature>-routing.module.ts`, `components/`, `services/` (provided in the feature module's `providers`, wrapping `ApiService` calls to a REST resource like `f-article` or `public-service-water`), and `interfaces/interfaces.ts`. `article` is read-only (list/detail); `f-article` and `public-service` (water readings) have CRUD. Follow this layout when adding a feature, and register its lazy route in `app-routing.module.ts` and a nav link in `SiteLayoutComponent.links`.

## Deployment

Pushing to `master` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml): `npm run build-prod`, then SFTP upload of `dist/antropogenez-dashboard/` to `/var/www/html/antropogenez-dashboard` on the server. It's served by Apache; `.htaccess` (copied into the build via angular.json assets) rewrites all routes to `index.html`. See `antropogenez-dashboard.conf.example` and README for the Apache vhost setup.
