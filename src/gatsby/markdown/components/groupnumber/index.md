---
type: "Components"
category: "Form"
parent: "Groupnumber"
title: "Groupnumber"
description: "Groupnumber is a plugin that manages quantity increments on input number."
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.groupnumber` see [css customization](/components/global/preset#customization). Check [xtendui/src/groupnumber.css.js](https://github.com/xtendui/xtendui/blob/beta/src/groupnumber.css.js) for default styles.

## Javascript

Import the **javascript** file with `import 'xtendui/src/groupnumber'`.

Initialize automatically **within markup** with `[data-xt-groupnumber="{ <options> }"]`.

Initialize manually **within javascript** with `new Xt.Groupnumber(document.querySelector('.my-container'), {/* options */})`.

## Usage

The component uses the standard `input[type="number"]` attributes:

- `input[min]` for **minimum value**.

- `input[max]` for **maximum value**.

- `input[step]` for **step increment and decrement**.

On the steps buttons use `[data-xt-step="value"]` to set the amount to add (`+1`) or remove (`-1`) on click, if you set `input[step="value"]` the **increment and decrement steps are from `[step]`** but the **sign of step is from `[data-xt-step]`**.

> This demos use [group](/components/group) see documentation for more info.

<demo>
  <demoinline src="demos/components/groupnumber/usage">
  </demoinline>
</demo>

## Options
 
Here are the main **javascript options**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `debug:Boolean`                          | `false`        | Debug on console            |
| Option                    | `limit:Boolean`                          | `true`        | Limit value with min and max attribute             |
| Option                    | `validate({ val, step }):Function\|false`                          | `<Function>`        | Validate value on input change             |
| Option                    | `min:Number`                          | `1`        | Default value for minimum limit            |
| Option                    | `max:Number`                          | `Infinity`        | Default value for maximum limit            |
| Option                    | `events.input:String\|false`                          | `'change'`        | List of space separated events on input to limit and validate, return `Number`            |
| Option                    | `inputs:Query`                          | `'input[type="number"]'`        | Inputs query            |
| Option                    | `steps:Query`                          | `'[data-xt-step]'`        | Steps query            |

</div>

Default functions as follow.

```js
validate: ({ val, step }) => {
  if (step && val % step) {
    return Math.ceil(val / step) * step
  }
  return val
},
```
## Match Media

You can add **additional options** that gets added on **match media query**. You can use different queries with different and nested options.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `matches:Object`                              | `false`                     | Add additional options on match media query           |

</div>

## Util

You can get **self object from DOM node** on Xtend UI components with [Xt.get](/components/global/javascript#xt-get).

```js
let self = Xt.get({ name: 'xt-groupnumber', el: document.querySelector('.my-container') })
```

You can set **default options** for all components of the same type, with [Xt.options](/components/global/javascript#xt-options).

```js
Xt.options['xt-groupnumber'] = {
  debug: true,
}
```

## Listen

Listen to events, for listeners use [this guideline](/components/global/javascript#listeners).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `change`                        | `input` | Value change event redispatched after validation             |
| Event                   | `init.xt.groupnumber`           | `container` | Init or reinit event             |
| Event                   | `status.xt.groupnumber`           | `container` | Status event (enabled or disabled)             |
| Event                   | `destroy.xt.groupnumber`           | `container` | Destroy event             |

</div>

## Properties

Access properties by getting [self object](/components/global/javascript#xt-get).

```js
let self = Xt.get({ name: 'xt-groupnumber', el: document.querySelector('.my-container') })
const container = self.container
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `options:Object`       | Final options             |
| Property                   | `initial:Boolean`       | If initial or reset activation             |
| Property                   | `disabled:Boolean`       | If component disabled            |
| Property                   | `container:Node`       | Container node             |
| Property                   | `inputs:Nodes`       | Inputs nodes             |
| Property                   | `steps:Nodes`       | Steps nodes             |

</div>

## Methods

Call methods by getting [self object](/components/global/javascript#xt-get).

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
