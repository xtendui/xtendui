const classes = require('src/gatsby/templates/snippets/classes').classes

const buttonGray = () => `${classes.buttonGray()} ${classes.buttonGrayAnim()}`
const buttonPrimary = () => `${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}`
const buttonText = () => `${classes.buttonTextAnim()}`

const html = /* HTML */ `
  <div class="demo--ripple-animation-v1">
    <div class="${classes.hBlock()}">Button</div>

    <div class="xt-list xt-list-2 items-center">
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${buttonGray()}">
        Gray
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${buttonPrimary()}">
        Primary
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${buttonText()}">
        Text
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} xt-link">
        Link
      </button>
    </div>

    <div class="${classes.hBlock()}">Card</div>

    <div class="xt-row xt-row-6">
      <div class="w-full md:w-6/12">
        <button
          type="button"
          class="xt-card justify-start text-left rounded${classes.cardRadius()} ${classes.textDefault()} ${classes.cardGray()} ${classes.cardGrayInteractive()}">
          <div class="${classes.cardMd()}">
            <div class="xt-h4">Default</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu
              tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae
              magna eget, vehicula scelerisque elit.
            </p>
          </div>
        </button>
      </div>

      <div class="w-full md:w-6/12">
        <button
          type="button"
          class="xt-card justify-start text-left rounded${classes.cardRadius()} ${classes.textInverse()} ${classes.cardPrimary()} ${classes.cardPrimaryInteractive()}">
          <div class="${classes.cardMd()}">
            <div class="xt-h4">Primary</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu
              tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae
              magna eget, vehicula scelerisque elit.
            </p>
          </div>
        </button>
      </div>

      <div class="w-full md:w-6/12">
        <div class="xt-card rounded${classes.cardRadius()} ${classes.textDefault()} ${classes.cardGray()}">
          <div class="${classes.cardMd()}">
            <div class="xt-h4">Default</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
            <button
              type="button"
              class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${buttonPrimary()}">
              Button
            </button>
          </div>
        </div>
      </div>

      <div class="w-full md:w-6/12">
        <div class="xt-card rounded${classes.cardRadius()} ${classes.textInverse()} ${classes.cardPrimary()}">
          <div class="${classes.cardMd()}">
            <div class="xt-h4">Primary</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
            <button
              type="button"
              class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${buttonGray()}">
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
  container: true,
}
