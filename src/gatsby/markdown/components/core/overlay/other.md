---
type: "Components"
category: "Core"
parent: "Overlay"
title: "Other"
date: "2019-03-15"
---

## Preset

`{preset}` can be `screen`, `position-left`, `position-right`. `{position}` can be `left`, `right`.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.overlay-{preset}`                         | `.overlay-screen` `.overlay-position-{position}` |
| Mixin                   | Not possible                              | Not possible                  |

</div>

<demo>
  <demovanilla src="vanilla/components/core/overlay/screen">
  </demovanilla>
</demo>

<demo>
  <demovanilla src="vanilla/components/core/overlay/position">
  </demovanilla>
</demo>

## Special

<div class="table-scroll">

|                         | Class                                     | Mixin                         | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.overlay-close-fixed`                | `.overlay-close-fixed()`        | Close button position fixed and styles            |
| Option                  | `.overlay-disable`                | `.overlay-disable()`        | Disable overlay, useful within media queries            |
| Option                  | `.overlay-squared`                | `.overlay-squared()`        | No border-radius on overlay           |
| Option                  | `.overlay-noborder`                | `.overlay-noborder()`        | No border on overlay            |

</div>

You can have the `.btn-close` with `position: fixed` using `.overlay-close-fixed`.

<demo>
  <demovanilla src="vanilla/components/core/overlay/close-fixed">
  </demovanilla>
</demo>

You can disable overlay using `.overlay-disable` (resize to mobile to see it in action).

<demo>
  <demovanilla src="vanilla/components/core/overlay/disable">
  </demovanilla>
</demo>

## Unique mode and nested

<demo>
  <demovanilla src="vanilla/components/core/overlay/nested">
  </demovanilla>
</demo>
