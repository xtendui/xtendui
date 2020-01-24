---
type: "Components"
badge: "Core"
parent: "List"
title: "List"
description: "Flex lists to space any element with margins, also spaces vertically."
categories: ["100-Core"]
---

## Setup

To use this component import the **less** files accordingly:

```less
@import '~xtend-library/src/core/list/list.less';
```

Or just import **core**:

```less
@import '~xtend-library/src/xtend-core.less';
```

[[noteDefault]]
| To modify a **less** or **js** file add [webpack resolve](/introduction/setup#usage-webpack) and fork the file copying it in your project.

## Usage

Use this markup to create a **row list**.

<script type="text/plain" class="language-markup">
  <ul class="list">
    <li><!-- content --></li>
    <li><!-- content --></li>
    <li><!-- content --></li>
  </ul>
</script>

Use this markup to create a **column list**.

<script type="text/plain" class="language-markup">
  <ul class="list-block">
    <li><!-- content --></li>
    <li><!-- content --></li>
    <li><!-- content --></li>
  </ul>
</script>
