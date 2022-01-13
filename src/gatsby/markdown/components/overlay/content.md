---
type: "Components"
category: "Toggle"
parent: "Overlay"
title: "Content"
date: "2030-10-10"
---

## Variant

Use **tailwind classes** to assign variant (e.g. [border-color](https://tailwindcss.com/docs/border-color), [background-color](https://tailwindcss.com/docs/background-color), [text-color](https://tailwindcss.com/docs/text-color)).

> `.xt-backdrop` is essential to the close interaction of the overlay, but you can hide it using the class `.opacity-0`.

<demo>
  <demoinline src="demos/components/overlay/variant">
  </demoinline>
</demo>

## Size

The padding of `.xt-overlay-container` is set as a utility. Check [xtendui/src/overlay.css.js](https://github.com/xtendui/xtendui/blob/master/src/overlay.css.js) for default styles.

Use **tailwind classes** to assign width (e.g. [width](https://tailwindcss.com/docs/width), [max-width](https://tailwindcss.com/docs/max-width)).

Use **tailwind classes** to assign size (e.g. [padding](https://tailwindcss.com/docs/padding), [font-size](https://tailwindcss.com/docs/font-size)).

<demo>
  <demoinline src="demos/components/overlay/size">
  </demoinline>
</demo>

## Complex

Use other [card content](/components/card/content) to make complex design.

> This demos use [card](/components/card) see documentation for more info.

<demo>
  <div class="gatsby_demo_item" data-iframe="demos/themes/implementation/overlay-implementation-v1">
  </div>
</demo>

## Other Content

You can put **any content** inside this component.

<demo>
  <demoinline src="demos/components/overlay/other-content">
  </demoinline>
</demo>
