---
type: "Hidden"
category: "Test"
parent: "Test"
title: "Test"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

## Mount Unmount

TEST INITIAL xtNamespace should be 1.

TEST INITIAL 0 this should be `true true true true`.

TEST INITIAL 1 this should be `true true false false`.

TEST MOUNT this should be called once and should NOT be called on overlay close.

TEST UNMOUNT 1 disableDeactivate when drop open and change page (browser location prev next) this should NOT be called.

TEST UNMOUNT 2 Xt.unmountArr should be the same and xtNamespace should be 0.

TEST UNMOUNT this should NOT be called multiple times on changing page and resize.

<demo>
  <demoinline src="demos/hidden/test/mount-unmount">
  </demoinline>
</demo>

## ScrollTrigger Matches

Test resize and open/close overlay should always work (not disabled so not unmount/mount).

TEST PIN MOUNT this should NOT be called on resize and xtNamespace should be 1.

TEST PIN RESIZE this should be called one time on resize and Xt.mountArr should not increase.

TEST PIN UNMOUNT this should NOT be called on resize and xtNamespace should be 0 on unmount.

<demo>
  <div class="gatsby_demo_item" data-iframe="demos/hidden/test/scrolltrigger-matches"></div>
</demo>

## Root

Test click should load iframe, it tests mount with root.

<demo>
  <demoinline src="demos/components/media/iframe-lazy">
  </demoinline>
</demo>

## Docs

Test on change page menu mobile lib should not flickr and should retain scroll and should be scrollable and should be able to close/open after 3 changes.

Test on mobile with menu mobile open resize to desktop should disable overlay and back should enable.

Test on change page with any overlay open should close overlay because of closeauto.

Test copy code from demos and clicking copy should be without highlight.

Test demos with all: inline and iframe and react inline and react iframe.

Test demos changing demo should change hash.

Test change page (browser location prev next) should change demo.

Test demos initial activation on page load (browser location prev next).

Test demo show code in fullscreen after switching mode.

Test demo switcher initial and switched html class and code.
