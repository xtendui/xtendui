const moduleParents = Object.values(require.cache).filter(m => m.children.includes(module))
let resolve
if (moduleParents.length) {
  resolve = moduleParents[0].resolve
}

const classes = resolve
  ? require(`${resolve}components/snippets/classes`).classes
  : require('components/snippets/classes').classes

const html = /* HTML */ `
  <div id="ref--">
    <form class="text-sm">
      <fieldset class="my-8 xt-my-auto">
        <div class="xt-row xt-row-x-6 xt-row-y-4">
          <div class="w-full">
            <legend class="text-2xl font-bold leading-snug">Legend #1</legend>
          </div>

          <div class="w-full md:w-6/12">
            <label class="xt-label mb-3 ${classes.labelDefault()}"> Lorem Ipsum </label>
            <input type="text" class="xt-input rounded-md ${classes.inputDefault()}" aria-label="Lorem ipsum" />
            <div class="mt-3 ${classes.note()}">
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </div>
          </div>

          <div class="w-full md:w-6/12">
            <label class="xt-label mb-3 ${classes.labelDefault()}"> Dolor sit amet </label>
            <input type="text" class="xt-input rounded-md ${classes.inputDefault()}" aria-label="Dolor sit amet" />
          </div>

          <div class="w-full">
            <div class="xt-row xt-row-x-6 xt-row-y-4">
              <div class="w-full md:w-auto">
                <label class="xt-label mb-3 ${classes.labelDefault()}"> Lorem ipsum </label>
                <input type="text" class="xt-input rounded-md ${classes.inputDefault()}" aria-label="Lorem ipsum" />
              </div>

              <div class="w-full md:w-auto">
                <label class="xt-label mb-3 ${classes.labelDefault()}"> Dolor sit amet </label>
                <input type="text" class="xt-input rounded-md ${classes.inputDefault()}" aria-label="Dolor sit amet" />
              </div>
            </div>

            <div class="mt-3 ${classes.note()}">
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </div>
          </div>
        </div>
      </fieldset>

      <fieldset class="my-8 xt-my-auto">
        <div class="xt-row xt-row-x-6 xt-row-y-4">
          <div class="w-full">
            <legend class="text-2xl font-bold leading-snug">Legend #2</legend>
          </div>

          <div class="w-full">
            <label class="xt-label mb-3 ${classes.labelDefault()}"> Checkbox </label>

            <div class="xt-row xt-row-x-8 xt-row-y-2">
              <div class="w-full">
                <label class="xt-label-check">
                  <input type="checkbox" class="xt-check xt-checkbox rounded-md ${classes.checkDefault()}" checked />
                  <span class="xt-check-content"
                    ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                  >
                </label>
              </div>

              <div class="w-full">
                <label class="xt-label-check">
                  <input type="checkbox" class="xt-check xt-checkbox rounded-md ${classes.checkDefault()}" />
                  <span class="xt-check-content"
                    ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                  >
                </label>
                <div class="mt-3 ${classes.note()}">
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.
                </div>
              </div>
            </div>
          </div>

          <div class="w-full">
            <div class="xt-row xt-row-x-6 xt-row-y-4">
              <div class="w-full md:w-2/12 md:self-baseline">
                <label class="xt-label ${classes.labelDefault()}"> Checkbox </label>
              </div>

              <div class="w-full md:w-10/12">
                <div class="xt-row xt-row-x-8 xt-row-y-2">
                  <div class="w-full">
                    <label class="xt-label-check">
                      <input
                        type="checkbox"
                        class="xt-check xt-checkbox rounded-md ${classes.checkDefault()}"
                        checked
                      />
                      <span class="xt-check-content"
                        ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.
                        Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam.
                        Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                      >
                    </label>
                  </div>

                  <div class="w-full">
                    <label class="xt-label-check">
                      <input
                        type="checkbox"
                        class="xt-check xt-checkbox rounded-md ${classes.checkDefault()}"
                        checked
                      />
                      <span class="xt-check-content"
                        ><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.
                        Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam.
                        Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span
                      >
                    </label>
                    <div class="mt-3 ${classes.note()}">
                      <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                      suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed
                      mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full">
            <legend class="text-2xl font-bold leading-snug">Legend #3</legend>
          </div>

          <div class="w-full">
            <label class="xt-label mb-3 ${classes.labelDefault()}"> Checkbox </label>

            <div class="xt-row xt-row-x-8 xt-row-y-2">
              <div class="w-full md:w-auto">
                <label class="xt-label-check">
                  <input type="checkbox" class="xt-check xt-checkbox rounded-md ${classes.checkDefault()}" checked />
                  <span class="xt-check-content">Lorem ipsum</span>
                </label>
              </div>

              <div class="w-full md:w-auto">
                <label class="xt-label-check">
                  <input type="checkbox" class="xt-check xt-checkbox rounded-md ${classes.checkDefault()}" />
                  <span class="xt-check-content">Lorem ipsum</span>
                </label>
              </div>
            </div>

            <div class="mt-3 ${classes.note()}">
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </div>
          </div>

          <div class="w-full">
            <button type="submit" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
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
