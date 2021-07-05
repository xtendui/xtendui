const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <div data-xt-drop>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
          data-xt-drop-element
        >
          separator
        </button>

        <div class="xt-drop off:hidden out:pointer-events-none p-4" data-xt-drop-target>
          <div class="xt-card w-screen max-w-2xl ${classes.cardRadius()} shadow-drop ${classes.cardWhite()}">
            <div class="md:xt-card-group">
              <div class="${classes.cardMd()} md:w-7/12">
                <div class="xt-h4">Lorem ipsum</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis.
                </p>
              </div>
              <div class="md:w-5/12 *** border-t md:border-t-0 md:border-l border-solid border-gray-400 ***">
                <div class="${classes.cardSm()}">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat
                    turpis.
                  </p>
                </div>
                <div class="${classes.cardMd()} *** border-t border-solid border-gray-400 ***">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat
                    turpis.
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
