# Contributing

Ask first before starting work on any significant new features.

There's a issue template for that "Feature or Pull Request".

## Formatting

Check and fix code formatting.

```sh
npm run lint --fix
```

## Automatic testing

Until we have javascript tests don't make complex javascript code changes.

<!--
Check if your code passes the automatic testing.

```sh
npm run test
```
-->

## Git Commit Message Convention

We use [Angular commit guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines) to describe each commit. If you are not sure if your pull request introduces breaking changes or feature, just ask.

The format is this.

```sh
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

An example commit message for **fix** on the **button component**.

```sh
fix(button): <subject>
```

An example commit message for **feature** on the **slider component**.

```sh
feat(slider): <subject>
```

An example commit message for **docs**, that **closes the issue #28**.

```sh
docs: <subject>

close #28
```

An example commit message for **refactor on javascript**, that **introduce breaking changes**.

```
refactor(javascript): <subject>

BREAKING CHANGE: <description>
```

An example **generic hidden** commit message.

```sh
chore: <subject>
```
