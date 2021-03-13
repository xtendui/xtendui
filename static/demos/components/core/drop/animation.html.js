const classes = require('src/gatsby/components/snippets/classes').classes

const html = `
  <div id="ref--">
    <div class="xt-list xt-list-3 items-center">
      <div data-xt-drop>
        <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
          list
        </button>

        <div class="xt-drop p-4 group" data-xt-duration="500">
          <div
            class="xt-card w-64 py-3.5 rounded-md shadow-drop ${classes.cardWhite()} transform transition ease-out duration-500 opacity-0 -translate-x-4 group-active:opacity-100 group-active:translate-x-0"
          >
            <nav class="xt-list flex-col">
              <a href="#" class="xt-button text-2xs py-1.5 px-6 ${classes.buttonDefaultDrop()}">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </a>
              <button type="button" class="xt-button text-2xs py-1.5 px-6 ${classes.buttonDefaultDrop()}">
                Dolor sit
              </button>
              <button type="button" class="xt-button text-2xs py-1.5 px-6 ${classes.buttonDefaultDrop()}">Amet</button>
            </nav>
          </div>
        </div>
      </div>

      <div data-xt-drop>
        <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
          card
        </button>

        <div class="xt-drop p-4 group" data-xt-duration="500">
          <div
            class="xt-card w-80 rounded-md shadow-drop ${classes.cardWhite()} transform transition ease-out duration-500 opacity-0 -translate-x-4 group-active:opacity-100 group-active:translate-x-0"
          >
            <button type="button" class="xt-button xt-dismiss absolute top-0 right-0 p-5 text-xl" aria-label="Close">
              ${classes.iconX()}
            </button>
            <div class="${classes.cardMd()}">
              <div class="xt-h4">Lorem ipsum</div>
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
`

export const object = {
  html: html,
}
