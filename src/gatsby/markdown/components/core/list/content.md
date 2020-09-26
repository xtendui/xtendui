---
type: "Components"
category: "Core"
parent: "List"
title: "Content"
date: "2030-10-10"
---

## Space

Use **list space utils** to space row's content horizontally and vertically. If you **omit spacing utilities** classes the list have **no space**. 

For `<space>` values use any of [tailwind spacing](https://tailwindcss.com/docs/customizing-spacing).

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Util                  | `.list-space-<space>`       | `list-space-<space>`                | `responsive`                | Space contents horizontally and vertically            |
| Util                  | `.list-space-x-<space>`       | `list-space-x-<space>`                | `responsive`                | Space contents horizontally            |
| Util                  | `.list-space-y-<space>`       | `list-space-y-<space>`                | `responsive`                | Space contents vertically            |

</div>

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

Use **tailwind classes** to assign flex alignment.

<demo>
  <demovanilla src="vanilla/components/core/list/alignment">
  </demovanilla>
</demo>
