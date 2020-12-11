---
type: "Components"
category: "Addons"
parent: "Animation"
title: "Mouse Follow"
description: "Javascript animation utility to follow mouse position."
---

## Installation

Import the **component javascript** file.

```jsx
import 'xtendui/src/addons/mousefollow'
```

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/addons/mousefollow.css.js](https://github.com/minimit/xtendui/blob/master/src/addons/mousefollow.css.js) for default values.

```jsx
module.exports = {
  theme:{
    xtendui: {
      'mousefollow': {
        component: theme => ({
          // modify components
        }),
      },
    },
  },
}
```

## Usage

Use **component classes** to create a **mouse follow**. Remember **not to transition** `.mousefollow` element.

<div class="table-overflow">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.mousefollow`                     | `mousefollow`                | Styles for mouse follow            |

</div>

<demo>
  <demovanilla src="vanilla/components/addons/animation/mousefollow">
  </demovanilla>
</demo>

## Options
 
Here are the main **javascript options**.

<div class="table-overflow">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `targets:Query`                          | `':scope > .mousefollow'`        | Mouse follow targets            |
| Option                    | `transform:Boolean`                          | `true`        | Use transform instead of position            |
| Option                    | `friction:Function`                          | `<function>`        | Function for friction             |
| Option                    | `mouseCheck(self):Function`                          | `false`        | Function called on activate/deactivate, return false to not activate/deactivate             |

</div>

## Listen

Listen to events on **DOM elements**.

<div class="table-overflow">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `on.xt.mousefollow`       | `object` | Activation event             |
| Event                   | `off.xt.mousefollow`      | `object` | Deactivation event            |
| Event                   | `change.xt.mousefollow`       | `object` | Change event             |
| Event                   | `init.xt.mousefollow`           | `object` | Init event             |
| Event                   | `destroy.xt.mousefollow`           | `object` | Destroy event             |

</div>

## Properties

Access properties by getting component object.

<div class="table-overflow">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `options:Object`       | Final options             |
| Property                   | `object:Node`       | Object node             |
| Property                   | `targets:Array`       | Targets nodes            |

</div>

## Initialization

Initialize automatically within markup with `[data-xt-mousefollow="{ <options> }"]` on the **object** (the DOM element you assigned the component).

Or initialize with **javascript**.

```js
let self = new Xt.Mousefollow(document.querySelector('#my-object'), {
  // options
})
```

Or inizialize with **mutation observer**.

```js
Xt.mount.push({
  matches: '#my-object',
  mount: object => {
    // init

    let self = new Xt.Mousefollow(object, {
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
