# Releasing

Releases use semantic versions and an annotated Git tag. Pushing a tag beginning with `v` triggers the release workflow, which performs a strict example build before creating the GitHub Release.

## Checklist

1. Confirm `main` is current and the working tree contains only intended release changes.
2. Move completed entries from **Unreleased** in `CHANGELOG.md` to a dated version heading.
3. Run the release build:

   ```sh
   hugo --source exampleSite --themesDir ../.. --theme spudlab-project-theme \
     --baseURL https://example.org/ --destination public \
     --minify --gc --panicOnWarning --printPathWarnings
   ```

4. Review the example site and commit the release changes.
5. Create and push an annotated tag matching the changelog version:

   ```sh
   git tag -a v0.1.0 -m "Release v0.1.0"
   git push origin main
   git push origin v0.1.0
   ```

6. Confirm the **Create GitHub release** workflow passes and publishes the release.
7. Confirm the **Deploy example site to GitHub Pages** workflow publishes the demonstration site.

For later releases, replace `v0.1.0` with the new version in both the changelog and commands.
