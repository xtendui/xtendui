const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <form class="text-sm">
      <div class="xt-row xt-row-x-6 xt-row-y-4">
        <div class="w-full">
          <label class="flex mb-3 ${classes.labelGray()}">
            Lorem ipsum
            <div class="ml-4">
              <div class="xt-list xt-list-3 items-center">
                <a href="/" class="xt-button xt-link"> link #1 </a>
                <a href="/" class="xt-button xt-link"> link #2 </a>
              </div>
            </div>
          </label>
          <input
            type="text"
            class="${classes.input()} ${classes.inputRadius()} ${classes.inputGray()}"
            aria-label="Lorem ipsum" />
        </div>

        <div class="w-full">
          <label class="flex mb-3 ${classes.labelGray()}">
            Dolor sit amet
            <div class="ml-auto">
              <div class="xt-list xt-list-3 items-center">
                <a href="/" class="xt-button xt-link"> link #1 </a>
                <a href="/" class="xt-button xt-link"> link #2 </a>
              </div>
            </div>
          </label>
          <input
            type="text"
            class="${classes.input()} ${classes.inputRadius()} ${classes.inputGray()}"
            aria-label="Dolor sit amet" />
        </div>

        <div class="w-full">
          <div class="xt-row xt-row-x-6 xt-row-y-4">
            <div class="w-full md:w-2/12 md:self-center">
              <label class="flex flex-col ${classes.labelGray()}">
                Lorem ipsum
                <div class="mt-1">
                  <div class="xt-list xt-list-3 items-center">
                    <a href="/" class="xt-button xt-link"> link #1 </a>
                    <a href="/" class="xt-button xt-link"> link #2 </a>
                  </div>
                </div>
              </label>
            </div>

            <div class="w-full md:w-10/12">
              <input
                type="text"
                class="${classes.input()} ${classes.inputRadius()} ${classes.inputGray()}"
                aria-label="Lorem ipsum" />
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
