---
type: "Components"
category: "Core"
parent: "Form"
title: "Layout"
date: "2030-03-03"
---

## Row

Use **tailwind classes** to assign column size. Use **component's classes** to assign [row spacing](/components/core/row/content#space).

<script type="text/plain" class="language-markup">
  <form>
    <div class="row row-space-x-4 row-space-y-3">

      <div class="w-full">
        <label class="label mb-3" for="my-input">
          <!-- content -->
        </label>
        <input type="text" class="input" id="my-input" name="my-input"/>
      </div>
    
    </div>
  </form>
</script>

<demo>
  <demovanilla src="vanilla/components/core/form/mode-row">
  </demovanilla>
</demo>

## Horizontal

Use **tailwind classes** to assign column size. Use **component's classes** to assign [row spacing](/components/core/row/content#space).

<script type="text/plain" class="language-markup">
<form>
  <div class="row row-space-x-4 row-space-y-3">

    <div class="w-full">
      <div class="row row-space-2">
        <div class="w-full sm:w-2/12 sm:self-center">
          <label class="label mb-3 sm:mb-0" for="my-input">
            <!-- content -->
          </label>
        </div>
        <div class="w-full sm:w-10/12 sm:self-center">
          <input type="text" class="input" id="my-input" name="my-input"/>
        </div>
      </div>
    </div>
    
  </div>
</div>
</script>

<demo>
  <demovanilla src="vanilla/components/core/form/mode-horizontal">
  </demovanilla>
</demo>

## Inline Row

Inline Row mode with `w-auto`.

<script type="text/plain" class="language-markup">
  <form>
    <div class="row row-space-x-4 row-space-y-3">

      <div class="w-full sm:w-auto">
        <label class="label mb-3" for="my-input">
          <!-- content -->
        </label>
        <input type="text" class="input" id="my-input" name="my-input"/>
      </div>
    
    </div>
  </form>
</script>

<demo>
  <demovanilla src="vanilla/components/core/form/mode-inline-row">
  </demovanilla>
</demo>

## Inline Horizontal

Inline Horizontal mode with `w-auto` and `whitespace-no-wrap`.

<script type="text/plain" class="language-markup">
<form>
  <div class="row row-space-x-4 row-space-y-3">

    <div class="w-full sm:w-auto">
      <div class="row row-space-2">
        <div class="w-full sm:w-auto sm:self-center">
          <label class="label mb-3 sm:mb-0 whitespace-no-wrap" for="my-input">
            <!-- content -->
          </label>
        </div>
        <div class="w-full sm:w-auto sm:self-center">
          <input type="text" class="input" id="my-input" name="my-input"/>
        </div>
      </div>
    </div>
    
  </div>
</div>
</script>

<demo>
  <demovanilla src="vanilla/components/core/form/mode-inline-horizontal">
  </demovanilla>
</demo>
