const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <nav class="xt-list xt-list-1 flex-col">
      <a
        href="#"
        class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.buttonTextAnim()}">
        <div class="xt-list xt-list-3 flex-auto items-center justify-start text-left flex-nowrap">
          <div class="p-2 bg-primary-100 rounded${classes.groupButtonRadius()} ${classes.textInverse()}">
            ${classes.iconMail({ classes: 'xt-icon text-2xl text-primary-500' })}
          </div>
          <div>
            <div class="font-medium">Email Us</div>
            <div class="text-xs opacity-50">We&apos;ll respond within 24 hours.</div>
          </div>
        </div>
      </a>
      <a
        href="#"
        class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.buttonTextAnim()}">
        <div class="xt-list xt-list-3 flex-auto items-center justify-start text-left flex-nowrap">
          <div class="p-2 bg-primary-100 rounded${classes.groupButtonRadius()} ${classes.textInverse()}">
            ${classes.iconPhone({ classes: 'xt-icon text-2xl text-primary-500' })}
          </div>
          <div>
            <div class="font-medium">Phone</div>
            <div class="text-xs opacity-50">Contact us on 24/7 support line.</div>
          </div>
        </div>
      </a>
      <a
        href="#"
        class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.buttonTextAnim()}">
        <div class="xt-list xt-list-3 flex-auto items-center justify-start text-left flex-nowrap">
          <div class="p-2 bg-primary-100 rounded${classes.groupButtonRadius()} ${classes.textInverse()}">
            ${classes.iconUsers({ classes: 'xt-icon text-2xl text-primary-500' })}
          </div>
          <div>
            <div class="font-medium">Support</div>
            <div class="text-xs opacity-50">Open a ticket on our support site.</div>
          </div>
        </div>
      </a>
    </nav>
  </div>
`

export const object = {
  html: html,
}
