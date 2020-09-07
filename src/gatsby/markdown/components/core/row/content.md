---
type: "Components"
category: "Core"
parent: "Row"
title: "Content"
date: "2030-10-10"
---

## Space

Use **row space utils** to space row's content horizontally and vertically. If you **omit spacing utilities** classes the row have **no space**. 

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Util                  | `.row-space-<space>`       | `row-space-<space>`                | `responsive`                | Space row contents horizontally and vertically            |
| Util                  | `.row-space-x-<space>`       | `row-space-x-<space>`                | `responsive`                | Space row contents horizontally            |
| Util                  | `.row-space-y-<space>`       | `row-space-y-<space>`                | `responsive`                | Space row contents vertically            |

</div>

Default spacing is as follow.

```jsx
row: {
  space: {
    px: '1px',
    0: '0',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    11: '2.75rem',
    12: '3rem',
    13: '3.25rem',
    14: '3.5rem',
    15: '3.75rem',
    16: '4rem',
  },
},
```

[[noteDefault]]
| To customize component's styles follow [css customization](/introduction/getting-started/setup#css-customization) instructions.

Use **tailwind classes** to assign flex options.

[[notePrimary]]
| You should always use **tailwind width classes** inside `.row`.

<demo>
  <demovanilla src="vanilla/components/core/row/space-1">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/space-2">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/space-3">
  </demovanilla>
</demo>
