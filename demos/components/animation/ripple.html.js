const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--ripple">
    <form class="text-sm mb-4">
      <label class="${classes.checkLabel()}">
        <input type="checkbox" class="xt-check xt-checkbox rounded-md ${classes.checkDefault()}" />
        <span class="${classes.checkContent()}">No <code>sizeInitial</code> and no <code>onlyInside</code></span>
      </label>
    </form>

    <div class="${classes.hBlock()} rounded-md text-black bg-gray-200 text-center">Button</div>

    <div class="xt-list xt-list-2 items-center">
      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">Gray</button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
        Primary
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md text-black ${classes.buttonText()}">
        Text
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md xt-link">Link</button>
    </div>

    <div class="${classes.hBlock()} rounded-md text-black bg-gray-200 text-center">Card</div>

    <div class="xt-row xt-row-6">
      <div class="w-full md:w-6/12">
        <button type="button" class="xt-card rounded-md ${classes.cardDefaultInteractive()}">
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
        <button type="button" class="xt-card rounded-md ${classes.cardPrimaryInteractive()}">
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
        <div class="xt-card rounded-md ${classes.cardDefault()}">
          <div class="${classes.cardMd()}">
            <div class="xt-h4">Default</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
            <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
              Gray
            </button>
          </div>
        </div>
      </div>

      <div class="w-full md:w-6/12">
        <div class="xt-card rounded-md ${classes.cardPrimary()}">
          <div class="${classes.cardMd()}">
            <div class="xt-h4">Primary</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
            <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
              Primary
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
