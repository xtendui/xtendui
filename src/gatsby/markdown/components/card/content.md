---
type: "Components"
badge: "Core"
parent: "Card"
title: "Content"
date: "2019-06-01"
---

## Block

Sequential `.card-block` stack vertically.

<script type="text/plain" class="language-markup">
  <div class="card card-default">
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

<demo>
  <demovanilla src="vanilla/components/card/multiple">
  </demovanilla>
</demo>

You can add custom `.card-block` modifiers and style them as you like (e.g.: `.card-block-head`).

<script type="text/plain" class="language-markup">
  <div class="card card-default">
    <div class="card-design"></div>
    <div class="card-inner">
      <div class="card-content">

        <div class="card-block card-block-head">
          <!-- content -->
        </div>

        <div class="card-block card-item">
          <!-- content -->
        </div>

      </div>
    </div>
  </div>
</script>

<demo>
  <demovanilla src="vanilla/components/card/block">
  </demovanilla>
</demo>

## Group

To stack `.card-item` horizontally use `.card-item-nested` and `.card-group` with responsive classes if you need them.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.card-group`                           | `.card-group`                      |
| Class responsive        | `.card-group-{breakpoint}`              | `.card-group-sm`                   |

</div>

<script type="text/plain" class="language-markup">
  <div class="card card-default">
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

<demo>
  <demovanilla src="vanilla/components/card/group">
  </demovanilla>
</demo>

## Asset

If you want full width assets use `.card-asset`.

<div class="table-scroll">

|                         | Class                                     | Mixin                         | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.card-asset`                | Not Possible        | Full width block with responsive full assets            |

</div>

<script type="text/plain" class="language-markup">
  <div class="card card-default">
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
  <demovanilla src="vanilla/components/card/asset">
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
  <demovanilla src="vanilla/components/card/overflow-y">
  </demovanilla>
</demo>
