---
type: "Components"
category: "Interaction"
parent: "Scroll"
title: "Scroll"
description: "Content interactions and animations when you scroll the page, sticky pinned elements, fade elements, parallax."
---

## Styles

You can **customize this component** inside `tailwind.config.js` setting `theme.extend.xtendui.scroll`.

Check [xtendui/src/scroll.css.js](https://github.com/minimit/xtendui/blob/beta/src/scroll.css.js) for default styles.

## Javascript

This component uses [Gsap ScrollTrigger](https://greensock.com/docs/v3/Plugins/ScrollTrigger), follow [gsap setup](/introduction/getting-started/setup#javascript-gsap) to **install and use gsap**.


## Usage

Use this code to create a **fade**.

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/scroll/fade"></div>
</demo>

Use this code to create a **sticky**.

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/scroll/sticky"></div>
</demo>

Use this code to create a **parallax**.

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/scroll/parallax"></div>
</demo>

Check subpage to [scroll fade](/components/scroll/fade) and [scroll sticky](/components/scroll/sticky) and [scroll parallax](/components/scroll/parallax).
