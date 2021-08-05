---
type: "Hidden"
category: "Hidden"
parent: "Test"
title: "Test"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

## Mount

Test resize and open/close overlay should always work.

<demo>
  <div class="gatsby_demo_item" data-iframe="demos/hidden/test/mount-unmount"></div>
</demo>

## Unmount

TEST OFF on unmount this should not be called.

TEST UNMOUNT this should be called on change page.

TEST UNMOUNT this should not be called multiple times on changing page and resize.

Test change page with browser location prev e next should close overlay automatically.

<demo>
  <demoinline src="demos/hidden/test/unmount">
  </demoinline>
</demo>

## Root

Test click should load iframe, it tests mount with root.

<demo>
  <demoinline src="demos/components/media/iframe-lazy">
  </demoinline>
</demo>

## Docs

Test on change page menu mobile lib should not flickr and should retain scroll and should be scrollable and should be closeable.

Test on change page with any overlay open should close overlay because of closeauto.

Test on mobile with menu mobile open resize to desktop should disable overlay and back should enable.

Test copy code from demos and clicking copy should be without highlight.

Test demos with all: inline and iframe and react inline and react iframe.

Test demos changing demo should change hash.

Test browser location prev e next should change demo.

Test demos initial activation on browser location.

Test demo show code in fullscreen after switching mode.

Test demo switcher initial and switched html class and code.