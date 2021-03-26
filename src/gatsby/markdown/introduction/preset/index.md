---
type: "Introduction"
category: "Getting Started"
parent: "Preset"
title: "Preset"
description: "Xtend UI preset with default theme that extends Tailwind default theme."
date: "2020-10-05"
---

## Theme

Xtend adds a **default tailwind theme**, see [xtendui/tailwind.preset.js](https://github.com/minimit/xtendui/blob/beta/tailwind.preset.js) for default styles. You can customize them in `tailwind.config.js` see [css custimization](/introduction/getting-started/setup#css-customization).

The following theme values are added with the preset:

* [container](https://tailwindcss.com/docs/container) **center by default** and **custom padding** and **fluid**.
* [font-size](https://tailwindcss.com/docs/font-size) **text-xs** modified to `~13px`, **text-2xs** added with `~12px`, **text-3xs** added with `~11px`, for better control on small font sizes.
* [colors](https://tailwindcss.com/docs/customizing-colors) a default `primary` color stack to be replaced with your primary color.
* [z-index](https://tailwindcss.com/docs/font-size) **additional z-index** used by components, use `z-above` zindex to be sure it's **over anything except interactions components**, use `z-last` zindex to be sure it's **over anything**.
* [flex](https://tailwindcss.com/docs/flex) **flex-full** added.
* [inset](https://tailwindcss.com/docs/top-right-bottom-left) **additional inset**, use `top-100` `left-100` `bottom-100` `right-100` to position with the value `100%`.
* [border-radius](https://tailwindcss.com/docs/border-radius) **rounded-inherit** added.
* [cursor](https://tailwindcss.com/docs/cursor) **cursor-none** added.

## Variants

See [xtendui/tailwind.preset.js](https://github.com/minimit/xtendui/blob/beta/tailwind.preset.js) for default styles

* Added display variants `['responsive', 'group-hover', 'group-active', 'hover', 'active', 'focus']`
* Added **custom tailwind variants** `active` and `group-active`. They styles **when user presses the element** with pseudo selectors `:active` and `.group:active` but also **when the element is activated by javascript** with the class `.active` and `.group.active`.
