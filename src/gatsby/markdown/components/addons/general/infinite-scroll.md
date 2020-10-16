---
type: "Components"
category: "Addons"
parent: "General"
title: "Infinite Scroll"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

## Setup

#### Javascript

Follow the [javascript installation](/introduction/getting-started/installation#javascript-installation) instructions and **import the component javascript** file.

```jsx
import 'xtendui/src/addons/infinite-scroll'
```

## Usage

Use this code to create an **infinite scroll**.

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/addons/infinite-scroll">
  </div>
</demo>

## Options

Here are the main **javascript options**.

For advanced options see javascript file source code `xtendui/src/addons/infinite-scroll.js`.

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

## Listen

Listen to events on **DOM elements**.

<div class="table-scroll">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `init.xt.infinitescroll`           | `object` | Init event             |
| Event                   | `destroy.xt.infinitescroll`           | `object` | Destroy event             |

</div>

## Properties

Access properties by getting component object.

<div class="table-scroll">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `options:Object`       | Final options             |
| Property                   | `object:Node`       | Object node             |
| Property                   | `current:Number`       | Current page             |
| Property                   | `scrollElement:Node`       | Scroll node             |
| Property                   | `triggerElement:Node`       | Trigger node             |
| Property                   | `resetElement:Node`       | Reset node             |
| Property                   | `itemsElement:Node`       | Items node             |

</div>

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
