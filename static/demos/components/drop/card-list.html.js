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
          list
        </button>

        <div class="xt-drop off:hidden out:pointer-events-none p-4" data-xt-drop-target>
          <div class="xt-card w-96 ${classes.cardRadius()} shadow-drop ${classes.cardWhite()}">
            <div class="${classes.cardMd()}">
              <div class="*** xt-list xt-list-6 md:flex-nowrap items-baseline ***">
                <div>${classes.iconPackage({ classes: 'text-3xl' })}</div>
                <div>
                  <div class="xt-h4">Lorem ipsum</div>
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis.
                  </p>
                </div>
                <div class="self-end justify-self-end">${classes.iconChevronRight({ classes: 'text-3xl' })}</div>
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
