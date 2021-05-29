---
type: "Components"
category: "Global"
parent: "Animation"
title: "Collapse"
description: "Collapse horizontal and vertical on interactions."
date: "1900-10-10"
---

## Usage

Collapse only work with **xtendui interaction components**, assign `options.collapseHeight` or `options.collapseWidth`.

[[noteDefault]]
| This component uses [toggle](/components/toggle) see documentation for more info.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `collapseHeight:String`                          | `false`        | Type of elements that collapse vertically, can be `elements`, `targets`, `elementsInner`, `targetsInner`           |
| Option                    | `collapseWidth:String`                          | `false`        | Type of elements that collapse horizzontally, can be `elements`, `targets`, `elementsInner`, `targetsInner`           |

</div>

[[noteDefault]]
| Remember to assign `overflow-hidden` and `transition-all` on collapse nodes.

[[notePrimary]]
| On **collapse nodes** **do not to use padding**.

Use **tailwind classes** to assign animation (e.g. [translate](https://tailwindcss.com/docs/translate), [transition-property](https://tailwindcss.com/docs/transition-property), [transition-duration](https://tailwindcss.com/docs/transition-duration)).


<demo>
  <demoinline src="demos/components/animation/collapse-height">
  </demoinline>
  <demoinline src="demos/components/animation/collapse-width">
  </demoinline>
</demo>

## Text

You can use also with **initial values** for height and width.

Use **tailwind classes** to assign size (e.g. [height](https://tailwindcss.com/docs/height), [width](https://tailwindcss.com/docs/width)).

Just use the class `on` if you want to automatically open instantly.

<demo>
  <demoinline src="demos/components/animation/collapse-text">
  </demoinline>
</demo>

## Themes

Check out [animation themes](/themes/animation) for **advanced animations**.

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/themes/animation/collapse-animation-v1">
  </div>
</demo>
