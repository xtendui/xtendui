---
type: "Components"
category: "Toggle"
parent: "Drop"
title: "Position"
date: "2009-10-10"
---

## Position and arrow

Use **js option** `position: <value>` to specify [popperjs placement](https://popper.js.org/docs/v2/constructors/#placement).

If you want to **control a specific drop position** use `[data-xt-position=<value>]` on the `.xt-drop`

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `position:String`                          | `bottom-start`        | Position option for popperjs, can be `bottom`, `bottom-start`, `bottom-end`, `top`, `top-start`, `top-end`, `left`, `left-start`, `left-end`, `right`, `right-start`, `right-end`, `auto`, `auto-start`, `auto-end`.           |
| Option                  | `inset:Boolean`                          | `false`        | Inset position inside           |

</div>

Use `<div class="xt-arrow -inset-1 m-2 w-4 h-4 bg-white"></div>` inside `.xt-drop` to add an arrow. You can change the [inset](https://tailwindcss.com/docs/top-right-bottom-left) and [width](https://tailwindcss.com/docs/width) and [height](https://tailwindcss.com/docs/height) values to change the arrow size and position.

<demo>
  <demoinline src="demos/components/drop/bottom">
  </demoinline>
  <demoinline src="demos/components/drop/top">
  </demoinline>
  <demoinline src="demos/components/drop/left">
  </demoinline>
  <demoinline src="demos/components/drop/right">
  </demoinline>
  <demoinline src="demos/components/drop/auto">
  </demoinline>
</demo>

To not have **space** just omit `.xt-drop` **padding** and `.xt-arrow` **margin**.

<demo>
  <demoinline src="demos/components/drop/nospace">
  </demoinline>
</demo>

To **change the relative position of targets** you can specify a query inside element, it **doesn't change the element for events**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `positionInner:Query\|false`                          | `false`        | Query **inside element** to use as relative for target position only if found            |----------------------------- |

</div>

<demo>
  <demoinline src="demos/components/drop/position-inner">
  </demoinline>
</demo>

## Popperjs

Here are the main spacing javascript options.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `strategy:String`                          | `'absolute'`        | Position strategy, can be `'absolute'` or `'fixed'`            |----------------------------- |
| Option                  | `spaceOverflow:Number`                          | `15`        | Space to contain the drop            |
| Option                  | `spaceFlip:Number`                          | `15`        | Space to flip the drop            |
| Option                  | `spaceArrow:Number\|false`                          | `false`        | Space for arrow, if false automatic            |

</div>

You can **pass an option** to [popperjs](https://popper.js.org/docs/v2/) for initialization.

If you need to get the **popperjs instance** use `Xt.dataStorage.get(target, 'PopperInstance')`, for example when you want to `.update()` it.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `popperjs:Object\|false`                          | `true`        | Options for popperjs            |

</div>

> Use [strategy fixed](https://popper.js.org/docs/v2/constructors//#strategy) when positioning inside **fixed elements**.

For example you can set [preventOverflow boundary](https://popper.js.org/docs/v2/modifiers/prevent-overflow/#boundary) to constrain popperjs inside an element.

<demo>
  <demoinline src="demos/components/drop/prevent-overflow">
  </demoinline>
</demo>

## Static

If you want a drop with size and position **relative to a parent Node with relative** use `.xt-drop-static` and `.xt-card.w-full`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `.xt-drop-static`       | `xt-drop-static`                | `responsive`                | Position relative to closest element with `.relative`            |

</div>

<demo>
  <demoinline src="demos/components/drop/static">
  </demoinline>
</demo>
