const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--overlay-animation-css">
    <div data-xt-overlay="{ appendTo: false }">
      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
        overlay
      </button>

      <div class="xt-overlay" data-xt-duration="500">
        <div
          class="xt-backdrop bg-black pointer-events-none  transition ease-out duration-500 opacity-0 group-xt-active:opacity-25"
        ></div>
        <div class="xt-overlay-container max-w-3xl">
          <div class="xt-overlay-inner">
            <div class="xt-card rounded-md shadow-overlay ${classes.cardWhite()}">
              <button
                type="button"
                class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl"
                aria-label="Close"
              >
                ${classes.iconX()}
              </button>
              <div class="xt-media-container bg-gray-600 rounded-t-md xt-ratio-37.5">
                <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
              </div>
              <div class="${classes.cardMd()}">
                <div class="xt-h4">Lorem ipsum</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.
                </p>
                <p>
                  Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
                  justo.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
                  ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.
                </p>
                <p>
                  Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
                  justo.
                </p>
              </div>
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
