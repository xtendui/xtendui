---
type: "Components"
badge: "Extensions"
parent: "Loader"
title: "Option"
date: "2000-02-01"
---

##Spinner

<div class="table--scroll">

|                         | Class                                     | Mixin                         | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.loader--spinner`                | Not Possible        | Style setup for loader spinner            |

</div>

<demo>
  <demovanilla src="vanilla/components/loader/spinner">
  </demovanilla>
</demo>

##Filler

###Direction

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.loader--{direction}`                   | `.loader--x` `.loader--y`             |
| Mixin                   | `.loader--{direction}()`                 | `.loader--x()` `.loader--y()`         |

</div>

<demo>
  <demovanilla src="vanilla/components/loader/filler-x">
  </demovanilla>
  <demovanilla src="vanilla/components/loader/filler-y">
  </demovanilla>
</demo>

###Size

Loader size with `.loader--x`.

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.loader-{size}--{direction}`             | `.loader-size--x` `.loader-size--top` `.loader-size--bottom`          |
| Mixin                   | `.loader-{size}--{direction}()`           | `.loader-size--x()` `.loader-size--top()` `.loader-size--bottom()`     |

</div>

<demo>
  <demovanilla src="vanilla/components/loader/filler-size-x">
  </demovanilla>
  <demovanilla src="vanilla/components/loader/filler-size-top">
  </demovanilla>
  <demovanilla src="vanilla/components/loader/filler-size-bottom">
  </demovanilla>
</demo>

Loader size with `.loader--y`.

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.loader-{size}--{direction}`             | `.loader-size--y` `.loader-size--left` `.loader-size--right`          |
| Mixin                   | `.loader-{size}--{direction}()`           | `.loader-size--y()` `.loader-size--left()` `.loader-size--right()`         |

</div>

<demo>
  <demovanilla src="vanilla/components/loader/filler-size-y">
  </demovanilla>
  <demovanilla src="vanilla/components/loader/filler-size-left">
  </demovanilla>
  <demovanilla src="vanilla/components/loader/filler-size-right">
  </demovanilla>
</demo>

##Mouse

Loader that follow mouse with `.loader--mouse` and javascript.

<div class="table--scroll">

|                         | Class                                     | Mixin                         | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.loader--mouse`                | `.loader--mouse()`        | Style setup for loader that follow mouse            |

</div>

<demo>
  <demovanilla src="vanilla/components/loader/mouse-spinner">
  </demovanilla>
  <demovanilla src="vanilla/components/loader/mouse-filler">
  </demovanilla>
</demo>

##Background

Use `.loader--background` to add the background.

<div class="table--scroll">

|                         | Class                                     | Mixin                         | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.loader--background`                | `.loader--background()`        | Loader with background            |

</div>

<demo>
  <demovanilla src="vanilla/components/loader/background-spinner">
  </demovanilla>
  <demovanilla src="vanilla/components/loader/background-direction">
  </demovanilla>
  <demovanilla src="vanilla/components/loader/background-size">
  </demovanilla>
</demo>
