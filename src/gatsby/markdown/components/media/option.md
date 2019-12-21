---
type: "Components"
badge: "Core"
parent: "Media"
title: "Option"
date: "2000-02-01"
---

## Object fit

Give `.media` one of this options:

<div class="table-scroll">

|                         | Class                                     | Mixin                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.media-cover`                 | `.media-cover()`        | object-fit with cover            |
| Option                  | `.media-cover`                 | `.media-cover()`        | object-fit with cover            |
| Option                  | `.media-scale-down`                 | `.media-scale-down()`        | object-fit with scale-down            |
| Option                  | `.media-fill`                 | `.media-fill()`        | object-fit with fill            |

</div>

<demo>
  <demovanilla src="vanilla/components/media/none">
  </demovanilla>
  <demovanilla src="vanilla/components/media/cover">
  </demovanilla>
  <demovanilla src="vanilla/components/media/contain">
  </demovanilla>
</demo>

[[notePrimary]]
| If you want to support [old browsers](https://caniuse.com/#feat=object-fit), use [object-fit polyfills](https://github.com/fregante/object-fit-images).
