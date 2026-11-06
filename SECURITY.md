# Security Policy

## Supported versions

Only the latest code on the `master` branch (the version deployed to production) receives security fixes.

## Reporting a vulnerability

**Please do not report security vulnerabilities through public GitHub issues, pull requests, or discussions.**

Report them privately through GitHub's private vulnerability reporting:

1. Go to <https://github.com/ptitsynamv/antropogenez-dashboard/security/advisories/new>
   (or the repository's **Security** tab → **Report a vulnerability**).
2. Include:
   - a description of the issue and its impact,
   - steps to reproduce or a proof of concept,
   - affected files, routes, or versions,
   - any suggested fix.

## What to expect

- **Initial response:** within 14 days of your report.
- **Updates:** we will keep you informed while we investigate and fix the issue.
- **Disclosure:** once a fix is released, we will publish a GitHub Security Advisory and mention the fix in [CHANGELOG.md](CHANGELOG.md). We are happy to credit you unless you prefer to stay anonymous.

## Scope

This repository contains only the frontend dashboard. Vulnerabilities in the OAuth2 server or the Antropogenez REST API should still be reported here; we will forward them to the right place.
