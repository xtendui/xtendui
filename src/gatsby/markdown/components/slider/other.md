---
type: "Components"
category: "Interaction"
parent: "Slider"
title: "Other"
date: "2005-10-10"
---

## Disabled

If you want to **disable the component** use the `options.disabled`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `disabled:Boolean`                              | `false`                     | Disable the component           |

</div>

Example of **component disabled on desktop** with [match media](/components/slider/api#match-media).

Disable and reset styles accordingly.

<demo>
  <demoinline src="demos/components/slider/disable">
  </demoinline>
</demo>

## Match Media

You can add **additional options** that gets added on **match media query**. You can use different queries with different and nested options.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `matches:Object`                              | `false`                     | Add additional options on match media query           |

</div>

<demo>
  <demoinline src="demos/components/slider/matches">
  </demoinline>
</demo>

## Overflow auto

Slider with `overflowAuto:Boolean` automatically disable when not overflowing.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `overflowAuto:Boolean`                          | `true`        | When not overflowing disable slider           |

</div>

Use the class `.xt-overflow-auto` to styles accordingly.

<demo>
  <demoinline src="demos/components/slider/overflow-auto">
  </demoinline>
</demo>

## Expand

Disable and reset styles accordingly. (use narrow screen to see it in action).

<demo>
  <demoinline src="demos/components/slider/expand">
  </demoinline>
</demo>

## Touch Overflow

Disable and reset styles accordingly. (use touch device to see it in action).

<demo>
  <demoinline src="demos/components/slider/touch-overflow">
  </demoinline>
</demo>

## Media loaded

Use `loading="lazy"` to lazy load images inside slider.

If you want to animate on image loaded, with `mediaLoaded: true` use the class `.xt-medialoaded` or the js event `medialoaded.xt.slider`.

When you need to reinit the component when the media is loaded and the **width** of the image is calculated with `mediaLoadedReinit: true`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `mediaLoaded:Boolean`                          | `false`        | Add the class `.xt-medialoaded` on img loaded             |
| Option                  | `mediaLoadedReinit:Boolean`                          | `false`        | Reinit the component on img loaded after [Xt.medialoadedDelay](/components/getting-started/javascript#event-delay)             |

</div>

[[noteDefault]]
| This demos uses [loader](/components/loader) see documentation to **customize**.

<demo>
  <demoinline src="demos/components/slider/media-loaded">
  </demoinline>
</demo>

[[noteDefault]]
| Images from [Unsplash](https://source.unsplash.com/)

## Aria

See [toggle aria](/components/toggle/other#aria) for aria options.

## Other	

Do not loop slides activation with `loop: false`.	

Disable the jump feature (clicking on not activated slides jumps to the slide) with `jump: false`. Jump only if the slide isn't entirely on screen.	

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">	

|                         | Syntax                                    | Default / Arguments                       | Description                   |	
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |	
| Option                  | `groupElements:Boolean`                          | `true`        | Elements activation as group, refer to [toggle group elements](/components/toggle) |     
| Option                  | `loop:Boolean`                          | `true`        | Loop activation            |	
| Option                  | `jump:Boolean`                          | `true`        | Clicking on targets triggers activation            |	
| Option                  | `jumpOverflow:Boolean`                          | `false`        | Jump only activates if slide overflows the dragger            |
| Option                  | `autoHeight:Query`                          | `false`        | Elements to automaticaly height (ex: `.xt-slides`)            |
| Option                  | `keepHeight:Query`                          | `false`        | Elements to keep height of the first slide (ex: `.xt-slides`)            |

</div>	

<demo>	
  <demoinline src="demos/components/slider/other">	
  </demoinline>	
</demo>	
