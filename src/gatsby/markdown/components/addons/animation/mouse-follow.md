---
type: "Components"
category: "Addons"
parent: "Animation"
title: "mouse-follow"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

## Installation

Import the **component javascript** file.

```jsx
import 'xtendui/src/addons/mousefollow'
```

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/addons/mouse-follow.css.js](https://github.com/minimit/xtendui/blob/master/src/addons/mouse-follow.css.js) for default values.

```jsx
module.exports = {
  theme:{
    xtendui: {
      'mouse-follow': {
        component: theme => ({
          // modify components
        }),
      },
    },
  },
}
```

## Usage

Use **component classes** to create a mouse follow.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.mouse-follow`                     | `mouse-follow`                | Styles for mouse follow            |

</div>

<demo>
  <demovanilla src="vanilla/components/addons/animation/mouse-follow">
  </demovanilla>
</demo>

## Options
 
Here are the main **javascript options**.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `targets:Query`                          | `':scope > .mouse-follow'`        | Mouse follow targets            |
| Option                    | `transform:Boolean`                          | `true`        | Use transform instead of position            |
| Option                    | `friction:Function`                          | `<function>`        | Function for friction             |
| Option                    | `mouseCheck(self):Function`                          | `false`        | Function called on activate/deactivate, return false to not activate/deactivate             |

</div>

## Listen

Listen to events on **DOM elements**.

<div class="table-scroll">

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

<div class="table-scroll">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `options:Object`       | Final options             |
| Property                   | `object:Node`       | Object node             |
| Property                   | `targets:Array`       | Targets nodes            |

</div>

## Initialization

Initialize automatically within markup with `[data-xt-mouse-follow="{ <options> }"]` on the **object** (the DOM element you assigned the component).

Or initialize with **javascript**.

```js
let self = new Xt.MouseFollow(document.querySelector('#my-object'), {
  // options
})
```

Or inizialize with **mutation observer**.

```js
Xt.mount.push({
  matches: '#my-object',
  mount: object => {
    // init

    let self = new Xt.MouseFollow(object, {
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
