---
type: "Components"
category: "Core"
parent: "Card"
title: "Content"
date: "2020-10-10"
---

## Variant

<demo>
  <demovanilla src="vanilla/components/core/card/variant">
  </demovanilla>
</demo>

## Size

<demo>
  <demovanilla src="vanilla/components/core/card/size">
  </demovanilla>
</demo>

## Interactive

You can make interactive cards with `a` or `button` or `label`.

<demo>
  <demovanilla src="vanilla/components/core/card/interactive">
  </demovanilla>
</demo>

## Full

<demo>
  <demovanilla src="vanilla/components/core/card/full">
  </demovanilla>
</demo>

## Asset

If you want full width assets use `.card-asset`.

<div class="table-scroll">

|                         | Class                                     | Mixin                         | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.card-asset`                | Not Possible        | Full size block with responsive full assets            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/card/asset">
  </demovanilla>
</demo>

## Block

Sequential `.card-block` stack vertically.

<div class="table-scroll">

|                         | Class                                     | Mixin                         | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.card-block.card-item`                | Not Possible        | Card blocks with spacing            |

</div>

<script type="text/plain" class="language-markup">
  <div class="card card-primary">
    <div class="card-design"></div>
    <div class="card-inner">
      <div class="card-content">

        <div class="card-block">
          <!-- content -->
        </div>

        <div class="card-block">
          <!-- content -->
        </div>

      </div>
    </div>
  </div>
</script>

<demo>
  <demovanilla src="vanilla/components/core/card/block">
  </demovanilla>
</demo>

## Group

To stack `.card-item` horizontally wrap them inside `.card-item-nested` and `.card-group`.
(responsive classes doc)

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.card-group`                           | `.card-group`                      |
| Class responsive        | `.card-group-{breakpoint}`              | `.card-group-sm`                   |

</div>

<demo>
  <demovanilla src="vanilla/components/core/card/group">
  </demovanilla>
</demo>

The size of **blocks** is automatic, you can specify the **size** with [columns](/components/core/column) inside `card-group`.

<demo>
  <demovanilla src="vanilla/components/core/card/group-block">
  </demovanilla>
</demo>

## Separator

<demo>
  <demovanilla src="vanilla/components/core/card/separator">
  </demovanilla>
</demo>

## Overflow

You can set vertical overflow using `.card-overflow-y` in `.card-inner` or `.card-block`.

<div class="table-scroll">

|                         | Class                                     | Mixin                         | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.card-overflow-y`                | `.card-overflow-y()`        | Vertical overflow with max-height and scrollbar            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/card/overflow-y">
  </demovanilla>
</demo>

## Close button

Usage of `.btn-close` inside card.

<demo>
  <demovanilla src="vanilla/components/core/card/close">
  </demovanilla>
</demo>

## Disable

You can disable card using `.card-disable`.
(responsive classes doc)

<demo>
  <demovanilla src="vanilla/components/core/card/disable">
  </demovanilla>
</demo>

## Stretch

Same demo as [Row stretch](/components/core/row/other#stretch) HERE.
