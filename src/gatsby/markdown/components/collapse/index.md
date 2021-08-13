---
type: "Components"
category: "Toggle"
parent: "Collapse"
title: "Collapse"
description: "Collapse horizontal and vertical on interactions."
---

## Usage

Collapse only work with **toggle components**, assign `options.collapseHeight` or `options.collapseWidth`.

> This component uses [toggle](/components/toggle) see documentation for more info.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `collapseHeight:String`                          | `false`        | Type of elements that collapse vertically, can be `elements`, `targets`, `elementsInner`, `targetsInner`           |
| Option                    | `collapseWidth:String`                          | `false`        | Type of elements that collapse horizzontally, can be `elements`, `targets`, `elementsInner`, `targetsInner`           |

</div>

> Remember to assign `overflow-hidden` and `transition-all` on collapse nodes.

> On **collapse nodes** **do not to use padding**.

Use **tailwind classes** to assign animation (e.g. [translate](https://tailwindcss.com/docs/translate), [transition-property](https://tailwindcss.com/docs/transition-property), [transition-duration](https://tailwindcss.com/docs/transition-duration), [transition-timing-function](https://tailwindcss.com/docs/transition-timing-function)).


<demo>
  <demoinline src="demos/components/collapse/height">
  </demoinline>
  <demoinline src="demos/components/collapse/width">
  </demoinline>
</demo>

## Initial Values

You can use also with **initial values** for height and width.

Use **tailwind classes** to assign size (e.g. [max-height](https://tailwindcss.com/docs/max-height)).

Just use the class `on` if you want to automatically open instantly.

<demo>
  <demoinline src="demos/components/collapse/initial">
  </demoinline>
</demo>

## Themes

Check out [animation themes](/themes/animation) for **advanced animations**.

<demo>
  <div class="gatsby_demo_item" data-iframe="demos/themes/animation/collapse-animation-v1">
  </div>
</demo>
