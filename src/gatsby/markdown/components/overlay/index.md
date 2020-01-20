---
type: "Components"
badge: "Core"
parent: "Overlay"
title: "Overlay"
description: "Used when you need to display any content over the main page, not only modals."
categories: ["100-Core"]
---

## Setup

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

[[noteDefault]]
| To modify a **less** or **js** file add [webpack resolve](/introduction/setup#usage-webpack) and fork the file copying it in your project.

## Usage

Use this markup to create an **overlay**.

<script type="text/plain" class="language-markup">
  <button type="button" data-xt-overlay="{ targets: '#overlay_custom' }">
    <!-- content -->
  </button>
  <div class="overlay" id="overlay-custom">
    <div class="overlay-container">
      <div class="overlay-inner">
        <!-- content -->
      </div>
    </div>
  </div>
</script>

You can use this markup to create an **overlay** with **unique mode** (without toggle).

<script type="text/plain" class="language-markup">
<div class="overlay active" id="overlay_custom" data-xt-overlay="{ on: false }">
  <div class="overlay-container">
    <div class="overlay-inner">
      <!-- content -->
    </div>
  </div>
</div>
</script>

[[notePrimary]]
| Overlays are moved to **body** to prevent **z-index** problems. Style and query overlay's content accordingly.

## Initialization

Initialize automatically within markup with `[data-xt-overlay="{ <options> }"]` on the **object**:

[[noteDefault]]
| **Object** is the DOM element you want to assign the component.

Or initialize with javascript:

```js
let self = new Xt.Overlay(document.querySelector('#my-object'), {
  // options
})
```

Or inizialize with **mutation observer** (preferred method):

```js
Xt.mount.push({
  matches: '#my-object',
  mount: object => {
    // init

    let self = new Xt.Overlay(object, {
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
