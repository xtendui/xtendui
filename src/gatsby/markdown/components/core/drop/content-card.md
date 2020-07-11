---
type: "Components"
category: "Core"
parent: "Drop"
title: "Content Card"
date: "2020-10-05"
---

[[notePrimary]]
| Drop uses card to style it's content, refer to [card's content](/components/core/card/content).

## Asset

If you want full width assets use `.card-asset`.

<div class="table-scroll">

|                         | Class                                     | Mixin                         | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.card-asset`                | Not Possible        | Full width block with responsive full assets            |

</div>

<script type="text/plain" class="language-markup">
  <div class="card card-drop">
    <div class="card-design"></div>
    <div class="card-inner">
      <div class="card-content">

        <div class="card-asset">
          <!-- content -->
        </div>

      </div>
    </div>
  </div>
</script>

<demo>
  <demovanilla src="vanilla/components/core/drop/asset">
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
  <div class="card card-drop">
    <div class="card-design"></div>
    <div class="card-inner">
      <div class="card-content">

        <div class="card-block card-item">
          <!-- content -->
        </div>

        <div class="card-block card-item">
          <!-- content -->
        </div>

      </div>
    </div>
  </div>
</script>

[[noteDefault]]
| To have a separator between multiple `.card-block` use [card separator addon](/components/addons/card/separator).

<demo>
  <demovanilla src="vanilla/components/core/drop/block">
  </demovanilla>
</demo>

You can add custom `.card-block` modifiers and style them as you like (e.g.: `.card-block-intro`).

<demo>
  <demovanilla src="vanilla/components/core/drop/block-intro">
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
  <div class="card card-drop">
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
  <demovanilla src="vanilla/components/core/drop/group">
  </demovanilla>
</demo>

If you need to put an asset outside `.card-block`, just use `.card-item` and wrap the text inside another `.card-block.card-item`, like in the second example.

<demo>
  <demovanilla src="vanilla/components/core/drop/block-side">
  </demovanilla>
</demo>

The size of **blocks** is automatic, you can specify the **size** with [columns](/components/core/column), with responsive classes if you need them.

<demo>
  <demovanilla src="vanilla/components/core/drop/block-side-size">
  </demovanilla>
</demo>

## Overflow

You can set overflow using `.drop-overflow-y` and/or `.drop-overflow-x` in `.drop`.

<div class="table-scroll">

|                         | Class                                     | Mixin                         | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.drop-overflow-y`                | `.drop-overflow-y()`        | Vertical overflow with max-height and scrollbar            |
| Option                  | `.drop-overflow-x`                | `.drop-overflow-x()`        | Horizontal overflow with max-width and scrollbar            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/drop/overflow-y">
  </demovanilla>
  <demovanilla src="vanilla/components/core/drop/overflow-x">
  </demovanilla>
</demo>

