---
type: "Components"
category: "Design"
parent: "Separator"
title: "Separator"
description: "Separator to be used in text content"
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.separator` see [preset customization](/introduction/preset#customization). Check [xtendui/src/separator.css.js](https://github.com/xtendui/xtendui/blob/beta/src/separator.css.js) for default styles.

## Usage

Use `.xt-separator` to create a **separator**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.xt-separator`                     | `xt-separator`                | Separator styles            |

</div>

<demo>
  <demoinline src="demos/components/separator/usage">
  </demoinline>
</demo>

## Variant

Use **tailwind classes** to assign styles (e.g. [margin](https://tailwindcss.com/docs/margin), [text-color](https://tailwindcss.com/docs/text-color)).

Assign separator content with `before:content-['<content>']`.

<demo>
  <demoinline src="demos/components/separator/variant">
  </demoinline>
</demo>

## Size

Use **tailwind classes** to assign size (e.g. [margin](https://tailwindcss.com/docs/margin), [font-size](https://tailwindcss.com/docs/font-size)).

<demo>
  <demoinline src="demos/components/separator/size">
  </demoinline>
</demo>
