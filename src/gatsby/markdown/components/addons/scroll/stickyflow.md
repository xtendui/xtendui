---
type: "Components"
category: "Addons"
parent: "Scroll"
title: "Sticky Flow"
description: "Advanced animation for postion sticky to show content on scroll for better usability."
---

## Installation

Import the **component javascript** file.

```jsx
import 'xtendui/src/addons/stickyflow'
```

[[notePrimary]]
| This addon is for css `position: sticky;` and **doesn't need** Gsap ScrollTrigger.

## Usage

Use this code to create a **sticky flow** (use large screen to see it in action).

Pratically it's a solution that **scrolls sticky content** when it **overflow the window**, following scroll direction.

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/addons/animation/stickyflow">
  </div>
</demo>

## Options
 
Here are the main **javascript options**.

<div class="table-overflow">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `element:Query`                          | `'.stickyflow'`        | Sticky element query            |
| Option                    | `filler:Query`                          | `'.stickyflow-filler'`        | Filler element query            |

</div>

## Listen

Listen to events.

<div class="table-overflow">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `change.xt.stickyflow`                        | `input` | Position change event             |
| Event                   | `init.xt.stickyflow`           | `object` | Init event             |
| Event                   | `destroy.xt.stickyflow`           | `object` | Destroy event             |

</div>

## Properties

Access properties by getting component object.

<div class="table-overflow">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `options:Object`       | Final options             |
| Property                   | `object:Node`       | Object node             |
| Property                   | `element:Node`       | Sticky element             |
| Property                   | `filler:Nodes`       | Filler element             |

</div>

## Initialization

Initialize automatically **within markup** with `[data-xt-stickyflow="{ <options> }"]` on the **object** (the DOM element you assigned the component).

Or initialize with **javascript**.

```js
let self = new Xt.Stickyflow(document.querySelector('#my-object'), {
  // options
})
```

Or inizialize with **mutation observer**.

```js
Xt.mount.push({
  matches: '#my-object',
  mount: object => {
    // init

    let self = new Xt.Stickyflow(object, {
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
