const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <form class="text-sm">
      <div class="xt-row xt-row-x-6 xt-row-y-4">
        <div class="w-full *** md:w-auto ***">
          <div class="xt-row xt-row-x-6 xt-row-y-4">
            <div class="w-full *** md:w-auto *** md:self-center">
              <label class="${classes.label()} whitespace-nowrap ${classes.labelGray()}"> Lorem ipsum </label>
            </div>

            <div class="w-full *** md:w-auto *** md:self-center">
              <input
                type="text"
                class="${classes.input()} ${classes.inputRadius()} ${classes.inputGray()}"
                aria-label="Lorem ipsum" />
            </div>
          </div>
        </div>

        <div class="w-full *** md:w-auto ***">
          <div class="xt-row xt-row-x-6 xt-row-y-4">
            <div class="w-full *** md:w-auto *** md:self-center">
              <label class="${classes.label()} whitespace-nowrap ${classes.labelGray()}"> Dolor sit amet </label>
            </div>

            <div class="w-full *** md:w-auto *** md:self-center">
              <input
                type="text"
                class="${classes.input()} ${classes.inputRadius()} ${classes.inputGray()}"
                aria-label="Dolor sit amet" />
            </div>
          </div>
        </div>

        <div class="w-full *** md:w-auto ***">
          <div class="xt-row xt-row-x-6 xt-row-y-4">
            <div class="w-full *** md:w-auto *** md:self-center">
              <label class="${classes.label()} whitespace-nowrap ${classes.labelGray()}"> Lorem ipsum </label>
            </div>

            <div class="w-full *** md:w-auto *** md:self-center">
              <input
                type="text"
                class="${classes.input()} ${classes.inputRadius()} ${classes.inputGray()}"
                aria-label="Lorem ipsum" />
            </div>
          </div>
        </div>

        <div class="w-full *** md:w-auto ***">
          <div class="xt-row xt-row-x-6 xt-row-y-4">
            <div class="w-full *** md:w-auto *** md:self-center">
              <label class="${classes.label()} whitespace-nowrap ${classes.labelGray()}"> Dolor sit amet </label>
            </div>

            <div class="w-full *** md:w-auto *** md:self-center">
              <input
                type="text"
                class="${classes.input()} ${classes.inputRadius()} ${classes.inputGray()}"
                aria-label="Dolor sit amet" />
            </div>
          </div>
        </div>

        <div class="w-full">
          <div class="xt-row xt-row-x-6 xt-row-y-4">
            <div class="w-full *** md:w-auto *** md:self-baseline">
              <label class="${classes.label()} whitespace-nowrap ${classes.labelGray()}"> Checkbox </label>
            </div>

            <div class="w-full md:w-10/12">
              <div class="xt-row xt-row-x-8 xt-row-y-2">
                <div class="w-full *** md:w-auto ***">
                  <label class="${classes.checkLabel()}">
                    <input
                      type="checkbox"
                      class="xt-check xt-checkbox ${classes.checkRadius()} ${classes.checkGray()}"
                      checked
                      disabled />
                    <span class="${classes.checkContent()}">Lorem ipsum</span>
                  </label>
                </div>

                <div class="w-full *** md:w-auto ***">
                  <label class="${classes.checkLabel()}">
                    <input
                      type="checkbox"
                      class="xt-check xt-checkbox ${classes.checkRadius()} ${classes.checkGray()}" />
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
              <label class="${classes.label()} whitespace-nowrap ${classes.labelGray()}"> Radio </label>
            </div>

            <div class="w-full md:w-10/12">
              <div class="xt-row xt-row-x-8 xt-row-y-2">
                <div class="w-full *** md:w-auto ***">
                  <label class="${classes.checkLabel()}">
                    <input
                      type="radio"
                      class="xt-check xt-radio ${classes.radioRadius()} ${classes.radioGray()}"
                      name="radio-horizontal"
                      checked />
                    <span class="${classes.checkContent()}">Lorem ipsum</span>
                  </label>
                </div>

                <div class="w-full *** md:w-auto ***">
                  <label class="${classes.checkLabel()}">
                    <input
                      type="radio"
                      class="xt-check xt-radio ${classes.radioRadius()} ${classes.radioGray()}"
                      name="radio-horizontal" />
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
              <label class="${classes.label()} whitespace-nowrap ${classes.labelGray()}"> Switch </label>
            </div>

            <div class="w-full md:w-10/12">
              <div class="xt-row xt-row-x-8 xt-row-y-2">
                <div class="w-full *** md:w-auto ***">
                  <label class="${classes.checkLabel()}">
                    <input
                      type="checkbox"
                      class="xt-check xt-switch ${classes.switchRadius()} ${classes.switchGray()}" />
                    <span class="${classes.checkContent()}">Lorem ipsum</span>
                  </label>
                </div>

                <div class="w-full *** md:w-auto ***">
                  <label class="${classes.checkLabel()}">
                    <input
                      type="radio"
                      class="xt-check xt-switch ${classes.switchRadius()} ${classes.switchGray()}"
                      name="switch-horizontal" />
                    <span class="${classes.checkContent()}">Lorem ipsum</span>
                  </label>
                </div>

                <div class="w-full *** md:w-auto ***">
                  <label class="${classes.checkLabel()}">
                    <input
                      type="radio"
                      class="xt-check xt-switch ${classes.switchRadius()} ${classes.switchGray()}"
                      name="switch-horizontal" />
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
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}">
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
