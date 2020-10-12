---
type: "Components"
category: "Core"
parent: "Button"
title: "Content"
date: "2030-10-10"
---

## Variant

Use **tailwind classes** to assign variant (e.g.: border, background, color).

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

Use **component classes** to assign size (e.g.: padding, font size).

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

## Alignment and Icons

Use **tailwind classes** to assign alignment (e.g.: align items, justify content).

[[notePrimary]]
| This demo uses [icons](/components/core/icons). Visit the component page to import and customize.

<demo>
  <demovanilla src="vanilla/components/core/button/icons">
  </demovanilla>
</demo>
