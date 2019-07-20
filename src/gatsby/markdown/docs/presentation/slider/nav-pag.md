---
path: "/docs/presentation/slider/nav-pag"
type: "docs"
date: "2019-04-15"
title: "Navigation and Pagination"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
categories: ["400-Presentation"]
parent: "Slider"
---

###Navigation and Pagination

You can wrap the slides with `"drag": {"wrap": true}`.

You can add navigation with `[data-xt-nav].xt-ignore`, set the amount to add to the current activation with `[data-xt-nav="Number"]`.

You can add pagination inside `.slider_pagination` with `[data-xt-pag].xt-ignore` to generate the pagination, inside it you can use this variables: `xt-num` `xt-tot`.

<div class="alert">
  <div class="alert_content">
    Pagination is essential to the functioning of the slider, so if you don't want to show it add
    `.display--none` to `.slider_pagination`.
  </div>
</div>

<demo>
  <div class="demo_item" data-iframe="demos/docs/presentation/slider/nav-pag" data-name="nav pag">
  </div>
</demo>
