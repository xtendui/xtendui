---
type: "Components"
category: "Design"
parent: "Loader"
title: "Other"
date: "2005-10-10"
---

## Background

Use **tailwind classes** to assign variant (e.g. [background-color](https://tailwindcss.com/docs/background-color), [opacity](https://tailwindcss.com/docs/opacity)).

<demo>
  <demoinline src="demos/components/loader/background-spinner">
  </demoinline>
  <demoinline src="demos/components/loader/background-filler">
  </demoinline>
</demo>

## Activation

Use **tailwind classes** to assign loader activation animation.

Use [Xt.on and Xt.off](/components/javascript#xt-on-and-xt-off) to activate and animate.

Example loader spinner with **activation animation**.

<demo>
  <demoinline src="demos/components/loader/js-spinner">
  </demoinline>
</demo>

Example loader filler with **activation animation**.

<demo>
  <demoinline src="demos/components/loader/js-filler">
  </demoinline>
</demo>

## Mouse Follow

Use **component classes** to create a **mouse follow**.

[[notePrimary]]
| Remember **not to transition transform** of `.xt-mousefollow` element.

[[noteDefault]]
| This demo uses [mouse follow](/components/animation/mousefollow) see documentation for more info.

<demo>
  <demoinline src="demos/components/animation/mousefollow">
  </demoinline>
</demo>
