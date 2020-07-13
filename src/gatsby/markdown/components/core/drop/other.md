---
type: "Components"
category: "Core"
parent: "Drop"
title: "Other"
date: "2019-03-15"
---

## Special

<div class="table-scroll">

|                         | Class                                     | Mixin                         | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.drop-container-static`                | `.drop-container-static()`        | Position relative to closest element with `position: relative;`.    
| Option                  | `.drop-container-disable`                | `.drop-container-disable()`        | Disable drop, useful within media queries            |
| Option                  | `.drop-squared`                | `.drop-squared()`        | No border-radius on drop            |
| Option                  | `.drop-noborder`                | `.drop-noborder()`        | No border on drop            |
| Option                  | `.drop-nospace`                | `.drop-nospace()`        | No space on drop            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/drop/static">
  </demovanilla>
</demo>

<demo>
  <demovanilla src="vanilla/components/core/drop/disable">
  </demovanilla>
</demo>

## Link

You can have **element's link** that trigger after toggle.

If the toggle is on <code>"on": "mouseenter"</code> or <code>"on": "mousehover"</code> the link gets activated on the second touch event on touch devices.

<demo>
  <demovanilla src="vanilla/components/core/drop/with-link">
  </demovanilla>
  <demovanilla src="vanilla/components/core/drop/with-link-hover">
  </demovanilla>
</demo>
