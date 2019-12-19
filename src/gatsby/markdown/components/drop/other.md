---
type: "Components"
badge: "Core"
parent: "Drop"
title: "Other"
date: "2000-10-01"
---

## Link

You can have **element's link** that trigger after toggle. Remember to use `autoDisable: false`.

If the toggle is on <code>"on": "mouseenter"</code> or <code>"on": "mousehover"</code> the link gets activated on the second touch event on touch devices.

<demo>
  <demovanilla src="vanilla/components/drop/with-link">
  </demovanilla>
  <demovanilla src="vanilla/components/drop/with-link-hover">
  </demovanilla>
</demo>

## Static

<div class="table-scroll">

|                         | Class                                     | Mixin                         | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.drop-container-static`                | `.drop-container-static()`        | Position relative to closest element with `position: relative;`.            |

</div>

<demo>
  <demovanilla src="vanilla/components/drop/static">
  </demovanilla>
</demo>

## Backdrop

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `backdrop:Boolean`                              | `false`                     | Generate backdrop on targets or on object if no targets           |

</div>

<demo>
  <demovanilla src="vanilla/components/drop/backdrop">
  </demovanilla>
</demo>

## Disable

<div class="table-scroll">

|                         | Class                                     | Mixin                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.drop-disable`                | `.drop-disable()`        | Disable drop, useful within media queries            |

</div>

<demo>
  <demovanilla src="vanilla/components/drop/disable">
  </demovanilla>
</demo>

## Nested

Test with nested drops.

<demo>
  <demovanilla src="vanilla/components/drop/nested">
  </demovanilla>
</demo>
