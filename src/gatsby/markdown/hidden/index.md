---
type: "Hidden"
title: "Hidden"
description: "Hidden"
---

## Classes not xt

#### Components

.hero
.listing
.googlelocator
.slider
.slider-navs-container

#### Themes

.product
.featured
.megamenu

## Useful demos

// check if already done for content added dinamically

// mount granularly

// unmount

return () => {}

## Test

See [link if scrolls right](/components/slider/other#media-loaded).

## Markdown

You can set activation styles by adding the class `.on`.

Use **tailwind variants** `active:`, `group-active:`, `on:`, `group-on:` to assign animations.

Use **tailwind variants** `off:`, `group-off:`, `on:`, `group-on:`, `in:`, `group-in:`, `out:`, `group-out:` to assign animations.

Use **component classes** to style **disabled**. Check [xtendui/src/layout.css.js](https://github.com/xtendui/xtendui/blob/beta/src/layout.css.js) for default styles.

The padding of `.xt-overlay-container` is set as a utility. Check [xtendui/src/overlay.css.js](https://github.com/xtendui/xtendui/blob/beta/src/overlay.css.js) for default styles.

description: "Examples of breadcrumbs, with all the basic functionality and more."

description: "Listing markup component for category pages or simple product listing."

Use this code to create a **card**.

Use this code to create a **group vertical** with `.flex-col`.

Use **tailwind classes** to create a **navigation**.

Use **tailwind classes** to assign size (e.g. [padding](https://tailwindcss.com/docs/padding), [font-size](https://tailwindcss.com/docs/font-size)).

Use **tailwind classes** to assign animation (e.g. [translate](https://tailwindcss.com/docs/translate), [transition-property](https://tailwindcss.com/docs/transition-property), [transition-duration](https://tailwindcss.com/docs/transition-duration), [transition-timing-function](https://tailwindcss.com/docs/transition-timing-function)).

Use **component utility** `.xt-card-group` to stack card content **horizontally**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- | ----------------------------- |
| Utility                  | `.xt-card-group`       | `xt-card-group`                | `responsive`                | Card stack horizontal wrapper           |

</div>

You can use also **css animations**, just add them with **class names** `.on`, `.in`, `.out`, `.done`, `.dir-before` and `.dir-after`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Name                          | Description                   |
| ----------------------- | ---------------------------- | ----------------------------- |
| Class                  | `.dir-before`       |  Class name for **before** direction activation            |
| Class                  | `.dir-after`       |  Class name for **after** direction activation            |

</div>

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Name                          | Example                   | Description                   |
| ----------------------- | ---------------------------- | ----------------------------- | ----------------------------- |
| Attribute                  | `data-xt-group`       | `data-xt-group="my-group,another-group"`   |  Group or multiple groups on elements and targets            |

</div>

[[notePrimary]]
| For **full API** see [Gsap ScrollTrigger API](https://greensock.com/docs/v3/Plugins/ScrollTrigger).

[[notePrimary]]
| For usability purpose use `<nav></nav>`.

[[noteDefault]]
| This demos uses [loader](/components/loader) see documentation to **customize**.

[[noteDefault]]
| This component uses [card](/components/card) see documentation for more info.

[[noteDefault]]
| This component uses [mousefollow](/components/mouse-follow) see documentation for more info.

[[notePrimary]]
| For usability purpose use `role="toolbar"`.

[[notePrimary]]
| For usability purpose use `aria-disabled="true"` when using the class `.xt-disabled`.

[[notePrimary]]
| For usability purpose use `aria-label="<Description>"` on `input:not([type="hidden"]), select, textarea`.

[[notePrimary]]
| For usability purpose use `<nav></nav>`. For seo purpose add [breadscrumb metadata](https://developers.google.com/search/docs/data-types/breadcrumb).

<!-- For seo purpose add product metadata https://developers.google.com/search/docs/data-types/product -->

(**use touch device to see it in action**)

(**use narrow screen to see it in action**)

(**use large screen to see it in action**)

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `collapseHeight:String`                          | `false`        | Type of elements that collapse vertically, can be `elements`, `targets`, `elementsInner`, `targetsInner`           |

</div>

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Property                   | `direction:Number`       | Direction `1` or `-1`              |

</div>

Use **component utility** `.xt-row-<space>` to space content.

For `<space>` values use any of [tailwind spacing](https://tailwindcss.com/docs/customizing-spacing).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `.xt-list-<space>`       | `xt-list-<space>`                | `responsive`                | Space contents horizontally and vertically            |

</div>

For `<direction>` values use `x` or `y`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.xt-loader-<direction>`                     | `loader-<direction>`                | Loader direction for filler            |

</div>

You can set **scroll mode** with css selectors.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          |  Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Selector                  | `&:not(.scroll-done) {`                     | Animate once            |

</div>

Lorem ipsum `dolor sit` amet, *consectetur* **adipiscing** elit. Nam in [laoreet tellus](/components/list-group/button), nec commodo massa. Aenean ut ex at ex pellentesque efficitur.

<script type="text/plain" class="language-html">
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
Xt.mount({
  matches: '.demo--',
  mount: ({ ref }) => {
    const unmountDrops = mountDrops({ ref })

    // unmount

    return () => {
      unmountDrops()
    }
  },
})

/* mountDrops */

const mountDrops = ({ ref }) => {
  // unmount

  return () => {}
}

/* mountDrops */

const mountDrops = ({ ref }) => {
  // vars
  
  const buttons = ref.querySelectorAll('.xt-button')
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
