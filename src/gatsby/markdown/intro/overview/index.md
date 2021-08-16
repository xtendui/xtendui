---
type: "Intro"
category: "Introduction"
parent: "Main Features"
title: "Main Features"
description: "Overview of the main features."
date: "2005-10-10"
---

Interactions and animations are not easy at all. Here's why **Xtend UI is not the usual frontend library**, it's designed to **make hard javascript task effortless**, that could take days or even months to implement and that needs various iterations and complex use case to do properly.

## Global

#### Javascript

- Mount javascript code on **nodes when they are added to DOM** with **vanilla html and js** with [Xt.mount](/components/global/javascript#xt-mount).

- Animate nodes with **tailwindcss variants** with [Xt.on and Xt.off](/components/global/javascript#xt-on-and-xt-off).

- **Customizzable default options for all components of the same type** with [Xt.options](/components/global/javascript#xt-options).

## Toggle

Toggle components **share the same base code and features**, they are used for **all interactions that toggle a class and respond to it**, they are [drop](/components/drop), [overlay](/components/overlay), [slider](/components/slider), [toggle](/components/toggle), [tooltip](/components/tooltip), and more to come.

#### Interaction

You can customize **toggle components interaction** in many ways, here's a simplified rundown of what's possible.

- You can **filter elements and targets dynamically**.

- You can **group elements and targets** to create **many to many interactions between elements and targets**.

- You can **specify min and max concurrent activations**.

- You can **set the javascript event that respond to the interaction**.

See [drop interaction](/components/drop/interaction), [overlay interaction](/components/overlay/interaction), [slider interaction](/components/slider/interaction), [toggle interaction](/components/toggle/interaction), [tooltip interaction](/components/tooltip/interaction) for more info.

#### Animation

You can animate all **toggle components** with **tailwindcss variants** or **css** or **js**, whatever you prefer or need to use. Toggle advanced animation system support also **delay**, **queue**, **collapse**.

See [drop animation](/components/drop/animation), [overlay animation](/components/overlay/animation), [slider animation](/components/slider/animation), [toggle animation](/components/toggle/animation), [tooltip animation](/components/tooltip/animation) for more info.

#### Hash

Sometimes you need to **save the state of a component in the location hash**, to be linkable and more usable. With all the **toggle components** you can link the activation in the url hash.

See [overlay hash](/components/overlay/interaction#hash), [slider hash](/components/slider/interaction#hash), [toggle hash](/components/toggle/interaction#hash) for more info.

#### ScrollTo

Sometimes you need to **automatically scroll to the activated nodes**, you can use the [Scrollto component](/components/scroll-to) in conjunction with any **toggle component**. It also integrates with the **toggle hash** interaction.

See [scrollto toggle](/components/scroll-to#toggle) for more info.

#### Addon

Many advanced usage of toggle components are in the addon pages.

- Slider notable addons are **navigation sides**, **status**, **automatic scrolling**. See [slider addon](/components/slider/addon) for more info.

- Toggle notable addons are **multilevel**. See [toggle addon](/components/toggle/addon) for more info.

- Tooltip notable addons are **swap**. See [tooltip addon](/components/tooltip/addon) for more info.

## Scroll

#### ScrollTrigger

Xtend UI uses gsap for javascript animations, not only that but it relies on [Gsap ScrollTrigger](https://greensock.com/docs/v3/Plugins/ScrollTrigger) to do **all sort of interaction on page scroll**.

See [fade](/components/scroll-trigger/fade), [parallax](/components/scroll-trigger/parallax), [sticky](/components/scroll-trigger/sticky) for more info.

#### ScrollTo

ScrollTo is a plugin that manages **interaction scroll**, by setting it up it automatically reacts to **hash links referring to ids on click and page load** or **can get triggered on any node**, with automatic activation on scroll.

See [scrollto](/components/scroll-to) for more info.

#### StickyFlow

StickyFlow is a plugin that enhance **css sticky position** by making it **scroll the content also if overflowing the window**.

See [stickyflow](/components/sticky-flow) for more info.

## Form

Xtend UI forms have **variable size depending on parent font size** so they are easy to make bigger or smaller.

They **support various layout**. See [form layout](/components/form/layout) for more info.

#### Addon

- You can have **custom validation on form submit** with custom indications or notes and automatic scroll on errors. See [form validation](/components/form/addon#validation) for more info.

- You can have **checkboxes and radio styled with complete freedom**. See [form checks custom](/components/form/addon#checks-custom) for more info.

- You can have **automatic loader on all forms without changing a single line of html**. See [form loader](/components/form/addon#loader) for more info.

## Design

#### Link

The **link component** has cssinjs customizzable styles for **automatic and customizzable styling of blank html links**. See [link](/components/link) for more info.

#### Typography

The **typography component** has cssinjs customizzable styles for **automatic and customizzable styling of blank html content tags**. See [typography content](/components/typography/content) for more info.

#### Addon

- The **media component** has some useful addon **iframe lazy loading** and **html5 video tag media matches**. See [media addon](/components/media/addon) for more info.
