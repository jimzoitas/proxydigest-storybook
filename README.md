# ProxyDigest Storybook

This repository hosts the generated, isolated ProxyDigest component catalogue at <https://jimzoitas.github.io/proxydigest-storybook/>.

`site/` contains generated static output only. The source repository's `proxyRefactor` workflow builds Storybook with public demo fixtures and publishes that directory using a deploy key scoped to this repository. Publication commits identify their source commit. The publisher preserves this README and the Pages workflow.

The workflow in `.github/workflows/pages.yml` deploys only `site/` from `main`. GitHub Pages uses **GitHub Actions** as its publishing source. There is no application build, dependency installation or secret in this public repository.

The catalogue is an offline demonstration: examples use local fixtures, and changes do not reach a real service.
