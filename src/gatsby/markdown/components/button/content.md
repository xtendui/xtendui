---
type: "Components"
category: "Core"
parent: "Button"
title: "Content"
date: "2030-10-10"
---

## Variant

Use **Tailwind CSS** to assign variant (e.g. [border-color](https://tailwindcss.com/docs/border-color), [background-color](https://tailwindcss.com/docs/background-color), [text-color](https://tailwindcss.com/docs/text-color)).

Use `.xt-link` to style as button as [link](/components/link).

<demo>
  <demoinline src="demos/components/button/variant">
  </demoinline>
</demo>

Do not assign **text styles** to inherit them from parent nodes.

See [link variant](/components/link#variant) to style **links**.

<demo>
  <demoinline src="demos/components/button/variant-inverse">
  </demoinline>
</demo>

## Size

Use **Tailwind CSS** to assign size (e.g. [padding](https://tailwindcss.com/docs/padding), [font-size](https://tailwindcss.com/docs/font-size)).

<demo>
  <demoinline src="demos/components/button/size">
  </demoinline>
</demo>

## Alignment and Icon

Use **Tailwind CSS** to assign alignment (e.g. [text-align](https://tailwindcss.com/docs/text-align), [align-items](https://tailwindcss.com/docs/align-items), [justify-content](https://tailwindcss.com/docs/justify-content)).

> To properly align horizontally also when newlines specify both [text-align](https://tailwindcss.com/docs/text-align) and [justify-content](https://tailwindcss.com/docs/justify-content).

> This demos use [icon](/components/icon) see documentation for more info.

<demo>
  <demoinline src="demos/components/button/alignment">
  </demoinline>
</demo>

Use negative [margin](https://tailwindcss.com/docs/margin) on icons if the icon is bigger than the button **to prevent vertical resize**.

<demo>
  <demoinline src="demos/components/button/icon">
  </demoinline>
</demo>

## Checks

Refer to [form checks custom](/components/form/addon#checks-custom).

## Group

Refer to [group](/components/group).

## Nav

Refer to [nav](/components/nav).

## Toolbar

Refer to [toolbar](/components/toolbar).
