---
type: "Components"
category: "Core"
parent: "Loader"
title: "Other"
date: "2005-10-10"
---

## Background

Use **tailwind classes** to assign variant (e.g. [background-color](https://tailwindcss.com/docs/background-color), [opacity](https://tailwindcss.com/docs/opacity)).

<demo>
  <demovanilla src="vanilla/components/core/loader/background-spinner">
  </demovanilla>
  <demovanilla src="vanilla/components/core/loader/background-filler">
  </demovanilla>
</demo>

## Activation

Use **tailwind classes** to assign loader activation animation. 

Example loader spinner with **activation animation**.

<demo>
  <demovanilla src="vanilla/components/core/loader/js-spinner">
  </demovanilla>
</demo>

Example loader filler with **activation animation**.

<demo>
  <demovanilla src="vanilla/components/core/loader/js-filler">
  </demovanilla>
</demo>

## Timing

Xtend **automatically detects animation time** on activation and deactivation **before setting display property** with `in` and `out` classes.

It's possible to **assign them also on single nodes** with `data-xt-duration="Milliseconds"` or  `data-xt-durationOn="Milliseconds"` and  `data-xt-durationOff="Milliseconds"`.

## Mouse Follow

Use **component classes** to create a **mouse follow**.

[[notePrimary]]
| Remember **not to transition transform** of `.xt-mousefollow` element.

[[noteDefault]]
| This demo uses [mouse follow](/components/addons/animation/mousefollow) see documentation to **import javascript** and **customize**.

<demo>
  <demovanilla src="vanilla/components/addons/animation/mousefollow">
  </demovanilla>
</demo>
