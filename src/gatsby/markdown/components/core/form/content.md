---
type: "Components"
category: "Core"
parent: "Form"
title: "Content"
date: "2030-10-10"
---

## Variant

Use **tailwind classes** to assign variant (e.g.: border, background, color).

<demo>
  <demovanilla src="vanilla/components/core/form/variant-default">
  </demovanilla>
  <demovanilla src="vanilla/components/core/form/variant-primary">
  </demovanilla>
</demo>

## Size

Use **component classes** to assign size (e.g.: padding, font size).

[[noteDefault]]
| To customize utils and components follow [css customization](/introduction/getting-started/setup#css-customization) instructions.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `form, .form`                     | `form`                | Default size            |
| Component                  | `.form-sm`                     | `form-sm`                | Size small            |
| Component                  | `.form-md`                     | `form-md`                | Size medium            |
| Component                  | `.form-lg`                     | `form-lg`                | Size large            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/form/size-sm">
  </demovanilla>
  <demovanilla src="vanilla/components/core/form/size-md">
  </demovanilla>
  <demovanilla src="vanilla/components/core/form/size-lg">
  </demovanilla>
</demo>
