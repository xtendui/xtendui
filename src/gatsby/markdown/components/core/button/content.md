---
type: "Components"
category: "Core"
parent: "Button"
title: "Content"
date: "2030-10-10"
---

## Variant

Use **tailwind classes** to assign variant (e.g. [border-color](https://tailwindcss.com/docs/border-color), [background-color](https://tailwindcss.com/docs/background-color), [text-color](https://tailwindcss.com/docs/text-color)).

Use `.link` to create a [link](/components/core/link).

<demo>
  <demovanilla src="vanilla/components/core/button/variant">
  </demovanilla>
</demo>

Use [typography variant](/components/core/typography/content#variant) to style text color.

[[notePrimary]]
| `.text-default` and `.text-inverse` don't support `text-opacity`. Use tailwind colors instead when using `text-opacity`.

<demo>
  <demovanilla src="vanilla/components/core/button/variant-inverse">
  </demovanilla>
</demo>

## Size

Use **component classes** to assign size (e.g. [padding](https://tailwindcss.com/docs/padding), [font-size](https://tailwindcss.com/docs/font-size)).

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.btn-sm`                     | `btn-sm`                | Size small            |
| Component                  | `.btn-md`                     | `btn-md`                | Size medium            |
| Component                  | `.btn-lg`                     | `btn-lg`                | Size large            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/button/size">
  </demovanilla>
</demo>

You can add **additional size** for example `.btn-xs` or `.btn-xl`.

## Icons and Alignment

Use [icons](/components/core/icons) as content.

<demo>
  <demovanilla src="vanilla/components/core/button/icons">
  </demovanilla>
</demo>

Use **tailwind classes** to assign alignment (e.g. [align-items](https://tailwindcss.com/docs/align-items), [justify-content](https://tailwindcss.com/docs/justify-content), [text-align](https://tailwindcss.com/docs/text-align)).

<demo>
  <demovanilla src="vanilla/components/core/button/alignment">
  </demovanilla>
</demo>
