---
type: "Components"
category: "Addons"
parent: "Animation"
title: "Ripple"
description: "Material ripple effect on user interaction."
---

## Installation

Import the **component javascript** file with `import 'xtendui/src/addons/ripple'`.

You can **customize this component** inside `tailwind.config.js` setting `theme.extend.xtendui.ripple`, check [xtendui/src/addons/ripple.css.js](https://github.com/minimit/xtendui/blob/beta/src/addons/ripple.css.js) for default values.

## Usage

Use this code to create a **ripple**.

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="iframe/themes/animation/ripple-animation-v1">
  </div>
</demo>

## Options
 
Here are the main **javascript options**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `sizeInitial:Boolean`                          | `0.1`        | Initial size factor            |
| Option                    | `onlyInside:Query`                          | `'a, button, .xt-button'`        | Only if selector else query closest             |

</div>

## Listen

Listen to events.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `on.xt.ripple`       | `object` | Activation event             |
| Event                   | `off.xt.ripple`      | `object` | Deactivation event            |
| Event                   | `init.xt.ripple`           | `object` | Init event             |
| Event                   | `destroy.xt.ripple`           | `object` | Destroy event             |

</div>

## Properties

Access properties by getting component object.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `options:Object`       | Final options             |
| Property                   | `object:Node`       | Object node             |
| Property                   | `container:Node`       | Container node             |
| Property                   | `targets:Array`       | Targets nodes            |

</div>

## Initialization

Initialize automatically **within markup** with `[data-xt-ripple="{ <options> }"]` on the **object** (the DOM element you assigned the component).

Or initialize with **javascript**.

```js
let self = new Xt.Ripple(document.querySelector('#my-object'), {
  // options
})
```

Or inizialize with **mutation observer**.

```js
Xt.mount.push({
  matches: '#my-object',
  mount: ({ object }) => {
    // init

    let self = new Xt.Ripple(object, {
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
