const classes = require('src/gatsby/components/snippets/classes').classes

const html = /* HTML */ `
  <div class="CCC--">
    <div class="demo--drop-disable" data-xt-drop="{ matches: { '(min-width: 768px)': { disabled: true } } }">
      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">drop</button>

      <div class="xt-drop p-4">
        <div class="xt-card w-64 py-3.5 rounded-md shadow-drop ${classes.cardWhite()}">
          <nav class="xt-list flex-col">
            <a href="#" class="xt-button text-2xs py-1.5 px-6 ${classes.buttonDefaultDrop()}">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </a>
            <button type="button" class="xt-button text-2xs py-1.5 px-6 ${classes.buttonDefaultDrop()}">
              Dolor sit
            </button>
            <div data-xt-drop>
              <button type="button" class="xt-button text-2xs py-1.5 px-6 ${classes.buttonDefaultDrop()}">
                nested
              </button>

              <div class="xt-drop p-4">
                <div class="xt-backdrop bg-black opacity-25"></div>
                <div class="xt-card w-64 py-3.5 rounded-md shadow-drop ${classes.cardPrimary()}">
                  <nav class="xt-list flex-col">
                    <a href="#" class="xt-button text-2xs py-1.5 px-6 ${classes.buttonPrimaryDrop()}">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </a>
                    <button type="button" class="xt-button text-2xs py-1.5 px-6 ${classes.buttonPrimaryDrop()}">
                      Dolor sit
                    </button>
                    <button type="button" class="xt-button text-2xs py-1.5 px-6 ${classes.buttonPrimaryDrop()}">
                      Amet
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
