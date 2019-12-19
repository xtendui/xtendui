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

## Usage

Use this markup to create a **row list**.

<script type="text/plain" class="language-markup">
  <ul class="list list-default">
    <li><!-- content --></li>
    <li><!-- content --></li>
    <li><!-- content --></li>
  </ul>
</script>

Use this markup to create a **column list**.

<script type="text/plain" class="language-markup">
  <ul class="list-block list-default">
    <li><!-- content --></li>
    <li><!-- content --></li>
    <li><!-- content --></li>
  </ul>
</script>
