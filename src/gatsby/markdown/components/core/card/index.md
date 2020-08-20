---
type: "Components"
category: "Core"
parent: "Card"
title: "Card"
description: "Generic component to display content in a box."
---

<div class="table-scroll">

|                         | Class                                     | Mixin                         | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.card-asset`                | Not Possible        | Full width block with responsive full assets            |

</div>

Use this markup to create a **card**.

<script type="text/plain" class="language-markup">
  <div class="card card-primary">
    <div class="card-design"></div>
    <div class="card-inner">
      <div class="card-content">

        <div class="card-asset">
          <!-- content -->
        </div>

        <div class="card-block card-item">
          <!-- content -->
        </div>

      </div>
    </div>
  </div>
</script>

## Variant

<demo>
  <demovanilla src="vanilla/components/core/card/variant">
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

To stack `.card-item` horizontally wrap them inside `.card-item-nested` and `.card-group`, with responsive classes if you need them.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.card-group`                           | `.card-group`                      |
| Class responsive        | `.card-group-{breakpoint}`              | `.card-group-sm`                   |

</div>

<script type="text/plain" class="language-markup">
  <div class="card card-primary">
    <div class="card-design"></div>
    <div class="card-inner">
      <div class="card-content">

        <div class="card-item-nested card-item card-group">
          <div class="card-block card-item">
             <!-- content -->
          </div>
          <div class="card-block card-item">
             <!-- content -->
          </div>
        </div>

      </div>
    </div>
  </div>
</script>

You can add custom `.card-block` modifiers and style them as you like (e.g.: `.card-block-side`).

[[noteDefault]]
| To have a separator between multiple `.card-group` contents use [card separator addon](/components/addons/card/separator).

<demo>
  <demovanilla src="vanilla/components/core/card/group">
  </demovanilla>
</demo>

If you need to put an asset outside `.card-block`, just use `.card-item` and wrap the text inside another `.card-block.card-item`, like in the second example.

<demo>
  <demovanilla src="vanilla/components/core/card/block-side">
  </demovanilla>
</demo>

The size of **blocks** is automatic, you can specify the **size** with [columns](/components/core/column), with responsive classes if you need them.

<demo>
  <demovanilla src="vanilla/components/core/card/block-side-size">
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
