---
type: "Components"
category: "Core"
parent: "List"
title: "Content"
date: "2030-10-10"
---

## Space

For `<space>` values use any of [tailwind spacing](https://tailwindcss.com/docs/customizing-spacing).

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Util                  | `.list-<space>`       | `list-<space>`                | `responsive`                | Space contents horizontally and vertically            |
| Util                  | `.list-x-<space>`       | `list-x-<space>`                | `responsive`                | Space contents horizontally            |
| Util                  | `.list-y-<space>`       | `list-y-<space>`                | `responsive`                | Space contents vertically            |

</div>

[[notePrimary]]
| **Do not use margin** css or classes on `.list` because it has automatic negative margins for internal spacing.

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

Use **tailwind classes** to assign alignment (e.g.: [align-items](https://tailwindcss.com/docs/align-items), [justify-content](https://tailwindcss.com/docs/justify-content)).

<demo>
  <demovanilla src="vanilla/components/core/list/alignment">
  </demovanilla>
</demo>
