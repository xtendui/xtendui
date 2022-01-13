const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <div data-xt-drop="{ duration: 500 }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          data-xt-drop-element>
          Group
        </button>

        <div class="xt-drop p-3 group" data-xt-drop-target>
          <div class="*** relative ***">
            <div
              class="*** xt-design *** rounded${classes.dropRadius()} ${classes.dropShadow()} bg-white *** transition opacity-0 -translate-x-4 group-in:opacity-100 group-in:translate-x-0 group-out:translate-x-4 ***"></div>
            <div class="xt-card w-64 transition opacity-0 group-in:opacity-100">
              <nav aria-label="Drop" class="xt-list flex-col ${classes.groupMd()}">
                <a
                  href="/"
                  class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${classes.buttonTextAnim()}">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </a>
                <button
                  type="button"
                  class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${classes.buttonTextAnim()}">
                  Dolor sit
                </button>
                <button
                  type="button"
                  class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${classes.buttonTextAnim()}">
                  Amet
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div data-xt-drop="{ duration: 500 }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          data-xt-drop-element>
          Card
        </button>

        <div class="xt-drop p-3 group" data-xt-drop-target>
          <div class="*** relative ***">
            <div
              class="*** xt-design *** rounded${classes.dropRadius()} ${classes.dropShadow()} bg-white *** transition opacity-0 -translate-x-4 group-in:opacity-100 group-in:translate-x-0 group-out:translate-x-4 ***"></div>
            <div class="xt-card w-80 transition opacity-0 group-in:opacity-100">
              <button type="button" class="xt-button xt-dismiss absolute top-0 right-0 p-5 text-xl" aria-label="Close">
                ${classes.iconX()}
              </button>
              <div class="${classes.cardMd()}">
                <div class="xt-h4">Lorem ipsum</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.
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
