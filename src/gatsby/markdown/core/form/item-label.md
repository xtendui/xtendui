---
type: "Core"
parent: "Form"
title: "Item and Label"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

## Item and label

Size is done with **em** so it's relative to the container element. To see item's and label's size use [form group](/core/form/group).

<demo>
  <demovanilla src="inline/core/form/item-label">
  </demovanilla>
</demo>

## Variant

In css you can use `.form-label({});` and `.form-items({});` to style all `.form-label:not(.custom)` and `.form-item:not(.custom)`.

If you want to customize singularly form's group use the class  `.form-label.custom` and `.form-item.custom`.

<demo>
  <demovanilla src="inline/core/form/variant-default">
  </demovanilla>
  <demovanilla src="inline/core/form/variant-inverse">
  </demovanilla>
</demo>
