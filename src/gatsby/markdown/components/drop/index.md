---
type: "Components"
badge: "Core"
parent: "Drop"
title: "Drop"
description: "Highly customizable dropdowns that can contain anything you want."
categories: ["100-Core"]
---

## Setup

To use this component import the **less** and **js** files accordingly:

```less
@import '~xtend-library/src/core/drop/drop.less';
```

```jsx
import 'xtend-library/src/core/drop/drop.js'
```

Or just import **core**:

```less
@import '~xtend-library/src/xtend-core.less';
```

```jsx
import 'xtend-library/src/xtend-core.js'
```

## Usage

Use this markup to create a **drop**.

<script type="text/plain" class="language-markup">
  <div class="drop-container" data-xt-drop>
    <button type="button">
      <!-- content -->
    </button>
    <div class="drop drop--default">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">
          <!-- content -->
        </div>
      </div>
    </div>
  </div>
</script>
