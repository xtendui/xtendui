---
type: "Components"
category: "Core"
parent: "Row"
title: "Other"
date: "2005-10-10"
---

## Stretch

Use `.row-stretch` to stretch content vertically.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.row-stretch`                     | `row-stretch`                | Stretch content vertically            |

</div>

When using cards you can space with `margin auto` on `.card-block`. When not using cards, be sure that the content have class `flex-auto`.

<demo>
  <demovanilla src="vanilla/components/core/row/stretch">
  </demovanilla>
</demo>

## Overflow

Use `.row-overflow` to have browser overflow scroll on **touch devices** (use touch device to see it in action).

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.row-overflow`                     | `row-overflow`                | Overflow on touch devices            |

</div>

[[noteDefault]]
| To customize utils and component's styles follow [css customization](/introduction/getting-started/setup#css-customization) instructions.

<demo>
  <demovanilla src="vanilla/components/core/row/overflow">
  </demovanilla>
</demo>
