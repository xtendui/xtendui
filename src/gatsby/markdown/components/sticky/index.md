---
type: "Components"
badge: "Extensions"
parent: "Sticky"
title: "Sticky"
description: "Sticky elements with complex interactions."
categories: ["400-Extensions"]
---

## Setup

To use this component import the **less** and **js** files accordingly:

```less
@import '~xtend-library/src/extensions/sticky/sticky.less';
```

```jsx
import 'xtend-library/src/extensions/sticky/sticky.js'
```

Or just import **extensions**:

```less
@import '~xtend-library/src/xtend-extensions.less';
```

```jsx
import 'xtend-library/src/xtend-extensions.js'
```

## Usage

Use this markup to create a **sticky**.

<script type="text/plain" class="language-markup">
  <div data-xt-xticky>
    <div>
      <!-- content -->
    </div>
  </div>
</script>

[[noteDefault]]
| It's recomended to style and animate a inner div <code>[data-xt-xticky] > div</code> when using <strong>sticky component</strong>.
