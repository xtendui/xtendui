---
type: "Components"
category: "Addons"
parent: "Animation"
title: "propagate-interaction"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

<!--
```jsx
import 'xtend-library/src/addons/animation/propagate-interaction.js'
```

<script type="text/plain" class="language-markup">
  <button type="button"
    data-xt-propagate-interaction="{ targets: '.btn' }">
    <div class="btn btn-primary">
      propagate interactions here
    </div>
  </button>
</script>

/**
 * propagate-interaction
 */

Xt.mount.push({
  matches: '#iframe--furniture-parallax-v1 body a, #iframe--furniture-parallax-v1 body button', /* add your own selector instead of body to contain the code */
  mount: object => {
    // init

    let self = new Xt.PropagateInteraction(object, {
      targets: '.btn',
    })

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})

-->
