---
type: "Components"
badge: "Core"
parent: "Global"
title: "Css"
date: "2000-02-01"
---

## Vars

Most of the variables are inside `~xtend-library/src/core/global/global.less`, specific component variables are inside the component's less files.

### Generate

Within `@generate-` vars you have a boolean or a list of breakpoints. With a boolean you activate/deactivate **classes generation**, with a breakpoint you also activate classes generation **for that breakpoint**.

### Colors

Colors variables. `@accent` is the accent color, usually used by **primary** variants but not necessarily. `@text-inverse` is for text on dark backgrounds.

There are also shadow and gradient variables.

### Spacing

You have also spacing **margin** and **padding** vars that you can use with a **mixin** to have well-established spacing everywhere.

Available positions are: `left` `right` `top` `bottom` `x` `y` `all`.

Available sizes are: `layout` `auto` `none` `micro` `tiny` `small` `medium` `big` `giant` `huge`.

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.m-{position}--{size}`                      | `.m-y--small`           |
| Class responsive        | `.m-{position}--{size}--{breakpoint}`         | `.m-y--small--sm`        |
| Mixin                   | `.margin({position}, {size})`             | `.margin(y, small)` etc..           |
| Mixin responsive min    | `.margin({position}, {size}, {breakpoint})`        | `.margin(y, small, sm)`       |

</div>

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.m-remove-{position}--{size}`                      | `.m-y-remove--small`           |
| Class responsive        | `.m-remove-{position}--{size}--{breakpoint}`         | `.m-y-remove--small--sm`        |
| Mixin                   | `.margin-remove({position}, {size})`             | `.margin-remove(y, small)` etc..           |
| Mixin responsive min    | `.margin-remove({position}, {size}, {breakpoint})`        | `.margin-remove(y, small, sm)`       |

</div>

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.p-{position}--{size}`                      | `.p-y--small`           |
| Class responsive        | `.p-{position}--{size}--{breakpoint}`         | `.p-y--small--sm`        |
| Mixin                   | `.padding({position}, {size})`             | `.padding(y, small)` etc..           |
| Mixin responsive min    | `.padding({position}, {size}, {breakpoint})`        | `.padding(y, small, sm)`       |

</div>

[[noteDefault]]
| When using **spacing classes** with **breakpoints** you need to set the class breakpoint generation with `@generate-margin` and `@generate-padding`.
``

### Order

See [order utils](/components/global#utils-order).

### Z-Index

All z-index used in the library, you can change the values but it's better to keep the sequential z-index order the same.

### Breakpoints

The breakpoints are used on media queries and many components, be sure to list all breakpoints inside the variable `@breakpoints`.

### Media queries

You can edit media queries and breakpoints.

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Mixin                   | `@media @min-{breakpoint}`             | `@media @min-sm` etc..           |
| Mixin                   | `@media @max-{breakpoint}`             | `@media @max-sm` etc..           |
| Mixin                   | `@media @min-{breakpoint} and @max-{breakpoint}`             | `@media @min-sm and @max-md` etc..           |

</div>

## Styles

The global styles that don't belongs to a component are all here.

### Scrollbar

Within `.overflow-style` mixin you have the scrollbar styles, you can setup different modes for example `@mode: inner`.

### Focus

Apply focus styles to `html.xt-focus-visible` to style focus only when user interaction with keyboard occurred (similar to [:focus-visible](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)).

To disable focus feeback globally add `html.xt-focus-disable` class.

## Utils

### Various

<div class="table--scroll">

|                         | Syntax                                    | Mixin                         | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Util                  | `.reset-text`                               | `.reset-text()`                | Reset text styles to inherit            |
| Util                  | `.pointer-events-none`                               | `.pointer-events-none()`                | Set `pointer-events: none`            |
| Util                  | `.links-none`                               | `.links-none()`                | Disable child links with `pointer-events: none`             |
| Util                  | `.text-capitalize`                               | `.text-capitalize()`                | Lowercase text and capitalize first letter            |
| Util                  | `.design-setup`                               | `.design-setup()`                | Util for components design setup            |
| Util                  | `.clearfix`                               | `.clearfix()`                | Set clearfix            |
| Util                  | `.user-select--none`                               | `.user-select--none()`                | Disable text selection            |
| Util                  | `.user-select--text`                               | `.user-select--text()`                | Enable text selection            |
| Util                  | `.sr-only`                               | `.sr-only()`                | Hide and make visibile only on screen readers            |

</div>

### Toggle

Toggle utils are useful with [toggle](/components/toggle) to show/hide **targets**.

<div class="table--scroll">

|                         | Syntax                                    | Mixin                         | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Util                  | `.toggle-block`                               | `.toggle-block()`                | Toggle from display: none to `display: block`            |
| Util                  | `.toggle-flex`                               | `.toggle-flex()`                | Toggle from display: none to display: flex            |
| Util                  | `.toggle-inline-flex`                               | `.toggle-inline-flex()`                | Toggle from display: none to `display: inline-flex`            |
| Util                  | `.toggle-inline`                               | `.toggle-inline()`                | Toggle from display: none to display: inline            |
| Util                  | `.toggle-inline-block`                               | `.toggle-inline-block()`                | Toggle from display: none to display: inline-block            |
| Util                  | `.toggle-none`                               | `.toggle-none()`                | Toggle to display: none            |
| Util                  | `.toggle-visible`                               | `.toggle-visible()`                | Toggle from visibility: hidden to visibility: visible            |
| Util                  | `.toggle-hidden`                               | `.toggle-hidden()`                | Toggle to visibility: hidden            |

</div>

### Animation

<div class="table--scroll">

|                         | Syntax                                    | Mixin                         | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Util                  | `.transition-none`                               | `.transition-none()`                | Disable css transition            |
| Util                  | `.animation-none`                               | `.animation-none()`                | Disable css animation            |
| Util                  | `.trans-anim-none`                               | `.trans-anim-none()`                | Disable css transition and animation            |
| Util                  | `.transform-none`                               | `.transform-none()`                | Disable css transform            |
| Util                  | `.duration-none`                               | `.duration-none()`                | Disable css duration for transition and animation            |

</div>

### Responsive

Classes and mixins for making an image size responsive with max size, the element will be large as the parent until it's original size is reached.

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.responsive`                           | `.responsive`                |
| Class responsive        | `.responsive--{breakpoint}`             | `.responsive--sm`                |
| Mixin                   | `.responsive()`                          | `.responsive()`                     |
| Mixin responsive min    | `.responsive({breakpoint})`            | `.responsive(sm)`                |

</div>

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.responsive-y`                           | `.responsive-y`                |
| Class responsive        | `.responsive-y--{breakpoint}`             | `.responsive-y--sm`                |
| Mixin                   | `.responsive-y()`                          | `.responsive-y()`                     |
| Mixin responsive min    | `.responsive-y({breakpoint})`            | `.responsive-y(sm)`                |

</div>

### Full

Classes and mixins for making an element (ex: img, .btn, etc..) size responsive with full size, the element will always be of the size of the parent.

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.full`                           | `.full`                |
| Class responsive        | `.full--{breakpoint}`             | `.full--sm`                |
| Mixin                   | `.full()`                          | `.full()`                     |
| Mixin responsive min    | `.full({breakpoint})`            | `.full(sm)`                |

</div>

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.full-y`                           | `.full-y`                |
| Class responsive        | `.full-y--{breakpoint}`             | `.full-y--sm`                |
| Mixin                   | `.full-y()`                          | `.full-y()`                     |
| Mixin responsive min    | `.full-y({breakpoint})`            | `.full-y(sm)`                |

</div>

### Align

Classes and mixins for setting an element (ex: div, .btn, etc..) alignment. It works with **flex** elements and children **inline** or **inline-block** elements.

**{type}** can be `left` `center` `right`.

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.align-{type}`                           | `.align-right`                |
| Class responsive        | `.align-{type}--{breakpoint}`             | `.align-right--sm`                |
| Mixin                   | `.align-{type}()`                          | `.align-right()`                     |
| Mixin responsive min    | `.align-{type}({breakpoint})`            | `.align-right(sm)`                |

</div>

### Display

Classes and mixins for setting display styles. Useful if you want to show/hide an element on media queries.

**{type}** can be `none` `block` `inline-block` `flex` `inline-flex`.

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.display-{type}`                           | `.display-none`                |
| Class responsive        | `.display-{type}--{breakpoint}`             | `.display-none--sm`                |
| Mixin                   | `.display({type})`                          | `.display(none)`                     |
| Mixin responsive min    | `.display({type}{breakpoint})`            | `.display(none, sm)`                |

</div>

### Order

Classes and mixins for setting **flex** childs order. The **num** evals to the index of the `@orders` variable.

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.order-{num}`                           | `.order-2`                |
| Class responsive        | `.order-{num}--{breakpoint}`             | `.order-2--sm`                |
| Mixin                   | `.order({num})`                          | `.order(2)`                     |
| Mixin responsive min    | `.order({num}{breakpoint})`            | `.order(2, sm)`                |

</div>

### Flex

Classes and mixins for setting **flex** properties.

**{type}** can be `none` `auto` `full`.

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.flex-{type}`                           | `.flex--auto`                |
| Class responsive        | `.flex-{type}--{breakpoint}`             | `.flex--auto--sm`                |
| Mixin                   | `.flex({type})`                          | `.flex(auto)`                     |
| Mixin responsive min    | `.flex({type}{breakpoint})`            | `.flex(auto, sm)`                |

</div>

For available **{value}** see [list](/components/list/option) or [row](/components/row/option).

<div class="table--scroll">

|                         | Syntax                                    | Mixin                         | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Util                  | `.flex-direction-{value}`                | `.flex-direction({value})`           | Set flex direction            |
| Util                  | `.flex-direction-{value}--{breakpoint}`                | `.flex-direction({value}, {breakpoint})`           | Set flex direction            |
| Util                  | `.flex-wrap-{value}`                | `.flex-wrap({value})`           | Set flex wrap            |
| Util                  | `.flex-wrap-{value}--{breakpoint}`                | `.flex-wrap({value}, {breakpoint})`           | Set flex wrap            |
| Util                  | `.justify-content-{value}`                | `.justify-content({value})`           | Set justify content            |
| Util                  | `.justify-content-{value}--{breakpoint}`                | `.justify-content({value}, {breakpoint})`           | Set justify content            |
| Util                  | `.align-items-{value}`                | `.align-items({value})`           | Set align items            |
| Util                  | `.align-items-{value}--{breakpoint}`                | `.align-items({value}, {breakpoint})`           | Set align items            |
| Util                  | `.align-content-{value}`                | `.align-content({value})`           | Set align content            |
| Util                  | `.align-content-{value}--{breakpoint}`                | `.align-content({value}, {breakpoint})`           | Set align content            |
| Util                  | `.align-self-{value}`                | `.align-self({value})`           | Set align self            |
| Util                  | `.align-self-{value}--{breakpoint}`                | `.align-self({value}, {breakpoint})`           | Set align self            |

</div>

[[noteDefault]]
| When using **flex util classes** with **breakpoints** you need to set the class breakpoint generation with `@generate-flex`.

