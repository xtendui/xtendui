---
type: "Components"
badge: "Core"
parent: "Drop"
title: "Content"
date: "2000-04-01"
---

## Card

[[noteDefault]]
| Drop uses card to style it's content, refer to [card's content](/components/card/content) for all **content**.

<demo>
  <demovanilla src="vanilla/components/drop/usage-card">
  </demovanilla>
</demo>

## List

[[noteDefault]]
| Drop uses list to style it's content, refer to [list's content](/components/list/content) for all **content**.

Use `li.xt-custom` to override styles applied by `.list.list-drop`.

<demo>
  <demovanilla src="vanilla/components/drop/usage-list">
  </demovanilla>
</demo>

## Overflow

You can set vertical overflow using `.drop-overflow-y` in `.drop`.

<div class="table-scroll">

|                         | Class                                     | Mixin                         | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.drop-overflow-y`                | `.drop-overflow-y()`        | Vertical overflow with max-height and scrollbar            |

</div>

<demo>
  <demovanilla src="vanilla/components/drop/overflow-y">
  </demovanilla>
</demo>
