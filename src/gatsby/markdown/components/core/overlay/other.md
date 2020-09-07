---
type: "Components"
category: "Core"
parent: "Overlay"
title: "Other"
date: "2005-10-10"
---

## Preset

You can overlay that covers the screen with `.overlay-screen`, remember to use also align and justify the `.card`.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Util                  | `.overlay-screen`       | `overlay-screen`                | `responsive`                | Overlay that covers the screen            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/overlay/screen">
  </demovanilla>
</demo>

With `.overlay-screen` you can also use **tailwind classes** to modify `.overlay-container` **position** and **size**.

<demo>
  <demovanilla src="vanilla/components/core/overlay/position">
  </demovanilla>
</demo>

## Disable

You can disable styles and javascript using `.overlay-disable`. [responsive bug](https://github.com/tailwindlabs/tailwindcss/issues/2302).

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Util                  | `.overlay-disable`       | `overlay-disable !important`                | `responsive`                | Reset overlay styles and javascript            |

</div>

You can disable overlay using `.overlay-disable`.

<demo>
  <demovanilla src="vanilla/components/core/overlay/disable">
  </demovanilla>
</demo>

## Close fixed

You can have the `.btn-close` with `fixed z-top` to have it always visible also when scrolling.

<demo>
  <demovanilla src="vanilla/components/core/overlay/close-fixed">
  </demovanilla>
</demo>
