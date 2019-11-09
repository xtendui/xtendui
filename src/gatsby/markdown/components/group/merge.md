---
type: "Components"
core: true
parent: "Group"
title: "Merge"
date: "2000-05-01"
---

##Merge

You can merge buttons in a single interactive object.

Use this markup to merge multiple `.btn` in one `[button]` as line.

[[noteDefault]]
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
  <demovanilla src="vanilla/core/group/merge-line">
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
  <demovanilla src="vanilla/core/group/merge-stack">
  </demovanilla>
</demo>
