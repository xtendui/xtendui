---
type: "Components"
badge: "Core"
parent: "Overlay"
title: "Other"
date: "2019-03-15"
---

[[notePrimary]]
| Overlay uses card to style it's content, refer to [card's other](/components/card/other) for all **other**.

## Special

<div class="table-scroll">

|                         | Class                                     | Mixin                         | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.overlay-close-fixed`                | `.overlay-close-fixed()`        | Close button position fixed and styles            |
| Option                  | `.overlay-disable`                | `.overlay-disable()`        | Disable overlay, useful within media queries            |

</div>

You can have the `.btn-close` with `position: fixed` using `.overlay-close-fixed`.

<demo>
  <demovanilla src="vanilla/components/overlay/close-fixed">
  </demovanilla>
</demo>

You can disable overlay using `.overlay-disable` (resize to mobile to see it in action).

<demo>
  <demovanilla src="vanilla/components/overlay/disable">
  </demovanilla>
</demo>

## Unique mode and nested

<demo>
  <demovanilla src="vanilla/components/overlay/nested">
  </demovanilla>
</demo>
