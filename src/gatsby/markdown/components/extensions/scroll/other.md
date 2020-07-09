---
type: "Components"
category: "Extensions"
parent: "Scroll"
title: "Other"
date: "2019-03-15"
---

## Direction

Animate with inverse `.inverse` or `self.direction`.

Use `inverseRelative: false` to have inverse class depending on scroll direction instead of element position relative to window.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `inverseRelative:Boolean`                          | `true`        | Inverse class relative to window's position instead of scroll direction            |

</div>

<demo>
  <div class="gatsby_demo_item" data-iframe="iframe/components/extensions/scroll/direction">
  </div>
</demo>

## Block

You can block the scroll animations with the class `.xt-block`. Add also the class `.fade` to have them enabled.

If you want to block them with fade in or out use the events `on.trigger.xt` or `off.trigger.xt`. 

<demo>
  <div class="gatsby_demo_item" data-iframe="iframe/components/extensions/scroll/block">
  </div>
</demo>

## Indicator

Add the class `.scroll-indicator` to show show visual info on a scroll component.

<demo>
  <div class="gatsby_demo_item" data-iframe="iframe/components/extensions/scroll/indicator">
  </div>
</demo>

## test

@TODO

Use events `'change.xt.scroll'` inside you can use the values of `self.detail.ratio` `self.detail.ratioInverse` `self.detail.ratioDouble`.

<demo>
  <div class="gatsby_demo_item" data-iframe="iframe/components/extensions/scroll/parallax">
  </div>
</demo>
