---
type: "Components"
category: "Design"
parent: "Form"
title: "Content"
date: "2030-10-10"
---

## Variant

Use **tailwind classes** to assign variant (e.g. [border-color](https://tailwindcss.com/docs/border-color), [background-color](https://tailwindcss.com/docs/background-color), [text-color](https://tailwindcss.com/docs/text-color)).

<demo>
  <demoinline src="demos/components/form/variant-default">
  </demoinline>
  <demoinline src="demos/components/form/variant-primary">
  </demoinline>
  <demoinline src="demos/components/form/variant-underline">
  </demoinline>
</demo>

## Size

Use **tailwind classes** to assign size (e.g. [padding](https://tailwindcss.com/docs/padding), [font-size](https://tailwindcss.com/docs/font-size)).

<demo>
  <demoinline src="demos/components/form/size-xs">
  </demoinline>
  <demoinline src="demos/components/form/size-sm">
  </demoinline>
  <demoinline src="demos/components/form/size-md">
  </demoinline>
</demo>

## Checks Custom

You can have custom design that contains the `input[type="checkbox"]` or `input[type="radio"]`, just add the tag `label` and then you can use **tailwind variants** `on:`, `group-on:` to assign animations.

[[notePrimary]]
| For usability purpose **hide the input inside** with `sr-only`, **don't assign `display: none`**.

[[notePrimary]]
| For usability purpose remember to apply [focus-within styles](https://tailwindcss.com/docs/hover-focus-and-other-states#focus-within) to `label`.

Use [button](/components/button) with `label` to create **checks with button**.

<demo>
  <demoinline src="demos/components/form/checks-button">
  </demoinline>
</demo>

Use [card](/components/card) with `label` to create **checks with card**.

<demo>
  <demoinline src="demos/components/form/checks-card">
  </demoinline>
</demo>
