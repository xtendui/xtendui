const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="hero relative overflow-hidden">
      <div class="xt-media-container bg-gray-200 w-full h-96">
        <img class="xt-media object-cover" src="/img-alt.svg" loading="lazy" alt="" />
      </div>
      <div class="flex relative">
        <a href="#" class="relative px-8 py-16 md:px-24 lg:py-20 xl:py-24 mx-auto max-w-2xl text-center group">
          <h2 class="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">Lorem ipsum</h2>
          <h3 class="xt-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.
          </h3>
          <div
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}">
            Lorem ipsum
          </div>
        </a>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
