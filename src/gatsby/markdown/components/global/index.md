---
type: "Components"
badge: "Core"
parent: "Global"
title: "Global"
description: "Global styles, variables and utils."
categories: ["100-Core"]
date: "2000-01-01"
---

##Vars

Here are the explanation for some global vars:

###Generate

Within `@generate-` vars you have a boolean or a list of breakpoints. With a boolean you activate/deactivate **classes generation**, with a breakpoint you also activate classes generation **for that breakpoint**.

###Spacing

You have also spacing **margin** and **padding** vars that you can use with a **mixin** to have well-established spacing everywhere. Available positions are: `left` `right` `top` `bottom` `x` `y` `all`.

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Mixin                   | `.margin({position}, {size})`             | `.margin(y, small)` etc..           |
| Mixin                   | `.margin-remove({position}, {size})`      | `.margin-remove(y, small)` etc..    |
| Mixin                   | `.padding({position}, {size})`            | `.padding(y, small)` etc..          |

</div>

###Media queries

You can edit media queries and breakpoints.

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Mixin                   | `@media @min-{breakpoint}`             | `@media @min-sm` etc..           |
| Mixin                   | `@media @max-{breakpoint}`             | `@media @max-sm` etc..           |
| Mixin                   | `@media @min-{breakpoint} and @max-{breakpoint}`             | `@media @min-sm and @max-md` etc..           |

</div>

##Styles

Here are the explanation for some global styles:

###Scrollbar

Within `.overflow-style` mixin you have the scrollbar styles, you can setup different modes for example `@mode: inner`.

###Focus

Apply focus styles to `html.xt-focus-visible` to style focus only when user interaction with keyboard occurred (similar to [:focus-visible](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)).

To disable focus feeback globally add `html.xt-focus-disable` class.

##Utils

@TODO