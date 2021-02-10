---
type: "Components"
category: "Core"
parent: "List"
title: "Content"
date: "2030-10-10"
---

## Space

Use **component utility** `.list-<space>` to space content.

For `<space>` values use any of [tailwind spacing](https://tailwindcss.com/docs/customizing-spacing) up to 20.

<div class="overflow-sub overflow-y-hidden overflow-x-scroll my-4 mt-fc mb-lc w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `.list-<space>`       | `list-<space>`                | `responsive`                | Space contents horizontally and vertically            |
| Utility                  | `.list-x-<space>`       | `list-x-<space>`                | `responsive`                | Space contents horizontally            |
| Utility                  | `.list-y-<space>`       | `list-y-<space>`                | `responsive`                | Space contents vertically            |

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
| By default `.list` has `align-items: stretch`.

<demo>
  <demovanilla src="vanilla/components/core/list/alignment">
  </demovanilla>
</demo>
