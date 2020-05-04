---
type: "Components"
badge: "Core"
parent: "Card"
title: "Card"
description: "Generic component to display content in a box."
categories: ["100-Core"]
---

## Setup

To use this component import the **less** files accordingly:

```less
@import '~xtend-library/src/core/card/card.less';
```

Or just import **core**:

```less
@import '~xtend-library/src/xtend-core.less';
```

[[noteDefault]]
| To modify a **less** or **js** file add [webpack resolve](/introduction/setup#usage-webpack) and fork the file copying it in your project.

## Usage

Use this markup to create a **card**.

<script type="text/plain" class="language-markup">
  <div class="card card-default">
    <div class="card-design"></div>
    <div class="card-inner">
      <div class="card-content">

        <div class="card-asset">
          <!-- content -->
        </div>

        <div class="card-block card-item">
          <!-- content -->
        </div>

      </div>
    </div>
  </div>
</script>
