---
type: "Components"
category: "Addons"
parent: "General"
title: "google-locator"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

## Setup

#### Javascript

Follow the [js installation](/introduction/getting-started/setup#js-installation) instructions.

Import the component's **js** file.

```jsx
import 'xtend-library/src/addons/general/google-locator'
```

## Usage

Here's code to create a **google locator**.

[[notePrimary]]
| Needs google API key with **Maps Javascript API**, **Places API**.

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/addons/general/google-locator">
  </div>
</demo>

## Options

For advanced options see javascript file source code `xtend-library/src/addons/general/google-locator.js`.

## Listen

Listen to events on **DOM elements**.

<div class="table-scroll">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `init.xt.googlelocator`           | `object` | Init event             |
| Event                   | `destroy.xt.googlelocator`           | `object` | Destroy event             |

</div>

## Initialization

Initialize automatically within markup with `[data-xt-google-locator="{ <options> }"]` on the **object** (the DOM element you assigned the component).

Or initialize with **javascript**.

```js
let self = new Xt.GoogleLocator(document.querySelector('#my-object'), {
  // options
})
```

Or inizialize with **mutation observer**.

```js
Xt.mount.push({
  matches: '#my-object',
  mount: object => {
    // init

    let self = new Xt.GoogleLocator(object, {
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
