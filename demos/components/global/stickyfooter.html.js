const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--stickyfooter">
    <div class="*** flex flex-col min-h-screen ***">
      <header>
        <div class="xt-card ${classes.cardSm()} ${classes.textInverse()} ${classes.cardPrimary()}">
          <div class="xt-h4">Header</div>
        </div>
      </header>

      <main class="*** flex flex-col flex-auto ***">
        <div class="xt-card ${classes.cardSm()} ${classes.textDefault()} ${classes.cardGray()}">
          <div class="xt-h4">Main</div>
          <p>
            <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
            velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
            vitae magna eget, vehicula scelerisque elit.
          </p>
        </div>
      </main>

      <footer>
        <div class="xt-card ${classes.cardSm()} ${classes.textInverse()} ${classes.cardPrimary()}">
          <div class="xt-h4">Footer</div>
        </div>
      </footer>
    </div>
  </div>
`

export const object = {
  html: html,
}
