---
type: "Components"
category: "Core"
parent: "Structure"
title: "Variables"
date: "2019-11-20"
---

Most of the variables are inside `xtend-libray/src/core/structure/_vars.less`, specific component variables are inside the component's less files.

## Generate

Within `@generate-` vars you have a boolean or a list of breakpoints. With a boolean you activate/deactivate **classes generation**, with a breakpoint you also activate classes generation **for that breakpoint**.

## Colors

Colors variables. `@accent` is the accent color, usually used by **primary** variants but not necessarily. `@text-inverse` is for text on dark backgrounds.

There are also shadow and gradient variables.

## Spacing

You have also spacing **margin** and **padding** vars that you can use with a **mixin** to have well-established spacing everywhere.

Available positions are: `all` `x` `y` `left` `right` `top` `bottom`.

Available sizes are: `layout` `auto` `none` `micro` `mini` `tiny` `small` `medium` `large` `big` `giant` `huge`.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.m-{position}-{size}`                      | `.m-y-small`           |
| Class responsive        | `.m-{position}-{size}-{breakpoint}`         | `.m-y-small-sm`        |
| Mixin                   | `.margin({position}, {size})`             | `.margin(y, small)` etc..           |
| Mixin responsive min    | `.margin({position}, {size}, {breakpoint})`        | `.margin(y, small, sm)`       |

</div>

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.m-remove-{position}-{size}`                      | `.m-y-remove-small`           |
| Class responsive        | `.m-remove-{position}-{size}-{breakpoint}`         | `.m-y-remove-small-sm`        |
| Mixin                   | `.margin-remove({position}, {size})`             | `.margin-remove(y, small)` etc..           |
| Mixin responsive min    | `.margin-remove({position}, {size}, {breakpoint})`        | `.margin-remove(y, small, sm)`       |

</div>

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.p-{position}-{size}`                      | `.p-y-small`           |
| Class responsive        | `.p-{position}-{size}-{breakpoint}`         | `.p-y-small-sm`        |
| Mixin                   | `.padding({position}, {size})`             | `.padding(y, small)` etc..           |
| Mixin responsive min    | `.padding({position}, {size}, {breakpoint})`        | `.padding(y, small, sm)`       |

</div>

[[notePrimary]]
| When using **spacing classes** with **breakpoints** you need to set the class breakpoint generation with `@generate-margin` and `@generate-padding`.

## Order

See [order util](/components/core/structure/util#order).

## Z-Index

All z-index used in the library, you can change the values but it's better to keep the sequential z-index order the same.

## Breakpoints

The breakpoints are used on media queries and many components, be sure to list all breakpoints inside the variable `@breakpoints`.

## Media queries

You can edit media queries and breakpoints.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Mixin                   | `@media @min-{breakpoint}`             | `@media @min-sm` etc..           |
| Mixin                   | `@media @max-{breakpoint}`             | `@media @max-sm` etc..           |
| Mixin                   | `@media @min-{breakpoint} and @max-{breakpoint}`             | `@media @min-sm and @max-md` etc..           |

</div>
