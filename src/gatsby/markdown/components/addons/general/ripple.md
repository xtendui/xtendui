---
type: "Components"
category: "Addons"
parent: "General"
title: "ripple"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

## Setup

#### Javascript

Follow the [javascript installation](/introduction/getting-started/setup#javascript-installation) instructions and **import the component javascript** file.

```jsx
import 'xtend-ui/src/addons/ripple'
```

#### Css

Follow the [css installation](/introduction/getting-started/setup#css-installation) instructions. To [customize styles](/introduction/getting-started/setup#css-customization) in your `tailwind.config.js` file.

```jsx
module.exports = {
  theme: require('xtend-ui/src/tailwind-theme')({
    // xtend utilities and components in node_modules/xtend-ui/src/tailwind-xtend.js
    xtend: theme => ({
      components: {
        addons: {
          ripple: {
            // modify component
          },
        },
      },
    }),
  })
}
```

To **see the default values** see the source code of `node_modules/xtend-ui/src/tailwind-xtend.js`.

## Usage

Use this code to create a **ripple**.

<demo>
  <demovanilla src="vanilla/components/addons/ripple">
  </demovanilla>
</demo>

## Options
 
Here are the main **javascript options**.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `sizeInitial:Boolean`                          | `0.1`        | Initial size factor            |
| Option                    | `onlyInside:Query`                          | `'a, button, .btn'`        | Only if selector else query closest             |

</div>

## Listen

Listen to events on **DOM elements**.

<div class="table-scroll">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `on.xt.ripple`       | `object` | Activation event             |
| Event                   | `off.xt.ripple`      | `object` | Deactivation event            |
| Event                   | `init.xt.ripple`           | `object` | Init event             |
| Event                   | `destroy.xt.ripple`           | `object` | Destroy event             |

</div>

## Properties

Access properties by getting component object.

<div class="table-scroll">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `options:Object`       | Final options             |
| Property                   | `object:Node`       | Object node             |
| Property                   | `container:Node`       | Container node             |
| Property                   | `targets:Array`       | Targets nodes            |

</div>

## Initialization

Initialize automatically within markup with `[data-xt-ripple="{ <options> }"]` on the **object** (the DOM element you assigned the component).

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
  mount: object => {
    // init

    let self = new Xt.Ripple(object, {
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
