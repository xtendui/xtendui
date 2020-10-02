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

Inside `.text-inverse` buttons are styled accordingly.

<demo>
  <demovanilla src="vanilla/components/core/button/inverse">
  </demovanilla>
</demo>

## Size

Use **component classes** to assign size (e.g.: padding, font size).

[[noteDefault]]
| To customize utils and components follow [css customization](/introduction/getting-started/setup#css-customization) instructions.

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
