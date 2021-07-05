const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center" data-xt-toggle="{ loop: true, navigation: '[data-xt-nav]' }">
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonDefault()}"
        data-xt-toggle-element
      >
        Toggle 0
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonDefault()}"
        data-xt-toggle-element
      >
        Toggle 1
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonDefault()}"
        data-xt-toggle-element
      >
        Toggle 2
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonDefault()}"
        data-xt-toggle-element
      >
        Toggle 3
      </button>

      <button
        type="button"
        class="*** hidden md:block cursor-none absolute top-0 left-0 w-24 h-full group ***"
        data-xt-nav="-1"
        aria-label="Previous slide"
        data-xt-mousefollow
      >
        <div
          class="*** xt-mousefollow fixed *** text-black text-2xl transition-opacity opacity-0 in:opacity-100"
          data-xt-mousefollow-target
        >
          ${classes.iconArrowLeft({
            classes: '*** transition-all duration-300 group-in:opacity-75 group-in:scale-75 ***',
          })}
        </div>
      </button>

      <button
        type="button"
        class="*** hidden md:block cursor-none absolute top-0 right-0 w-24 h-full group ***"
        data-xt-nav="1"
        aria-label="Next slide"
        data-xt-mousefollow
      >
        <div
          class="*** xt-mousefollow fixed *** text-black text-2xl transition-opacity opacity-0 in:opacity-100"
          data-xt-mousefollow-target
        >
          ${classes.iconArrowRight({
            classes: '*** transition-all duration-300 group-in:opacity-75 group-in:scale-75 ***',
          })}
        </div>
      </button>

      <div class="xt-card *** xt-toggle *** ${classes.cardToggle()}" data-xt-toggle-target>Target 0</div>

      <div class="xt-card *** xt-toggle *** ${classes.cardToggle()}" data-xt-toggle-target>Target 1</div>

      <div class="xt-card *** xt-toggle *** ${classes.cardToggle()}" data-xt-toggle-target>Target 2</div>

      <div class="xt-card *** xt-toggle *** ${classes.cardToggle()}" data-xt-toggle-target>Target 3</div>
    </div>
  </div>
`

export const object = {
  html: html,
}
