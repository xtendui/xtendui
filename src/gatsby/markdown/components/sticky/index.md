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
@import '/src/extensions/sticky/sticky.less';
```

```jsx
import 'xtend-library/src/extensions/sticky/sticky.js'
```

Or just import **extensions**:

```less
@import '/src/xtend-extensions.less';
```

```jsx
import 'xtend-library/src/xtend-extensions.js'
```

[[noteDefault]]
| To modify a **less** or **js** file add [webpack resolve](/introduction/setup#usage-webpack) and fork the file copying it in your project.

## Usage

Use this markup to create a **sticky**.

<script type="text/plain" class="language-markup">
  <div data-xt-xticky>
    <div>
      <!-- content -->
    </div>
  </div>
</script>

[[notePrimary]]
| It's recomended to style and animate a inner div <code>[data-xt-xticky] > div</code> when using <strong>sticky component</strong>.

## Initialization

Initialize automatically within markup with `[data-xt-sticky="{ <options> }"]` on the **object**:

[[noteDefault]]
| **Object** is the DOM element you want to assign the component.

Or initialize with javascript:

```js
let self = new Xt.Sticky(document.querySelector('#my-object'), {
  // options
})
```

Or inizialize with **mutation observer** (preferred method):

```js
Xt.mount.push({
  matches: '#my-object',
  mount: object => {
    // init

    let self = new Xt.Sticky(object, {
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
