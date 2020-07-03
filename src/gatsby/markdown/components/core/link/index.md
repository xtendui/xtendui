---
type: "Components"
category: "Core"
parent: "Link"
title: "Link"
description: "Global link styles."
---

## Setup

To use this component import the **less** files accordingly:

```less
@import 'xtend-library/src/core/link/link.less';
```

Or just import **core**:

```less
@import 'xtend-library/src/xtend-core.less';
```

[[noteDefault]]
| To modify a **less** or **js** file add [webpack resolve](/introduction/setup#usage-webpack) and fork the file copying it in your project.

## Usage

Use this markup to create a **link**.

<script type="text/plain" class="language-markup">
  <a href="#">
    <!-- content -->
  </a>

  <button type="button" class="btn btn-link">
    <!-- content -->
  </button>
  
  <div class="a-link>
    <!-- content -->
  </div>
</script>
