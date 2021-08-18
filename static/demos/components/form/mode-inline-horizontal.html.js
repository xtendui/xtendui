const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <form class="text-sm">
      <div class="xt-row xt-row-x-6 xt-row-y-4">
        <div class="w-full *** md:w-auto ***">
          <div class="xt-row xt-row-x-6 xt-row-y-4">
            <div class="w-full *** md:w-auto *** md:self-center">
              <label class="${classes.label()} whitespace-nowrap ${classes.labelDefault()}"> Lorem ipsum </label>
            </div>

            <div class="w-full *** md:w-auto *** md:self-center">
              <input
                type="text"
                class="${classes.input()} ${classes.inputRadius()} ${classes.inputDefault()}"
                aria-label="Lorem ipsum"
              />
            </div>
          </div>
        </div>

        <div class="w-full *** md:w-auto ***">
          <div class="xt-row xt-row-x-6 xt-row-y-4">
            <div class="w-full *** md:w-auto *** md:self-center">
              <label class="${classes.label()} whitespace-nowrap ${classes.labelDefault()}"> Dolor sit amet </label>
            </div>

            <div class="w-full *** md:w-auto *** md:self-center">
              <input
                type="text"
                class="${classes.input()} ${classes.inputRadius()} ${classes.inputDefault()}"
                aria-label="Dolor sit amet"
              />
            </div>
          </div>
        </div>

        <div class="w-full *** md:w-auto ***">
          <div class="xt-row xt-row-x-6 xt-row-y-4">
            <div class="w-full *** md:w-auto *** md:self-center">
              <label class="${classes.label()} whitespace-nowrap ${classes.labelDefault()}"> Lorem ipsum </label>
            </div>

            <div class="w-full *** md:w-auto *** md:self-center">
              <input
                type="text"
                class="${classes.input()} ${classes.inputRadius()} ${classes.inputDefault()}"
                aria-label="Lorem ipsum"
              />
            </div>
          </div>
        </div>

        <div class="w-full *** md:w-auto ***">
          <div class="xt-row xt-row-x-6 xt-row-y-4">
            <div class="w-full *** md:w-auto *** md:self-center">
              <label class="${classes.label()} whitespace-nowrap ${classes.labelDefault()}"> Dolor sit amet </label>
            </div>

            <div class="w-full *** md:w-auto *** md:self-center">
              <input
                type="text"
                class="${classes.input()} ${classes.inputRadius()} ${classes.inputDefault()}"
                aria-label="Dolor sit amet"
              />
            </div>
          </div>
        </div>

        <div class="w-full">
          <div class="xt-row xt-row-x-6 xt-row-y-4">
            <div class="w-full *** md:w-auto *** md:self-baseline">
              <label class="${classes.label()} whitespace-nowrap ${classes.labelDefault()}"> Checkbox </label>
            </div>

            <div class="w-full md:w-10/12">
              <div class="xt-row xt-row-x-8 xt-row-y-2">
                <div class="w-full *** md:w-auto ***">
                  <label class="${classes.checkLabel()}">
                    <input
                      type="checkbox"
                      class="xt-check xt-checkbox ${classes.checkRadius()} ${classes.checkDefault()}"
                      checked
                      disabled
                    />
                    <span class="${classes.checkContent()}">Lorem ipsum</span>
                  </label>
                </div>

                <div class="w-full *** md:w-auto ***">
                  <label class="${classes.checkLabel()}">
                    <input
                      type="checkbox"
                      class="xt-check xt-checkbox ${classes.checkRadius()} ${classes.checkDefault()}"
                    />
                    <span class="${classes.checkContent()}">Lorem ipsum</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full">
          <div class="xt-row xt-row-x-6 xt-row-y-4">
            <div class="w-full *** md:w-auto *** md:self-baseline">
              <label class="${classes.label()} whitespace-nowrap ${classes.labelDefault()}"> Radio </label>
            </div>

            <div class="w-full md:w-10/12">
              <div class="xt-row xt-row-x-8 xt-row-y-2">
                <div class="w-full *** md:w-auto ***">
                  <label class="${classes.checkLabel()}">
                    <input
                      type="radio"
                      class="xt-check xt-radio ${classes.radioRadius()} ${classes.radioDefault()}"
                      name="radio-horizontal"
                      checked
                    />
                    <span class="${classes.checkContent()}">Lorem ipsum</span>
                  </label>
                </div>

                <div class="w-full *** md:w-auto ***">
                  <label class="${classes.checkLabel()}">
                    <input
                      type="radio"
                      class="xt-check xt-radio ${classes.radioRadius()} ${classes.radioDefault()}"
                      name="radio-horizontal"
                    />
                    <span class="${classes.checkContent()}">Lorem ipsum</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full">
          <div class="xt-row xt-row-x-6 xt-row-y-4">
            <div class="w-full *** md:w-auto *** md:self-baseline">
              <label class="${classes.label()} whitespace-nowrap ${classes.labelDefault()}"> Switch </label>
            </div>

            <div class="w-full md:w-10/12">
              <div class="xt-row xt-row-x-8 xt-row-y-2">
                <div class="w-full *** md:w-auto ***">
                  <label class="${classes.checkLabel()}">
                    <input
                      type="checkbox"
                      class="xt-check xt-switch ${classes.switchRadius()} ${classes.switchDefault()}"
                    />
                    <span class="${classes.checkContent()}">Lorem ipsum</span>
                  </label>
                </div>

                <div class="w-full *** md:w-auto ***">
                  <label class="${classes.checkLabel()}">
                    <input
                      type="radio"
                      class="xt-check xt-switch ${classes.switchRadius()} ${classes.switchDefault()}"
                      name="switch-horizontal"
                    />
                    <span class="${classes.checkContent()}">Lorem ipsum</span>
                  </label>
                </div>

                <div class="w-full *** md:w-auto ***">
                  <label class="${classes.checkLabel()}">
                    <input
                      type="radio"
                      class="xt-check xt-switch ${classes.switchRadius()} ${classes.switchDefault()}"
                      name="switch-horizontal"
                    />
                    <span class="${classes.checkContent()}">Lorem ipsum</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full">
          <button
            type="submit"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
          >
            submit
          </button>
        </div>
      </div>
    </form>
  </div>
`

export const object = {
  html: html,
}
