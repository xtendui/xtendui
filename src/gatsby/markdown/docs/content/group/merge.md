---
path: "/docs/content/group/merge"
type: "docs"
date: "2030-02-01"
title: "Merge"
description: "Description"
parent: "Group"
---

##Usage

Use this markup to merge multiple `.btn` in one `[button]` as line.

<script type="text/plain" class="language-markup">
  <button type="button" class="group">
    <span class="group_inner">
      <span class="btn">
        <span><!-- content --></span>
      </span>
    </span>

    <span class="group_inner">
      <span class="btn">
        <span><!-- content --></span>
      </span>
    </span>
  </button>
</script>

Use this markup to merge multiple `.btn` in one `[button]` as stack.

<script type="text/plain" class="language-markup">
  <button type="button" class="group">
    <span class="group_inner">
      <span class="btn">
        <span><!-- content --></span>
      </span>
      
      <span class="btn">
        <span><!-- content --></span>
      </span>
    </span>
  </button>
</script>

<div class="alert">
  <div class="alert_content">
    Elements with `a, button` tag propagate `.hover` and `.active` classes on
    `.btn` childs automatically.
  </div>
</div>

##Modes

<demo>
  <demovanilla src="demos/docs/content/group/merge/line" name="line">
  </demovanilla>
  <demovanilla src="demos/docs/content/group/merge/stack" name="stack">
  </demovanilla>
</demo>
