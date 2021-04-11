---
type: "Components"
category: "Global"
parent: "Animation"
title: "Collapse"
description: "Collapse horizontal and vertical on interactions."
date: "1900-10-10"
---

## Usage

Collapse only work with **xtendui javascript components**, assign `options.collapseHeight` or `options.collapseWidth` with also `overflow-hidden` and **css transition** on the collapse nodes.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `collapseHeight:String`                          | `false`        | Type of elements that collapse vertically, can be `elements`, `targets`, `elementsInner`, `targetsInner`           |
| Option                    | `collapseWidth:String`                          | `false`        | Type of elements that collapse horizzontally, can be `elements`, `targets`, `elementsInner`, `targetsInner`           |

</div>

[[notePrimary]]
| On **collapse nodes** **do not to use padding**.

Use **tailwind classes** to assign animation (e.g. [translate](https://tailwindcss.com/docs/translate), [transition-property](https://tailwindcss.com/docs/transition-property), [transition-duration](https://tailwindcss.com/docs/transition-duration)).

<demo>
  <demoinline src="demos/components/animation/collapse-height">
  </demoinline>
  <demoinline src="demos/components/animation/collapse-width">
  </demoinline>
</demo>
