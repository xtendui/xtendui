---
type: "Components"
category: "Extensions"
parent: "Scroll"
title: "Scroll"
description: "Content animation when you scroll the page, fade in elements, parallax."
---

## Setup

#### Javascript

Follow the [js installation](/introduction/getting-started/setup#js-installation) instructions.

Import the component's **js** file.

```jsx
import 'xtend-library/src/extensions/scroll/scroll.js'
```

Or just import **extensions**.

```jsx
import 'xtend-library/src/xtend-extensions.js'
```

## Usage

Use this markup to create a **scroll**.

<script type="text/plain" class="language-markup">
  <div data-xt-scroll="{ elements: <Query> }">
    <!-- content -->
  </div>
</script>

@TODO demo

## Initialization

Initialize automatically within markup with `[data-xt-scroll="{ <options> }"]` on the **object** (the DOM element you assigned the component).

Or initialize with **javascript**.

```js
let self = new Xt.Scroll(document.querySelector('#my-object'), {
  // options
})
```

Or inizialize with **mutation observer**.

```js
Xt.mount.push({
  matches: '#my-object',
  mount: object => {
    // init

    let self = new Xt.Scroll(object, {
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
