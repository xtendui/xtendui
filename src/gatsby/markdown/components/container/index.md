---
type: "Components"
badge: "Core"
parent: "Container"
title: "Container"
description: "Component for containing layout with a max width and adding spacing on the side."
categories: ["100-Core"]
---

## Setup

To use this component import the **less** files accordingly:

```less
@import 'xtend-library/src/core/container/container.less';
```

Or just import **core**:

```less
@import 'xtend-library/src/xtend-core.less';
```

[[noteDefault]]
| To modify a **less** or **js** file add [webpack resolve](/introduction/setup#usage-webpack) and fork the file copying it in your project.

## Usage

Use this markup to create an **container**.

<script type="text/plain" class="language-markup">
  <div class="container">
    <!-- content -->
  </div>
</script>
