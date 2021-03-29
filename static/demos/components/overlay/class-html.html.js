const classes = require('src/gatsby/components/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--overlay-class-html">
    <div class="xt-list xt-list-3 items-center justify-center">
      <div data-xt-overlay="{ classHtml: 'xt-scrollbar-overlay classhtml-custom' }">
        <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
          class html
        </button>

        <div class="xt-overlay group" data-xt-duration="500">
          <div class="xt-backdrop bg-black transition ease-out duration-500 opacity-0 group-active:opacity-25"></div>
          <div class="xt-overlay-container p-0 w-screen max-w-md ml-0 mr-auto">
            <div
              class="xt-overlay-inner transform transition ease-out duration-500 opacity-0 translate-y-4 group-active:opacity-100 group-active:translate-y-0"
            >
              <div class="xt-card xt-min-h-screen shadow-overlay ${classes.cardWhite()}">
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

                  <div data-xt-overlay>
                    <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
                      Overlay
                    </button>

                    <div class="xt-overlay">
                      <div class="xt-backdrop bg-black opacity-25"></div>
                      <div class="xt-overlay-container max-w-3xl">
                        <div class="xt-overlay-inner">
                          <div class="xt-card rounded-md shadow-overlay ${classes.cardWhite()}">
                            <button
                              type="button"
                              class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-xl"
                              aria-label="Close"
                            >
                              ${classes.iconX()}
                            </button>
                            <div class="${classes.cardMd()}">
                              <div class="xt-h4">Lorem ipsum</div>
                              <p>
                                <strong>Lorem ipsum</strong> dolor sit amet,
                                <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis,
                                dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae
                                magna eget, vehicula scelerisque elit.
                              </p>
                              <p>
                                Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin
                                dui sem id justo.
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare
                                volutpat, ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.
                              </p>
                              <p>
                                Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin
                                dui sem id justo.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
