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
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/addons/scroll-to-anchor">
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
</demo>

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/themes/brands-featured-v1">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/themes/fashion-hero-v2">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/themes/furniture-hero-v1">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/themes/industrial-featured-v1">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/themes/fashion-hero-v1">
  </div>
</demo>

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/themes/sequential-megamenu-v1">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/themes/xtend-theme-v1">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/themes/collapse-theme-v1">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/themes/furniture-featured-v1">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/themes/furniture-listing-v1">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/themes/fashion-listing-v1">
  </div>
</demo>

## Markdown

Use this code to create a **card**.

Use this code to create a **group vertical** with `.flex-col`.

Check subpage to [customize content](/components/core/loader/content#spinner).

Use **tailwind classes** to assign size (e.g. [padding](https://tailwindcss.com/docs/padding), [font-size](https://tailwindcss.com/docs/font-size)).

Use **tailwind classes** to create a navigation. Remember to use `.whitespace-normal`.

Use **component classes** to create a style disabled.

For aria purpose use `role="toolbar"`.

For aria purpose use `aria-selected="true"` when using the class `.active`.

For aria purpose use `aria-disabled="true"` when using the class `.disabled`.

See [group component](/components/core/loader) to create a button with group.

See [mouse follow addon](/components/core/loader) to create a loader with mouse follow.

[[notePrimary]]
| This addon uses [separator](/components/core/separator). Visit the component page to import and customize.

[[noteDefault]]
| List `ul` and `old` are automatically styled when they **don't have `[class]`**. To have custom styles use **tailwind classes**.

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

For `<space>` values use any of [tailwind spacing](https://tailwindcss.com/docs/customizing-spacing).

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

Lorem ipsum `dolor sit` amet, *consectetur* **adipiscing** elit. Nam in [laoreet tellus](/components/group/button), nec commodo massa. Aenean ut ex at ex pellentesque efficitur.

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
