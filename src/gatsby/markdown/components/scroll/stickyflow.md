---
type: "Components"
category: "Interaction"
parent: "Scroll"
title: "Sticky Flow"
description: "Advanced animation for postion sticky to show content on scroll for better usability."
date: "1900-10-10"
---

## Javascript

Import the **javascript** file with `import 'xtendui/src/stickyflow'`.

Initialize with **javascript** with `new Xt.Stickyflow(document.querySelector('#my-object'), {/* options */})`.

## Usage

[[notePrimary]]
| This addon is for css `position: sticky;` and **doesn't need** Gsap ScrollTrigger.

Use this code to create a **sticky flow** (use large screen to see it in action).

Pratically it's a solution that **scrolls sticky content** when it **overflow the window**, following scroll direction.

Remember to use `.items-stretch` on on the container or `.sticky` doesn't work.

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/scroll/stickyflow">
  </div>
</demo>

## Options
 
Here are the main **javascript options**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `element:Query`                          | `false`        | Sticky element query            |
| Option                    | `filler:Query`                          | `false`        | Filler element query            |

</div>

## Listen

Listen to events.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `change.xt.stickyflow`                        | `input` | Position change event             |
| Event                   | `init.xt.stickyflow`           | `object` | Init event             |
| Event                   | `destroy.xt.stickyflow`           | `object` | Destroy event             |

</div>

## Properties

Access properties by getting component object.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `options:Object`       | Final options             |
| Property                   | `object:Node`       | Object node             |
| Property                   | `element:Node`       | Sticky element             |
| Property                   | `filler:Nodes`       | Filler element             |

</div>
