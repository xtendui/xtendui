---
type: "Components"
category: "Core"
parent: "Loader"
title: "Other"
date: "2005-10-10"
---

## Background

Use **tailwind classes** to assign variant (e.g.: background, opacity).

<demo>
  <demovanilla src="vanilla/components/core/loader/background-spinner">
  </demovanilla>
  <demovanilla src="vanilla/components/core/loader/background-filler">
  </demovanilla>
</demo>

## Interaction

Example loader spinner show and hide **with javascript and css transitions**.

<demo>
  <demovanilla src="vanilla/components/core/loader/js-spinner">
  </demovanilla>
</demo>

Example loader filler show and hide **with javascript and css transitions**.

<demo>
  <demovanilla src="vanilla/components/core/loader/js-filler">
  </demovanilla>
</demo>

[[noteDefault]]
| To customize utils and components follow [css customization](/introduction/getting-started/setup#css-customization) instructions.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.loader-animated`                     | `loader-animated`                | Loader activation and animation            |

</div>

## Mouse

Use **component classes** to create a loader positioned for mouse.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.loader-mouse`                     | `loader-mouse`                | Loader position for mouse            |

</div>

See [mouse follow addon](/components/addons/animation/mouse-follow) to create a loader with mouse follow.
