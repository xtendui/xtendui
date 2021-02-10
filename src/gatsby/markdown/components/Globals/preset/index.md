---
type: "Components"
category: "Globals"
parent: "Preset"
title: "Preset"
description: "Xtend UI preset with default theme that extends Tailwind default theme."
---

## Theme

Xtend adds a **default tailwind theme**, see [xtendui/tailwind.preset.js](https://github.com/minimit/xtendui/blob/beta/tailwind.preset.js) for default values. You can customize them in `tailwind.config.js` see [css custimization](/introduction/getting-started/setup#css-customization).

The following theme values are added with the preset:

* [container](https://tailwindcss.com/docs/container) **center by default** and **custom padding** and **fluid**.
* [font-size](https://tailwindcss.com/docs/font-size) **text-2xs** added.
* [colors](https://tailwindcss.com/docs/customizing-colors) a default `accent` color stack to be replaced with your accent color, and utility colors (`success` and `error`).
* [z-index](https://tailwindcss.com/docs/font-size) **additional z-index** used by components, use `z-top` zindex to be sure it's **over anything except interactions components**, use `z-last` zindex to be sure it's **over anything**.
* [inset](https://tailwindcss.com/docs/top-right-bottom-left) **additional inset**, use `top-100` `left-100` `bottom-100` `right-100` to position with the value `100%`.
* [border-radius](https://tailwindcss.com/docs/border-radius) **rounded-inherit** added.
* [cursor](https://tailwindcss.com/docs/cursor) **cursor-none** added.

## Variants

The theme adds also **custom tailwind variants** `active` and `group-active`, see [xtendui/tailwind.preset.js](https://github.com/minimit/xtendui/blob/beta/tailwind.preset.js) for default values.

They styles **when user presses the element** with pseudo selectors `:active` and `.group:active` but also **when the element is activated by javascript** with the class `.active` and `.group.active`.

When you **style active with css** remember to style `&:active, &.active`.
