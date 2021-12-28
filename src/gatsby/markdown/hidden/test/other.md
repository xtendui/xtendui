---
type: "Hidden"
category: "Test"
parent: "Test"
title: "Other"
---

## Mount Unmount

`demos/hidden/test/mount-unmount`
- TEST mount root once, this should be 1 on init, should remain 1 on deactivation.
- TEST init xtNamespace, should be 1.
- TEST init classes and properties, should be `true true true true`.
- TEST after init classes and properties, should be `true true false false`.
- TEST unmount, this should increase by one on changing page and resize.
- TEST unmount should disable on deactivate, should remove from dom overlay.
- TEST unmount, unmountArr should be the same, xtNamespace should be 0.

<demo>
  <demoinline src="demos/hidden/test/mount-unmount">
  </demoinline>
</demo>

## ScrollTrigger Matches

`demos/hidden/test/scrolltrigger-matches`
- TEST pin resize this should be called one time on resize and Xt._mountArr should not increase.
- TEST resize and open/close, pin unmount this should NOT be called on resize, xtNamespace should be 1, should be 0 on unmount.

[/demos/hidden/test/scrolltrigger-matches](/demos/hidden/test/scrolltrigger-matches).

## Megamenu

`demos/themes/navigation/megamenu-v1`
- TEST direction and zIndex sequential activation and zIndex reset.
- TEST move slightly over other and then target should not change with delay, backdrop should not flickr.

[/demos/themes/navigation/megamenu-v1](/demos/themes/navigation/megamenu-v1).

## Infinitescroll

TEST change page browser navigation.

TEST initial activation on browser location.

[/demos/components/listing/infinitescroll?false=2](/demos/components/listing/infinitescroll?false=2).

## Scroll

TEST desktop stickyflow position.

TEST mobile initial activation.

TEST mobile scrollto activation.

[/demos/themes/gallery/products-gallery-v1](/demos/themes/gallery/products-gallery-v1).

TEST activation classes on scroll.

TEST scroll position on click elements.

TEST scroll position on click elements custom.

TEST activation classes and scroll position on page load and hash change.

TEST change page browser navigation.

TEST initial scroll and overlay activation data-xt-scrollto-hash.

TEST scroll and overlay activation data-xt-scrollto-hash close overlay and change page browser navigation.

[/demos/components/scrollto/usage#anchor-2](/demos/components/scrollto/usage#anchor-2).

TEST clicking 2 should open overlay (bug with openauto and overlay on same element).

[/demos/components/scrollto/overlay#anchor-2](/demos/components/scrollto/overlay#anchor-2).

TEST change page browser navigation.

TEST initial activation and scroll on page load when linking non scrolltoInit.

[/demos/components/scrollto/toggle#anchor-2](/demos/components/scrollto/toggle#anchor-2).
