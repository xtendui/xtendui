const classes = require('src/app/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--googlelocator">
    <div
      class="flex flex-wrap flex-auto flex-col md:flex-row md:h-screen"
      data-xt-toggle="{ min: 1, max: 1, targets: '.googlelocator-aside-body, .googlelocator-main' }">
      <div
        class="googlelocator-aside googlelocator-aside--pickup flex flex-col w-full relative z-10 md:shadow-md md:min-h-full md:w-[20rem] lg:w-[25rem] xl:w-[30rem] h-full">
        <div class="relative p-6 border-b border-gray-100">
          <form class="text-sm">
            <div class="xt-row xt-row-x-6 xt-row-y-4">
              <div class="w-full">
                <div class="relative">
                  <div class="xt-list flex-nowrap">
                    <div class="inline-flex flex-auto">
                      <input
                        type="text"
                        class="${classes.input()} rounded-l${classes.groupButtonRadius()} ${classes.inputGray()}"
                        aria-label="Search"
                        placeholder="Search"
                        data-xt-googlelocator-search-input />
                      <button
                        type="button"
                        class="xt-button ${classes.buttonMd()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
                        data-xt-googlelocator-locate-btn>
                        ${classes.iconLocate({ classes: 'text-xl -my-1' })}
                      </button>
                      <button
                        type="button"
                        class="xt-button ${classes.buttonMd()} rounded-r${classes.groupButtonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
                        data-xt-googlelocator-search-btn>
                        ${classes.iconSearch({ classes: 'text-xl -my-1' })}
                      </button>
                    </div>
                  </div>

                  <ul
                    class="absolute z-drop top-full inset-x-0 bg-white shadow-lg off:hidden out:pointer-events-none transition opacity-0 on:opacity-100"
                    data-xt-duration="500"
                    data-xt-googlelocator-autosuggest-container></ul>
                  <template data-xt-googlelocator-autosuggest-template>
                    <li>
                      <button
                        type="button"
                        class="xt-button w-full justify-start text-left leading-tight py-2.5 px-4 border-t border-gray-300 transition hover:bg-gray-100"
                        data-xt-googlelocator-autosuggest-action>
                        <span data-xt-populate></span>
                      </button>
                    </li>
                  </template>
                </div>
              </div>

              <div class="w-full">
                <label class="${classes.checkLabel()}">
                  <input
                    type="radio"
                    aria-label="All types"
                    class="xt-check xt-radio ${classes.switchRadius()} ${classes.switchGray()}"
                    name="type-options"
                    value=""
                    data-xt-googlelocator-filter
                    checked />
                  <span class="${classes.checkContent()}">All types</span>
                </label>
              </div>

              <div class="w-full">
                <label class="${classes.checkLabel()}">
                  <input
                    type="radio"
                    aria-label="Restaurant"
                    class="xt-check xt-radio ${classes.switchRadius()} ${classes.switchGray()}"
                    name="type-options"
                    value="restaurant"
                    data-xt-googlelocator-filter />
                  <span class="${classes.checkContent()}">Restaurant</span>
                </label>
              </div>

              <div class="w-full">
                <label class="${classes.checkLabel()}">
                  <input
                    type="radio"
                    aria-label="School"
                    class="xt-check xt-radio ${classes.switchRadius()} ${classes.switchGray()}"
                    name="type-options"
                    value="school"
                    data-xt-googlelocator-filter />
                  <span class="${classes.checkContent()}">School</span>
                </label>
              </div>

              <div class="w-full">
                <label class="${classes.checkLabel()}">
                  <input
                    type="checkbox"
                    aria-label="Favourite"
                    class="xt-check xt-switch ${classes.switchRadius()} ${classes.switchGray()}"
                    name="type-fav"
                    value="fav"
                    data-xt-googlelocator-filter />
                  <span class="${classes.checkContent()}">Favourite</span>
                </label>
              </div>
            </div>
          </form>
        </div>

        <div class="flex flex-nowrap md:hidden">
          <button
            type="button"
            class="w-6/12 xt-button ${classes.buttonMd()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
            data-xt-toggle-element>
            List
          </button>
          <button
            type="button"
            class="w-6/12 xt-button ${classes.buttonMd()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()} on"
            data-xt-toggle-element>
            Map
          </button>
        </div>

        <div
          class="googlelocator-aside-body relative w-full xt-overflow-sub overflow-y-scroll md:flex-1"
          data-xt-googlelocator-results>
          <div class="*** googlelocator-result googlelocator-result--initial *** text-13 p-4 border-b border-gray-100">
            Insert your position and find a place near you
          </div>

          <div class="*** googlelocator-result googlelocator-result--error *** text-13 p-4 border-b border-gray-100">
            Request timed out, retry
          </div>

          <div class="*** googlelocator-result googlelocator-result--noplace *** text-13 p-4 border-b border-gray-100">
            Not a valid place
          </div>

          <div class="*** googlelocator-result googlelocator-result--empty *** text-13 p-4 border-b border-gray-100">
            No place found
          </div>

          <div class="*** googlelocator-result googlelocator-result--founds *** text-13 p-4 border-b border-gray-100">
            <span data-xt-googlelocator-results-found></span>
            places found
          </div>

          <div data-xt-googlelocator-items-container>
            <template data-xt-googlelocator-items-template>
              <div
                class="googlelocator-item p-4 cursor-pointer border-b border-gray-100 transition in:bg-primary-500/5 active:bg-primary-500/5"
                tabindex="-1">
                <div class="xt-list xt-list-2 flex-nowrap items-center justify-between">
                  <div class="*** googlelocator-item-content *** text-13 leading-relaxed">
                    <div
                      class="mb-2 xt-mb-auto font-bold leading-none tracking-tight text-xl"
                      data-xt-populate="name"></div>
                    <address class="not-italic" data-xt-populate="address"></address>
                    <div data-xt-populate="additional"></div>
                  </div>
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener"
                    class="text-12 uppercase xt-list xt-list-2 flex-col items-center"
                    aria-label="directions"
                    data-xt-populate="direction">
                    ${classes.iconLocate({ classes: 'text-xl -my-1' })}
                    <span data-xt-populate="distance"></span>
                  </a>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>

      <div
        class="googlelocator-main relative flex-auto min-h-full md:absolute md:inset-0 md:pl-[20rem] lg:pl-[25rem] xl:pl-[30rem]">
        <div class="relative w-full h-full max-md:h-[400px]">
          <div class="w-full h-full" data-xt-googlelocator-map></div>

          <button
            type="button"
            class="absolute z-10 top-4 left-4 xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
            data-xt-googlelocator-repeat-btn>
            Search in this area
          </button>
        </div>
      </div>

      <div
        class="${classes.loader()} bg-white bg-opacity-75 off:hidden out:pointer-events-none z-10"
        data-xt-googlelocator-loader>
        <span class="${classes.spinner()} w-6 h-6 text-primary-500">
          ${classes.svgSpinner({ classes: 'animate-xt-spinner' })}
        </span>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
