---
type: "Components"
category: "Design"
parent: "Form"
title: "Group Number"
description: "Input number with list group and javascript for and effective interaction."
date: "1900-10-10"
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.groupnumber` see [preset customization](/components/preset#customization). Check [xtendui/src/groupnumber.css.js](https://github.com/xtendui/xtendui/blob/beta/src/groupnumber.css.js) for default styles.

## Javascript

Import the **javascript** file with `import 'xtendui/src/groupnumber'`.

Initialize automatically **within markup** with `[data-xt-groupnumber="{ <options> }"]`.

Initialize manually **within javascript** with `new Xt.Groupnumber(document.querySelector('.my-container'), {/* options */})`.

## Usage

Use this code to create a **group number**.

You can add steps with `[data-xt-step="value"]` to set the amount to add (`+1`) or remove (`-1`) to the current value.	

<demo>
  <demoinline src="demos/components/form/groupnumber">
  </demoinline>
</demo>

## Options
 
Here are the main **javascript options**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `debug:Boolean`                          | `false`        | Debug on console            |
| Option                    | `inputs:Query`                          | `'input[type="number"]'`        | Inputs query            |
| Option                    | `steps:Query`                          | `'[data-xt-step]'`        | Steps query            |

</div>

## Listen

Listen to events, for listeners use [this guideline](/components/javascript#listeners).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `change`                        | `input` | Value change event             |
| Event                   | `init.xt.groupnumber`           | `container` | Init or reinit event             |
| Event                   | `destroy.xt.groupnumber`           | `container` | Destroy event             |

</div>

## Properties

Access properties by getting [self object](/components/javascript#xt-get).

```js
let self = Xt.get({ name: 'xt-groupnumber', el: document.querySelector('.my-container') })
const container = self.container
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `options:Object`       | Final options             |
| Property                   | `container:Node`       | Container node             |
| Property                   | `initial:Boolean`       | If initial or reset activation             |
| Property                   | `inputs:Nodes`       | Inputs nodes             |
| Property                   | `steps:Nodes`       | Steps node             |

</div>

## Methods

Call methods by getting [self object](/components/javascript#xt-get).

```js
let self = Xt.get({ name: 'xt-groupnumber', el: document.querySelector('.my-container') })
self.destroy()
self = null
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `self.reinit()`       | Reinit component             |
| Method                  | `self.destroy()`              | Destroy component            |

</div>
