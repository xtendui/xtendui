const moduleParents = Object.values(require.cache).filter(m => m.children && m.children.includes(module))
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
      <div class="xt-row xt-row-x-6 xt-row-y-4">
        <div class="w-full">
          <label class="xt-label mb-3 ${classes.labelDefault()}">
            Lorem ipsum
            <div class="ml-4">
              <div class="xt-list xt-list-3 items-center">
                <a href="#" class="xt-button xt-link"> link #1 </a>
                <a href="#" class="xt-button xt-link"> link #2 </a>
              </div>
            </div>
          </label>
          <input type="text" class="xt-input rounded-md ${classes.inputDefault()}" aria-label="Lorem ipsum" />
        </div>

        <div class="w-full">
          <label class="xt-label mb-3 ${classes.labelDefault()}">
            Dolor sit amet
            <div class="ml-auto">
              <div class="xt-list xt-list-3 items-center">
                <a href="#" class="xt-button xt-link"> link #1 </a>
                <a href="#" class="xt-button xt-link"> link #2 </a>
              </div>
            </div>
          </label>
          <input type="text" class="xt-input rounded-md ${classes.inputDefault()}" aria-label="Dolor sit amet" />
        </div>

        <div class="w-full">
          <div class="xt-row xt-row-x-6 xt-row-y-4">
            <div class="w-full md:w-2/12 md:self-center">
              <label class="xt-label flex-col ${classes.labelDefault()}">
                Lorem ipsum
                <div class="mt-2">
                  <div class="xt-list xt-list-3 items-center">
                    <a href="#" class="xt-button xt-link"> link #1 </a>
                    <a href="#" class="xt-button xt-link"> link #2 </a>
                  </div>
                </div>
              </label>
            </div>

            <div class="w-full md:w-10/12">
              <input type="text" class="xt-input rounded-md ${classes.inputDefault()}" aria-label="Lorem ipsum" />
            </div>
          </div>
        </div>

        <div class="w-full">
          <div class="xt-row xt-row-x-6 xt-row-y-4">
            <div class="w-full md:w-2/12 md:self-center">
              <label class="xt-label flex-col ${classes.labelDefault()}">
                Dolor sit amet
                <div class="mt-auto">
                  <div class="xt-list xt-list-3 items-center">
                    <a href="#" class="xt-button xt-link"> link #1 </a>
                    <a href="#" class="xt-button xt-link"> link #2 </a>
                  </div>
                </div>
              </label>
            </div>

            <div class="w-full md:w-10/12">
              <input type="text" class="xt-input rounded-md ${classes.inputDefault()}" aria-label="Dolor sit amet" />
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
`

export const object = {
  html: html,
}
