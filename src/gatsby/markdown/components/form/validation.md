---
type: "Components"
category: "Design"
parent: "Form"
title: "Validation"
date: "1900-10-10"
---

## Validation

Html5 form validation and Constraint Validation API. You can disable form validation `form[novalidate]`.

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
| Variable                  | `Xt.formScrollWindowFactor:Number|false`              | `0.2`        | A number from `0` to `1` of the **window height factor to scroll to** on validation              |

</div>

If you have **custom backend validation** on submit, you can automatically **scroll to the first validation** element on page load.

[[notePrimary]]
| Use **border on all form elements** if you want to **show validation with border color**.

<demo>
  <div class="gatsby_demo_item" data-iframe="demos/components/form/validation">
  </div>
</demo>
