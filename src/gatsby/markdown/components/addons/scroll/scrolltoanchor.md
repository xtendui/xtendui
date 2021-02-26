---
type: "Components"
category: "Addons"
parent: "Scroll"
title: "Scroll to Anchor"
description: "Automatically scroll to an id clicking the relative anchor with that id."
---

## Installation

Import the **component javascript** file with `import 'xtendui/src/addons/scrolltoanchor'`.

## Usage

Use this code to create a **scroll to anchor**.

[[noteDefault]]
| This demo uses [scroll sticky](/components/core/scroll/sticky) and [overlay](/components/core/overlay) see documentation for more info.

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="iframe/components/addons/navigation/scrolltoanchor">
  </div>
  <div class="gatsby_demo_item xt-toggle" data-iframe="iframe/components/addons/navigation/scrolltoanchor-overlay">
  </div>
</demo>

## Options
 
Here are the main **javascript options**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `elements:Array`                          | `[href*="#"]:not([aria-controls])`        | Elements nodes (filter out toggle components toggles with `:not([aria-controls])`)            |
| Option                    | `matches:Query`                          | `'[href$="{hash}"]:not([aria-controls])'`        | Matches nodes (filter out toggle components toggles with `:not([aria-controls])`)               |
| Option                    | `scrollElements:Array`                          | `[document.scrollingElement]`        | Scroll nodes (ordered parent > child)             |
| Option                    | `class:String`                          | `'active'`        | Activation class             |
| Option                    | `scrollDelay:Number`                          | `250`        | Delay on scroll checks             |
| Option                    | `preventHash:Boolean`                          | `false`        | Prevent url hash change             |
| Option                    | `position(scrollingElement, target, self):Function`             | `<Function>`        | Positioning function return `Number`             |
| Option                    | `scrollSpace(scrollingElement, target, self):Function`                          | `<Function>`        | Positioning space from top return `Number`             |
| Option                    | `scrollDistance(scrollingElement, target, self):Function`                          | `<Function>`        | Distance from top on scroll checks return `Number`            |

</div>

## Trigger

Trigger events on **DOM elements**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `scroll.trigger.xt.scrolltoanchor`       | `scrollElement` | Scroll event             |

</div>

## Listen

Listen to events.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `change.xt.scrolltoanchor`      | `object` | Change event            |
| Event                   | `init.xt.scrolltoanchor`           | `object` | Init event             |
| Event                   | `destroy.xt.scrolltoanchor`           | `object` | Destroy event             |

</div>

## Properties

Access properties by getting component object.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `options:Object`       | Final options             |
| Property                   | `object:Node`       | Object node             |
| Property                   | `scrollElement:Node`       | Current scrolling element             |
| Property                   | `position:Number`       | Current scroll position             |
| Property                   | `scrollSpace:Number`       | Current scroll space             |
| Property                   | `scrollDistance:Number`       | Current scroll distance             |

</div>

## Initialization

Initialize automatically **within markup** with `[data-xt-scrolltoanchor="{ <options> }"]` on the **object** (the DOM element you assigned the component).

Or initialize with **javascript**.

```js
let self = new Xt.Scrolltoanchor(document.querySelector('#my-object'), {
  // options
})
```

Or inizialize with **mutation observer**.

```js
Xt.mount.push({
  matches: '#my-object',
  mount: ({ object }) => {
    // init

    let self = new Xt.Scrolltoanchor(object, {
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
