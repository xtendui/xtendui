---
type: "Components"
category: "Toggle"
parent: "Overlay"
title: "Position"
date: "2010-09-10"
---

## Screen

To make an **overlay full screen** use `.xt-overlay-container.p-0` and `.xt-card.min-h-screen` and use **Tailwind CSS** (e.g. [align-items](https://tailwindcss.com/docs/align-items), [justify-content](https://tailwindcss.com/docs/justify-content)) to position `.xt-card` content.

<demo>
  <demoinline src="demos/components/overlay/screen">
  </demoinline>
</demo>

## Position

To make an **overlay position on left and right** use `.xt-overlay-container.p-0.w-screen` and `.xt-card > .min-h-screen` and add **max-width and margin left and right auto or 0** to `.xt-overlay-container` to position it on left or right.

<demo>
  <demoinline src="demos/components/overlay/position-horizontal">
  </demoinline>
</demo>

To make an **overlay position on top and bottom** use `.xt-overlay-container.p-0.w-screen` and add **margin top and bottom auto or 0** to `.xt-overlay-inner` to position it on top or bottom.

<demo>
  <demoinline src="demos/components/overlay/position-vertical">
  </demoinline>
</demo>
