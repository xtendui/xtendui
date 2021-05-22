const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--form-variant-primary">
    <form class="text-sm py-4 px-6 bg-primary-500">
      <div class="xt-row xt-row-x-6 xt-row-y-4">
        <div class="w-full">
          <label class="${classes.label()} mb-3 ${classes.labelPrimary()}"> Input </label>
          <input
            type="text"
            class="${classes.input()} ${classes.inputRadius()} ${classes.inputPrimary()}"
            aria-label="Input"
            placeholder="Input"
          />
        </div>

        <div class="w-full">
          <label class="${classes.label()} mb-3 ${classes.labelPrimary()}"> Disabled </label>
          <input
            type="text"
            class="${classes.input()} ${classes.inputRadius()} ${classes.inputPrimary()}"
            aria-label="Input"
            placeholder="Input"
            disabled
          />
        </div>

        <div class="w-full">
          <label class="${classes.label()} mb-3 ${classes.labelPrimary()}"> File </label>
          <input
            type="file"
            class="${classes.input()} ${classes.inputRadius()} ${classes.inputPrimary()}"
            aria-label="File"
          />
        </div>

        <div class="w-full">
          <label class="${classes.label()} mb-3 ${classes.labelPrimary()}"> Textarea </label>
          <textarea
            class="${classes.input()} ${classes.textarea()} ${classes.inputRadius()} ${classes.inputPrimary()} h-24 resize-vertical"
            aria-label="Textarea"
            placeholder="Textarea"
          ></textarea>
        </div>

        <div class="w-full">
          <label class="${classes.label()} mb-3 ${classes.labelPrimary()}"> Select </label>
          <select
            class="${classes.input()} xt-select xt-select-primary ${classes.inputRadius()} ${classes.inputPrimary()}"
            aria-label="Select"
          >
            <option selected value="">Select an option</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>

        <div class="w-full">
          <label class="${classes.label()} mb-3 ${classes.labelPrimary()}"> Select multiple </label>
          <select
            class="${classes.input()} xt-select xt-select-primary ${classes.inputRadius()} ${classes.inputPrimary()}"
            aria-label="Select multiple"
            multiple
          >
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>

        <div class="w-full">
          <label class="${classes.label()} mb-3 ${classes.labelPrimary()}"> Checkbox </label>

          <div class="xt-row xt-row-x-8 xt-row-y-2">
            <div class="w-full">
              <label class="${classes.checkLabel()}">
                <input
                  type="checkbox"
                  class="xt-check xt-checkbox ${classes.checkRadius()} ${classes.checkPrimary()}"
                  checked
                  disabled
                />
                <span class="ml-3 text-white xt-links-inverse"
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
                  class="xt-check xt-checkbox ${classes.checkRadius()} ${classes.checkPrimary()}"
                />
                <span class="ml-3 text-white xt-links-inverse"
                  ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                >
              </label>
            </div>
          </div>
        </div>

        <div class="w-full">
          <label class="${classes.label()} mb-3 ${classes.labelPrimary()}"> Radio </label>

          <div class="xt-row xt-row-x-8 xt-row-y-2">
            <div class="w-full">
              <label class="${classes.checkLabel()}">
                <input
                  type="radio"
                  class="xt-check xt-radio ${classes.radioRadius()} ${classes.radioPrimary()}"
                  name="radio-primary"
                  checked
                />
                <span class="ml-3 text-white xt-links-inverse"
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
                  class="xt-check xt-radio ${classes.radioRadius()} ${classes.radioPrimary()}"
                  name="radio-primary"
                />
                <span class="ml-3 text-white xt-links-inverse"
                  ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                >
              </label>
            </div>
          </div>
        </div>

        <div class="w-full">
          <label class="${classes.label()} mb-3 ${classes.labelPrimary()}"> Switch </label>

          <div class="xt-row xt-row-x-8 xt-row-y-2">
            <div class="w-full">
              <label class="${classes.checkLabel()}">
                <input type="checkbox" class="xt-check xt-switch ${classes.radioRadius()} ${classes.radioPrimary()}" />
                <span class="ml-3 text-white xt-links-inverse"
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
                  class="xt-check xt-switch ${classes.switchRadius()} ${classes.switchPrimary()}"
                  name="switch-primary"
                  checked
                />
                <span class="ml-3 text-white xt-links-inverse"
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
                  class="xt-check xt-switch ${classes.switchRadius()} ${classes.switchPrimary()}"
                  name="switch-primary"
                />
                <span class="ml-3 text-white xt-links-inverse"
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
            class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonDefault()}"
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
