const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--toggle-animation-duration-delay">
    <div class="xt-list xt-list-3 items-center">
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonDefault()}"
        data-xt-group="0"
      >
        Toggle 0
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonDefault()}"
        data-xt-group="1"
      >
        Toggle 1
      </button>

      <div
        class="xt-card xt-toggle ${classes.cardRadius()} ${classes.cardToggle()} transform transition opacity-0 -translate-x-4 in:opacity-100 in:duration-1000 in:translate-x-0 out:duration-500 out:translate-x-4"
        data-xt-group="0"
      >
        Target 0a
      </div>

      <div
        class="xt-card xt-toggle ${classes.cardRadius()} ${classes.cardToggle()} transform transition opacity-0 -translate-x-4 in:opacity-100 in:duration-500 in:translate-x-0 out:duration-500 out:translate-x-4"
        data-xt-group="0"
      >
        Target 0b
      </div>

      <div
        class="xt-card xt-toggle ${classes.cardRadius()} ${classes.cardToggle()} transform transition opacity-0 -translate-x-4 in:opacity-100 in:duration-0 in:translate-x-0 out:duration-500 out:translate-x-4"
        data-xt-group="0"
      >
        Target 0c
      </div>

      <div
        class="xt-card xt-toggle ${classes.cardRadius()} ${classes.cardToggle()} transform transition opacity-0 -translate-x-4 in:opacity-100 in:duration-0 in:translate-x-0 out:duration-500 out:translate-x-4"
        data-xt-group="0"
      >
        Target 0d
      </div>

      <div
        class="xt-card xt-toggle ${classes.cardRadius()} ${classes.cardToggle()} transform transition opacity-0 -translate-x-4 in:opacity-100 in:duration-1000 in:translate-x-0 out:duration-500 out:translate-x-4"
        data-xt-group="1"
        data-xt-duration-in="1000"
        data-xt-duration-out="0"
        data-xt-delay-in="0"
        data-xt-delay-out="500"
      >
        Target 1a
      </div>

      <div
        class="xt-card xt-toggle ${classes.cardRadius()} ${classes.cardToggle()} transform transition opacity-0 -translate-x-4 in:opacity-100 in:duration-500 in:translate-x-0 out:duration-500 out:translate-x-4"
        data-xt-group="1"
        data-xt-duration-in="500"
        data-xt-duration-out="500"
        data-xt-delay-in="250"
        data-xt-delay-out="500"
      >
        Target 1b
      </div>

      <div
        class="xt-card xt-toggle ${classes.cardRadius()} ${classes.cardToggle()} transform transition opacity-0 -translate-x-4 in:opacity-100 in:duration-0 in:translate-x-0 out:duration-500 out:translate-x-4"
        data-xt-group="1"
        data-xt-duration-in="0"
        data-xt-duration-out="1000"
        data-xt-delay-in="500"
        data-xt-delay-out="250"
      >
        Target 1c
      </div>

      <div
        class="xt-card xt-toggle ${classes.cardRadius()} ${classes.cardToggle()} transform transition opacity-0 -translate-x-4 in:opacity-100 in:duration-0 in:translate-x-0 out:duration-500 out:translate-x-4"
        data-xt-group="1"
        data-xt-duration-in="0"
        data-xt-duration-out="1000"
        data-xt-delay-in="500"
        data-xt-delay-out="0"
      >
        Target 1d
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
