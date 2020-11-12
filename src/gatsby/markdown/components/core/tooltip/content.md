---
type: "Components"
category: "Core"
parent: "Tooltip"
title: "Content"
date: "2030-10-10"
---

## Variant

Use **tailwind classes** to assign variant (e.g. [border-color](https://tailwindcss.com/docs/border-color), [background-color](https://tailwindcss.com/docs/background-color), [text-color](https://tailwindcss.com/docs/text-color)).

This example has **icons** with `inline-block`, complex markup and `<br/>` to make a **multiline tooltip**.

<demo>
  <demovanilla src="vanilla/components/core/tooltip/variant">
  </demovanilla>
</demo>

## Size

Use **tailwind classes** to assign width (e.g. [width](https://tailwindcss.com/docs/width), [max-width](https://tailwindcss.com/docs/max-width)).

Use **component classes** to assign size. You can add **additional size** for example `.tooltip-xs` or `.tooltip-xl`.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- | ----------------------------- |
| Utility                  | `.tooltip-sm`                     | `tooltip-sm`                | `responsive`                | Size small            |
| Utility                  | `.tooltip-md`                     | `tooltip-md`                | `responsive`                | Size medium            |
| Utility                  | `.tooltip-lg`                     | `tooltip-lg`                | `responsive`                | Size large            |

</div>

Otherwise use **tailwind classes** to assign custom size (e.g. [padding](https://tailwindcss.com/docs/padding), [font-size](https://tailwindcss.com/docs/font-size)).

<demo>
  <demovanilla src="vanilla/components/core/tooltip/size">
  </demovanilla>
</demo>

## Card

Use [card component](/components/core/card) to populate the tooltip with **complex content** see for example the [drop content card](/components/core/drop/content-card).

<demo>
  <demovanilla src="vanilla/components/core/tooltip/card">
  </demovanilla>
</demo>
