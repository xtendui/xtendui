---
type: "Components"
category: "Design"
parent: "Row"
title: "Content"
date: "2030-10-10"
---

## Space

Use **component utility** `.xt-row-<space>` to space content.

For `<space>` values use any of [tailwind spacing](https://tailwindcss.com/docs/customizing-spacing).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `.xt-row-<space>`       | `xt-row-<space>`                | `responsive`                | Space contents horizontally and vertically            |
| Utility                  | `.xt-row-x-<space>`       | `xt-row-x-<space>`                | `responsive`                | Space contents horizontally            |
| Utility                  | `.xt-row-y-<space>`       | `xt-row-y-<space>`                | `responsive`                | Space contents vertically            |

</div>

[[notePrimary]]
| Don't use **margin or width on list** because it has **automatic negative margins** for internal spacing. Use **padding** and `flex-full` instead.

[[notePrimary]]
| Sometimes **negative top margin bleed on parent nodes**, to fix it use `flex` the a parent node.

<demo>
  <demoinline src="demos/components/row/space-px">
  </demoinline>
  <demoinline src="demos/components/row/space-1">
  </demoinline>
  <demoinline src="demos/components/row/space-2">
  </demoinline>
  <demoinline src="demos/components/row/space-3">
  </demoinline>
  <demoinline src="demos/components/row/space-4">
  </demoinline>
</demo>

## Alignment

Use **tailwind classes** to assign alignment (e.g. [align-items](https://tailwindcss.com/docs/align-items), [justify-content](https://tailwindcss.com/docs/justify-content)).

<demo>
  <demoinline src="demos/components/row/alignment">
  </demoinline>
</demo>
