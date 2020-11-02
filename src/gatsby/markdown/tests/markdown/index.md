---
type: "Tests"
category: "Tests"
parent: "Markdown"
title: "Markdown"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

## Demos

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/core/toggle/events-methods">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/core/slider/events-methods">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/addons/navigation/scroll-to-anchor">
  </div>
  <demovanilla src="vanilla/components/core/slider/progress">
  </demovanilla>
  <demovanilla src="vanilla/components/core/toggle/timing">
  </demovanilla>
  <demovanilla src="vanilla/components/core/toggle/auto">
  </demovanilla>
  <demovanilla src="vanilla/components/core/toggle/prevent-event">
  </demovanilla>
  <demovanilla src="vanilla/components/core/slider/overflow-auto-false">
  </demovanilla>
</demo>

<demo>
  <demovanilla src="vanilla/components/core/drop/event">
  </demovanilla>
  <demovanilla src="vanilla/components/core/drop/backdrop">
  </demovanilla>
  <demovanilla src="vanilla/components/core/overlay/disable">
  </demovanilla>
  <demovanilla src="vanilla/components/core/overlay/position">
  </demovanilla>
  <demovanilla src="vanilla/components/addons/slider/automatic-scroll">
  </demovanilla>
</demo>

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/themes/hero/fashion-hero-v2">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/themes/hero/fashion-hero-v1">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/themes/structure/industrial-structure-v1">
  </div>
</demo>

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/themes/navigation/sequential-megamenu-v1">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/themes/animation/xtend-v1">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/theme/animation/collapse-v1">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/themes/structure/furniture-structure-v1">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/themes/listing/furniture-listing-v1">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/themes/listing/fashion-listing-v1">
  </div>
</demo>

## Markdown

description: "Examples of breadcrumbs, with all the basic functionality and more."

description: "Listing markup component for category pages or simple product listing."

Use this code to create a **card**.

Use this code to create a **group vertical** with `.flex-col`.

Check subpage to [customize content](/components/core/loader/content#spinner).

Use **tailwind classes** to create a **navigation**.

Use **tailwind classes** to assign size (e.g. [padding](https://tailwindcss.com/docs/padding), [font-size](https://tailwindcss.com/docs/font-size)).

Use **component classes** to create a **style disabled**.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |
| Component                  | `.badge-sm`       | `badge-sm`                | Size small            |
| Component                  | `.badge-md`       | `badge-md`                | Size medium            |
| Component                  | `.badge-lg`       | `badge-lg`                | Size large            |

</div>

Use **component utility** `.card-group` to stack card content **horizontally**.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- | ----------------------------- |
| Utility                  | `.card-group`       | `card-group`                | `responsive`                | Card stack horizontal wrapper           |

</div>

See [group component](/components/core/loader) to create a **button with group**.

See [mouse follow addon](/components/core/loader) to create a **loader with mouse follow**.

[[notePrimary]]
| For aria purpose use `<nav></nav>`.

[[noteDefault]]
| List `ul` and `old` are automatically styled when they **don't have `[class]`**. To have custom styles use **tailwind classes**.

[[notePrimary]]
| This addon uses [mouse follow](/components/addons/animation/mouse-follow). Visit the component page to import javascript and customize.

[[notePrimary]]
| For aria purpose use `role="toolbar"`.

[[notePrimary]]
| For aria purpose use `aria-disabled="true"` when using the class `.disabled`.

(use touch device to see it in action)

(use narrow screen to see it in action)

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Function                  | `Xt.eventDelay:Function`              | `e:Event, element:Node, function:Function, prefix:String = '', instant:Boolean = false`       | event delay wrapper                  |
| Variable                  | `Xt.resizeDelay:Number|Boolean`              | `500`        | Delay for the `resize` event with `Xt.eventDelay`            |
| Option                    | `elements:Query`                          | `false`        | Elements query            |
| Object                   | `let self = Xt.get('xt-drop', {DOM element})`       | `object` `elements` `targets` | Get object self for this component class             |
| Property                  | `initial:Boolean`       | If initial or reset activation            |

</div>

Use **component utility** `.row-<space>` to space content.

For `<space>` values use any of [tailwind spacing](https://tailwindcss.com/docs/customizing-spacing) up to 10.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `.list-<space>`       | `list-<space>`                | `responsive`                | Space contents horizontally and vertically            |

</div>

For `<direction>` values use `x` or `y`.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.loader-<direction>`                     | `loader-<direction>`                | Loader direction for filler            |

</div>

You can set **scroll mode** with css selectors.

<div class="table-scroll">

|                      | Syntax                          |  Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Selector                  | `&:not(.scroll-done) {`                     | Animate once            |

</div>

Lorem ipsum `dolor sit` amet, *consectetur* **adipiscing** elit. Nam in [laoreet tellus](/components/list-group/button), nec commodo massa. Aenean ut ex at ex pellentesque efficitur.

<script type="text/plain" class="language-markup">
  <a href="#" class="btn btn-default">
    <!-- content -->
  </a>

  <button type="button" class="btn btn-default">
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

## Demo

<demo>
  <div class="gatsby_demo-inline">
    <div class="gatsby_demo_item toggle gatsby_demo_preview" data-name="inline">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        Inline
      </div>
    </div>
  </div>
  <demovanilla src="vanilla/test/demo-vanilla" name="demo vanilla">
    <div class="gatsby_demo_text">
      test vanilla <strong>strong</strong> <code>code</code>
    </div>
  </demovanilla>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/test/demo-vanilla-iframe" data-name="demo vanilla frame">
    <div class="gatsby_demo_text">
      <a href="/iframe/test/demo-vanilla-iframe">test vanilla iframe</a>
    </div>
  </div>
</demo>
