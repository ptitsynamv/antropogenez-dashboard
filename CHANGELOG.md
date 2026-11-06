# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project uses [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
Each release is tagged in git (for example `1.0.0`).

Security fixes are listed under **Security**, with the CVE or GHSA identifier when one exists.

## [Unreleased]

### Added

- F-Articles section: create, edit and delete featured article entries.
- Public Service section (admin only): record and browse hot/cold water meter readings.
- Role-based access with an admin guard that reads the user's role from the OAuth2 server.
- Central API service with Bearer token, 404 redirect, logout on expired token, and snackbar error notifications.
- Custom Angular Material theme and site layout.
- Automated deployment to the production server over SFTP via GitHub Actions.
- README, MIT license, contributing guide, security policy, and this changelog.
- CI workflow (lint, unit tests, production build) and CodeQL static analysis.

## [1.0.0] - 2019-09-27

### Added

- Initial Angular 8 dashboard with lazy-loaded feature modules.
- Articles section: read-only list and detail view.
- Base styles and module structure.

[Unreleased]: https://github.com/ptitsynamv/antropogenez-dashboard/compare/1.0.0...HEAD
[1.0.0]: https://github.com/ptitsynamv/antropogenez-dashboard/releases/tag/1.0.0
