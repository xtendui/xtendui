const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <nav class="xt-list *** xt-list-px *** flex-col">
      <div>
        <div class="xt-list *** xt-list-px ***">
          <div>
            <div class="xt-list *** xt-list-px *** flex-col">
              <button
                type="button"
                class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
              >
                Lorem Ipsum
              </button>

              <button
                type="button"
                class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
              >
                Dolor sit
              </button>

              <button
                type="button"
                class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
              >
                Amet
              </button>
            </div>
          </div>

          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
          >
            Dolor sit
          </button>

          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
          >
            Amet
          </button>
        </div>
      </div>

      <div>
        <div class="xt-list *** xt-list-px ***">
          <button
            type="button"
            class="xt-button *** flex-auto *** ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
          >
            Lorem Ipsum
          </button>

          <button
            type="button"
            class="xt-button *** flex-auto *** ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
          >
            Dolor sit
          </button>

          <button
            type="button"
            class="xt-button *** flex-auto *** ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
          >
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
