---
type: "Components"
badge: "Core"
parent: "Drop"
title: "Content"
date: "2019-10-01"
---

## List

[[notePrimary]]
| Drop uses list to style it's content, refer to [list's content](/components/list/content) for all **content**.

Use `li.xt-custom` to override styles applied by `.list.list-drop`.

<demo>
  <demovanilla src="vanilla/components/drop/usage-list">
  </demovanilla>
</demo>

## Card

[[notePrimary]]
| Drop uses card to style it's content, refer to [card's content](/components/card/content) for all **content**.

<demo>
  <demovanilla src="vanilla/components/drop/usage-card">
  </demovanilla>
</demo>

## Overflow

You can set overflow using `.drop-overflow-y` and/or `.drop-overflow-x` in `.drop`.

<div class="table-scroll">

|                         | Class                                     | Mixin                         | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.drop-overflow-y`                | `.drop-overflow-y()`        | Vertical overflow with max-height and scrollbar            |
| Option                  | `.drop-overflow-x`                | `.drop-overflow-x()`        | Horizontal overflow with max-width and scrollbar            |

</div>

<demo>
  <demovanilla src="vanilla/components/drop/overflow-y">
  </demovanilla>
  <demovanilla src="vanilla/components/drop/overflow-x">
  </demovanilla>
</demo>

