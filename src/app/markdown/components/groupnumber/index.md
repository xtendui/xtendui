---
type: "Components"
category: "Form"
parent: "Groupnumber"
title: "Groupnumber"
description: "Groupnumber is a plugin that manages quantity increments on input number."
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.groupnumber` see [css customization](/components/global/preset#customization). Check [xtendui/src/groupnumber.css.js](https://github.com/xtendui/xtendui/blob/master/src/groupnumber.css.js) for default styles.

## Javascript

Import the **javascript** file with `import 'xtendui/src/groupnumber'`.

Initialize automatically **within markup** with `[data-xt-groupnumber="{ <options> }"]`.

Initialize manually **within javascript** with `new Xt.Groupnumber(document.querySelector('.my-container'), {/* options */})`.

## Usage

The component uses the standard `input[type="number"]` attributes and **behaves like browser input number validation**:

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
| Option                    | `voidable:Boolean`                          | `true`        | Input can be resetted to empty value if initialized with no initial `[value]`             |
| Option                    | `min:Number`                          | `1`        | Default value for minimum limit            |
| Option                    | `max:Number`                          | `Infinity`        | Default value for maximum limit            |
| Option                    | `inputs:Query`                          | `'input[type="number"]'`        | Inputs query            |
| Option                    | `steps:Query`                          | `'[data-xt-step]'`        | Steps query            |
| Option                    | `events.input:String\|false`                          | `'change'`        | List of space separated events on input to listen            |
| Option                    | `events.steps:String\|false`                          | `'click'`        | List of space separated events on steps to listen            |

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

## Accessibility

This components follows A11y standards so **aria attributes and keyboard interactions are managed automatically**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `a11y:Object\|false`                          | `<Object>`        | Aria options            |
| Option                  | `a11y.controls:Boolean`                          | `true`        | Inject `aria-controls` attributes            |

</div>

> **Do not rely/use aria attributes**, they are generated and they can change anytime.

## Util

You can get **self object** on Xtend UI components with **the constructor** or [Xt.get](/components/global/javascript#xt-get).

```js
new Xt.Groupnumber(document.querySelector('.my-container'), {}).then(self => {})

// or

Xt.get({ name: 'xt-groupnumber', el: document.querySelector('.my-container') }).then(self => {})
```

You can set **default options** for all components of the same type, with [Xt.options](/components/global/javascript#xt-options).

```js
Xt.options['xt-groupnumber'] = {
  debug: true,
}
```

By default components are **loaded and initialized only when inside viewport** or instantly if `self.container` is not visible (`display: none`).

You can force [global observer options](/components/global/javascript/#xt-observe-globals) or **singular component observer options** passing this option.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `observer:Boolean\|null`                          | `null`        | Force enable or disable intersection observer            |

</div>

## Listen

Listen to events, for listeners use [this guideline](/components/global/javascript#listeners).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `input`                        | `input` | Value of input changed             |
| Event                   | `change`                        | `input` | Value of input changed             |
| Event                   | `setup.xt.groupnumber`           | `container` | Setup event             |
| Event                   | `init.xt.groupnumber`           | `container` | Init or reinit event             |
| Event                   | `status.xt.groupnumber`           | `container` | Status event (enabled or disabled)             |
| Event                   | `destroy.xt.groupnumber`           | `container` | Destroy event             |

</div>

## Properties

Access properties by getting [self object](/components/groupnumber/#util).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `self.componentName:String`       | Component name (used in `Xt.get`)             |
| Property                   | `self.options:Object`       | Final options             |
| Property                   | `self.initial:Boolean`       | If initial or reset activation             |
| Property                   | `self.disabled:Boolean`       | If component disabled            |
| Property                   | `self.container:Node`       | Container node             |
| Property                   | `self.inputs:Nodes`       | Inputs nodes             |
| Property                   | `self.steps:Nodes`       | Steps nodes             |

</div>

## Methods

Call methods by getting [self object](/components/groupnumber/#util).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `self.reinit()`       | Reinit component             |
| Method                  | `self.disable()`                          | Disable component             |
| Method                  | `self.enable()`                          | Enable component             |
| Method                  | `self.destroy()`              | Destroy component            |

</div>
