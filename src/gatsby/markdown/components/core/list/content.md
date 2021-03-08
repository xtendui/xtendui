---
type: "Components"
category: "Core"
parent: "List"
title: "Content"
date: "2030-10-10"
---

## Space

Use **component utility** `.xt-list-<space>` to space content.

For `<space>` values use any of [tailwind spacing](https://tailwindcss.com/docs/customizing-spacing).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `.xt-list-<space>`       | `xt-list-<space>`                | `responsive`                | Space contents horizontally and vertically            |
| Utility                  | `.xt-list-x-<space>`       | `xt-list-x-<space>`                | `responsive`                | Space contents horizontally            |
| Utility                  | `.xt-list-y-<space>`       | `xt-list-y-<space>`                | `responsive`                | Space contents vertically            |

</div>

[[notePrimary]]
| Don't use **margin on list** because it has **automatic negative margins** for internal spacing.

[[notePrimary]]
| Sometimes **negative top margin bleed on parent nodes**, to fix it use `flex` the a parent node.

<demo>
  <demovanilla src="vanilla/components/core/list/space-px">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/space-1">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/space-2">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/space-3">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/space-4">
  </demovanilla>
</demo>

## Alignment

Use **tailwind classes** to assign alignment (e.g. [align-items](https://tailwindcss.com/docs/align-items), [justify-content](https://tailwindcss.com/docs/justify-content)).

[[noteDefault]]
| By default `.xt-list` has `align-items: stretch`.

<demo>
  <demovanilla src="vanilla/components/core/list/alignment">
  </demovanilla>
</demo>
