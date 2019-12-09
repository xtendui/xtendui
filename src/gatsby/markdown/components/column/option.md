---
type: "Components"
badge: "Core"
parent: "Column"
title: "Option"
date: "2000-02-01"
---

##Size

You can set **column's width** specifying a number between 1 and 12, for example `.col-6` will take 50% width.

Use `.col-auto` to fit the column inside the available width.

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.col-{number}`                           | `.col-1` `.col-2` `.col-3` etc..                |
| Class responsive        | `.col-{number}--{breakpoint}`             | `.col-1-sm` `.col-2--sm` `.col-3--sm` etc..                |
| Mixin                   | `.col({number})`                          | `.col(1)` `.col(2)` `.col(3)` etc..                     |
| Mixin responsive min    | `.col({number}, {breakpoint})`            | `.col(1, sm)` `.col(2, sm)` `.col(3, sm)` etc..                 |

</div>

<demo>
  <demovanilla src="vanilla/components/column/size" mode="grid">
  </demovanilla>
  <demovanilla src="vanilla/components/column/nested" mode="grid-nested">
  </demovanilla>
</demo>

###Custom

Use `.col-custom` to set column width to a custom value.

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Mixin                   | `.col-custom({number})`                   | `.col-custom(20%)` `.col(100px)`                     |
| Mixin responsive min    | `.col-custom({number}, {breakpoint})`     | `.col-custom(20%, sm)` `.col(100px, sm)`                 |

</div>

<demo>
  <demovanilla src="vanilla/components/column/custom" mode="grid">
  </demovanilla>
</demo>
