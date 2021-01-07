---
type: "Components"
category: "Addons"
parent: "Scroll"
title: "Scroll to Anchor"
description: "Automatically scroll to an id clicking the relative anchor with that id."
---

## Installation

Import the **component javascript** file.

```jsx
import 'xtendui/src/addons/scrolltoanchor'
```

[[notePrimary]]
| This addon **doesn't need** Gsap ScrollTrigger.

## Usage

Use this code to create a **scroll to anchor**.

[[noteDefault]]
| This addon uses [sticky](/components/core/sticky) see documentation to **import javascript** and **customize**.

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/addons/navigation/scrolltoanchor">
  </div>
</demo>

## Options
 
Here are the main **javascript options**.

<div class="table-overflow">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `elements:Array`                          | `[href*="#"]:not([aria-controls])`        | Elements nodes (filter out toggle components toggles with `:not([aria-controls])`)            |
| Option                    | `matches:Query`                          | `'[href$="{hash}"]:not([aria-controls])'`        | Matches nodes (filter out toggle components toggles with `:not([aria-controls])`)               |
| Option                    | `scrollElements:Array`                          | `[document.scrollingElement]`        | Scroll nodes (ordered parent > child)             |
| Option                    | `class:String`                          | `'active'`        | Activation class             |
| Option                    | `scrollDelay:Number`                          | `250`        | Delay on scroll checks             |
| Option                    | `position(scrollingElement, target, self):Function`             | `<Function>`        | Positioning function return `Number`             |
| Option                    | `scrollSpace(scrollingElement, target, self):Function`                          | `<Function>`        | Positioning space from top return `Number`             |
| Option                    | `scrollDistance(scrollingElement, target, self):Function`                          | `<Function>`        | Distance from top on scroll checks return `Number`            |

</div>

## Trigger

Trigger events on **DOM elements**.

<div class="table-overflow">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `scroll.trigger.xt.scrolltoanchor`       | `scrollElement` | Scroll event             |

</div>

## Listen

Listen to events.

<div class="table-overflow">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `change.xt.scrolltoanchor`      | `object` | Change event            |
| Event                   | `init.xt.scrolltoanchor`           | `object` | Init event             |
| Event                   | `destroy.xt.scrolltoanchor`           | `object` | Destroy event             |

</div>

## Properties

Access properties by getting component object.

<div class="table-overflow">

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
