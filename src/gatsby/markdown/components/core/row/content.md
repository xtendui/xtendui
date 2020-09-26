---
type: "Components"
category: "Core"
parent: "Row"
title: "Content"
date: "2030-10-10"
---

## Space

Use **row space utils** to space row's content horizontally and vertically. If you **omit spacing utilities** classes the row have **no space**. 

For `<space>` values use any of [tailwind spacing](https://tailwindcss.com/docs/customizing-spacing).

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Util                  | `.row-space-<space>`       | `row-space-<space>`                | `responsive`                | Space contents horizontally and vertically            |
| Util                  | `.row-space-x-<space>`       | `row-space-x-<space>`                | `responsive`                | Space contents horizontally            |
| Util                  | `.row-space-y-<space>`       | `row-space-y-<space>`                | `responsive`                | Space contents vertically            |

</div>

[[notePrimary]]
| You should always use **tailwind width classes** for the contents inside `.row`. Otherwise you can space contents with [list](/components/core/list).

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

Use **tailwind classes** to assign flex alignment.

<demo>
  <demovanilla src="vanilla/components/core/row/alignment">
  </demovanilla>
</demo>
