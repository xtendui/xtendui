---
type: "Core"
parent: "Group"
title: "Group"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
categories: ["100-Content"]
---

##Setup

To use this component import the **less**files accordingly:

```less
@import '~xtend-library/src/core/group/index.less';
```

Or just [import core](/core/setup/#@TODO).

##Usage

###Button

Use this markup to create a button group as line.

<script type="text/plain" class="language-markup">
  <div class="group">
  
    <button type="button" class="btn btn--default">
      <!-- content -->
    </button>
    
    <button type="button" class="btn btn--default">
      <!-- content -->
    </button>
    
  </div>
</script>

<demo>
  <demovanilla src="inline/core/group/button-line">
  </demovanilla>
</demo>

Use this markup to create a button group as stack.

<script type="text/plain" class="language-markup">
  <div class="group">
  
    <div class="group-inner">
      <button type="button" class="btn btn--default">
        <!-- content -->
      </button>
      <button type="button" class="btn btn--default">
        <!-- content -->
      </button>
    </div>

  </div>
</script>

<demo>
  <demovanilla src="inline/core/group/button-stack">
  </demovanilla>
</demo>

###Input

Use this markup to create a input group as line.

<script type="text/plain" class="language-markup">
  <div class="group">
  
    <div class="group-inner">
      <button type="button" class="btn btn--default">
        <!-- content -->
      </button>
    </div>

    <input type="text" class="form-item">

  </div>
</script>

<demo>
  <demovanilla src="inline/core/group/input-line">
  </demovanilla>
</demo>

Use this markup to create a input group as stack.

<script type="text/plain" class="language-markup">
  <div class="group">
  
    <div class="group-inner">
      <button type="button" class="btn btn--default">
        <!-- content -->
      </button>
      <button type="button" class="btn btn--default">
        <!-- content -->
      </button>
    </div>

    <input type="text" class="form-item">
    
  </div>
</script>

<demo>
  <demovanilla src="inline/core/group/input-stack">
  </demovanilla>
</demo>

##Merge

You can merge buttons in a single interactive object.

Use this markup to merge multiple `.btn` in one `[button]` as line.

[[notePrimary]]
| @TODO needs propagate-interaction extension

<script type="text/plain" class="language-markup">
  <button type="button" class="group">
  
    <div class="group-inner">
      <div class="btn btn--default">
        <!-- content -->
      </div>
    </div>

    <div class="group-inner">
      <div class="btn btn--default">
        <!-- content -->
      </div>
    </div>
    
  </button>
</script>

<demo>
  <demovanilla src="inline/core/group/merge-line">
  </demovanilla>
</demo>

Use this markup to merge multiple `.btn` in one `[button]` as stack.

<script type="text/plain" class="language-markup">
  <button type="button" class="group">
  
    <div class="group-inner">
      <div class="btn btn--default">
        <!-- content -->
      </div>
      <div class="btn btn--default">
        <!-- content -->
      </div>
    </div>

  </button>
</script>

<demo>
  <demovanilla src="inline/core/group/merge-stack">
  </demovanilla>
</demo>
