---
type: "Components"
badge: "Core"
parent: "Toggle"
title: "Mode"
date: "2000-01-01"
---

##Self

You can make an html element toggle itself.

<demo>
  <demovanilla src="vanilla/components/toggle/mode-self">
  </demovanilla>
</demo>

##Multiple

You can create a toggle with **mutiple** mode by assigning the toggle to a container element, elements and targets must be inside the container.

With multiple mode, the **targets** activated are the ones with the same index of the toggled **element**.

<div class="table--scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `elements: QuerySelector`                 | `':scope > a, :scope > button'`          | Elements query selector inside toggle           |
| Option                  | `targets: QuerySelector`                  | `':scope > [class^="toggle-"], :scope > [class*=" toggle-"]'`       | Targets query selector inside toggle           |

</div>

Use `:scope` when using descendant selector on root (e.g. `:scope > *`).

<demo>
  <demovanilla src="vanilla/components/toggle/mode-default">
  </demovanilla>
  <demovanilla src="vanilla/components/toggle/mode-custom">
  </demovanilla>
</demo>

##Unique

The **unique** mode is useful when triggering **targets outside the scope** of the toggle.

[[noteDefault]]
| To activate **unique mode** you **need** to specify targets with **#id**.

<demo>
  <demovanilla src="vanilla/components/toggle/mode-single">
  </demovanilla>
  <demovanilla src="vanilla/components/toggle/mode-same">
  </demovanilla>
</demo>
