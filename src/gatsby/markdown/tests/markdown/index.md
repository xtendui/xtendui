---
type: "Tests"
category: "Tests"
parent: "Markdown"
title: "Markdown"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

## Demos

<demo>
  <div class="gatsby_demo_item" data-iframe="iframe/components/core/toggle/events-methods">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/components/extensions/slider/events-methods">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/components/extensions/scroll/direction">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/components/extensions/scroll/block">
  </div>
  <demovanilla src="vanilla/components/extensions/slider/progress">
  </demovanilla>
  <demovanilla src="vanilla/components/core/toggle/timing-duration">
  </demovanilla>
  <demovanilla src="vanilla/components/core/toggle/timing-delay-fnc">
  </demovanilla>
  <demovanilla src="vanilla/components/extensions/slider/overflow-auto-false">
  </demovanilla>
</demo>

<demo>
  <demovanilla src="vanilla/components/core/drop/event">
  </demovanilla>
  <demovanilla src="vanilla/components/core/drop/backdrop">
  </demovanilla>
  <demovanilla src="vanilla/components/core/drop/with-link">
  </demovanilla>
  <demovanilla src="vanilla/components/core/drop/with-link-hover">
  </demovanilla>
  <demovanilla src="vanilla/components/core/overlay/nested">
  </demovanilla>
  <demovanilla src="vanilla/components/core/overlay/position">
  </demovanilla>
</demo>

<demo>
  <div class="gatsby_demo_item" data-iframe="iframe/themes/brands-featured-v1">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/themes/fashion-hero-v2">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/themes/furniture-hero-v1">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/themes/industrial-featured-v1">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/themes/fashion-hero-v1">
  </div>
</demo>

<demo>
  <div class="gatsby_demo_item" data-iframe="iframe/themes/xtend-theme-v1">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/themes/collapse-theme-v1">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/themes/furniture-featured-v1">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/themes/furniture-listing-v1">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/themes/fashion-listing-v1">
  </div>
</demo>

## Markdown

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.drop-{variant}`                        | `.drop-default` `.drop-primary` |
| Mixin                   | `.drop-{variant}()`                      | `.drop-default()` `.drop-primary()`         |

</div>

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `class:String`                          | `active active-overlay`        | Class name for activation            |

</div>

<div class="table-scroll">

|                         | Class                                     | Mixin                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.drop-container-static`                 | `.drop-container-static()`        | Position relative to closest element with `position: relative;`.            |

</div>

Lorem ipsum `dolor sit` amet, *consectetur* **adipiscing** elit. Nam in [laoreet tellus](/components/group/button), nec commodo massa. Aenean ut ex at ex pellentesque efficitur.

Maecenas pulvinar mauris eget pharetra elementum. Sed sit amet ultrices metus, vitae cursus metus. Proin tristique finibus pretium. Morbi sit amet magna faucibus, luctus enim tempor, dignissim quam. Nam a ornare quam, varius cursus felis. Fusce nunc lacus, iaculis vel cursus non, facilisis id quam.

Sed gravida massa in commodo eleifend. Curabitur ac pellentesque nisl. Nunc ut placerat velit, aliquet faucibus erat. In imperdiet ligula ex, ut vestibulum ipsum fermentum in. Fusce ante ex, molestie at condimentum non, ullamcorper a lorem. Morbi et eros pellentesque, congue sem non, dapibus tellus.

- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in laoreet tellus, nec commodo massa. Aenean ut ex at ex pellentesque efficitur.
- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in laoreet tellus, nec commodo massa. Aenean ut ex at ex pellentesque efficitur. Maecenas pulvinar mauris eget pharetra elementum.

[[noteDefault]]
| With **multiple mode** you **can't** specify targets with **#id** `.class`.

[[notePrimary]]
| With **multiple mode** you **can't** specify targets with **#id** `.class`.

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

```less
// test comment

.test > * {
  @media @min-sm {
    .test();
  }
}

body {
  background: #ff0000;
}
```

```jsx
const test = 'test'
```

## Tables

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.col-{number}`                           | `.col-6`                      |
| Class responsive        | `.col-{number}-{breakpoint}`              | `.col-6-sm`                   |
| Mixin                   | `.col({number})`                          | `.col(6)`                     |
| Mixin responsive min    | `.col({number}, {breakpoint})`            | `.col(6, sm)`                 |

</div>

## Demo


<demo>
  <div class="gatsby_demo-inline">
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="inline">
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
  <div class="gatsby_demo_item" data-iframe="iframe/test/demo-vanilla-iframe" data-name="demo vanilla frame">
    <div class="gatsby_demo_text">
      <a href="/iframe/test/demo-vanilla-iframe">test vanilla iframe</a>
    </div>
  </div>
</demo>
