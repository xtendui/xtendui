---
type: "Components"
badge: "Core"
parent: "Card"
title: "Card"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
categories: ["100-Core"]
---

##Setup

To use this component import the **less** files accordingly:

```less
@import '~xtend-library/src/core/card/card.less';
```

Or just import **core**:

```less
@import '~xtend-library/src/xtend-core.less';
```

##Usage

Use this markup to create a **card**.

<script type="text/plain" class="language-markup">
  <div class="card card--default">
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

You can make interactive cards with `button.card` or `a.card`.

<demo>
  <demovanilla src="vanilla/components/card/usage">
  </demovanilla>
</demo>
