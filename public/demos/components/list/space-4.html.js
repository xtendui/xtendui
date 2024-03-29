const classes = require('src/app/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <nav aria-label="Navigation" class="xt-list *** xt-list-4 *** flex-col">
      <div>
        <div class="xt-list *** xt-list-4 ***">
          <div>
            <div class="xt-list *** xt-list-4 *** flex-col">
              <button
                type="button"
                class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}">
                Lorem Ipsum
              </button>

              <button
                type="button"
                class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}">
                Dolor sit
              </button>

              <button
                type="button"
                class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}">
                Amet
              </button>
            </div>
          </div>

          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}">
            Dolor sit
          </button>

          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}">
            Amet
          </button>
        </div>
      </div>

      <div>
        <div class="xt-list *** xt-list-4 ***">
          <button
            type="button"
            class="xt-button *** flex-auto *** ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}">
            Lorem Ipsum
          </button>

          <button
            type="button"
            class="xt-button *** flex-auto *** ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}">
            Dolor sit
          </button>

          <button
            type="button"
            class="xt-button *** flex-auto *** ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}">
            Amet
          </button>
        </div>
      </div>
    </nav>
  </div>
`

export const object = {
  html: html,
}
