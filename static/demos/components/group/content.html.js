const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-row xt-row-6">
      <div class="w-full md:w-6/12">
        <div class="*** xt-card rounded${classes.cardRadius()} ${classes.cardDefault()} ***">
          <div class="xt-media-container bg-gray-300 rounded-t${classes.cardRadius()} pb-[37.5%]">
            <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
          </div>
          <div class="*** ${classes.cardSm()} border-t border-gray-300 ***">
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.</p>
          </div>
        </div>
        <form class="text-sm">
          <div class="xt-list flex-col">
            <div
              class="inline-flex *** border-t border-b border-gray-300 ***"
              data-xt-tooltip="{ on: 'focus', off: 'blur' }"
            >
              <button type="submit" class="xt-button ${classes.buttonMd()} ${classes.buttonDefault()}">
                ${classes.iconSearch({ classes: 'text-xl -my-1' })}
              </button>
              <input
                type="text"
                class="${classes.input()} ${classes.inputDefault()}"
                aria-label="Search"
                placeholder="Seach Catalog"
                data-xt-tooltip-element
              />
              <div class="*** xt-tooltip *** p-2" data-xt-tooltip-target>
                <div
                  class="relative ${classes.tooltipMd()} rounded${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}"
                >
                  Lorem ipsum dolor sit amet
                </div>
              </div>
            </div>

            <a
              href="#"
              class="xt-button *** w-full *** ${classes.buttonMd()} rounded-b${classes.groupButtonRadius()} ${classes.buttonDefault()}"
            >
              Search
            </a>
          </div>
        </form>
      </div>

      <div class="w-full md:w-6/12">
        <div class="*** xt-card rounded${classes.cardRadius()} ${classes.cardPrimary()} ***">
          <div class="xt-media-container bg-gray-300 rounded-t${classes.cardRadius()} pb-[37.5%]">
            <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
          </div>
          <div class="*** ${classes.cardSm()} border-t border-primary-300 ***">
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.</p>
          </div>
          <form class="text-sm">
            <div class="xt-list flex-col">
              <div
                class="inline-flex *** border-t border-b border-primary-300 ***"
                data-xt-tooltip="{ on: 'focus', off: 'blur' }"
              >
                <button type="submit" class="xt-button ${classes.buttonMd()} ${classes.buttonPrimary()}">
                  ${classes.iconSearch({ classes: 'text-xl -my-1' })}
                </button>
                <input
                  type="text"
                  class="${classes.input()} ${classes.inputPrimary()}"
                  aria-label="Search"
                  placeholder="Seach Catalog"
                  data-xt-tooltip-element
                />
                <div class="*** xt-tooltip *** p-2" data-xt-tooltip-target>
                  <div
                    class="relative ${classes.tooltipMd()} rounded${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}"
                  >
                    Lorem ipsum dolor sit amet
                  </div>
                </div>
              </div>

              <a
                href="#"
                class="xt-button *** w-full *** ${classes.buttonMd()} rounded-b${classes.groupButtonRadius()} ${classes.buttonPrimary()}"
              >
                Search
              </a>
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
