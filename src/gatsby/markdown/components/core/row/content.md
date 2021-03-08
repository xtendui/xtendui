---
type: "Components"
category: "Core"
parent: "Row"
title: "Content"
date: "2030-10-10"
---

## Space

Use **component utility** `.xt-row-<space>` to space content.

For `<space>` values use any of [tailwind spacing](https://tailwindcss.com/docs/customizing-spacing).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `.xt-row-<space>`       | `xt-row-<space>`                | `responsive`                | Space contents horizontally and vertically            |
| Utility                  | `.xt-row-x-<space>`       | `xt-row-x-<space>`                | `responsive`                | Space contents horizontally            |
| Utility                  | `.xt-row-y-<space>`       | `xt-row-y-<space>`                | `responsive`                | Space contents vertically            |

</div>

[[notePrimary]]
| Don't use **margin on row** because it has **automatic negative margins** for internal spacing.

[[notePrimary]]
| Sometimes **negative top margin bleed on parent nodes**, to fix it use `flex` the a parent node.

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
