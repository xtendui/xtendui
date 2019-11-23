---

type: "Components"
badge: "Extensions"
parent: "Scroll"
title: "Scroll"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
categories: ["400-Presentation"]
---

##Usage

Use this markup to create a **scroll**.

<script type="text/plain" class="language-markup">
  <div data-xt-scroll>
    <div class="scroll">
      <!-- content -->
    </div>
  </div>
</script>

You can initialize **scroll** by javascript omitting `[data-xt-scroll]`.

```jsx
let self = new Xt.Scroll(document.documentElement, {
});
```

[[noteDefault]]
| It's recomended to animate the scroll elements with <code>animation</code> instead of <code>transition</code> because of <a href="{% link faq.html %}#browsers-bugs-fixed-position">this bug</a>.

