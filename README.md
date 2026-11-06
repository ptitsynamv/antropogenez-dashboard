# Antropogenez Dashboard

[![Deploy](https://github.com/ptitsynamv/antropogenez-dashboard/actions/workflows/deploy.yml/badge.svg?branch=master)](https://github.com/ptitsynamv/antropogenez-dashboard/actions/workflows/deploy.yml)
![Angular](https://img.shields.io/badge/Angular-8.2-DD0031?logo=angular&logoColor=white)
![Angular Material](https://img.shields.io/badge/Angular%20Material-8.2-3F51B5?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3.5-3178C6?logo=typescript&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-6.5-B7178C?logo=reactivex&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-12.x-339933?logo=node.js&logoColor=white)
![OAuth2](https://img.shields.io/badge/Auth-OAuth2%20implicit%20flow-black)
[![License: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)

An admin dashboard for the **Antropogenez** platform, built with Angular. It signs users in through a separate OAuth2 authorization server and manages content stored in the Antropogenez REST API: articles, featured article links, and utility (water meter) readings.

> This repository contains only the frontend. The OAuth2 server and the REST API are separate services and must be running and reachable for the dashboard to work.

## Features

- **OAuth2 login.** Implicit-flow sign-in via [`angular-oauth2-oidc`](https://github.com/manfredsteyer/angular-oauth2-oidc), with automatic silent token refresh.
- **Role-based access.** Feature pages require a valid access token. The Public Service section also requires the `admin` role, which is fetched from the authorization server.
- **Articles.** A paginated, read-only list of articles with a detail view.
- **F-Articles.** Create, edit and delete featured article entries (title + URL).
- **Public Service: water readings.** Record hot and cold water meter readings, pre-filled from the last submission, and browse or delete past entries.
- **Central error handling.** All API calls go through one service that attaches the Bearer token, redirects to a 404 page, logs out when a token has expired, and shows other errors as snackbar notifications.
- **Material UI.** Angular Material components with a custom theme, plus lazy-loaded feature modules.

## Tech stack

| Area | Technology |
| --- | --- |
| Framework | Angular 8.2 (NgModules, lazy-loaded routes) |
| UI | Angular Material 8 / CDK, SCSS + LESS |
| Language | TypeScript 3.5, RxJS 6 |
| Auth | `angular-oauth2-oidc` 8 (OAuth2 implicit flow) |
| Tooling | Angular CLI 8, TSLint, Karma/Jasmine, Protractor |
| Hosting | Apache (SPA rewrite via `.htaccess`), deployed by GitHub Actions over SFTP |

## Prerequisites

- **Node.js 12.x** (Angular CLI 8 supports Node `^10.9` or `^12`) and the npm that ships with it.
- **Git**
- A running **OAuth2 server** and **Antropogenez REST API** (see [Configuration](#configuration)).

### Use a legacy Node version

This is an Angular 8 / webpack 4 project and **it does not build on current Node releases**. On Node 17+ you'll typically see `error:0308010C:digital envelope routines::unsupported` (`ERR_OSSL_EVP_UNSUPPORTED`). Use a version manager so you can switch to Node 12 for this project only.

**macOS / Linux, with [nvm](https://github.com/nvm-sh/nvm):**

```bash
nvm install 12
nvm use 12
node -v   # v12.x
```

**Windows, with [nvm-windows](https://github.com/coreybutler/nvm-windows):**

```powershell
nvm install 12.22.12
nvm use 12.22.12
node -v   # v12.22.12
```

> **Not recommended:** if you have to use a newer Node, you can sometimes get past the OpenSSL error by setting `NODE_OPTIONS=--openssl-legacy-provider`. This setup isn't supported, and other incompatibilities may still come up.

## Getting started

1. **Clone the repository**

   ```bash
   git clone https://github.com/ptitsynamv/antropogenez-dashboard.git
   cd antropogenez-dashboard
   ```

2. **Switch to Node 12** (see above)

   ```bash
   nvm use 12
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Configure environments.** Edit `src/environments/environment.ts` (see [Configuration](#configuration)).

5. **Start the dev server**

   ```bash
   npm start
   ```

   Open <http://localhost:4200>. The app reloads when you change a source file.

## Configuration

Service endpoints are set at build time in the Angular environment files:

| File | Used by |
| --- | --- |
| `src/environments/environment.ts` | `npm start`, `npm run build` |
| `src/environments/environment.prod.ts` | `npm run build-prod` (via `fileReplacements` in `angular.json`) |

```ts
export const environment = {
  production: false,
  auth2Url: 'http://<oauth2-host>:3002',      // OAuth2 server; issuer is `${auth2Url}/oauth2`
  auth2ClientId: 'antropogenez-client-id',    // OAuth2 client ID registered for this app
  serverUrl: 'http://localhost:3003',         // REST API; requests go to `${serverUrl}/api/...`
};
```

The OAuth2 client must allow the dashboard's origin (for example `http://localhost:4200`) as a redirect URI. The OAuth discovery document must also expose a `user_role` URL, which the admin guard uses to fetch the user's role.

## Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Run the dev server at `http://localhost:4200` |
| `npm run build` | Development build to `dist/antropogenez-dashboard/` |
| `npm run build-prod` | Optimized AOT production build to `dist/antropogenez-dashboard/` |
| `npx ng lint` | Lint with TSLint |
| `npx ng test` | Run Karma unit tests (the specs are CLI-generated stubs) |
| `npx ng e2e` | Run Protractor end-to-end tests (boilerplate only) |

## Project structure

```text
antropogenez-dashboard/
├── .github/workflows/deploy.yml      # CI: build and SFTP deploy on push to master
├── .htaccess                         # Apache SPA rewrite (copied into the build)
├── antropogenez-dashboard.conf.example  # Apache virtual host template
├── angular.json                      # Angular CLI workspace config
├── e2e/                              # Protractor e2e scaffold
└── src/
    ├── environments/                 # environment.ts / environment.prod.ts
    ├── assets/                       # _theme.scss, _variables.scss
    ├── styles.scss                   # Global styles + Material theme
    └── app/
        ├── app.module.ts             # Root module
        ├── app-routing.module.ts     # Root routes + lazy-loaded features
        ├── material-module.ts        # Bundles all Material/CDK modules
        ├── components/               # App shell: app, main (home), not-found
        └── modules/
            ├── core/                 # Shared infrastructure
            │   ├── components/layouts/site-layout/  # Nav bar, login/logout
            │   ├── guards/           # LoginGuard, AuthGuard, AdminGuard
            │   ├── services/         # ApiService, Auth2Service, NotificationService
            │   └── interfaces/       # User, roles, ErrorResponse
            ├── article/              # /articles: paginated list + detail
            ├── f-article/            # /f-articles: CRUD
            └── public-service/       # /public-service: water readings (admin only)
```

Each feature module follows the same layout:

```text
<feature>/
├── <feature>.module.ts           # Declares components, provides the feature service
├── <feature>-routing.module.ts   # Child routes
├── components/                   # Page components
├── services/                     # Wraps ApiService calls for the feature's REST resource
└── interfaces/interfaces.ts      # Request/response models
```

### Routing and access

| Route | Module | Guards |
| --- | --- | --- |
| `/` | Home (`MainComponent`) | `LoginGuard` (finishes the OAuth redirect) |
| `/articles`, `/articles/:id` | `ArticleModule` | `AuthGuard` |
| `/f-articles`, `/f-articles/:id` (`create` for new) | `FArticleModule` | `AuthGuard` |
| `/public-service`, `/public-service/create` | `PublicServiceModule` | `AuthGuard` + `AdminGuard` |
| `**` | `NotFoundComponent` | none |

## Deployment

### Automated (GitHub Actions)

Every push to `master` runs [`deploy.yml`](.github/workflows/deploy.yml). It installs dependencies, runs `npm run build-prod`, then uploads `dist/antropogenez-dashboard/` over SFTP to `/var/www/html/antropogenez-dashboard`. Add these repository secrets: `SFTP_IP`, `SFTP_USERNAME`, `SFTP_PASSWORD`.

### Manual (Apache)

1. Set the production values in `src/environments/environment.prod.ts`.
2. Build: `npm run build-prod`.
3. Copy the contents of `dist/antropogenez-dashboard/` to `/var/www/html/antropogenez-dashboard` on the server.
4. Install Apache. Copy `antropogenez-dashboard.conf.example` to `/etc/apache2/sites-available/antropogenez-dashboard.conf`, then set `ServerName`, `DocumentRoot` and the other values for your server. `AllowOverride All` is required so the bundled `.htaccess` can rewrite routes to `index.html`.
5. Enable the site and disable the default one:

   ```bash
   a2ensite antropogenez-dashboard.conf
   a2dissite 000-default.conf
   ```

6. Validate the config and restart:

   ```bash
   apache2ctl configtest
   a2enmod rewrite && systemctl restart apache2
   ```

7. Open `http://<your-server-ip>`. Logs are in `/var/log/apache2/error.log`.

## License

This project is licensed under the [MIT License](LICENSE).
