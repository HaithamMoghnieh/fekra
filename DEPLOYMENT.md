# GitHub Pages

This is a React + Vite app. GitHub Pages must publish the production build,
not the repository root or the JSX source files.

- Application folder: `fekra/`
- Build command (inside that folder): `npm ci` then `npm run build`
- Published folder: `fekra/dist/`
- Website base path: `/fekra/`
- Public URL: https://haithammoghnieh.github.io/fekra/

In the repository's Settings → Pages, set Source to **GitHub Actions**.
Keep `.github/workflows/deploy.yml` as the Pages deployment workflow.
If GitHub created a separate workflow named “Deploy static content to Pages”
(often `static.yml`), remove that old workflow so it does not publish the
repository root over the built application.

Commit and push the deployment files to `master` or `main`, then check the
“Build and deploy Fekra to GitHub Pages” run in the Actions tab. It can also
be started manually. The workflow builds the nested app and uploads only
`fekra/dist`, where `index.html` sits at the top of the published artifact.

For a local production preview, run `npm run build` and `npm run preview`
inside `fekra/`, then open the preview URL with `/fekra/` appended.
