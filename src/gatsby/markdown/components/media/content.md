---
type: "Components"
category: "Design"
parent: "Media"
title: "Content"
date: "2030-10-10"
---

## Variant

When images are loading the `.xt-media-container` background is shown.

Use **tailwind classes** to assign variant (e.g. [background-color](https://tailwindcss.com/docs/background-color)).

<demo>
  <demoinline src="demos/components/media/variant">
  </demoinline>
</demo>

## Object fit

Use **tailwind classes** to assign object fit. (e.g. [object-position](https://tailwindcss.com/docs/object-position)).

<demo>
  <demoinline src="demos/components/media/cover">
  </demoinline>
  <demoinline src="demos/components/media/contain">
  </demoinline>
</demo>

You can also use **video** or **iframe** for media.

<demo>
  <demoinline src="demos/components/media/video">
  </demoinline>
  <demoinline src="demos/components/media/iframe">
  </demoinline>
</demo>

## Size

Assing `padding-bottom` on `.xt-media-container` to the aspect ratio you desire.

<demo>
  <demoinline src="demos/components/media/ratio">
  </demoinline>
</demo>

Or use **component utility** `.xt-ratio-<value>` on `.xt-media-container` to make aspect ratio images.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `.xt-ratio-<value>`       | `ratio-<value>`                | `responsive`                | Apply aspect ratio, can be `15`, `37.5`, `50`, `56.2`, `75`, `100`, `125`, `150`            |

</div>

<demo>
  <demoinline src="demos/components/media/ratio-class">
  </demoinline>
</demo>

Or use **tailwind classes** to assign height (e.g. [height](https://tailwindcss.com/docs/height)).

You can also use `min-height: <Value>` to have a min height (**use narrow screen to see it in action**).

<demo>
  <demoinline src="demos/components/media/height">
  </demoinline>
  <demoinline src="demos/components/media/min-height">
  </demoinline>
</demo>

Or use **tailwind classes** to assign width (e.g. [width](https://tailwindcss.com/docs/width)).

[[notePrimary]]
| Always **assign width to a parent node**.

<demo>
  <demoinline src="demos/components/media/width">
  </demoinline>
</demo>

Or use **tailwind classes** `.relative` on `.xt-media` to assign relative position. The result is a **responsive media**.

The result is the **same as putting width on the asset**.

<demo>
  <demoinline src="demos/components/media/responsive">
  </demoinline>
</demo>
