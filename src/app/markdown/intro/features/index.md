---
type: "Intro"
category: "Introduction"
parent: "Features"
title: "Features"
description: "Overview of the main features."
date: "2010-09-10"
---

Interactions and animations are not easy at all. Here's why **Xtend UI is not the usual frontend library**, it's designed to **make hard javascript tasks effortless**, which take days or even months to implement and that needs various iterations and complex use cases to do properly.

## Performances

- Every javascript component **loads its code and executes** it **only when inside viewport**. This improves drastically the pagespeed value of INP (Interaction to Next Paint) and other pagespeed values relative to the amount of javascript code loaded and executed.

- The initialization and execution of components are optimized for perfomance, for example with `setTimeout(fn, 0)` to not block the javascript event loop.

- The slider component automatically hides slides outside of the window, and **shows them when they enter the window**, all of this with [Xt.observe](/xtendui/components/global/javascript#xt-observe). This **improves the performances** of sliders especially when they have **many or complex slides and especially on slow mobiles**.

## Accessibility

A11y standards with **automatic Aria attributes and keyboard navigation**.

For more info on **accessibility practices** used in Xtend UI see [ARIA Design Pattern Examples](https://www.w3.org/TR/wai-aria-practices-1.1/examples/), [digitala11y](https://www.digitala11y.com/).

#### Toggle

Toggle components **have automatic a11y attributes and keyboard navigation**, and they can be customized granularly, see [drop accessibility](/xtendui/components/drop/other#accessibility), [overlay accessibility](/xtendui/components/overlay/other#accessibility), [slider accessibility](/xtendui/components/slider/other#accessibility), [toggle accessibility](/xtendui/components/toggle/other#accessibility), [tooltip accessibility](/xtendui/components/tooltip/other#accessibility).

#### Prefers Reduced Motion

See [animation setup](/xtendui/components/animation#setup) to **disable css and js animations** when the the user has activated "Prefers Reduced Motion".

#### Groupnumber

Groupnumber component **have automatic a11y attributes and aria-live updates**, see [groupnumber accessibility](/xtendui/components/groupnumber/#accessibility).

## Global

#### Javascript

- Mount javascript code on **nodes when they are added to DOM** with **vanilla html and js** with [Xt.mount](/xtendui/components/global/javascript#xt-mount).

- Animate nodes with **Tailwind CSS variants** with [Xt.on and Xt.off](/xtendui/components/global/javascript#xt-on-and-xt-off).

- **Customizable default options for all components of the same type** with [Xt.options](/xtendui/components/global/javascript#xt-options).

## Toggle

Toggle components **share the same base code and features**, they are used for **all interactions that toggle a class and respond to it**, they are [drop](/xtendui/components/drop), [overlay](/xtendui/components/overlay), [slider](/xtendui/components/slider), [toggle](/xtendui/components/toggle), [tooltip](/xtendui/components/tooltip).

#### Interaction

You can customize **toggle components interaction** in many ways, here's a simplified rundown of what's possible.

- You can **filter elements and targets dynamically**.

- You can **group elements and targets** to create **many to many interactions between elements and targets**.

- You can **specify min and max concurrent activations**.

- You can **set the javascript event that respond to the interaction**.

See [drop interaction](/xtendui/components/drop/interaction), [overlay interaction](/xtendui/components/overlay/interaction), [slider interaction](/xtendui/components/slider/interaction), [toggle interaction](/xtendui/components/toggle/interaction), [tooltip interaction](/xtendui/components/tooltip/interaction) for more info.

#### Animation

You can animate all **toggle components** with **Tailwind CSS variants** or **css** or **js**, whatever you prefer or need to use. Toggle advanced animation system support also **delay**, **queue**, **collapse**.

See [drop animation](/xtendui/components/drop/animation), [overlay animation](/xtendui/components/overlay/animation), [slider animation](/xtendui/components/slider/animation), [toggle animation](/xtendui/components/toggle/animation), [tooltip animation](/xtendui/components/tooltip/animation) for more info.

#### Hash

Sometimes you need to **save the state of a component in the location hash**, to be linkable and more usable. With all the **toggle components** you can link the activation in the url hash.

See [overlay hash](/xtendui/components/overlay/interaction#hash), [slider hash](/xtendui/components/slider/interaction#hash), [toggle hash](/xtendui/components/toggle/interaction#hash) for more info.

#### Scrollto

Sometimes you need to **automatically scroll to the activated nodes**, you can use the [Scrollto component](/xtendui/components/scrollto) in conjunction with any **toggle component**. It also integrates with the **toggle hash** interaction.

See [scrollto toggle](/xtendui/components/scrollto#toggle-integration) for more info.

#### Addon

Many advanced usage of toggle components are in the addon pages.

- Slider notable addons are **navigation sides**, **status**. See [slider addon](/xtendui/components/slider/addon) for more info.

- Tooltip notable addons are **swap**. See [tooltip addon](/xtendui/components/tooltip/addon) for more info.

## Scroll

#### InfiniteScroll

InfiniteScroll is a plugin that makes infinitescroll easy, **also activable on click instead of scroll** and it **automatically prefetches next page**.

See [infinite-scroll](/xtendui/components/infinite-scroll) for more info.

#### ScrollTrigger

Xtend UI uses gsap for javascript animations, not only that but it relies on [Gsap ScrollTrigger](https://greensock.com/docs/v3/Plugins/ScrollTrigger) to do **all sorts of interaction on page scroll**.

See [fade](/xtendui/components/scrolltrigger/fade), [sticky](/xtendui/components/scrolltrigger/sticky), [parallax](/xtendui/components/scrolltrigger/parallax) for more info.

#### Scrollto

ScrollTo is a plugin that manages **interaction scroll**, by setting it up it automatically reacts to **hash links referring to ids on click and page load** or **can get triggered on any node**, with automatic activation on scroll.

See [scrollto](/xtendui/components/scrollto) for more info.

#### Stickyflow

Stickyflow is a plugin that enhances **css sticky position** by making it **scroll the content also if overflowing the window**.

See [stickyflow](/xtendui/components/stickyflow) for more info.

## Core

All core components are **primitive UI elements** that promote creativity with its support for complex design.

#### Card

The **card component** is used in many other components to display content inside a box. It's **simple, modular and fully customizable**. See [card](/xtendui/components/card) for more info.

#### Link

The **link component** has cssinjs customizable styles for **automatic styling of blank html links**. See [link](/xtendui/components/link) for more info.

#### List and Row

The **list and row components** are useful to space any element with margins or paddings, they also space vertically. When you want to **space a child element within flex** they provide simple spacing classes for browsers that still don't support [flex gap](https://caniuse.com/flexbox-gap). See [list](/xtendui/components/list), [row](/xtendui/components/row) for more info.

#### Media

The **media component** is useful to enhance html assets. It can be used with `img`, `video`, `iframe` tags to properly **fit to aspect ratio**, display a **skeleton loader** or just as a base standard markup for animating assets. See [media](/xtendui/components/media) for more info.

#### Typography

The **typography component** has cssinjs customizable styles for **automatic styling of blank html content tags**. See [typography content](/xtendui/components/typography/content) for more info.

#### Addon

- The **media component** has some useful pagespeed optimization addon **iframe lazy loading**, **html5 video autoplay lazy** and **html5 video media matches**. See [media addon](/xtendui/components/media/addon) for more info.

## Form

Xtend UI forms have **variable size depending on parent font size** so they are easy to make bigger or smaller.

They **support various layout**. See [form layout](/xtendui/components/form/layout) for more info.

#### Addon

- You can have **custom validation on form submit** with custom indications or notes and automatic scroll on errors. See [form validation](/xtendui/components/form/addon#validation) for more info.

- You can have **checkboxes and radio styled with complete freedom**. See [form checks custom](/xtendui/components/form/addon#checks-custom) for more info.

- You can have **automatic loader on all forms without changing a single line of html**. See [form loader](/xtendui/components/form/addon#loader) for more info.

## Other

#### Group Nav Tabs Toolbar

The **group nav tabs and toolbar components** are components that use [list](/xtendui/components/list) to display buttons, inputs and other content in a certain way. See [group](/xtendui/components/group), [nav](/xtendui/components/nav), [tabs](/xtendui/components/tabs), [toolbar](/xtendui/components/toolbar) for more info.

## Pagespeed optimizations

- Media [iframe lazy loading](/xtendui/components/media/addon#iframe-lazy).

- Media [html5 video autoplay lazy](/xtendui/components/media/addon#video-autoplay-lazy).

- Media [html5 video media matches](/xtendui/components/media/addon#video-matches).

- InfiniteScroll [prefetch automatically next page](/xtendui/components/infinite-scroll).

## Themes

Xtend UI themes are focused on user experience, interaction and animation instead of design. See [themes](/xtendui/themes) for more info.
