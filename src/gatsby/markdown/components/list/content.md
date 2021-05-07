---
type: "Components"
category: "Layout"
parent: "List"
title: "Content"
date: "2030-10-10"
---

## Space

Use **component utility** `.xt-list-<space>` to space content.

For `<space>` values use any of [tailwind spacing](https://tailwindcss.com/docs/customizing-spacing).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `.xt-list-<space>`       | `xt-list-<space>`                | `responsive`                | Space contents horizontally and vertically            |
| Utility                  | `.xt-list-x-<space>`       | `xt-list-x-<space>`                | `responsive`                | Space contents horizontally            |
| Utility                  | `.xt-list-y-<space>`       | `xt-list-y-<space>`                | `responsive`                | Space contents vertically            |

</div>

[[notePrimary]]
| Don't use **margin or width on list** because it has **automatic negative margins** for internal spacing. Use **padding** and `flex-full` instead.

[[notePrimary]]
| Sometimes **negative top margin bleed on parent nodes**, to fix it use `flex` the a parent node.

<demo>
  <demoinline src="demos/components/list/space-px">
  </demoinline>
  <demoinline src="demos/components/list/space-1">
  </demoinline>
  <demoinline src="demos/components/list/space-2">
  </demoinline>
  <demoinline src="demos/components/list/space-3">
  </demoinline>
  <demoinline src="demos/components/list/space-4">
  </demoinline>
</demo>

## Alignment

Use **tailwind classes** to assign alignment (e.g. [align-items](https://tailwindcss.com/docs/align-items), [justify-content](https://tailwindcss.com/docs/justify-content)).

[[noteDefault]]
| By default `.xt-list` has `align-items: stretch`.

<demo>
  <demoinline src="demos/components/list/alignment">
  </demoinline>
</demo>
