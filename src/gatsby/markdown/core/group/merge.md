---
type: "Core"
parent: "Group"
title: "Merge"
date: "2000-05-01"
---

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
