---
type: "Components"
category: "Extensions"
parent: "Scroll"
title: "Scroll"
description: "Content animation when you scroll the page, fade in elements, parallax."
---

## Setup

Follow xtend's [installation instructions](/introduction/getting-started/setup) for extending tailwind.

#### Component

Import the component's **js** file.

```jsx
import '/src/extensions/scroll/scroll.js'
```

Or just import **extensions**.

```jsx
import '/src/xtend-extensions.js'
```

## Usage

@TODO

## Initialization

Initialize automatically within markup with `[data-xt-scroll="{ <options> }"]` on the **object**.

[[noteDefault]]
| **Object** is the DOM element you want to assign the component to.

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
