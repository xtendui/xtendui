const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-row xt-row-6">
      <div class="w-full md:w-6/12">
        <div class="*** xt-card rounded${classes.dropCardRadius()} ${classes.cardDefault()} ***">
          <div class="xt-media-container bg-gray-300 rounded-t${classes.dropCardRadius()} pb-[37.5%]">
            <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
          </div>
          <div class="*** ${classes.cardSm()} border-b border-gray-300 ***">
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.</p>
          </div>
        </div>
        <form class="text-sm">
          <div class="xt-list flex-col">
            <div class="inline-flex">
              <button type="button" class="xt-button ${classes.buttonMd()} ${classes.buttonDefault()}">
                ${classes.iconSearch({ classes: 'text-xl -my-1' })}
              </button>
              <input
                type="text"
                class="${classes.input()} ${classes.inputDefault()}"
                aria-label="Search"
                placeholder="Seach Catalog"
              />
            </div>

            <button
              type="button"
              class="xt-button ${classes.buttonMd()} rounded-b${classes.groupRadius()} ${classes.buttonPrimary()}"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <div class="w-full md:w-6/12">
        <div class="*** xt-card rounded${classes.dropCardRadius()} ${classes.cardPrimary()} ***">
          <div class="xt-media-container bg-gray-300 rounded-t${classes.dropCardRadius()} pb-[37.5%]">
            <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
          </div>
          <div class="*** ${classes.cardSm()} border-b border-primary-300 ***">
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.</p>
          </div>
          <form class="text-sm">
            <div class="xt-list flex-col">
              <div class="inline-flex">
                <button type="button" class="xt-button ${classes.buttonMd()} ${classes.buttonDefault()}">
                  ${classes.iconSearch({ classes: 'text-xl -my-1' })}
                </button>
                <input
                  type="text"
                  class="${classes.input()} ${classes.inputDefault()}"
                  aria-label="Search"
                  placeholder="Seach Catalog"
                />
              </div>

              <button
                type="button"
                class="xt-button ${classes.buttonMd()} rounded-b${classes.groupRadius()} ${classes.buttonPrimary()}"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
