const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="relative py-4 px-6 bg-primary-500">
      <div class="xt-list xt-list-3 items-center" data-xt-drop>
        <div data-xt-drop-element>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          >
            Drop
          </button>

          <div class="xt-drop *** xt-drop-static ***" data-xt-drop-target>
            <div class="xt-card w-full shadow-drop ${classes.textBlack()} ${classes.cardGray()}">
              <button type="button" class="xt-button xt-dismiss absolute top-0 right-0 p-5 text-xl" aria-label="Close">
                ${classes.iconX()}
              </button>
              <div class="${classes.cardMd()}">
                <div class="xt-h4">Drop static 0</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div data-xt-drop-element>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          >
            Drop
          </button>

          <div class="xt-drop xt-drop-static" data-xt-drop-target>
            <div class="xt-card w-full shadow-drop ${classes.textBlack()} ${classes.cardGray()}">
              <button type="button" class="xt-button xt-dismiss absolute top-0 right-0 p-5 text-xl" aria-label="Close">
                ${classes.iconX()}
              </button>
              <div class="${classes.cardMd()}">
                <div class="xt-h4">Drop static 1</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div data-xt-drop-element>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          >
            Drop
          </button>

          <div class="xt-drop xt-drop-static" data-xt-drop-target>
            <div class="xt-card w-full shadow-drop ${classes.textBlack()} ${classes.cardGray()}">
              <button type="button" class="xt-button xt-dismiss absolute top-0 right-0 p-5 text-xl" aria-label="Close">
                ${classes.iconX()}
              </button>
              <div class="${classes.cardMd()}">
                <div class="xt-h4">Drop static 2</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
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
