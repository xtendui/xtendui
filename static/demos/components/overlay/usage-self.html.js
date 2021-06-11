const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div
      class="xt-overlay *** on ***"
      data-xt-overlay="{ elements: ':scope > .xt-button', targets: ':scope > .xt-overlay' }"
    >
      <div class="xt-backdrop bg-black pointer-events-none opacity-25"></div>
      <div class="xt-overlay-container max-w-3xl">
        <div class="xt-overlay-inner">
          <div class="xt-card ${classes.cardRadius()} shadow-overlay ${classes.cardWhite()}">
            <button
              type="button"
              class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl"
              aria-label="Close"
            >
              ${classes.iconX()}
            </button>
            <div class="${classes.cardMd()}">
              <div class="xt-h4">Lorem ipsum</div>
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
  </div>
`

export const object = {
  html: html,
}
