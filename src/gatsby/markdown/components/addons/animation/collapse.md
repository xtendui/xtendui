---
type: "Components"
category: "Addons"
parent: "Animation"
title: "collapse"
description: "Collapse horizontal and vertical on interactions."
---

## Usage

Collapse only work with **xtendui javascript components**, assign `options.collapseHeight` or `options.collapseWidth` with also `overflow-hidden` on the selected nodes.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `collapseHeight:String`                          | `false`        | Type of elements that collapse vertically, can be `elements`, `targets`, `elementsInner`, `targetsInner`           |
| Option                    | `collapseWidth:String`                          | `false`        | Type of elements that collapse horizzontally, can be `elements`, `targets`, `elementsInner`, `targetsInner`           |

</div>

Use **tailwind classes** to assign animation (e.g. [translate](https://tailwindcss.com/docs/translate), [transition-property](https://tailwindcss.com/docs/transition-property), [transition-duration](https://tailwindcss.com/docs/transition-duration)).

<demo>
  <demovanilla src="vanilla/components/addons/animation/collapse-width">
  </demovanilla>
</demo>

<demo>
  <demovanilla src="vanilla/components/addons/animation/collapse-height">
  </demovanilla>
</demo>
