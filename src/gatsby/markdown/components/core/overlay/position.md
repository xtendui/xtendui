---
type: "Components"
category: "Core"
parent: "Overlay"
title: "Position"
date: "2009-10-10"
---

## Screen

You can overlay that covers the screen with `.overlay-screen`, remember to use **tailwind classes** (e.g. [align-items](https://tailwindcss.com/docs/align-items), [justify-content](https://tailwindcss.com/docs/justify-content)) on `.card`.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `.overlay-screen`       | `overlay-screen`                | `responsive`                | Overlay that covers the screen            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/overlay/screen">
  </demovanilla>
</demo>

## Position

To create an **overlay position** with `.overlay-screen`, you can also use **tailwind classes** (e.g. [max-width](https://tailwindcss.com/docs/max-width), [margin](https://tailwindcss.com/docs/margin)) on `.overlay-container`.

<demo>
  <demovanilla src="vanilla/components/core/overlay/position">
  </demovanilla>
</demo>
