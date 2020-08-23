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

## Disable

You can disable overlay using `.overlay-disable` (resize to mobile to see it in action).

<demo>
  <demovanilla src="vanilla/components/core/overlay/disable">
  </demovanilla>
</demo>

## Close fixed

You can have the `.btn-close` with `fixed z-top`.

<demo>
  <demovanilla src="vanilla/components/core/overlay/close-fixed">
  </demovanilla>
</demo>
