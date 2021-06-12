---
type: "Components"
category: "Design"
parent: "Card"
title: "Card"
description: "Multi purpose component to style and contain content."
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.card` see [preset customization](/components/preset#customization). Check [xtendui/src/card.css.js](https://github.com/minimit/xtendui/blob/beta/src/card.css.js) for default styles.

## Usage

Use `.xt-card` to create a **card**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.xt-card`                     | `xt-card`                | Card styles            |

</div>

<demo>
  <demoinline src="demos/components/card/usage">
  </demoinline>
</demo>

You can also **stack content inside**, assigning variant and size **inside the card**.

<demo>
  <demoinline src="demos/components/card/usage-stack">
  </demoinline>
</demo>
