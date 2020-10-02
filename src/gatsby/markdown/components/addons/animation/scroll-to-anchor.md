---
type: "Components"
category: "Addons"
parent: "Animation"
title: "scroll-to-anchor"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

#### Javascript

Follow the [js installation](/introduction/getting-started/setup#js-installation) instructions and **import the component javascript** file.

```jsx
import { Xt } from 'xtend-library'
import 'xtend-library/src/addons/animation/scroll-to-anchor'
```

## Usage

Use **javascript** to create a scroll to anchor.

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/addons/animation/scroll-to-anchor">
  </div>
</demo>

## Options
 
Here are the main javascript options.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `elements:Array`                          | `[href*="#"]:not([aria-controls])`        | Elements nodes (filter out toggle components toggles with `:not([aria-controls])`)            |
| Option                    | `matches:Query`                          | `'[href$="{hash}"]:not([aria-controls])'`        | Matches nodes (filter out toggle components toggles with `:not([aria-controls])`)               |
| Option                    | `scrollElements:Array`                          | `[document.scrollingElement]`        | Scroll nodes (ordered parent > child)             |
| Option                    | `class:String`                          | `'active'`        | Activation class             |
| Option                    | `scrollDelay:Number`                          | `250`        | Delay on scroll checks             |
| Option                    | `position(self, scrollingElement):Function`             | `<Function>`        | Positioning function return `Number`             |
| Option                    | `scrollDistance:Function`                          | `<Function>`        | Distance from top on scroll checks return `Number`            |
| Option                    | `scrollSpace:Function`                          | `<Function>`        | Positioning space from top return `Number`             |

</div>

## Listen

Listen to events on **DOM elements**.

<div class="table-scroll">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `change.xt.scrolltoanchor`      | `object` | Change event            |
| Event                   | `init.xt.scrolltoanchor`           | `object` | Init event             |
| Event                   | `destroy.xt.scrolltoanchor`           | `object` | Destroy event             |

</div>

## Properties

Access properties by getting component object.

<div class="table-scroll">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `options:Object`       | Final options             |
| Property                   | `object:Node`       | Object node             |

</div>

## Initialization

Initialize automatically within markup with `[data-xt-scroll-to-anchor="{ <options> }"]` on the **object** (the DOM element you assigned the component).

Or initialize with **javascript**.

```js
let self = new Xt.ScrollToAnchor(document.querySelector('#my-object'), {
  // options
})
```

Or inizialize with **mutation observer**.

```js
Xt.mount.push({
  matches: '#my-object',
  mount: object => {
    // init

    let self = new Xt.ScrollToAnchor(object, {
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
