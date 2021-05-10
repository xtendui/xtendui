const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center" data-xt-toggle="{ loop: true, navigation: '[data-xt-nav]' }">
      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Toggle 0
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Toggle 1
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Toggle 2
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Toggle 3
      </button>

      <div>
        <button
          type="button"
          class="hidden md:block cursor-none z-above absolute top-0 left-0 w-24 h-full group"
          data-xt-nav="-1"
          aria-label="Previous slide"
          data-xt-mousefollow
        >
          <div class="xt-mousefollow fixed text-black text-2xl transition-opacity opacity-0 in:opacity-100">
            ${classes.iconArrowLeft({
              classes: 'transform transition-all duration-300 group-in:opacity-75 group-in:scale-75',
            })}
          </div>
        </button>

        <button
          type="button"
          class="hidden md:block cursor-none z-above absolute top-0 right-0 w-24 h-full group"
          data-xt-nav="1"
          aria-label="Next slide"
          data-xt-mousefollow
        >
          <div class="xt-mousefollow fixed text-black text-2xl transition-opacity opacity-0 in:opacity-100">
            ${classes.iconArrowRight({
              classes: 'transform transition-all duration-300 group-in:opacity-75 group-in:scale-75',
            })}
          </div>
        </button>
      </div>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">Target 0</div>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">Target 1</div>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">Target 2</div>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">Target 3</div>
    </div>
  </div>
`

export const object = {
  html: html,
}
