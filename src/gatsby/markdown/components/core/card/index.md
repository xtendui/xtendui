---
type: "Components"
category: "Core"
parent: "Card"
title: "Card"
description: "Multi purpose component to style and contain content."
---

## Installation

You can **customize this component** inside `tailwind.config.js` setting `theme.extend.xtendui.card`, check [xtendui/src/core/card.css.js](https://github.com/minimit/xtendui/blob/beta/src/core/card.css.js) for default styles.

## Usage

Use `.xt-card` to create a **button**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.xt-card`                     | `xt-card`                | Card styles            |

</div>

<demo>
  <demoinline src="vanilla/components/core/card/usage">
  </demoinline>
</demo>

You can also **stack** card content.

<demo>
  <demoinline src="vanilla/components/core/card/usage-stack">
  </demoinline>
</demo>

Check subpage to [customize content](/components/core/card/content).
