---
type: "Components"
category: "Design"
parent: "Form"
title: "Validation"
date: "2010-10-09"
---

## Validation

Html5 form validation and Constraint Validation API. You can disable form validation `form[novalidate]`.

It **automatically runs** on **form submit** and **automatically scrolls** on the **first invalid** form item.

Use **component classes** `.xt-label-required` to add required fields visual.

Form validation automatically adds to form elements `.xt-form-valid`, `.xt-form-invalid` with **border color**, just use border on form elements or customize `.xt-form-valid`, `.xt-form-invalid` styles. Check [xtendui/src/form.css.js](https://github.com/xtendui/xtendui/blob/beta/src/form.css.js) for default styles.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `form[novalidate]`                     | `NOT POSSIBLE`                | Do not validate form            |
| Component                  | `.xt-label-required`                     | `xt-label-required`                | Label required class            |
| Component                  | `.xt-form-valid`                     | `xt-form-valid`                | Validation valid class            |
| Component                  | `.xt-form-invalid`                     | `xt-form-invalid`                | Validation invalid class            |

</div>

<demo>
  <demoinline src="demos/components/form/validation">
  </demoinline>
</demo>
