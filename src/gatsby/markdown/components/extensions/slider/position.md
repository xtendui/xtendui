---
type: "Components"
category: "Extensions"
parent: "Slider"
title: "Position"
date: "2009-10-10"
---

## Align

Align the slides.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `align:String`                          | `'left'`        | Alignment 'left' or 'center' or 'right'           |

</div>

<demo>
  <demovanilla src="vanilla/components/extensions/slider/align-left">
  </demovanilla>
  <demovanilla src="vanilla/components/extensions/slider/align-center">
  </demovanilla>
  <demovanilla src="vanilla/components/extensions/slider/align-right">
  </demovanilla>
</demo>

## Contain

Contain the slides.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `contain:Boolean`                          | `false`        | If true contain the slides on available width            |

</div>

<demo>
  <demovanilla src="vanilla/components/extensions/slider/contain-center">
  </demovanilla>
  <demovanilla src="vanilla/components/extensions/slider/contain-left">
  </demovanilla>
  <demovanilla src="vanilla/components/extensions/slider/contain-right">
  </demovanilla>
</demo>

## Group

With `groupMq: { MediaQuery: Number }` you set a decimal number from 0 to 1 to group the slides with a factor of the **drag.dragger** width available.

`MediaQuery` is a media query, you can have multiple, for example `groupMq: { 'all': 1, '(min-width: 768px)': 0.8 }`.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `groupMq:Object`                          | `false`        | Set automatic grouping based on available width from 0 to 1            |

</div>

<demo>
  <demovanilla src="vanilla/components/extensions/slider/group-responsive">
  </demovanilla>
</demo>

## Wrap

You can wrap the slides with `drag: { wrap: true }`. With `drag.wrap` you have to set `loop: true` and you can't use `contain: true`.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `drag.wrap:Boolean|Number`                          | `false`        | Wrap slides on start and end             |

</div>

<demo>
  <demovanilla src="vanilla/components/extensions/slider/wrap">
  </demovanilla>
  <demovanilla src="vanilla/components/extensions/slider/wrap-left">
  </demovanilla>
  <demovanilla src="vanilla/components/extensions/slider/wrap-right">
  </demovanilla>
</demo>

## Other

If you have slides of different height you can set `autoHeight: '.slides'` to have the slides element resize automatically on activation.

If you want to keep the first element height on the slide use `keepHeight: '.slides'`.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `autoHeight:Query`                          | `false`        | Elements to automaticaly height (ex: `.slides`)            |
| Option                  | `keepHeight:Query`                          | `false`        | Elements to keep height of the first slide (ex: `.slides`)            |

</div>

<demo>
  <demovanilla src="vanilla/components/extensions/slider/other">
  </demovanilla>
</demo>
