const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="min-h-[200px]"></div>
    <div class="*** xt-toast-container top-4 right-4 xt-list xt-list-4 flex-col ***" data-xt-toast>
      <div class="*** xt-toast ***" data-xt-toast-element>
        <div
          class="xt-card rounded${classes.toastRadius()} ${classes.toastShadow()} ${classes.textDefault()} ${classes.toastText()} ${classes.cardWhite()} ${classes.toastMd()}">
          Lorem ipsum dolor sit amet
        </div>
      </div>

      <div class="*** xt-toast ***" data-xt-toast-element>
        <div
          class="xt-card rounded${classes.toastRadius()} ${classes.toastShadow()} ${classes.textDefault()} ${classes.toastText()} ${classes.cardWhite()} ${classes.toastMd()}">
          <button type="button" class="xt-button xt-dismiss absolute top-0 right-0 p-5 text-xl" aria-label="Close">
            ${classes.iconX()}
          </button>
          Lorem ipsum dolor sit amet
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
