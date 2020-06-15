---
type: "Components"
badge: "Core"
parent: "Media"
title: "Option Css"
date: "2019-12-01"
---

## Responsive

<div class="table-scroll">

|                         | Class                                     | Mixin                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.media-responsive`                 | `.media-responsive()`        | Responsive media            |

</div>

<demo>
  <demovanilla src="vanilla/components/media/responsive">
  </demovanilla>
</demo>

## Aspect ratio

<div class="table-scroll">

|                         | Class                                     | Mixin                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.media-16-9`                 | `.media-16-9()`        | Video and iframes with aspect ratio 16/9            |

</div>

<demo>
  <demovanilla src="vanilla/components/media/16-9">
  </demovanilla>
</demo>

## Object fit

Give `.media` one of this options:

<div class="table-scroll">

|                         | Class                                     | Mixin                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.media-cover`                 | `.media-cover()`        | object-fit with cover            |
| Option                  | `.media-contain`                 | `.media-contain()`        | object-fit with contain            |
| Option                  | `.media-scale-down`                 | `.media-scale-down()`        | object-fit with scale-down            |
| Option                  | `.media-fill`                 | `.media-fill()`        | object-fit with fill            |
| Option                  | `.media-none`                 | `.media-none()`        | object-fit with none            |

</div>

<demo>
  <demovanilla src="vanilla/components/media/cover">
  </demovanilla>
  <demovanilla src="vanilla/components/media/contain">
  </demovanilla>
</demo>

[[notePrimary]]
| If you want to support [old browsers](https://caniuse.com/#feat=object-fit), use [object-fit polyfills](https://github.com/fregante/object-fit-images).
