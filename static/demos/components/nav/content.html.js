const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-row xt-row-6">
      <div class="w-full md:w-6/12">
        <div class="*** xt-card rounded${classes.cardRadius()} ${classes.cardDefault()} ***">
          <div class="xt-media-container bg-gray-300 rounded-t${classes.cardRadius()} pb-[37.5%]">
            <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
          </div>
          <nav class="xt-list flex-col ${classes.groupMd()} *** border-t border-gray-300">
            <a
              href="#"
              class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
            >
              Lorem ipsum dolor sit amet
            </a>
            <a
              href="#"
              type="button"
              class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
            >
              Consectetur adipiscing elit
            </a>
            <a
              href="#"
              type="button"
              class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
            >
              Mauris mattis
            </a>
            <div data-xt-tooltip>
              <div data-xt-drop="{ position: 'bottom' }">
                <div data-xt-drop-element>
                  <button
                    type="button"
                    class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
                    data-xt-tooltip-element
                  >
                    ${classes.iconEdit({ classes: 'xt-icon mr-2' })} Edit
                  </button>

                  <div class="*** xt-tooltip *** p-2" data-xt-tooltip-target>
                    <div
                      class="relative ${classes.tooltipMd()} rounded${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}"
                    >
                      Lorem ipsum dolor sit amet
                    </div>
                  </div>

                  <div class="xt-drop p-3" data-xt-drop-target>
                    <div
                      class="xt-card w-64 rounded${classes.dropCardRadius()} shadow-drop ${classes.dropCardDefault()}"
                    >
                      <nav class="xt-list flex-col ${classes.groupMd()}">
                        <a
                          href="#"
                          class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
                        >
                          ${classes.iconCopy({ classes: 'xt-icon mr-2' })} Copy
                        </a>
                        <a
                          href="#"
                          class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
                        >
                          ${classes.iconCode({ classes: 'xt-icon mr-2' })} Code
                        </a>
                        <a
                          href="#"
                          class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
                        >
                          ${classes.iconMaximize({ classes: 'xt-icon mr-2' })} Full
                        </a>
                      </nav>
                    </div>
                    <div class="xt-arrow -inset-1 m-3 w-3 h-3 bg-gray-100"></div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div class="*** ${classes.cardSm()} rounded-b${classes.cardRadius()} border-t border-gray-300 ***">
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.</p>
          </div>
        </div>
      </div>

      <div class="w-full md:w-6/12">
        <div class="*** xt-card rounded${classes.cardRadius()} ${classes.cardPrimary()} ***">
          <div class="xt-media-container bg-gray-300 rounded-t${classes.cardRadius()} pb-[37.5%]">
            <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
          </div>
          <nav class="xt-list flex-col ${classes.groupMd()} *** border-t border-primary-300 ***">
            <a
              href="#"
              class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonPrimary()}"
            >
              Lorem ipsum dolor sit amet
            </a>
            <a
              href="#"
              type="button"
              class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonPrimary()}"
            >
              Consectetur adipiscing elit
            </a>
            <a
              href="#"
              type="button"
              class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonPrimary()}"
            >
              Mauris mattis
            </a>
            <div data-xt-tooltip>
              <div data-xt-drop="{ position: 'bottom' }">
                <div data-xt-drop-element>
                  <button
                    type="button"
                    class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonPrimary()}"
                    data-xt-tooltip-element
                  >
                    ${classes.iconEdit({ classes: 'xt-icon mr-2' })} Edit
                  </button>

                  <div class="*** xt-tooltip *** p-2" data-xt-tooltip-target>
                    <div
                      class="relative ${classes.tooltipMd()} rounded${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}"
                    >
                      Lorem ipsum dolor sit amet
                    </div>
                  </div>

                  <div class="xt-drop p-3" data-xt-drop-target>
                    <div
                      class="xt-card w-64 rounded${classes.dropCardRadius()} shadow-drop ${classes.dropCardDefault()}"
                    >
                      <nav class="xt-list flex-col ${classes.groupMd()}">
                        <a
                          href="#"
                          class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
                        >
                          ${classes.iconCopy({ classes: 'xt-icon mr-2' })} Copy
                        </a>
                        <a
                          href="#"
                          class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
                        >
                          ${classes.iconCode({ classes: 'xt-icon mr-2' })} Code
                        </a>
                        <a
                          href="#"
                          class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
                        >
                          ${classes.iconMaximize({ classes: 'xt-icon mr-2' })} Full
                        </a>
                      </nav>
                    </div>
                    <div class="xt-arrow -inset-1 m-3 w-3 h-3 bg-gray-100"></div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div class="*** ${classes.cardSm()} rounded-b${classes.cardRadius()} border-t border-primary-300 ***">
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
