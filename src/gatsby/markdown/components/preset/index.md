---
type: "Components"
category: "Introduction"
parent: "Preset"
title: "Preset"
description: "Xtend UI preset with default theme that extends Tailwind default theme."
date: "2020-10-05"
---

## Customization

You can **customize preset** inside `tailwind.config.js`, use `theme.extend` to change XtendUI preset default.

Check [xtendui/tailwind.preset.js](https://github.com/minimit/xtendui/blob/beta/tailwind.preset.js) for default preset.

```jsx
module.exports = {
  theme:{
    extend: {
      colors: {
        // custom xtendui colors
        primary: {
          50: '#F8F7FF',
          100: '#F1F0FE',
          200: '#DDD9FD',
          300: '#C8C2FC',
          400: '#9E95FA',
          500: '#7567F8',
          600: '#695DDF',
          700: '#463E95',
          800: '#352E70',
          900: '#231F4A',
        },
      },
    },
  },
}
```

You can **customize components** inside `tailwind.config.js`, use `theme.extend` to change XtendUI default component styles.

Check [xtendui/tailwind.components.js](https://github.com/minimit/xtendui/blob/beta/tailwind.components.js) for default component styles.

```jsx
module.exports = {
  theme:{
    extend: {
      xtendui: {
        layout: { // layout component
          utility: theme => ({
            // modify utilities
          }),
          component: theme => ({
            // modify components
          }),
        },
      },
    },
  },
}
```

## Theme

The following theme values are added with the preset:

* [breakpoints](https://tailwindcss.com/docs/breakpoints) added the [media queries for hover](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover) `hover-none` and `hover-hover`.
* [font-size](https://tailwindcss.com/docs/font-size) `text-xs` modified to `~13px`, `text-2xs` added with `~12px`, `text-3xs*` added with `~11px`, `text-4xs*` added with `~10px`, for better control on small font sizes.
* [colors](https://tailwindcss.com/docs/customizing-colors) new colors `error` and `succes`, and a default `primary` color stack to be replaced with your primary color.
* [z-index](https://tailwindcss.com/docs/z-index) **additional z-index** used by components, use `z-above` zindex to be sure it's **over anything except interactions components**, use `z-last` zindex to be sure it's **over anything**.
* [flex](https://tailwindcss.com/docs/flex) `flex-full` added.
* [inset](https://tailwindcss.com/docs/top-right-bottom-left) **additional inset**, use `top-100` `left-100` `bottom-100` `right-100` to position with the value `100%`.
* [border-radius](https://tailwindcss.com/docs/border-radius) `rounded-inherit` added, `rounded-sm` modified to `~3px`, `rounded-xs` added with `~2px`, for better control on small border radius.
* [cursor](https://tailwindcss.com/docs/cursor) `cursor-none` added.
* [outline](https://tailwindcss.com/docs/outline) `outline-browser` added.
* [box-shadow](https://tailwindcss.com/docs/box-shadow) added components box shadows.
* Added new settings see [animation preset](/components/animation/preset).

## Theme Animations

## Variants

XtendUI add **custom tailwind variants**, see [xtendui/tailwind.preset.js](https://github.com/minimit/xtendui/blob/beta/tailwind.preset.js) for default variants.

For [all tailwind variants with hover already](https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js) and for `transitionProperty`, `transitionTimingFunction`, `transitionDuration`, `transitionDelay`, `display`, `zIndex` we add the followind variants:

- added variants to style activation classes: `on:`, `group-on:`, `in:`, `group-in:`, `out:`, `group-out:`

- activated `active:` variant and added `group-active:` variant.

- activated `hover:` and `group-hover:` variant if not already present.
