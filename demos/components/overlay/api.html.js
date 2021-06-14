const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--overlay-api">
    <div class="xt-list xt-list-3 items-center mb-4">
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
        id="button--overlay-api-first-element"
      >
        1st element
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
        id="button--overlay-api-first-target"
      >
        1st target
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
        id="button--overlay-api-reinit"
      >
        Reinit
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
        id="button--overlay-api-restart"
      >
        Restart
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
        id="button--overlay-api-destroy"
      >
        Destroy
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
        id="button--overlay-api-unmount"
      >
        Unmount
      </button>
    </div>

    <div class="xt-list xt-list-3 items-center mb-4">
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonDefault()}"
        id="overlay--eventmethods"
      >
        Overlay
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonDefault()}"
        id="overlay--eventmethods-alt"
      >
        Overlay same
      </button>
    </div>

    <div class="xt-overlay" id="overlay--nested">
      <div class="xt-backdrop bg-black opacity-25"></div>
      <div class="xt-overlay-container max-w-5xl">
        <div class="xt-overlay-inner">
          <div class="xt-card ${classes.cardRadius()} shadow-overlay ${classes.cardWhite()}">
            <button
              type="button"
              class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl"
              aria-label="Close"
            >
              ${classes.iconX()}
            </button>
            <div class="${classes.cardMd()} md:text-lg md:p-10">
              <div class="xt-h3">Overlay</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
              <p>
                Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat, ligula
                nulla sollicitudin nunc, ut commodo nulla enim nec nisi.
              </p>
              <p>
                Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="xt-card ${classes.cardRadius()} ${classes.cardDefault()} mt-6">
      <div
        class="${classes.cardSm()} overflow-y-auto overflow-x-hidden xt-overflow-sub max-h-56"
        id="card--overlay-api-log"
      ></div>
    </div>
  </div>
`

export const object = {
  html: html,
  container: true,
}
