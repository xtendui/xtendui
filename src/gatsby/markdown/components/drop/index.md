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
    <div class="drop drop-default">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">
          <!-- content -->
        </div>
      </div>
    </div>
  </div>
</script>

## Initialization

Initialize automatically within markup with `[data-xt-drop="{ <options> }"]` on the **object**:

[[noteDefault]]
| **Object** is the DOM element you want to assign the component.

Or initialize with javascript:

```js
let self = new Xt.Drop(document.querySelector('#my-object'), {
  // options
})
```

Or inizialize with **mutation observer** (preferred method):

```js
Xt.mount.push({
  matches: '#my-object',
  mount: object => {
    // init

    let self = new Xt.Drop(object, {
      // options
    })

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  }
})
```
