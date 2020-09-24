---
type: "Components"
category: "Extensions"
parent: "Sticky"
title: "Sticky"
description: "Sticky elements with complex interactions."
---

## Setup

#### Css

Follow the [css installation](/introduction/getting-started/setup#css-installation) instructions.

To customize this component in your `tailwind.config.js` file, as described in [css customization](/introduction/getting-started/setup#css-customization) instructions, use the keys like below.

```jsx
module.exports = {
  theme: require('xtend-library/src/tailwind-theme')({
    // xtend utilities and components in node_modules/xtend-library/src/tailwind-xtend.js
    xtend: theme => ({
      utilities: {
        sticky: {
          // modify utility
        },
      },
      components: {
        sticky: {
          // modify component
        },
      },
    }),
  })
}
```

#### Javascript

Follow the [js installation](/introduction/getting-started/setup#js-installation) instructions.

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

@TODO demo

## Initialization

Initialize automatically within markup with `[data-xt-sticky="{ <options> }"]` on the **object** (the DOM element you assigned the component).

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
