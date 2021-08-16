---
type: "Components"
category: "Form"
parent: "Form"
title: "Addon"
date: "1900-10-10"
---

## Validation

**Html5 form validation and Constraint Validation API**. You can disable form validation `form[novalidate]`.

You can style validation classes with `.valid-submit` and `.invalid-submit`, you can also use the custom variants `valid-submit:` and `invalid-submit:`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `form[novalidate]`                     | `NOT POSSIBLE`                | Do not validate form            |
| Component                  | `.valid-submit`                     | `valid-submit`                | Validation valid class            |
| Component                  | `.invalid-submit`                     | `invalid-submit`                | Validation invalid class            |

</div>

It **automatically runs** on **form submit** and **automatically scrolls** on the **first invalid** form item.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Variable                  | `Xt.formScrollWindowFactor:Number\|false`              | `0.2`        | A number from `0` to `1` of the **window height factor to scroll to** on validation              |

</div>

If you have **custom backend validation** on submit, you can automatically **scroll to the first validation** element on page load.

> Use **border on all form elements** if you want to **show validation with border color**.

<demo>
  <div class="gatsby_demo_item" data-iframe="demos/components/form/validation">
  </div>
</demo>

## Checks Custom

You can have custom design that contains the `input[type="checkbox"]` or `input[type="radio"]`, just add the tag `label` and then you can use **tailwind variants** `on:`, `group-on:` to assign animations.

> For usability purpose **hide the input inside** with `sr-only`, **don't assign `display: none`**.

> For usability purpose you can to apply [focus-within styles](https://tailwindcss.com/docs/hover-focus-and-other-states#focus-within) to `label`, or wait for [focus-visible-within](https://github.com/WICG/focus-visible/issues/151).

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

## Loader

You can have a **loader on forms automatically on submit** injecting the loader with javascript, with no changes to markup.

<demo>
  <demoinline src="demos/components/form/loader">
  </demoinline>
</demo>

## Label addon

Use **tailwind classes** to create a **label addon**.

<demo>
  <demoinline src="demos/components/form/label-addon">
  </demoinline>
</demo>
