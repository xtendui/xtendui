---
type: "Components"
category: "Layout"
parent: "Typography"
title: "Separator"
description: "Separator to be used in text content"
date: "1900-10-10"
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.separator`.

Check [xtendui/src/separator.css.js](https://github.com/minimit/xtendui/blob/beta/src/separator.css.js) for default styles.

## Usage

Use this code to create a **separator**.

<demo>
  <demoinline src="demos/components/typography/separator">
  </demoinline>
</demo>

## Variant

Use **tailwind classes** to assign styles (e.g. [margin](https://tailwindcss.com/docs/margin), [text-color](https://tailwindcss.com/docs/text-color)).

For `<type>` values use `dash`, `slash`, `pipe`, `point` or `arrow`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.xt-separator-<type>`                     | `separator-<type>`                | Separator content            |

</div>

<demo>
  <demoinline src="demos/components/typography/separator-variant">
  </demoinline>
</demo>

## Size

Use **tailwind classes** to assign size (e.g. [margin](https://tailwindcss.com/docs/margin), [font-size](https://tailwindcss.com/docs/font-size)).

<demo>
  <demoinline src="demos/components/typography/separator-size">
  </demoinline>
</demo>
