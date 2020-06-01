---
type: "Tests"
badge: "Tests"
parent: "Markdown"
title: "Markdown"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
categories: ["100-Test"]
---

## Demos

<demo>
  <div class="gatsby_demo_item" data-iframe="iframe/components/slider/events-methods">
  </div>
  <demovanilla src="vanilla/components/slider/toggle-js">
  </demovanilla>
  <demovanilla src="vanilla/components/slider/progress">
  </demovanilla>
  <demovanilla src="vanilla/components/toggle/timing-delay-fnc">
  </demovanilla>
</demo>

<demo>
  <div class="gatsby_demo_item" data-iframe="iframe/demos/slider/2020-brands-infinite">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/demos/slider/2020-aniyeby-hero">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/demos/slider/2020-bertani-hero">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/demos/slider/2020-euroricambi-cards">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/demos/slider/2019-sun68-hero">
  </div>
</demo>

<demo>
  <div class="gatsby_demo_item" data-iframe="iframe/demos/animation/2019-xtend">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/demos/animation/2020-euroricambi-collapse">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/demos/animation/2020-bertani-listing">
  </div>
</demo>

<demo>
  <demovanilla src="vanilla/components/drop/event">
  </demovanilla>
  <demovanilla src="vanilla/components/drop/backdrop">
  </demovanilla>
  <demovanilla src="vanilla/components/drop/with-link">
  </demovanilla>
  <demovanilla src="vanilla/components/drop/with-link-hover">
  </demovanilla>
  <demovanilla src="vanilla/components/overlay/nested">
  </demovanilla>
  <demovanilla src="vanilla/addons/overlay/position">
  </demovanilla>
</demo>

<demo>
  <demovanilla src="vanilla/components/test/test-card-content">
  </demovanilla>
  <demovanilla src="vanilla/components/test/test-overlay-content">
  </demovanilla>
  <demovanilla src="vanilla/components/test/test-slider-content">
  </demovanilla>
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

[[notePrimary]]
| With **multiple mode** you **can't** specify targets with **#id**.

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
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="vanilla">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        Inline
      </div>
    </div>
  </div>
</demo>

#### Inline

<demo>
  <demovanilla src="vanilla/components/test/vanilla" name="test vanilla">
    <div class="gatsby_demo_text">
      test vanilla <strong>strong</strong> <code>code</code>
    </div>
  </demovanilla>
  <demoreact src="react/demos/test/react" name="test react">
    <div class="gatsby_demo_text">
      test react <strong>strong</strong> <code>code</code>
    </div>
  </demoreact>
</demo>

#### Iframe

<demo>
  <div class="gatsby_demo_item" data-iframe="iframe/components/test/vanilla-iframe" data-name="test vanilla frame">
    <div class="gatsby_demo_text">
      <a href="/iframe/components/test/vanilla-iframe">test vanilla iframe</a>
    </div>
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/components/test/react-iframe" data-name="test react iframe">
    <div class="gatsby_demo_text">
      <a href="/iframe/components/test/react-iframe">test react iframe</a>
    </div>
  </div>
</demo>
