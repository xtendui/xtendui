const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--scrollto">
    <!-- sticky for demo purpose remove this -->
    <div class="xt-sticky">
      <div class="xt-card ${classes.cardSm()} ${classes.textInverse()} ${classes.cardPrimary()}">
        <div class="xt-list xt-list-3">
          <a
            href="#anchor-0"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}">
            #0
          </a>
          <a
            href="#anchor-1"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}">
            #1
          </a>
          <button
            type="button"
            class="xt-button button--custom ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}">
            custom
          </button>
          <a
            href="#anchor-2"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}">
            #2
          </a>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="xt-card ${classes.cardSm()} ${classes.textDefault()} ${classes.cardGray()}" id="anchor-0">
        <div class="xt-h4">Lorem ipsum dolor sit amet</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut
          fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas
          congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque
          hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat,
          libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.
        </p>
        <div class="xt-list xt-list-3">
          <a
            href="#anchor-0"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}">
            #0
          </a>
          <a
            href="#anchor-1"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}">
            #1
          </a>
          <button
            type="button"
            class="xt-button button--custom ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}">
            custom
          </button>
          <a
            href="#anchor-2"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}">
            #2
          </a>
        </div>
      </div>

      <br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br />

      <div class="xt-card ${classes.cardSm()} ${classes.textDefault()} ${classes.cardGray()}" id="anchor-1">
        <div class="xt-h4">Lorem ipsum dolor sit amet</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut
          fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas
          congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque
          hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat,
          libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.
        </p>
        <div class="xt-list xt-list-3">
          <a
            href="#anchor-0"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}">
            #0
          </a>
          <a
            href="#anchor-1"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}">
            #1
          </a>
          <button
            type="button"
            class="xt-button button--custom ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}">
            custom
          </button>
          <a
            href="#anchor-2"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}">
            #2
          </a>
        </div>
      </div>

      <br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br />

      <div class="xt-card ${classes.cardSm()} ${classes.textDefault()} ${classes.cardGray()}" id="anchor-custom">
        <div class="xt-h4">Lorem ipsum dolor sit amet</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut
          fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas
          congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque
          hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat,
          libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.
        </p>
      </div>

      <br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br />

      <div class="xt-card ${classes.cardSm()} ${classes.textDefault()} ${classes.cardGray()}" id="anchor-2">
        <div class="xt-h4">Lorem ipsum dolor sit amet</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut
          fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas
          congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque
          hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat,
          libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.
        </p>
        <div class="xt-list xt-list-3">
          <a
            href="#anchor-0"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}">
            #0
          </a>
          <a
            href="#anchor-1"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}">
            #1
          </a>
          <button
            type="button"
            class="xt-button button--custom ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}">
            custom
          </button>
          <a
            href="#anchor-2"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}">
            #2
          </a>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
