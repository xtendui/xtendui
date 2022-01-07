# Contributing

Ask first before starting work on any significant new features.

## Pull Request Guidelines

- The master branch is just a snapshot of the latest stable release. All development should be done in dedicated branches `<version>-dev`. Do not submit PRs against the master branch.

- Checkout a topic branch from the relevant `-dev` branch (e.g.: `1.0-dev`), and merge back against that branch.

- Give a descriptive name of the topic branch use `feat/<name>`, `fix/<name>`, `docs/<name>`, `refactor/<name>`.

- If adding a new feature provide a convincing reason to add this feature.

- If fixing bug add issue linking with issue id (e.g.: `(close #xxxx)`).

- Generate and fix code formatting with `yarn generate`.

- Make sure all tests pass with `yarn lint && yarn build && yarn test`.

## Committing Changes

Commit messages should follow the [commit message convention](./COMMIT_CONVENTION.md) so that changelogs can be automatically generated.
