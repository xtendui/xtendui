---
type: "Hidden"
title: "Hidden"
description: "Hidden"
date: "2020-09-10"
tags: ["hidden"]
menu: true
---

> This hidden pages includes **work in progress and future features**, **do not use** because will have **breaking changes** on semversion.

## Classes not xt Components

.hero
.listing
.googlelocator
.slider
.slider-navs-container

## Classes not xt Themes

.product
.featured
.megamenu

## Markdown

Lorem ipsum `dolor sit` amet, *consectetur* **adipiscing** elit. Nam in [laoreet tellus](/components/group/button), nec commodo massa. Aenean ut ex at ex pellentesque efficitur.

You can set activation styles by adding the class `.on`.

Use **tailwind variants** `active:`, `group-active:`, `on:`, `group-on:` to assign animations.

Use **tailwind variants** `off:`, `group-off:`, `on:`, `group-on:`, `in:`, `group-in:`, `out:`, `group-out:` to assign animations.

Use **tailwind variants** `dir-before:`, `group-dir-before:`, `group-off-before:`, `group-on-before:`, `group-in-before:`, `group-out-before:`, `dir-after:`, `group-dir-after:`, `group-off-after:`, `group-on-after:`, `group-in-after:`, `group-out-after:` to assign animations.

Use **component classes** to style **disabled**. Check [xtendui/src/global.css.js](https://github.com/xtendui/xtendui/blob/beta/src/global.css.js) for default styles.

Use **component utility** `.xt-card-group` to stack card content **horizontally**.

The padding of `.xt-overlay-container` is set as a utility. Check [xtendui/src/overlay.css.js](https://github.com/xtendui/xtendui/blob/beta/src/overlay.css.js) for default styles.

Use **tailwind classes** to assign size (e.g. [padding](https://tailwindcss.com/docs/padding), [font-size](https://tailwindcss.com/docs/font-size)).

Use **tailwind classes** to assign animation (e.g. [translate](https://tailwindcss.com/docs/translate), [transition-property](https://tailwindcss.com/docs/transition-property), [transition-duration](https://tailwindcss.com/docs/transition-duration), [transition-timing-function](https://tailwindcss.com/docs/transition-timing-function)).

> For **full API** see [Gsap ScrollTrigger API](https://greensock.com/docs/v3/Plugins/ScrollTrigger).

> This demos use [loader](/components/loader) see documentation for more info.

> For accessibility purpose use `<nav></nav>` with an accessible name assigning `[aria-label]` or `[aria-labelledby]`.

> For seo purpose add [breadscrumb metadata](https://developers.google.com/search/docs/data-types/breadcrumb).

<!-- For seo purpose add product metadata https://developers.google.com/search/docs/data-types/product -->

(**use touch device to see it in action**)

(**use narrow screen to see it in action**)

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.xt-loader-<direction>`                     | `loader-<direction>`                | Loader direction for filler            |

</div>

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- | ----------------------------- |
| Utility                  | `.xt-card-group`       | `xt-card-group`                | `responsive`                | Card stack horizontal wrapper           |

</div>

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Name                          | Example                   | Description                   |
| ----------------------- | ---------------------------- | ----------------------------- | ----------------------------- |
| Attribute                  | `data-xt-group`       | `data-xt-group="my-group,another-group"`   |  Group or multiple groups on elements and targets            |

</div>

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Property                   | `direction:Number`       | Direction `1` or `-1`              |

</div>

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `collapseHeight:String`                          | `false`        | Type of elements that collapse vertically, can be `elements`, `targets`, `elementsInner`, `targetsInner`           |

</div>
