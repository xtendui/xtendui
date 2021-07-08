const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--form-validation">
    <form class="text-sm">
      <div class="xt-row xt-row-x-6 xt-row-y-4">
        <div class="w-full">
          <label class="${classes.label()} mb-3 ${classes.labelDefault()} xt-label-required"> Custom constrain </label>
          <input
            type="text"
            class="${classes.input()} ${classes.inputUnderline()} input--constrains"
            aria-label="Custom constrain"
            placeholder="Custom constrain"
            required
          />
        </div>

        <div class="w-full">
          <label class="${classes.label()} mb-3 ${classes.labelDefault()} xt-label-required"> Email </label>
          <input
            type="email"
            class="${classes.input()} ${classes.inputUnderline()}"
            aria-label="Email"
            placeholder="Email"
            required
          />
        </div>

        <div class="w-full">
          <label class="${classes.label()} mb-3 ${classes.labelDefault()} xt-label-required"> Number </label>
          <input
            type="number"
            class="${classes.input()} ${classes.inputUnderline()}"
            aria-label="Number"
            placeholder="Number"
            required
            min="1"
            max="10"
          />
        </div>

        <div class="w-full">
          <label class="${classes.label()} mb-3 ${classes.labelDefault()} xt-label-required"> Letters </label>
          <input
            type="text"
            class="${classes.input()} ${classes.inputUnderline()}"
            aria-label="Letters"
            placeholder="Letters"
            required
            pattern="[A-Za-z]+"
          />
        </div>

        <div class="w-full">
          <label class="${classes.label()} mb-3 ${classes.labelDefault()} xt-label-required"> File </label>
          <input
            type="file"
            class="${classes.input()} ${classes.inputUnderline()}"
            aria-label="File"
            required
          />
        </div>

        <div class="w-full">
          <label class="${classes.label()} mb-3 ${classes.labelDefault()} xt-label-required"> Textarea </label>
          <textarea
            class="${classes.input()} ${classes.textarea()} ${classes.inputUnderline()} h-24 resize-vertical"
            aria-label="Textarea"
            placeholder="Textarea"
            required
          ></textarea>
        </div>

        <div class="w-full">
          <label class="${classes.label()} mb-3 ${classes.labelDefault()} xt-label-required"> Select </label>
          <select
            class="${classes.input()} xt-select ${classes.inputUnderline()}"
            aria-label="Select"
            required
          >
            <option selected value="">Select an option</option>
            <option>Test</option>
            <option>Test</option>
            <option>Test</option>
          </select>
        </div>

        <div class="w-full">
          <label class="${classes.label()} mb-3 ${classes.labelDefault()} xt-label-required"> Select multiple </label>
          <select
            class="${classes.input()} xt-select ${classes.inputUnderline()}"
            aria-label="Select multiple"
            multiple
            required
          >
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>

        <div class="w-full">
          <label class="${classes.label()} mb-3 ${classes.labelDefault()} xt-label-required"> Checkbox </label>

          <div class="xt-row xt-row-x-8 xt-row-y-2">
            <div class="w-full">
              <label class="${classes.checkLabel()}">
                <input
                  type="checkbox"
                  class="xt-check xt-checkbox ${classes.checkRadius()} ${classes.checkDefault()}"
                  required
                  disabled
                />
                <span class="${classes.checkContent()}"
                  ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                >
              </label>
            </div>

            <div class="w-full">
              <label class="${classes.checkLabel()}">
                <input
                  type="checkbox"
                  class="xt-check xt-checkbox ${classes.checkRadius()} ${classes.checkDefault()}"
                  required
                />
                <span class="${classes.checkContent()}"
                  ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                >
              </label>
            </div>
          </div>
        </div>

        <div class="w-full">
          <label class="${classes.label()} mb-3 ${classes.labelDefault()} xt-label-required"> Radio </label>

          <div class="xt-row xt-row-x-8 xt-row-y-2">
            <div class="w-full">
              <label class="${classes.checkLabel()}">
                <input
                  type="radio"
                  class="xt-check xt-radio ${classes.radioRadius()} ${classes.radioDefault()}"
                  name="radio-validation"
                  required
                />
                <span class="${classes.checkContent()}"
                  ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                >
              </label>
            </div>

            <div class="w-full">
              <label class="${classes.checkLabel()}">
                <input
                  type="radio"
                  class="xt-check xt-radio ${classes.radioRadius()} ${classes.radioDefault()}"
                  name="radio-validation"
                />
                <span class="${classes.checkContent()}"
                  ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                >
              </label>
            </div>
          </div>
        </div>

        <div class="w-full">
          <label class="${classes.label()} mb-3 ${classes.labelDefault()} xt-label-required"> Switch </label>

          <div class="xt-row xt-row-x-8 xt-row-y-2">
            <div class="w-full">
              <label class="${classes.checkLabel()}">
                <input
                  type="checkbox"
                  class="xt-check xt-switch ${classes.switchRadius()} ${classes.switchDefault()}"
                  required
                />
                <span class="${classes.checkContent()}"
                  ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                >
              </label>
            </div>

            <div class="w-full">
              <label class="${classes.checkLabel()}">
                <input
                  type="radio"
                  class="xt-check xt-switch ${classes.switchRadius()} ${classes.switchDefault()}"
                  name="switch-validation"
                  required
                />
                <span class="${classes.checkContent()}"
                  ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                >
              </label>
            </div>

            <div class="w-full">
              <label class="${classes.checkLabel()}">
                <input
                  type="radio"
                  class="xt-check xt-switch ${classes.switchRadius()} ${classes.switchDefault()}"
                  name="switch-validation"
                />
                <span class="${classes.checkContent()}"
                  ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
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
            class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
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
