---
type: "Components"
category: "Core"
parent: "Form"
title: "Other"
date: "2005-10-10"
---

## Fieldset Legend and Note

Use **component classes** to create `fieldset` and `legend`.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `fieldset, .fieldset`                     | `fieldset`                | Fieldset styles            |
| Component                  | `legend, .legend`                     | `legend`                | Legend styles            |

</div>

Use **tailwind classes** to create a note.

<demo>
  <demovanilla src="vanilla/components/core/form/fieldset-legend">
  </demovanilla>
</demo>

## Label addon

Use **tailwind classes** to create a label addon.

<demo>
  <demovanilla src="vanilla/components/core/form/label-addon">
  </demovanilla>
</demo>

## Checks button

Use [button](/components/core/button) with `label` to create checks with button.

<demo>
  <demovanilla src="vanilla/components/core/form/checks-button">
  </demovanilla>
</demo>

## Checks card

Use [card](/components/core/card) with `label` to create checks with card.

<demo>
  <demovanilla src="vanilla/components/core/form/checks-card">
  </demovanilla>
</demo>

## Group

@TODO

## Validation

Html validation and Constraint Validation API.

It **automatically runs** on **form submit** and **automatically scrolls** on the **first invalid** form item.

Use **component classes** to style validation.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `form[novalidate]`                     | `NOT POSSIBLE`                | Do not validate form            |
| Component                  | `.form-valid`                     | `form-valid`                | Validation valid class            |
| Component                  | `.form-invalid`                     | `form-invalid`                | Validation invalid class            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/form/validation">
  </demovanilla>
</demo>
