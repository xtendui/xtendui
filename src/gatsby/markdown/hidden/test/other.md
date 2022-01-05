---
type: "Hidden"
category: "Test"
parent: "Test"
title: "Other Test"
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

## Scroll

`demos/components/scrollto/usage`
- TEST activation classes and scroll position on page load and scroll and browser navigation, scroll position on click elements, scroll position on click elements custom.

[/demos/components/scrollto/usage#anchor-2](/demos/components/scrollto/usage#anchor-2).

`demos/components/scrollto/overlay`
- TEST activation classes and scroll position on page load and scroll and browser navigation, scroll position on click elements, scroll position on click elements custom.

[/demos/components/scrollto/overlay#anchor-2](/demos/components/scrollto/overlay#anchor-2).

`demos/components/scrollto/toggle`
- TEST activation classes and scroll position on page load and scroll and browser navigation, scroll position on click elements.

[/demos/components/scrollto/toggle#anchor-2](/demos/components/scrollto/toggle#anchor-2).

## Infinitescroll

`demos/components/listing/infinitescroll`
- TEST initial activation and scroll position, scroll activation, browser navigation.

[/demos/components/listing/infinitescroll?false=2](/demos/components/listing/infinitescroll?false=2).
