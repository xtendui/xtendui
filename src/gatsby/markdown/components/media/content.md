---
type: "Components"
category: "Core"
parent: "Media"
title: "Content"
date: "2030-10-10"
---

## Variant

When images are loading the `.xt-media-container` background is shown.

Use **tailwind classes** to assign variant (e.g. [background-color](https://tailwindcss.com/docs/background-color)).

<demo>
  <demoinline src="demos/components/media/variant">
  </demoinline>
</demo>

You can also **animate background** or **add additional content** to create a skeleton when image is loading.

<demo>
  <demoinline src="demos/components/media/skeleton">
  </demoinline>
</demo>

## Object fit

Use **tailwind classes** to assign object fit. (e.g. [object-position](https://tailwindcss.com/docs/object-position)).

<demo>
  <demoinline src="demos/components/media/cover">
  </demoinline>
  <demoinline src="demos/components/media/contain">
  </demoinline>
</demo>

You can also use **video** or **iframe** for media.

<demo>
  <demoinline src="demos/components/media/video">
  </demoinline>
  <demoinline src="demos/components/media/iframe">
  </demoinline>
</demo>

## Size

#### Aspect ratio

Assing `padding-bottom` on `.xt-media-container` to the aspect ratio you desire.

<demo>
  <demoinline src="demos/components/media/ratio">
  </demoinline>
</demo>

#### Height

Assing `height` on `.xt-media-container` to assign the height you desire.

<demo>
  <demoinline src="demos/components/media/height">
  </demoinline>
</demo>

#### Min Height

Additionally with `height` or `padding-bottom` you can add a `min-height: <Value>` to have a min height (**use narrow screen to see it in action**).

<demo>
  <demoinline src="demos/components/media/min-height">
  </demoinline>
</demo>

#### Width

If you want to assign `width` **assign it to a parent node** of `.xt-media-container`.

<demo>
  <demoinline src="demos/components/media/width">
  </demoinline>
</demo>

#### Relative

Or use **tailwind classes** `.relative` on `.xt-media` to assign relative position. The result is a **responsive media**.

The result is the **same as putting width on the asset**.

<demo>
  <demoinline src="demos/components/media/responsive">
  </demoinline>
</demo>
