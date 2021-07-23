const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center" data-xt-overlay>
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
        data-xt-overlay-element
        data-xt-group="group0"
      >
        overlay 0
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
        data-xt-overlay-element
        data-xt-group="group1"
      >
        overlay 1
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
        data-xt-overlay-element
        data-xt-group="group2"
      >
        overlay 2
      </button>

      <div class="xt-overlay" data-xt-overlay-target data-xt-group="group0">
        <div class="xt-backdrop bg-black opacity-25"></div>
        <div class="xt-overlay-container max-w-3xl">
          <div class="xt-overlay-inner">
            <div class="xt-card ${classes.cardRadius()} shadow-overlay ${classes.cardWhite()}">
              <button
                type="button"
                class="xt-button xt-dismiss absolute z-above top-0 right-0 p-5 text-2xl"
                aria-label="Close"
              >
                ${classes.iconX()}
              </button>
              <div class="${classes.cardMd()}">
                <div class="xt-h4">Overlay 0</div>
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
                <div class="xt-list xt-list-3 items-center">
                  <button
                    type="button"
                    class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
                    data-xt-overlay-element
                    data-xt-group="group0"
                  >
                    overlay 0
                  </button>

                  <button
                    type="button"
                    class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
                    data-xt-overlay-element
                    data-xt-group="group1"
                  >
                    overlay 1
                  </button>

                  <button
                    type="button"
                    class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
                    data-xt-overlay-element
                    data-xt-group="group2"
                  >
                    overlay 2
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="xt-overlay" data-xt-overlay-target data-xt-group="group1">
        <div class="xt-backdrop bg-black opacity-25"></div>
        <div class="xt-overlay-container max-w-3xl">
          <div class="xt-overlay-inner">
            <div class="xt-card ${classes.cardRadius()} shadow-overlay ${classes.cardWhite()}">
              <button
                type="button"
                class="xt-button xt-dismiss absolute z-above top-0 right-0 p-5 text-2xl"
                aria-label="Close"
              >
                ${classes.iconX()}
              </button>
              <div class="${classes.cardMd()}">
                <div class="xt-h4">Overlay 1</div>
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
                <div class="xt-list xt-list-3 items-center">
                  <button
                    type="button"
                    class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
                    data-xt-overlay-element
                    data-xt-group="group0"
                  >
                    overlay 0
                  </button>

                  <button
                    type="button"
                    class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
                    data-xt-overlay-element
                    data-xt-group="group1"
                  >
                    overlay 1
                  </button>

                  <button
                    type="button"
                    class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
                    data-xt-overlay-element
                    data-xt-group="group2"
                  >
                    overlay 2
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="xt-overlay" data-xt-overlay-target data-xt-group="group2">
        <div class="xt-backdrop bg-black opacity-25"></div>
        <div class="xt-overlay-container max-w-3xl">
          <div class="xt-overlay-inner">
            <div class="xt-card ${classes.cardRadius()} shadow-overlay ${classes.cardWhite()}">
              <button
                type="button"
                class="xt-button xt-dismiss absolute z-above top-0 right-0 p-5 text-2xl"
                aria-label="Close"
              >
                ${classes.iconX()}
              </button>
              <div class="${classes.cardMd()}">
                <div class="xt-h4">Overlay 2</div>
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
                <div class="xt-list xt-list-3 items-center">
                  <button
                    type="button"
                    class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
                    data-xt-overlay-element
                    data-xt-group="group0"
                  >
                    overlay 0
                  </button>

                  <button
                    type="button"
                    class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
                    data-xt-overlay-element
                    data-xt-group="group1"
                  >
                    overlay 1
                  </button>

                  <button
                    type="button"
                    class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
                    data-xt-overlay-element
                    data-xt-group="group2"
                  >
                    overlay 2
                  </button>
                </div>
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
