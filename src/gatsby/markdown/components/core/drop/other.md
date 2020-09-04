---
type: "Components"
category: "Core"
parent: "Drop"
title: "Other"
date: "2019-03-15"
---

## Static

If you want a drop with size and position **relative to a parent Node** use `drop-container-static`.

<div class="table-scroll">

|                         | Syntax                                     | Mixin                         | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Component                  | `.drop-container-static`                | `drop-container-static`        | Position relative to closest element with `.relative`    

</div>

<demo>
  <demovanilla src="vanilla/components/core/drop/static">
  </demovanilla>
</demo>

## Disable

You can disable styles and javascript using `.drop-container-disable`.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Util                  | `.drop-container-disable`       | `drop-container-disable !important`                | `responsive`                | Reset drop styles and javascript            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/drop/disable">
  </demovanilla>
</demo>

## Prevent Event

You can have **element's link** and **click events** prevented when the drop opens with `preventEvent: true`, they will trigger only if the drop is already opened.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `preventEvent:Boolean`                          | `false`        | Prevent interaction until activated depending on `on` and `off` events (second click or mouseenter)            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/drop/prevent-event">
  </demovanilla>
  <demovanilla src="vanilla/components/core/drop/prevent-event-hover">
  </demovanilla>
</demo>
