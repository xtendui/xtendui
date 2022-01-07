const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <form class="text-sm">
      <fieldset class="*** my-8 xt-my-auto ***">
        <div class="xt-row xt-row-x-6 xt-row-y-4">
          <div class="w-full">
            <legend class="*** text-2xl font-bold leading-snug ***">Legend #1</legend>
          </div>

          <div class="w-full md:w-6/12">
            <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Lorem Ipsum </label>
            <input
              type="text"
              class="${classes.input()} ${classes.inputRadius()} ${classes.inputGray()}"
              aria-label="Lorem ipsum" />
            <div class="*** mt-3 ${classes.note()} ***">
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </div>
          </div>

          <div class="w-full md:w-6/12">
            <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Dolor sit amet </label>
            <input
              type="text"
              class="${classes.input()} ${classes.inputRadius()} ${classes.inputGray()}"
              aria-label="Dolor sit amet" />
          </div>

          <div class="w-full">
            <div class="xt-row xt-row-x-6 xt-row-y-4">
              <div class="w-full md:w-auto">
                <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Lorem ipsum </label>
                <input
                  type="text"
                  class="${classes.input()} ${classes.inputRadius()} ${classes.inputGray()}"
                  aria-label="Lorem ipsum" />
              </div>

              <div class="w-full md:w-auto">
                <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Dolor sit amet </label>
                <input
                  type="text"
                  class="${classes.input()} ${classes.inputRadius()} ${classes.inputGray()}"
                  aria-label="Dolor sit amet" />
              </div>
            </div>

            <div class="*** mt-3 ${classes.note()} ***">
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </div>
          </div>
        </div>
      </fieldset>

      <fieldset class="*** my-8 xt-my-auto ***">
        <div class="xt-row xt-row-x-6 xt-row-y-4">
          <div class="w-full">
            <legend class="*** text-2xl font-bold leading-snug ***">Legend #2</legend>
          </div>

          <div class="w-full">
            <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Checkbox </label>

            <div class="xt-row xt-row-x-8 xt-row-y-2">
              <div class="w-full">
                <label class="${classes.checkLabel()}">
                  <input
                    type="checkbox"
                    role="group"
                    aria-label="Lorem ipsum"
                    class="xt-check xt-checkbox ${classes.checkRadius()} ${classes.checkGray()}"
                    checked />
                  <span class="${classes.checkContent()}"
                    ><strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                  >
                </label>
              </div>

              <div class="w-full">
                <label class="${classes.checkLabel()}">
                  <input
                    type="checkbox"
                    role="group"
                    aria-label="Lorem ipsum"
                    class="xt-check xt-checkbox ${classes.checkRadius()} ${classes.checkGray()}" />
                  <span class="${classes.checkContent()}"
                    ><strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                  >
                </label>
                <div class="*** mt-3 ${classes.note()} ***">
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.
                </div>
              </div>
            </div>
          </div>

          <div class="w-full">
            <div class="xt-row xt-row-x-6 xt-row-y-4">
              <div class="w-full md:w-2/12 md:self-baseline">
                <label class="${classes.label()} ${classes.labelGray()}"> Checkbox </label>
              </div>

              <div class="w-full md:w-10/12">
                <div class="xt-row xt-row-x-8 xt-row-y-2">
                  <div class="w-full">
                    <label class="${classes.checkLabel()}">
                      <input
                        type="checkbox"
                        role="group"
                        aria-label="Lorem ipsum"
                        class="xt-check xt-checkbox ${classes.checkRadius()} ${classes.checkGray()}"
                        checked />
                      <span class="${classes.checkContent()}"
                        ><strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit.
                        Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam.
                        Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                      >
                    </label>
                  </div>

                  <div class="w-full">
                    <label class="${classes.checkLabel()}">
                      <input
                        type="checkbox"
                        role="group"
                        aria-label="Lorem ipsum"
                        class="xt-check xt-checkbox ${classes.checkRadius()} ${classes.checkGray()}"
                        checked />
                      <span class="${classes.checkContent()}"
                        ><strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit.
                        Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam.
                        Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                      >
                    </label>
                    <div class="*** mt-3 ${classes.note()} ***">
                      <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                      suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed
                      mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full">
            <legend class="*** text-2xl font-bold leading-snug ***">Legend #3</legend>
          </div>

          <div class="w-full">
            <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Checkbox </label>

            <div class="xt-row xt-row-x-8 xt-row-y-2">
              <div class="w-full md:w-auto">
                <label class="${classes.checkLabel()}">
                  <input
                    type="checkbox"
                    role="group"
                    aria-label="Lorem ipsum"
                    class="xt-check xt-checkbox ${classes.checkRadius()} ${classes.checkGray()}"
                    checked />
                  <span class="${classes.checkContent()}">Lorem ipsum</span>
                </label>
              </div>

              <div class="w-full md:w-auto">
                <label class="${classes.checkLabel()}">
                  <input
                    type="checkbox"
                    role="group"
                    aria-label="Lorem ipsum"
                    class="xt-check xt-checkbox ${classes.checkRadius()} ${classes.checkGray()}" />
                  <span class="${classes.checkContent()}">Lorem ipsum</span>
                </label>
              </div>
            </div>

            <div class="*** mt-3 ${classes.note()} ***">
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </div>
          </div>

          <div class="w-full">
            <button
              type="submit"
              class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}">
              submit
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
`

export const object = {
  html: html,
}
