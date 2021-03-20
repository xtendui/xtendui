---
type: "Hidden"
category: "Hidden"
parent: "Markdown"
title: "Markdown"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

## REACT

<demo>
  <demoinline src="demos/components/core/toggle/animation-js-multiple">
  </demoinline>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/core/toggle/events-methods">
  </div>
</demo>

<demo>
  <demoinline src="demos/components/core/toggle/animation-js-multiple">
  </demoinline>
</demo>

## Classes not xt

#### Core

.hero
.listing
.breadcrumbs

#### Addons

.googlelocator
.multilevel
.stickyflow

#### Themes

.product
.featured
.megamenu

## Markdown

Use **component classes** to style **disabled**. Check [xtendui/src/core/layout.css.js](https://github.com/minimit/xtendui/blob/beta/src/core/layout.css.js) for default styles.

The padding of `.xt-overlay-container` is set as a utility. Check [xtendui/src/core/overlay.css.js](https://github.com/minimit/xtendui/blob/beta/src/core/overlay.css.js) for default styles.

description: "Examples of breadcrumbs, with all the basic functionality and more."

description: "Listing markup component for category pages or simple product listing."

Use this code to create a **card**.

Use this code to create a **group vertical** with `.flex-col`.

Check subpage to [customize content](/components/core/loader/content#spinner).

Use **tailwind classes** to create a **navigation**.

Use **tailwind classes** to assign size (e.g. [padding](https://tailwindcss.com/docs/padding), [font-size](https://tailwindcss.com/docs/font-size)).

Use **tailwind classes** to assign animation (e.g. [translate](https://tailwindcss.com/docs/translate), [transition-property](https://tailwindcss.com/docs/transition-property), [transition-duration](https://tailwindcss.com/docs/transition-duration)).

Use **component utility** `.xt-card-group` to stack card content **horizontally**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- | ----------------------------- |
| Utility                  | `.xt-card-group`       | `xt-card-group`                | `responsive`                | Card stack horizontal wrapper           |

</div>

You can use also **css animations**, just add them with **class names** `.active`, `.out`, `.direction-before` and `.direction-after`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                      | Name                          | Description                   |
| ----------------------- | ---------------------------- | ----------------------------- |
| Class                  | `.direction-before`       |  Class name for left direction activation            |
| Class                  | `.direction-after`       |  Class name for left direction activation            |
</div>

[[notePrimary]]
| For **full API** see [Gsap ScrollTrigger API](https://greensock.com/docs/v3/Plugins/ScrollTrigger).

[[notePrimary]]
| For aria purpose use `<nav></nav>`.

[[noteDefault]]
| List `ul` and `old` are automatically styled when they **don't have `[class]`**. To have custom styles use **tailwind classes**.

[[noteDefault]]
| This demos uses [multiple mount object](/components/globals/javascript#utilities-xt-mount) for **batching animations** also on content **added dynamically to the dom**.

[[noteDefault]]
| This demos uses [loader](/components/core/loader) see documentation to **customize**.

[[noteDefault]]
| This component uses [card](/components/core/card) see documentation for more info.

[[noteDefault]]
| This addon uses [mouse follow](/components/addons/animation/mousefollow) see documentation for more info.

[[notePrimary]]
| For aria purpose use `role="toolbar"`.

[[notePrimary]]
| For aria purpose use `aria-disabled="true"` when using the class `.xt-disabled`.

[[notePrimary]]
| For aria purpose use `aria-label="<Description>"` on `input:not([type="hidden"]), select, textarea`.

[[notePrimary]]
| For aria purpose use `<nav></nav>`. For seo purpose add [breadscrumb metadata](https://developers.google.com/search/docs/data-types/breadcrumb).

<!-- For seo purpose add product metadata https://developers.google.com/search/docs/data-types/product -->

(use touch device to see it in action)

(use narrow screen to see it in action)

(use large screen to see it in action)

(navigate on mobile for different behaviour)

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Variable                  | `self.direction:Number`              | Direction of activation `0`, `-1` or `1`              |

</div>

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Function                  | `Xt.eventDelay:Function`              | `event:Event, element:Node, function:Function, prefix:String = '', instant:Boolean = false`       | event delay wrapper                  |

</div>

Use **component utility** `.xt-row-<space>` to space content.

For `<space>` values use any of [tailwind spacing](https://tailwindcss.com/docs/customizing-spacing).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `.xt-list-<space>`       | `xt-list-<space>`                | `responsive`                | Space contents horizontally and vertically            |

</div>

For `<direction>` values use `x` or `y`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.xt-loader-<direction>`                     | `loader-<direction>`                | Loader direction for filler            |

</div>

You can set **scroll mode** with css selectors.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                      | Syntax                          |  Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Selector                  | `&:not(.scroll-done) {`                     | Animate once            |

</div>

Lorem ipsum `dolor sit` amet, *consectetur* **adipiscing** elit. Nam in [laoreet tellus](/components/list-group/button), nec commodo massa. Aenean ut ex at ex pellentesque efficitur.

<script type="text/plain" class="language-markup">
  <a href="#" class="xt-button">
    <!-- content -->
  </a>

  <button type="button" class="xt-button">
    <!-- content -->
  </button>
</script>

```
mkdir -p xtendui/
cp -r node_modules/xtendui/dist/ xtendui/
```

```css
body {
  background: #ff0000;
}

.test > * {
}
```

```jsx
const test = 'test'
```

```js
Xt.mount.push({
  matches: '.CCC--products-listing-v1',
  mount: ({ object }) => {
    const unmountDrops = mountDrops({ object })

    // unmount

    return () => {
      unmountDrops()
    }
  },
})

/* mountDrops */

const mountDrops = ({ object }) => {
  // unmount

  return () => {}
}

/* mountDrops */

const mountDrops = ({ object }) => {
  const buttons = object.querySelectorAll('.xt-button')
  const unmounts = []

  for (const button of buttons) {
    // unmount

    unmounts.push(() => {
      self.destroy()
      self = null
    })
  }

  // unmount

  return () => {
    for (const unmount of unmounts) {
      unmount()
    }
  }
}
```
