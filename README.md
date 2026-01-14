# Template App (Metalfile)

Example Node.js "hello world" app served via nginx and managed by systemd on port 3003. Built as a Debian package with Metalfile.

## Run locally

```bash
node app/app.js
```
Then visit http://localhost:3003.

## Build Debian package in CI

Pushes to `main` trigger the GitHub Actions workflow in `.github/workflows/build-and-publish.yml` to build the `.deb` into `dist/` and upload it as an artifact.
