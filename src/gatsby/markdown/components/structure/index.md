---
type: "Components"
badge: "Core"
parent: "Structure"
title: "Structure"
description: "Structure styles, variables and utils."
categories: ["100-Core"]
date: "2018-01-01"
---

## Setup

To use this component import the **less** files accordingly:

```less
@import '/src/core/structure/structure.less';
@import '/src/core/structure/variables.less';
@import '/src/core/structure/utils.less';
```

Or just import **core**:

```less
@import '/src/xtend-core.less';
```

[[noteDefault]]
| To modify a **less** or **js** file add [webpack resolve](/introduction/setup#usage-webpack) and fork the file copying it in your project.

## Theming

For an explanation of the css file content see [structure css](/components/structure/css).
