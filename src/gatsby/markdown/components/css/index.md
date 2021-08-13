---
type: "Components"
category: "Global"
parent: "Css"
title: "Css"
description: "Xtend UI preset with default theme that extends Tailwind default theme."
---

## Theme

The following theme values are added with the preset:

* [breakpoints](https://tailwindcss.com/docs/breakpoints) added the [media queries for hover](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover) `hover-none` and `hover-hover`.
* [font-size](https://tailwindcss.com/docs/font-size) `text-xs` modified to `~13px`, `text-2xs` added with `~12px`, `text-3xs*` added with `~11px`, `text-4xs*` added with `~10px`, for better control on small font sizes.
* [colors](https://tailwindcss.com/docs/customizing-colors) and a default `primary` color stack to be replaced with your primary color.
* [z-index](https://tailwindcss.com/docs/z-index) **additional z-index** used by components, use `z-below` for **z-index below content**, use `z-content` for **z-index above content**, `z-above` for **z-index above pupup content**, use `z-last` for **z-index above anything**.
* [flex](https://tailwindcss.com/docs/flex) `flex-full` added.
* [inset](https://tailwindcss.com/docs/top-right-bottom-left) **additional inset**, use `top-100` `left-100` `bottom-100` `right-100` to position with the value `100%`.
* [border-radius](https://tailwindcss.com/docs/border-radius) `rounded-inherit` added, `rounded-sm` modified to `~3px`, `rounded-xs` added with `~2px`, for better control on small border radius.
* [cursor](https://tailwindcss.com/docs/cursor) `cursor-none` added.
* [outline](https://tailwindcss.com/docs/outline) `outline-browser` added.
* [box-shadow](https://tailwindcss.com/docs/box-shadow) added components box shadows.
* Added new settings see [animation](/components/animation).

## Variants

Xtend UI add **custom tailwind variants**.

- added variants to style **activation classes** with `off:`, `group-off:`, `on:`, `group-on:`, `in:`, `group-in:`, `out:`, `group-out:`, `done:`, `group-done:`

- added variants to style [form validation after form submit](/components/form/addon#validation) with `valid-submit:` and `invalid-submit:`.

- added `group-active:` variant.

[[noteDefault]]
| To **show/hide and animate a node with activation classes** you need to use [Xt.on and Xt.off](/components/javascript#xt-on-and-xt-off) or **xtendui toggle components** ([toggle](/components/toggle), [drop](/components/drop), [overlay](/components/overlay), [slider](/components/slider), [tooltip](/components/tooltip)).

## Customization

You can **customize preset** inside `tailwind.config.js`, use `theme.extend` to change Xtend UI preset default.

Check [xtendui/tailwind.preset.js](https://github.com/xtendui/xtendui/blob/beta/tailwind.preset.js) for default preset.

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

You can **customize components** inside `tailwind.config.js`, use `theme.extend` to change Xtend UI default component styles.

Check [xtendui/tailwind.components.js](https://github.com/xtendui/xtendui/blob/beta/tailwind.components.js) for default component styles.

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
