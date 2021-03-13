const moduleParents = Object.values(require.cache).filter(m => m.children.includes(module))
let resolve
if (moduleParents.length) {
  resolve = moduleParents[0].resolve
}

const classes = resolve
  ? require(`${resolve}components/snippets/classes`).classes
  : require('components/snippets/classes').classes

const html = /* HTML */ `
  <div id="ref--">
    <div class="xt-list xt-list-3 items-center justify-center">
      <div data-xt-overlay>
        <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
          left
        </button>

        <div class="xt-overlay">
          <div class="xt-backdrop bg-black opacity-25"></div>
          <div
            class="demo--overlay-messageoutside fixed h-full right-0 hidden md:flex items-center justify-center pointer-events-none"
          >
            <div class="w-10/12 lg:w-8/12">
              <div class="xt-card rounded-md ${classes.cardDefault()} pointer-events-auto">
                <div class="${classes.cardMd()}">
                  <div class="xt-h4">Lorem ipsum</div>
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="xt-overlay-container p-0 w-screen max-w-md ml-0 mr-auto">
            <div class="xt-overlay-inner">
              <div class="xt-card xt-min-h-screen shadow-overlay ${classes.cardWhite()}">
                <button
                  type="button"
                  class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl"
                  aria-label="Close"
                >
                  ${classes.iconX()}
                </button>
                <div class="${classes.cardMd()}">
                  <div class="xt-h3">Lorem ipsum</div>
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

      <div data-xt-overlay>
        <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
          right
        </button>

        <div class="xt-overlay">
          <div class="xt-backdrop bg-black opacity-25"></div>
          <div
            class="demo--overlay-messageoutside fixed h-full left-0 hidden md:flex items-center justify-center pointer-events-none"
          >
            <div class="w-10/12 lg:w-8/12">
              <div class="xt-card rounded-md ${classes.cardDefault()} pointer-events-auto">
                <div class="${classes.cardMd()}">
                  <div class="xt-h4">Lorem ipsum</div>
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="xt-overlay-container p-0 w-screen max-w-md ml-auto mr-0">
            <div class="xt-overlay-inner">
              <div class="xt-card xt-min-h-screen shadow-overlay ${classes.cardWhite()}">
                <button
                  type="button"
                  class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl"
                  aria-label="Close"
                >
                  ${classes.iconX()}
                </button>
                <div class="${classes.cardLg()}">
                  <div class="xt-h3">Lorem ipsum</div>
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
  </div>
`

export const object = {
  html: html,
}
