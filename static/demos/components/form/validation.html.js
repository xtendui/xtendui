const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--form-validation">
    <form class="text-sm">
      <div class="xt-row xt-row-x-6 xt-row-y-4">
        <div class="xt-row xt-row-x-6 xt-row-y-4 *** flex-auto ***" data-node-required-one="Fill one of the fields">
          <div class="w-full md:w-6/12">
            <label class="${classes.label()} mb-1 ${classes.labelGray()} label-required-one"> Required one </label>
            <input
              type="text"
              class="${classes.input()} ${classes.inputUnderline()}"
              aria-label="Required one"
              placeholder="Required one" />
          </div>

          <div class="w-full md:w-6/12">
            <label class="${classes.label()} mb-1 ${classes.labelGray()} label-required-one"> Required one </label>
            <input
              type="text"
              class="${classes.input()} ${classes.inputUnderline()}"
              aria-label="Required one"
              placeholder="Required one" />
          </div>
        </div>

        <div class="w-full">
          <label class="${classes.label()} mb-1 ${classes.labelGray()} label-required"> Custom constrain </label>
          <input
            type="text"
            class="${classes.input()} ${classes.inputUnderline()} input--constrains"
            aria-label="Custom constrain"
            placeholder="Custom constrain" />
        </div>

        <div class="w-full">
          <label class="${classes.label()} mb-1 ${classes.labelGray()} label-required"> Email </label>
          <input
            type="email"
            class="${classes.input()} ${classes.inputUnderline()} valid-submit:!border-green-200 invalid-submit:!border-red-200"
            aria-label="Email"
            placeholder="Email"
            required />
        </div>

        <div class="w-full">
          <label class="${classes.label()} mb-1 ${classes.labelGray()} label-required"> Number </label>
          <input
            type="number"
            class="${classes.input()} ${classes.inputUnderline()}"
            aria-label="Number"
            placeholder="Number"
            required
            min="1"
            max="10" />
        </div>

        <div class="w-full">
          <label class="${classes.label()} mb-1 ${classes.labelGray()} label-required"> Letters </label>
          <input
            type="text"
            class="${classes.input()} ${classes.inputUnderline()}"
            aria-label="Letters"
            placeholder="Letters"
            required
            pattern="[A-Za-z]+" />
        </div>

        <div class="w-full">
          <label class="${classes.label()} mb-1 ${classes.labelGray()} label-required"> File </label>
          <input type="file" class="${classes.input()} ${classes.inputUnderline()}" aria-label="File" required />
        </div>

        <div class="w-full">
          <label class="${classes.label()} mb-1 ${classes.labelGray()} label-required"> Textarea </label>
          <textarea
            class="${classes.input()} ${classes.textarea()} ${classes.inputUnderline()} resize-vertical"
            aria-label="Textarea"
            placeholder="Textarea"
            required></textarea>
        </div>

        <div class="w-full">
          <label class="${classes.label()} mb-1 ${classes.labelGray()} label-required"> Select </label>
          <select class="${classes.input()} xt-select ${classes.inputUnderline()}" aria-label="Select" required>
            <option selected value="">Select an option</option>
            <option>Test</option>
            <option>Test</option>
            <option>Test</option>
          </select>
        </div>

        <div class="w-full">
          <label class="${classes.label()} mb-1 ${classes.labelGray()} label-required"> Select multiple </label>
          <select
            class="${classes.input()} xt-select ${classes.inputUnderline()} *** invalid-submit ***"
            aria-label="Select multiple"
            multiple
            required>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <div class="mt-3 text-red-500 text-xs leading-snug *** custom-backend-error ***">
            Backend custom error it scrolls to this on page load
          </div>
        </div>

        <div class="w-full">
          <label class="${classes.label()} mb-1 ${classes.labelGray()} label-required"> Checkbox </label>

          <div class="xt-row xt-row-x-8 xt-row-y-2">
            <div class="w-full">
              <label class="${classes.checkLabel()}">
                <input
                  type="checkbox"
                  role="group"
                  aria-label="Lorem ipsum"
                  class="xt-check xt-checkbox ${classes.checkRadius()} ${classes.checkGray()}"
                  required
                  disabled />
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
                  class="xt-check xt-checkbox ${classes.checkRadius()} ${classes.checkGray()}"
                  required />
                <span class="${classes.checkContent()}"
                  ><strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                >
              </label>
            </div>
          </div>
        </div>

        <div class="w-full">
          <label class="${classes.label()} mb-1 ${classes.labelGray()} label-required"> Radio </label>

          <div class="xt-row xt-row-x-8 xt-row-y-2">
            <div class="w-full">
              <label class="${classes.checkLabel()}">
                <input
                  type="radio"
                  role="radiogroup"
                  aria-label="Lorem ipsum"
                  class="xt-check xt-radio ${classes.radioRadius()} ${classes.radioGray()}"
                  name="radio-validation"
                  required />
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
                  type="radio"
                  role="radiogroup"
                  aria-label="Lorem ipsum"
                  class="xt-check xt-radio ${classes.radioRadius()} ${classes.radioGray()}"
                  name="radio-validation" />
                <span class="${classes.checkContent()}"
                  ><strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                >
              </label>
            </div>
          </div>
        </div>

        <div class="w-full">
          <label class="${classes.label()} mb-1 ${classes.labelGray()} label-required"> Switch </label>

          <div class="xt-row xt-row-x-8 xt-row-y-2">
            <div class="w-full">
              <label class="${classes.checkLabel()}">
                <input
                  type="checkbox"
                  role="group"
                  aria-label="Lorem ipsum"
                  class="xt-check xt-switch ${classes.switchRadius()} ${classes.switchGray()}"
                  required />
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
                  type="radio"
                  role="radiogroup"
                  aria-label="Lorem ipsum"
                  class="xt-check xt-switch ${classes.switchRadius()} ${classes.switchGray()}"
                  name="switch-validation"
                  required />
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
                  type="radio"
                  role="radiogroup"
                  aria-label="Lorem ipsum"
                  class="xt-check xt-switch ${classes.switchRadius()} ${classes.switchGray()}"
                  name="switch-validation" />
                <span class="${classes.checkContent()}"
                  ><strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                >
              </label>
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
  container: true,
}
