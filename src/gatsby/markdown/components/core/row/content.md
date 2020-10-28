---
type: "Components"
category: "Core"
parent: "Row"
title: "Content"
date: "2030-10-10"
---

## Space

Use **component utility** `.row-<space>` to space content.

For `<space>` values use any of [tailwind spacing](https://tailwindcss.com/docs/customizing-spacing) up to 10.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `.row-<space>`       | `row-<space>`                | `responsive`                | Space contents horizontally and vertically            |
| Utility                  | `.row-x-<space>`       | `row-x-<space>`                | `responsive`                | Space contents horizontally            |
| Utility                  | `.row-y-<space>`       | `row-y-<space>`                | `responsive`                | Space contents vertically            |

</div>

[[noteDefault]]
| If you use **margin on row** be aware that **row space has automatic negative margins** for internal spacing.

<demo>
  <demovanilla src="vanilla/components/core/row/space-px">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/space-1">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/space-2">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/space-3">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/space-4">
  </demovanilla>
</demo>

## Alignment

Use **tailwind classes** to assign alignment (e.g. [align-items](https://tailwindcss.com/docs/align-items), [justify-content](https://tailwindcss.com/docs/justify-content)).

<demo>
  <demovanilla src="vanilla/components/core/row/alignment">
  </demovanilla>
</demo>
