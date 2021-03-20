---
type: "Components"
category: "Core"
parent: "Icon"
title: "Content"
date: "2030-10-10"
---

## Variant

Use **tailwind classes** to assign variant (e.g. [text-color](https://tailwindcss.com/docs/text-color), [opacity](https://tailwindcss.com/docs/opacity)).

[[notePrimary]]
| To **have parent text color** the Svg needs `stroke="currentColor"` or `fill="currentColor"` depending on svg format.

<demo>
  <demoinline src="demos/components/core/icon/variant">
  </demoinline>
</demo>

Use **tailwind classes** to assign styles (e.g. [text-color](https://tailwindcss.com/docs/text-color), [text-opacity](https://tailwindcss.com/docs/text-opacity)).

Text styles on **parent elements** are applied when **inerithed**.

<demo>
  <demoinline src="demos/components/core/icon/variant-inverse">
  </demoinline>
</demo>

## Size

Change [font-size](https://tailwindcss.com/docs/font-size) to change the icon size. Or use **tailwind classes** to assign size (e.g. [width](https://tailwindcss.com/docs/width), [height](https://tailwindcss.com/docs/height), [stroke-width](https://tailwindcss.com/docs/stroke-width)).

<demo>
  <demoinline src="demos/components/core/icon/size">
  </demoinline>
</demo>

## Button and Alignment

Use negative [margin](https://tailwindcss.com/docs/margin) on icons if the icon is bigger than the button **to prevent vertical resize**.

<demo>
  <demoinline src="demos/components/core/icon/button">
  </demoinline>
</demo>

Use **tailwind classes** to assign alignment (e.g. [align-items](https://tailwindcss.com/docs/align-items), [justify-content](https://tailwindcss.com/docs/justify-content), [text-align](https://tailwindcss.com/docs/text-align)).

<demo>
  <demoinline src="demos/components/core/icon/alignment">
  </demoinline>
</demo>
