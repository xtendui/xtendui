const classes = require('src/gatsby/components/snippets/classes').classes

const html = /* HTML */ `
  <div id="ref--">
    <form class="text-sm">
      <div class="xt-row xt-row-x-6 xt-row-y-4">
        <div class="w-full">
          <label class="xt-label mb-3 ${classes.labelDefault()} xt-label-required"> Custom constrain </label>
          <input
            type="text"
            class="xt-input rounded-md ${classes.inputDefault()} demo--form-constrain"
            aria-label="Custom constrain"
            placeholder="Custom constrain"
            required
          />
        </div>

        <div class="w-full">
          <label class="xt-label mb-3 ${classes.labelDefault()} xt-label-required"> Email </label>
          <input
            type="email"
            class="xt-input rounded-md ${classes.inputDefault()}"
            aria-label="Email"
            placeholder="Email"
            required
          />
        </div>

        <div class="w-full">
          <label class="xt-label mb-3 ${classes.labelDefault()} xt-label-required"> Number </label>
          <input
            type="number"
            class="xt-input rounded-md ${classes.inputDefault()}"
            aria-label="Number"
            placeholder="Number"
            required
            min="1"
            max="10"
          />
        </div>

        <div class="w-full">
          <label class="xt-label mb-3 ${classes.labelDefault()} xt-label-required"> Letters </label>
          <input
            type="text"
            class="xt-input rounded-md ${classes.inputDefault()}"
            aria-label="Letters"
            placeholder="Letters"
            required
            pattern="[A-Za-z]+"
          />
        </div>

        <div class="w-full">
          <label class="xt-label mb-3 ${classes.labelDefault()} xt-label-required"> File </label>
          <input type="file" class="xt-input rounded-md ${classes.inputDefault()}" aria-label="File" required />
        </div>

        <div class="w-full">
          <label class="xt-label mb-3 ${classes.labelDefault()} xt-label-required"> Textarea </label>
          <textarea
            class="xt-input xt-textarea rounded-md ${classes.inputDefault()} h-24 resize-vertical"
            aria-label="Textarea"
            placeholder="Textarea"
            required></textarea>
        </div>

        <div class="w-full">
          <label class="xt-label mb-3 ${classes.labelDefault()} xt-label-required"> Select </label>
          <select class="xt-input xt-select rounded-md ${classes.inputDefault()}" aria-label="Select" required>
            <option selected value="">Select an option</option>
            <option>Test</option>
            <option>Test</option>
            <option>Test</option>
          </select>
        </div>

        <div class="w-full">
          <label class="xt-label mb-3 ${classes.labelDefault()} xt-label-required"> Select multiple </label>
          <select
            class="xt-input xt-select rounded-md ${classes.inputDefault()}"
            aria-label="Select multiple"
            multiple
            required>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>

        <div class="w-full">
          <label class="xt-label mb-3 ${classes.labelDefault()} xt-label-required"> Checkbox </label>

          <div class="xt-row xt-row-x-8 xt-row-y-2">
            <div class="w-full">
              <label class="xt-label-check">
                <input
                  type="checkbox"
                  class="xt-check xt-checkbox rounded-md ${classes.checkDefault()}"
                  required
                  disabled
                />
                <span class="xt-check-content"
                  ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                >
              </label>
            </div>

            <div class="w-full">
              <label class="xt-label-check">
                <input type="checkbox" class="xt-check xt-checkbox rounded-md ${classes.checkDefault()}" required />
                <span class="xt-check-content"
                  ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                >
              </label>
            </div>
          </div>
        </div>

        <div class="w-full">
          <label class="xt-label mb-3 ${classes.labelDefault()} xt-label-required"> Radio </label>

          <div class="xt-row xt-row-x-8 xt-row-y-2">
            <div class="w-full">
              <label class="xt-label-check">
                <input
                  type="radio"
                  class="xt-check xt-radio rounded-full ${classes.radioDefault()}"
                  name="radio-validation"
                  required
                />
                <span class="xt-check-content"
                  ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                >
              </label>
            </div>

            <div class="w-full">
              <label class="xt-label-check">
                <input
                  type="radio"
                  class="xt-check xt-radio rounded-full ${classes.radioDefault()}"
                  name="radio-validation"
                />
                <span class="xt-check-content"
                  ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                >
              </label>
            </div>
          </div>
        </div>

        <div class="w-full">
          <label class="xt-label mb-3 ${classes.labelDefault()} xt-label-required"> Switch </label>

          <div class="xt-row xt-row-x-8 xt-row-y-2">
            <div class="w-full">
              <label class="xt-label-check">
                <input type="checkbox" class="xt-check xt-switch rounded-full ${classes.switchDefault()}" required />
                <span class="xt-check-content"
                  ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                >
              </label>
            </div>

            <div class="w-full">
              <label class="xt-label-check">
                <input
                  type="radio"
                  class="xt-check xt-switch rounded-full ${classes.switchDefault()}"
                  name="switch-validation"
                  required
                />
                <span class="xt-check-content"
                  ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                >
              </label>
            </div>

            <div class="w-full">
              <label class="xt-label-check">
                <input
                  type="radio"
                  class="xt-check xt-switch rounded-full ${classes.switchDefault()}"
                  name="switch-validation"
                />
                <span class="xt-check-content"
                  ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                >
              </label>
            </div>
          </div>
        </div>

        <div class="w-full">
          <button type="submit" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
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
