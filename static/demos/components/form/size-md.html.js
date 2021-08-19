const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <form class="*** text-base ***">
      <div class="xt-row xt-row-x-6 xt-row-y-4">
        <div class="w-full">
          <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Input </label>
          <input
            type="text"
            class="${classes.input()} ${classes.inputRadius()} ${classes.inputGray()}"
            aria-label="Input"
            placeholder="Input"
          />
        </div>

        <div class="w-full">
          <label class="${classes.label()} mb-3 ${classes.labelGray()}"> File </label>
          <input
            type="file"
            class="${classes.input()} ${classes.inputRadius()} ${classes.inputGray()}"
            aria-label="File"
          />
        </div>

        <div class="w-full">
          <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Textarea </label>
          <textarea
            class="${classes.input()} ${classes.textarea()} ${classes.inputRadius()} ${classes.inputGray()} h-24 resize-vertical"
            aria-label="Textarea"
            placeholder="Textarea"
          ></textarea>
        </div>

        <div class="w-full">
          <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Select </label>
          <select
            class="${classes.input()} xt-select ${classes.inputRadius()} ${classes.inputGray()}"
            aria-label="Select"
          >
            <option selected value="">Select an option</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>

        <div class="w-full">
          <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Select multiple </label>
          <select
            class="${classes.input()} xt-select ${classes.inputRadius()} ${classes.inputGray()}"
            multiple
            aria-label="Select multiple"
          >
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>

        <div class="w-full">
          <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Checkbox </label>

          <div class="xt-row xt-row-x-8 xt-row-y-2">
            <div class="w-full">
              <label class="${classes.checkLabel()}">
                <input
                  type="checkbox"
                  class="xt-check xt-checkbox ${classes.checkRadius()} ${classes.checkGray()}"
                  checked
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
                <input type="checkbox" class="xt-check xt-checkbox ${classes.checkRadius()} ${classes.checkGray()}" />
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
          <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Radio </label>

          <div class="xt-row xt-row-x-8 xt-row-y-2">
            <div class="w-full">
              <label class="${classes.checkLabel()}">
                <input
                  type="radio"
                  class="xt-check xt-radio ${classes.radioRadius()} ${classes.radioGray()}"
                  name="radio-md"
                  checked
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
                  class="xt-check xt-radio ${classes.radioRadius()} ${classes.radioGray()}"
                  name="radio-md"
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
          <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Switch </label>

          <div class="xt-row xt-row-x-8 xt-row-y-2">
            <div class="w-full">
              <label class="${classes.checkLabel()}">
                <input type="checkbox" class="xt-check xt-switch ${classes.switchRadius()} ${classes.switchGray()}" />
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
                  class="xt-check xt-switch ${classes.switchRadius()} ${classes.switchGray()}"
                  name="switch-md"
                  checked
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
                  class="xt-check xt-switch ${classes.switchRadius()} ${classes.switchGray()}"
                  name="switch-md"
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
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
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
