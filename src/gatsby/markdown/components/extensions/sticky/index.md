---
type: "Components"
category: "Extensions"
parent: "Sticky"
title: "Sticky"
description: "Sticky elements with complex interactions."
---

## Setup

Follow [css installation](/introduction/getting-started/setup#css-installation) and [js installation](/introduction/getting-started/setup#js-installation) instructions. To customize default styles follow [css customization](/introduction/getting-started/setup#css-customization) instructions.

#### Component

Import the component's **js** file.

```jsx
import 'xtend-library/src/extensions/sticky/sticky.js'
```

Or just import **extensions**.

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

[[notePrimary]]
| It's recomended to style and animate a inner div <code>[data-xt-xticky] > div</code> when using <strong>sticky component</strong>.

## Initialization

Initialize automatically within markup with `[data-xt-sticky="{ <options> }"]` on the **object**.

[[noteDefault]]
| **Object** is the DOM element you want to assign the component to.

Or initialize with **javascript**.

```js
let self = new Xt.Sticky(document.querySelector('#my-object'), {
  // options
})
```

Or inizialize with **mutation observer**.

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
