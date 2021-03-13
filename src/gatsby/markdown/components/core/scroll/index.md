---
type: "Components"
category: "Core"
parent: "Scroll"
title: "Scroll"
description: "Content interactions and animations when you scroll the page, sticky pinned elements, fade elements, parallax."
---

## Installation

This component uses [Gsap ScrollTrigger](https://greensock.com/docs/v3/Plugins/ScrollTrigger), follow [gsap setup](/introduction/getting-started/setup#javascript-gsap) to **install and use gsap**.

You can **customize this component** inside `tailwind.config.js` setting `theme.extend.xtendui.scroll`, check [xtendui/src/core/scroll.css.js](https://github.com/minimit/xtendui/blob/beta/src/core/scroll.css.js) for default styles.

## Usage

Use this code to create a **fade**.

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/core/scroll/fade"></div>
</demo>

Use this code to create a **sticky**.

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/core/scroll/sticky"></div>
</demo>

Use this code to create a **parallax**.

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/core/scroll/parallax"></div>
</demo>

Check subpage to [scroll fade](/components/core/scroll/fade) and [scroll sticky](/components/core/scroll/sticky) and [scroll parallax](/components/core/scroll/parallax).
