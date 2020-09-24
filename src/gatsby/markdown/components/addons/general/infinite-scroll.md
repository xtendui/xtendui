---
type: "Components"
category: "Addons"
parent: "General"
title: "Infinite Scroll"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

## Setup

#### Javascript

Follow the [js installation](/introduction/getting-started/setup#js-installation) instructions.

Import the component's **js** file.

```jsx
import 'xtend-library/src/addons/general/infinite-scroll.js'
```

Or just import **addons**.

```jsx
import 'xtend-library/src/xtend-addons.js'
```

## Usage

Here's the demo markup, css and javascript to create an **infinite scroll**.

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/addons/general/infinite-scroll">
  </div>
</demo>

Here are the main javascript options.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `get:String`                          | `'page'`        | **url get** variable to use            |
| Option                    | `min:Number`                          | `1`        | Initial and minimum page number            |
| Option                    | `max:Number`                          | `'Infinity'`        | Maximum page number            |
| Option                    | `add:Number`                          | `1`        | Amount to increase page number            |
| Option                    | `events.scroll:Boolean`                          | `true`        | Automatically activate on scroll            |
| Option                    | `events.trigger:String`                          | `'click'`        | Event to trigger infinite scroll            |
| Option                    | `events.reset:String`                          | `'click'`        | Event to trigger infinite scroll reset            |

</div>

For advanced options see javascript file source code `xtend-library/src/addons/general/infinite-scroll.js`.

## Initialization

Initialize automatically within markup with `[data-xt-infinite-scroll="{ <options> }"]` on the **object** (the DOM element you assigned the component).

Or initialize with **javascript**.

```js
let self = new Xt.InfiniteScroll(document.querySelector('#my-object'), {
  // options
})
```

Or inizialize with **mutation observer**.

```js
Xt.mount.push({
  matches: '#my-object',
  mount: object => {
    // init

    let self = new Xt.InfiniteScroll(object, {
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
