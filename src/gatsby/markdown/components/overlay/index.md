---
type: "Components"
badge: "Core"
parent: "Overlay"
title: "Overlay"
description: "Component to create modals and menus that opens over the content, activable by interactions."
categories: ["100-Core"]
---

##Setup

To use this component import the **less** and **js** files accordingly:

```less
@import '~xtend-library/src/core/overlay/overlay.less';
```

```jsx
import 'xtend-library/src/core/overlay/overlay.js'
```

Or just import **core**:

```less
@import '~xtend-library/src/xtend-core.less';
```

```jsx
import 'xtend-library/src/xtend-core.js'
```

##Usage

Use this markup to create an **overlay**.

<script type="text/plain" class="language-markup">
  <button type="button" data-xt-overlay="{ targets: '#overlay--custom' }">
    <!-- content -->
  </button>
  <div class="overlay" id="overlay--custom">
    <div class="overlay-container">
      <div class="overlay-inner">
        <!-- content -->
      </div>
    </div>
  </div>
</script>

You can use this markup to create an **overlay** with **no toggle**.

<script type="text/plain" class="language-markup">
<div class="overlay active" id="overlay--custom" data-xt-overlay="{ on: false }">
  <div class="overlay-container">
    <div class="overlay-inner">
      <!-- content -->
    </div>
  </div>
</div>
</script>

[[noteError]]
| Overlays are moved to **body** to prevent **z-index** problems. Style and query overlay's content accordingly.
