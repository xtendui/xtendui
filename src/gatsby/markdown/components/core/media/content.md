---
type: "Components"
category: "Core"
parent: "Media"
title: "Content"
date: "2030-10-10"
---

## Responsive

To have **responsive media** give `.relative` to `.media-inner`.

<demo>
  <demovanilla src="vanilla/components/core/media/responsive">
  </demovanilla>
</demo>

## Aspect ratio

Set the **aspect ratio** to `.media-container` with css `padding-bottom` with a parcent value.

<demo>
  <demovanilla src="vanilla/components/core/media/16-9">
  </demovanilla>
  <demovanilla src="vanilla/components/core/media/16-9-video">
  </demovanilla>
  <demovanilla src="vanilla/components/core/media/16-9-iframe">
  </demovanilla>
</demo>

## Object fit

Set the **aspect ratio** to `.media-container` with css `padding-bottom` with a parcent value.

Use **tailwind classes** to assign object fit.

<demo>
  <demovanilla src="vanilla/components/core/media/cover">
  </demovanilla>
  <demovanilla src="vanilla/components/core/media/contain">
  </demovanilla>
</demo>

## Min height

You can also use `min-height: <Value>` to `.media-container` to have a min height (resize to mobile to see it in action).

<demo>
  <demovanilla src="vanilla/components/core/media/cover-min-height">
  </demovanilla>
</demo>
