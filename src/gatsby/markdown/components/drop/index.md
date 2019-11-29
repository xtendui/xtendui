---
type: "Components"
badge: "Core"
parent: "Drop"
title: "Drop"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
categories: ["100-Core"]
---

##Setup

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

##Usage

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

##Initialization

Initialize automatically within markup with `[data-xt-drop="{ <options> }"]`.

Or initialize with javascript:

```jsx
new Xt.Drop(document.querySelector('.my-drop'), {
  // options
});
```

For options and events visit the [api page](/components/drop/api).
