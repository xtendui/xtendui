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
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/extensions/slider/events-methods">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/extensions/scroll/direction">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/extensions/scroll/block">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/addons/animation/scroll-to-anchor-nested">
  </div>
  <demovanilla src="vanilla/components/extensions/slider/progress">
  </demovanilla>
  <demovanilla src="vanilla/components/core/toggle/timing">
  </demovanilla>
  <demovanilla src="vanilla/components/core/toggle/auto">
  </demovanilla>
  <demovanilla src="vanilla/components/core/toggle/prevent-event">
  </demovanilla>
  <demovanilla src="vanilla/components/extensions/slider/overflow-auto-false">
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

[[noteDefault]]
| To customize utils and component's styles follow [css customization](/introduction/getting-started/setup#css-customization) instructions.

[[noteDefault]]
| To know **spacing utilities values** see the source code of `node_modules/xtend-library/src/tailwind-css.js`.

[[notePrimary]]
| You should always use **tailwind width classes** inside `.row`.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Function                  | `Xt.eventDelay:Function`              | `e:Event, element:Node, function:Function, prefix:String = '', instant:Boolean = false`       | event delay wrapper                  |
| Variable                  | `Xt.resizeDelay:Number|Boolean`              | `500`        | Delay for the `resize` event with `Xt.eventDelay`            |
| Option                    | `elements:Query`                          | `false`        | Elements query            |
| Object                   | `let self = Xt.get('xt-drop', {DOM element})`       | `object` `elements` `targets` | Get object self for this component class             |
| Property                  | `initial:Boolean`       | If initial or reset activation            |

</div>

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Util                  | `.container-reset`       | `container-reset`                | `responsive`                | Reset container styles            |

</div>

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.overflow-main`                     | `overflow-main`                | Overflow scrollbar style            |

</div>

Lorem ipsum `dolor sit` amet, *consectetur* **adipiscing** elit. Nam in [laoreet tellus](/components/group/button), nec commodo massa. Aenean ut ex at ex pellentesque efficitur.

<p class="text-xs">Maecenas pulvinar mauris eget pharetra elementum. Sed sit amet ultrices metus, vitae cursus metus. Proin tristique finibus pretium. Morbi sit amet magna faucibus, luctus enim tempor, dignissim quam. Nam a ornare quam, varius cursus felis. Fusce nunc lacus, iaculis vel cursus non, facilisis id quam.</p>

<p class="text-sm">Maecenas pulvinar mauris eget pharetra elementum. Sed sit amet ultrices metus, vitae cursus metus. Proin tristique finibus pretium. Morbi sit amet magna faucibus, luctus enim tempor, dignissim quam. Nam a ornare quam, varius cursus felis. Fusce nunc lacus, iaculis vel cursus non, facilisis id quam.</p>

<p class="text-base">Maecenas pulvinar mauris eget pharetra elementum. Sed sit amet ultrices metus, vitae cursus metus. Proin tristique finibus pretium. Morbi sit amet magna faucibus, luctus enim tempor, dignissim quam. Nam a ornare quam, varius cursus felis. Fusce nunc lacus, iaculis vel cursus non, facilisis id quam.</p>

<p class="text-lg">Maecenas pulvinar mauris eget pharetra elementum. Sed sit amet ultrices metus, vitae cursus metus. Proin tristique finibus pretium. Morbi sit amet magna faucibus, luctus enim tempor, dignissim quam. Nam a ornare quam, varius cursus felis. Fusce nunc lacus, iaculis vel cursus non, facilisis id quam.</p>

<p class="text-xl">Maecenas pulvinar mauris eget pharetra elementum. Sed sit amet ultrices metus, vitae cursus metus. Proin tristique finibus pretium. Morbi sit amet magna faucibus, luctus enim tempor, dignissim quam. Nam a ornare quam, varius cursus felis. Fusce nunc lacus, iaculis vel cursus non, facilisis id quam.</p>

- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in laoreet tellus, nec commodo massa. Aenean ut ex at ex pellentesque efficitur.
- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in laoreet tellus, nec commodo massa. Aenean ut ex at ex pellentesque efficitur.
- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in laoreet tellus, nec commodo massa. Aenean ut ex at ex pellentesque efficitur. Maecenas pulvinar mauris eget pharetra elementum.

<script type="text/plain" class="language-markup">
  <a href="#" class="btn btn-default">
    <!-- content -->
  </a>

  <button type="button" class="btn btn-default">
    <!-- content -->
  </button>
</script>

```
mkdir -p xtend-library/
cp -r node_modules/xtend-library/dist/ xtend-library/
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

## Tables

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Syntax                   | `.col-{number}`                           | `.w-6/12`                      |
| Class responsive        | `.col-{number}-{breakpoint}`              | `.sm:w-6/12`                   |
| Mixin                   | `.col({number})`                          | `.col(6)`                     |
| Mixin responsive min    | `.col({number}, {breakpoint})`            | `.col(6, sm)`                 |

</div>

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
