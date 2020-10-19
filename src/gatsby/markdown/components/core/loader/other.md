---
type: "Components"
category: "Core"
parent: "Loader"
title: "Other"
date: "2005-10-10"
---

## Background

Use **tailwind classes** to assign variant (e.g.: [background-color](https://tailwindcss.com/docs/background-color), [opacity](https://tailwindcss.com/docs/opacity)).

<demo>
  <demovanilla src="vanilla/components/core/loader/background-spinner">
  </demovanilla>
  <demovanilla src="vanilla/components/core/loader/background-filler">
  </demovanilla>
</demo>

## Activation

Use **component classes** to assign loader activation animation. 

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.loader-animated`                     | `loader-animated`                | Loader activation animation            |

</div>

Example loader spinner with activation animation*.

<demo>
  <demovanilla src="vanilla/components/core/loader/js-spinner">
  </demovanilla>
</demo>

Example loader filler with activation animation.

<demo>
  <demovanilla src="vanilla/components/core/loader/js-filler">
  </demovanilla>
</demo>

## Mouse

Use **component classes** to create a loader positioned for mouse.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.loader-mouse`                     | `loader-mouse`                | Loader position for mouse            |

</div>

See [mouse follow addon](/components/addons/mouse-follow) to create a loader with mouse follow.
