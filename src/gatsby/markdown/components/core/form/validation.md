---
type: "Components"
category: "Core"
parent: "Form"
title: "Validation"
date: "2010-10-09"
---

## Validation

Html5 form validation and Constraint Validation API. You can disable form validation `form[novalidate]`.

It **automatically runs** on **form submit** and **automatically scrolls** on the **first invalid** form item.

Use **component classes** to style `.xt-label-required`, `.xt-form-valid`, `.xt-form-invalid`. Check [xtendui/src/core/form.css.js](https://github.com/minimit/xtendui/blob/beta/src/core/form.css.js) for default styles.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `form[novalidate]`                     | `NOT POSSIBLE`                | Do not validate form            |
| Component                  | `.xt-label-required`                     | `xt-label-required`                | Label required class            |
| Component                  | `.xt-form-valid`                     | `xt-form-valid`                | Validation valid class            |
| Component                  | `.xt-form-invalid`                     | `xt-form-invalid`                | Validation invalid class            |

</div>

<demo>
  <demoinline src="vanilla/components/core/form/validation">
  </demoinline>
</demo>
