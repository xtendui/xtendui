---
type: "Components"
category: "Core"
parent: "Form"
title: "Other"
date: "2005-10-10"
---

## Disabled

Use **component classes** to style **disabled**. Check [xtendui/src/core/layout.css.js](https://github.com/minimit/xtendui/blob/beta/src/core/layout.css.js) for default values.

[[notePrimary]]
| For aria purpose use `aria-disabled="true"` when using the **class** `.xt-disabled`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-m-auto w-full">

|               | Syntax                          | Mixin               | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Component                  | `[readonly], [disabled], .xt-disabled`                     | `xt-disabled`                | Disabled styles            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/form/disabled">
  </demovanilla>
</demo>

## Fieldset Legend and Note

Use **tailwind classes** to create a **note**.

<demo>
  <demovanilla src="vanilla/components/core/form/fieldset-legend">
  </demovanilla>
</demo>

## Label addon

Use **tailwind classes** to create a **label addon**.

<demo>
  <demovanilla src="vanilla/components/core/form/label-addon">
  </demovanilla>
</demo>

## Checks button

Use [button](/components/core/button) with `label` to create **checks with button**.

<demo>
  <demovanilla src="vanilla/components/core/form/checks-button">
  </demovanilla>
</demo>

## Checks card

Use [card](/components/core/card) with `label` to create **checks with card**.

<demo>
  <demovanilla src="vanilla/components/core/form/checks-card">
  </demovanilla>
</demo>

## Validation

Html validation and Constraint Validation API.

It **automatically runs** on **form submit** and **automatically scrolls** on the **first invalid** form item.

Use **component classes** to style **validation**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-m-auto w-full">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `form[novalidate]`                     | `NOT POSSIBLE`                | Do not validate form            |
| Component                  | `.xt-form-valid`                     | `xt-form-valid`                | Validation valid class            |
| Component                  | `.xt-form-invalid`                     | `xt-form-invalid`                | Validation invalid class            |
| Component                  | `.xt-label-required`                     | `xt-label-required`                | Label required with asterisk            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/form/validation">
  </demovanilla>
</demo>

## Group

Refer to [group](/components/core/group).

## Toolbar

Refer to [toolbar](/components/addons/toolbar).
