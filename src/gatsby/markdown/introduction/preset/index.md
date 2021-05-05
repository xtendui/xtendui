---
type: "Introduction"
category: "Getting Started"
parent: "Tailwind Preset"
title: "Tailwind Preset"
description: "Xtend UI preset with default theme that extends Tailwind default theme."
date: "2020-10-05"
---

## Theme

Xtend adds a **default tailwind theme**, see [xtendui/tailwind.preset.js](https://github.com/minimit/xtendui/blob/beta/tailwind.preset.js) for default theme.

You can customize them in `tailwind.config.js` see [css custimization](/introduction/setup#css-customization).

The following theme values are added with the preset:

* [breakpoints](https://tailwindcss.com/docs/breakpoints) added the [media queries for hover](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover) `hover-none` and `hover-hover`.
* [font-size](https://tailwindcss.com/docs/font-size) `text-xs` modified to `~13px`, `text-2xs` added with `~12px`, `text-3xs*` added with `~11px`, for better control on small font sizes.
* [colors](https://tailwindcss.com/docs/customizing-colors) new colors `error` and `succes`, and a default `primary` color stack to be replaced with your primary color.
* [z-index](https://tailwindcss.com/docs/font-size) **additional z-index** used by components, use `z-above` zindex to be sure it's **over anything except interactions components**, use `z-last` zindex to be sure it's **over anything**.
* [flex](https://tailwindcss.com/docs/flex) `flex-full` added.
* [inset](https://tailwindcss.com/docs/top-right-bottom-left) **additional inset**, use `top-100` `left-100` `bottom-100` `right-100` to position with the value `100%`.
* [border-radius](https://tailwindcss.com/docs/border-radius) `rounded-inherit` added.
* [cursor](https://tailwindcss.com/docs/cursor) `cursor-none` added.
* [box-shadow](https://tailwindcss.com/docs/box-shadow) added components box shadows.
* [animations settings](/components/animation) added new settings see animation page.

## Variants

XtendUI add **custom tailwind variants**, see [xtendui/tailwind.preset.js](https://github.com/minimit/xtendui/blob/beta/tailwind.preset.js) for default variants.

For [all tailwind variants with hover already](https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js) and for `transitionProperty`, `transitionTimingFunction`, `transitionDuration`, `transitionDelay`, `display`, `zIndex` we add the followind variants:

- added variants to style activation classes: `on:`, `group-on:`, `in:`, `group-in:`, `out:`, `group-out:`

- activated `active:` variant and added `group-active:` variant.

- activated `hover:` and `group-hover:` variant if not already present.
