---
type: "Components"
badge: "Extensions"
parent: "Sticky"
title: "Option"
date: "2000-02-01"
---

##Mode

You can optionally set in the less mixin a mode `sticky: 'absolute'` or `sticky: 'fixed'` or `sticky: 'fixed-always'` to have that position when the sticky is not activated.

<demo>
  <div class="gatsby_demo_item" data-iframe="iframe/components/sticky/mode-absolute">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/components/sticky/mode-fixed">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/components/sticky/mode-fixed-always">
  </div>
</demo>

##Limit

The default **limit** for `limit: { top: Element }` is the element's own position, for `limit: { bottom: Element }` is Infinity.

<demo>
  <div class="gatsby_demo_item" data-iframe="iframe/components/sticky/limit">
  </div>
</demo>

##Position

The default **position** is `position: 'top'` you can also use `position: 'bottom'`.

<demo>
  <div class="gatsby_demo_item" data-iframe="iframe/components/sticky/position"></div>
</demo>

##Hide

To hide the sticky when scrolling down or up use `hide: 'down'` or `hide: 'up'`. Here's a complex example with hide behaviour.

<demo>
  <div class="gatsby_demo_item" data-iframe="iframe/components/sticky/hide">
  </div>
</demo>

##Contain

Use the `contain: {}` option to stack consecutive sticky elements. with `contain: { top: Element }` you stack the sticky to a previous element, with `contain: { bottom: Element }` you stack the sticky to a next element. The two solutions brings **different stacking effects**.

<demo>
  <div class="gatsby_demo_item" data-iframe="iframe/components/sticky/contain-top">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/components/sticky/contain-bottom">
  </div>
</demo>

##Show and Hide

To show or hide content when sticky activates use `.show-sticky` or `.hide-sticky`.

<demo>
  <div class="gatsby_demo_item" data-iframe="iframe/components/sticky/showhide-top">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/components/sticky/showhide-bottom">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/components/sticky/showhide-hide">
  </div>
</demo>
