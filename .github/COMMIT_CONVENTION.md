
# Git Commit Message Convention

We use [Angular commit guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines) to describe each commit. If you are not sure if your pull request introduces breaking changes or feature, just ask.

Messages must be matched by the following regex.

``` js
/^(revert: )?(feat|fix|polish|docs|style|refactor|perf|test|workflow|ci|chore|types)(\(.+\))?: .{1,50}/
```

The format is this.

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

An example commit message for **fix** on the **button component**.

```
fix(button): <subject>
```

An example commit message for **feature** on the **slider component**.

```
feat(slider): <subject>
```

An example commit message for **docs**, that **closes the issue #28**.

```
docs: <subject>

close #28
```

An example commit message for **refactor on javascript**, that **introduce breaking changes**.

```
refactor(javascript): <subject>

BREAKING CHANGE: <description>
```

An example **generic hidden** commit message.

```
chore: <subject>
```
