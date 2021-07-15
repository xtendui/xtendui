---
type: "Components"
category: "Design"
parent: "Form"
title: "Textarea Autosize"
description: "Textarea with dynamic height depending on content."
date: "1900-10-10"
---

## Javascript

Import the **javascript** file with `import 'xtendui/src/textareaautosize'`.

Initialize automatically **within markup** with `[data-xt-textareaautosize="{ <options> }"]`.

Initialize manually **within javascript** with `new Xt.Textareaautosize(document.querySelector('.my-container'), {/* options */})`.

## Usage

Use this code to create a **textarea autosize**. You can customize `min-height` and `max-height` of the textarea.

<demo>
  <demoinline src="demos/components/form/textareaautosize">
  </demoinline>
</demo>

## Listen

Listen to events, for listeners use [this guideline](/components/javascript#listeners).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `init.xt.textareaautosize`           | `container` | Init or reinit event             |
| Event                   | `destroy.xt.textareaautosize`           | `container` | Destroy event             |

</div>

## Properties

Access properties by getting [self object](/components/javascript#xt-get).

```js
let self = Xt.get({ name: 'xt-textareaautosize', el: document.querySelector('.my-container') })
const container = self.container
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `options:Object`       | Final options             |
| Property                   | `container:Node`       | Container node             |
| Property                   | `initial:Boolean`       | If initial or reset activation             |
| Property                   | `form:Node`       | Form closest node             |

</div>

## Methods

Call methods by getting [self object](/components/javascript#xt-get).

```js
let self = Xt.get({ name: 'xt-textareaautosize', el: document.querySelector('.my-container') })
self.destroy()
self = null
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `self.reinit()`       | Reinit component             |
| Method                  | `self.destroy()`              | Destroy component            |

</div>
