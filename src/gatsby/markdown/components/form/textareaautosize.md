---
type: "Components"
category: "Global"
parent: "Form"
title: "Textarea Autosize"
description: "Textarea with dynamic height depending on content."
date: "1900-10-10"
---

## Javascript

Import the **javascript** file with `import 'xtendui/src/textareaautosize'`.

Initialize automatically **within markup** with `[data-xt-textareaautosize="{ <options> }"]`.

Initialize with **javascript** with `new Xt.Textareaautosize(document.querySelector('#my-object'), {/* options */})`.

## Usage

Use this code to create a **textarea autosize**. You can customize `min-height` and `max-height` of the textarea.

<demo>
  <demoinline src="demos/components/form/textareaautosize">
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
