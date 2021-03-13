const moduleParents = Object.values(require.cache).filter(m => m.children && m.children.includes(module))
let resolve
if (moduleParents.length) {
  resolve = moduleParents[0].resolve
}

const classes = resolve
  ? require(`${resolve}components/snippets/classes`).classes
  : require('components/snippets/classes').classes

const html = /* HTML */ `
  <div id="ref--">
    <div class="site-wrapper">
      <header class="site-header">
        <div class="xt-card ${classes.cardSm()} ${classes.cardPrimary()}">
          <div class="xt-h4">Header</div>
        </div>
      </header>

      <main class="site-main">
        <div class="xt-card ${classes.cardSm()} ${classes.cardDefault()}">
          <div class="xt-h4">Main</div>
          <p>
            <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
            velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
            vitae magna eget, vehicula scelerisque elit.
          </p>
        </div>
      </main>

      <footer class="site-footer">
        <div class="xt-card ${classes.cardSm()} ${classes.cardPrimary()}">
          <div class="xt-h4">Footer</div>
        </div>
      </footer>
    </div>
  </div>
`

export const object = {
  html: html,
}
