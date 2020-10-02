---
type: "Components"
category: "Core"
parent: "Media"
title: "Content"
date: "2030-10-10"
---

## Responsive

Use **tailwind classes** to assign relative position. The result is a **responsive media**.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Tailwind                  | `.relative`                     | `relative`                | Relative size            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/media/responsive">
  </demovanilla>
</demo>

## Object fit

Use **tailwind classes** to assign object fit and `padding-bottom` to assign aspect ratio.

<demo>
  <demovanilla src="vanilla/components/core/media/cover">
  </demovanilla>
  <demovanilla src="vanilla/components/core/media/contain">
  </demovanilla>
</demo>

You can also use **video** or **iframe** for media. Just use `padding-bottom` to assign aspect ratio.

<demo>
  <demovanilla src="vanilla/components/core/media/16-9">
  </demovanilla>
  <demovanilla src="vanilla/components/core/media/16-9-video">
  </demovanilla>
  <demovanilla src="vanilla/components/core/media/16-9-iframe">
  </demovanilla>
</demo>

## Min height

Use `min-height: <Value>` to have a min height (use narrow screen to see it in action).

<demo>
  <demovanilla src="vanilla/components/core/media/cover-min-height">
  </demovanilla>
</demo>
