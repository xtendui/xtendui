---
type: "Components"
category: "Core"
parent: "Overlay"
title: "Other"
date: "2019-03-15"
---

[[notePrimary]]
| Overlay uses **card** to style it's content, refer to [card's other](/components/core/card/other).

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
