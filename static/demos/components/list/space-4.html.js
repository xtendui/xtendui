const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <nav class="xt-list *** xt-list-4 *** flex-col">
      <div>
        <div class="xt-list *** xt-list-4 ***">
          <div>
            <div class="xt-list *** xt-list-4 *** flex-col">
              <button
                type="button"
                class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonDefault()}"
              >
                Lorem Ipsum
              </button>

              <button
                type="button"
                class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonDefault()}"
              >
                Dolor sit
              </button>

              <button
                type="button"
                class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonDefault()}"
              >
                Amet
              </button>
            </div>
          </div>

          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonDefault()}"
          >
            Dolor sit
          </button>

          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonDefault()}"
          >
            Amet
          </button>
        </div>
      </div>

      <div>
        <div class="xt-list *** xt-list-4 ***">
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonDefault()}"
          >
            Lorem Ipsum
          </button>

          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonDefault()}"
          >
            Dolor sit
          </button>

          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonDefault()}"
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
