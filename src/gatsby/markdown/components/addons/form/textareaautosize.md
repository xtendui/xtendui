---
type: "Components"
category: "Addons"
parent: "Form"
title: "Textarea Autosize"
description: "Textarea with dynamic height depending on content."
---

## Installation

Import the **component javascript** file with `import 'xtendui/src/addons/textareaautosize'`.

## Usage

Use this code to create a **textarea autosize**. You can customize `min-height` and `max-height` of the textarea.

<demo>
  <demoinline src="vanilla/components/addons/form/textareaautosize">
  </demoinline>
</demo>

## Listen

Listen to events.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `init.xt.textareaautosize`           | `object` | Init event             |
| Event                   | `destroy.xt.textareaautosize`           | `object` | Destroy event             |

</div>

## Properties

Access properties by getting component object.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `options:Object`       | Final options             |
| Property                   | `object:Node`       | Object node             |
| Property                   | `form:Node`       | Form closest node             |

</div>

## Initialization

Initialize automatically **within markup** with `[data-xt-textareaautosize="{ <options> }"]` on the **object** (the DOM element you assigned the component).

Or initialize with **javascript**.

```js
let self = new Xt.Textareaautosize(document.querySelector('#my-object'), {
  // options
})
```

Or inizialize with **mutation observer**.

```js
Xt.mount.push({
  matches: '#my-object',
  mount: ({ object }) => {
    // init

    let self = new Xt.Textareaautosize(object, {
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
