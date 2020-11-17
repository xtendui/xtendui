---
type: "Components"
category: "Addons"
parent: "Listing"
title: "Infinite Scroll"
description: "Automatic pagination activable on click or on scroll, with browser navigation support that loads only the current page."
---

## Installation

Import the **component javascript** file.

```jsx
import 'xtendui/src/addons/infinite-scroll'
```

## Usage

Use this code to create a **infinite scroll**.

Remember to set a `options.get` variable for a **get request on current url** to load items.

Also remember to set `options.max` number of pages.

[[noteDefault]]
| Check advanced feature [open this demo on a new page](/iframe/components/addons/listing/infinite-scroll). You can see on page refresh and browser navigation that **the page is retained**.

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/addons/listing/infinite-scroll">
  </div>
</demo>

## Options

Here are the main **javascript options**.

For advanced options see javascript file source code `xtendui/src/addons/infinite-scroll.js`.

Inside `elements.pagination:Query` you can use this strings that gets populated with variables:

- `xt-num` replaced with current page number
- `xt-tot` replaced with total pages number

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `get:String`                          | `false`        | **url get** variable to use            |
| Option                    | `min:Number`                          | `1`        | Initial and minimum page number            |
| Option                    | `max:Number`                          | `'Infinity'`        | Maximum page number            |
| Option                    | `add:Number`                          | `1`        | Amount to increase page number            |
| Option                    | `events.scroll:Boolean`                          | `true`        | Automatically activate on scroll            |
| Option                    | `events.trigger:String`                          | `'click'`        | Event to trigger infinite scroll            |
| Option                    | `events.reset:String`                          | `'click'`        | Event to trigger infinite scroll reset            |
| Option                    | `elements.scrollOffset:Query`                          | `'.infinite-scroll'`        | Object query for automatic scroll element            |
| Option                    | `elements.trigger:Query`                          | `'.infinite-scroll-trigger .btn'`        | Object query for trigger element            |
| Option                    | `elements.reset:Query`                          | `'.infinite-scroll-pre .btn'`        | Object query for reset element            |
| Option                    | `elements.spaceAdditional:Query`                          | `'.infinite-scroll-pre'`        | Object query for additional space on reset            |
| Option                    | `elements.pagination:Query`                          | `'.infinite-scroll-pagination'`        | Object query for pagination            |
| Option                    | `elements.items:Query`                          | `'.listing-inner .row'`        | Object query for items container            |
| Option                    | `elements.item:Query`                          | `':scope > *'`        | Items container query for items            |

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

    return () => {
      self.destroy()
      self = null
    }
  }
})
```