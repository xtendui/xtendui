---
type: "Components"
category: "Core"
parent: "Media"
title: "Option Css"
date: "2019-12-01"
---

## Responsive

To have media responsive give `.media-container` this options:

<div class="table-scroll">

|                         | Class                                     | Mixin                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.media-container-responsive`                 | `.media-container-responsive()`        | Responsive media            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/media/responsive">
  </demovanilla>
</demo>

## Object fit

To have media with **object-fit** give `.media` one of this options:

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
  <demovanilla src="vanilla/components/core/media/cover">
  </demovanilla>
  <demovanilla src="vanilla/components/core/media/contain">
  </demovanilla>
</demo>

You can also use `min-height: <Value>` to `.media-container` to have a min height (resize to mobile to see it in action).

<demo>
  <demovanilla src="vanilla/components/core/media/cover-min-height">
  </demovanilla>
</demo>

## Aspect ratio

To have media with aspect ratio give`.media-container` this options:

<div class="table-scroll">

|                         | Class                                     | Mixin                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.media-container-16-9`                 | `.media-container-16-9()`        | Video and iframes with aspect ratio 16/9            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/media/16-9">
  </demovanilla>
  <demovanilla src="vanilla/components/core/media/16-9-video">
  </demovanilla>
  <demovanilla src="vanilla/components/core/media/16-9-iframe">
  </demovanilla>
</demo>

You can also use `min-height: <Value>` to `.media-container` to have a min height (resize to mobile to see it in action).

<demo>
  <demovanilla src="vanilla/components/core/media/16-9-min-height">
  </demovanilla>
</demo>
