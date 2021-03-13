---
type: "Components"
category: "Addons"
parent: "Form"
title: "Group Number"
description: "Input number with list group and javascript for and effective interaction."
---

## Installation

Import the **component javascript** file with `import 'xtendui/src/addons/groupnumber'`.

You can **customize this component** inside `tailwind.config.js` setting `theme.extend.xtendui.groupnumber`, check [xtendui/src/addons/groupnumber.css.js](https://github.com/minimit/xtendui/blob/beta/src/addons/groupnumber.css.js) for default styles.

## Usage

Use this code to create a **group number**.

You can add steps with `[data-xt-step="value"]` to set the amount to add (`+1`) or remove (`-1`) to the current value.	

<demo>
  <demoinline src="vanilla/components/addons/form/groupnumber">
  </demoinline>
</demo>

## Options
 
Here are the main **javascript options**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `inputs:Query`                          | `'input[type="number"]'`        | Inputs query            |
| Option                    | `steps:Query`                          | `'[data-xt-step]'`        | Steps query            |

</div>

## Listen

Listen to events.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `change`                        | `input` | Value change event             |
| Event                   | `init.xt.groupnumber`           | `object` | Init event             |
| Event                   | `destroy.xt.groupnumber`           | `object` | Destroy event             |

</div>

## Properties

Access properties by getting component object.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `options:Object`       | Final options             |
| Property                   | `object:Node`       | Object node             |
| Property                   | `inputs:Nodes`       | Inputs nodes             |
| Property                   | `steps:Nodes`       | Steps node             |

</div>

## Initialization

Initialize automatically **within markup** with `[data-xt-groupnumber="{ <options> }"]` on the **object** (the DOM element you assigned the component).

Or initialize with **javascript**.

```js
let self = new Xt.Groupnumber(document.querySelector('#my-object'), {
  // options
})
```

Or inizialize with **mutation observer**.

```js
Xt.mount.push({
  matches: '#my-object',
  mount: ({ object }) => {
    // init

    let self = new Xt.Groupnumber(object, {
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
