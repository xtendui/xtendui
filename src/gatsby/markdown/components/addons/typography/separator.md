---
type: "Components"
category: "Addons"
parent: "Typography"
title: "Separator"
description: "Separator to be used in text content"
---

## Installation

You can **customize this component** inside `tailwind.config.js` setting `theme.extend.xtendui.separator`, check [xtendui/src/addons/separator.css.js](https://github.com/minimit/xtendui/blob/beta/src/addons/separator.css.js) for default values.

## Usage

Use this code to create a **separator**.

<demo>
  <demovanilla src="vanilla/components/addons/typography/separator">
  </demovanilla>
</demo>

## Variant

Use **tailwind classes** to assign styles (e.g. [margin](https://tailwindcss.com/docs/margin), [text-color](https://tailwindcss.com/docs/text-color)).

For `<type>` values use `dash`, `slash`, `pipe`, `point` or `arrow`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.xt-separator-<type>`                     | `separator-<type>`                | Separator content            |

</div>

<demo>
  <demovanilla src="vanilla/components/addons/typography/separator-variant">
  </demovanilla>
</demo>

## Size

Use **tailwind classes** to assign size (e.g. [margin](https://tailwindcss.com/docs/margin), [font-size](https://tailwindcss.com/docs/font-size)).

<demo>
  <demovanilla src="vanilla/components/addons/typography/separator-size">
  </demovanilla>
</demo>
