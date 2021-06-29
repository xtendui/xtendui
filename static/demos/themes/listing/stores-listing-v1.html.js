const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--stores-listing-v1">
    <div class="*** listing *** py-10">
      <div class="container">
        <div class="xt-row xt-row-6 xt-row-stretch">
          <div class="w-full md:w-6/12 lg:w-4/12">
            <div class="*** listing-item *** block w-full">
              <div class="*** listing-item-inner *** h-full">
                <div
                  class="*** listing-item-front *** absolute inset-0 z-10 xt-card ${classes.cardRadius()} ${classes.cardDefault()}"
                >
                  <div class="xt-media-container bg-gray-500 w-full rounded-t-md h-40">
                    <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                  </div>
                  <div class="${classes.cardSm()}">
                    <div class="xt-h5">Lorem Ipsum</div>
                    <address class="xt-p font-sm not-italic">Street 42, 00134 City, Nation</address>
                  </div>
                  <div class="${classes.cardSm()} mt-auto pt-0">
                    <button
                      type="button"
                      class="listing-action xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
                    >
                      More info
                    </button>
                  </div>
                </div>

                <div
                  class="*** listing-item-back *** relative h-full xt-card ${classes.cardRadius()} ${classes.cardDefault()}"
                >
                  <button
                    type="button"
                    class="xt-button *** xt-dismiss *** absolute z-last top-0 right-0 p-5 text-2xl"
                    aria-label="Close"
                  >
                    ${classes.iconX()}
                  </button>
                  <div class="${classes.cardSm()}">
                    <div class="xt-h5">Contacts</div>
                    <div class="xt-p font-sm">
                      <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a><br />
                      <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a><br />
                    </div>
                    <div class="xt-h5">Timetable</div>
                    <div class="xt-p font-sm">
                      <strong>Monday:</strong> 15:30–19:30<br />
                      <strong>Tuesday:</strong> 10:00–13:00, 15:30–19:30<br />
                      <strong>Wednesday:</strong> 10:00–13:00, 15:30–19:30<br />
                      <strong>Thursday:</strong> 10:00–13:00, 15:30–19:30<br />
                      <strong>Friday:</strong> 10:00–13:00, 15:30–19:30<br />
                      <strong>Saturday:</strong> 10:00–19:30<br />
                      <strong>Sunday:</strong> 10:00–13:00, 15:30–19:30
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full md:w-6/12 lg:w-4/12">
            <div class="*** listing-item *** block w-full">
              <div class="*** listing-item-inner *** h-full">
                <div
                  class="*** listing-item-front *** absolute inset-0 z-10 xt-card ${classes.cardRadius()} ${classes.cardDefault()}"
                >
                  <div class="xt-media-container bg-gray-500 w-full rounded-t-md h-40">
                    <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                  </div>
                  <div class="${classes.cardSm()}">
                    <div class="xt-h5">Lorem Ipsum</div>
                    <address class="xt-p font-sm not-italic">Street Lorem Ipsum 42, 00134 City, Nation</address>
                  </div>
                  <div class="${classes.cardSm()} mt-auto pt-0">
                    <button
                      type="button"
                      class="listing-action xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
                    >
                      More info
                    </button>
                  </div>
                </div>

                <div
                  class="*** listing-item-back *** relative h-full xt-card ${classes.cardRadius()} ${classes.cardDefault()}"
                >
                  <button
                    type="button"
                    class="xt-button *** xt-dismiss *** absolute z-last top-0 right-0 p-5 text-2xl"
                    aria-label="Close"
                  >
                    ${classes.iconX()}
                  </button>
                  <div class="${classes.cardSm()}">
                    <div class="xt-h5">Contacts</div>
                    <div class="xt-p font-sm">
                      <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a><br />
                      <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a><br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full md:w-6/12 lg:w-4/12">
            <div class="*** listing-item *** block w-full">
              <div class="*** listing-item-inner *** h-full">
                <div
                  class="*** listing-item-front *** absolute inset-0 z-10 xt-card ${classes.cardRadius()} ${classes.cardDefault()}"
                >
                  <div class="xt-media-container bg-gray-500 w-full rounded-t-md h-40">
                    <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                  </div>
                  <div class="${classes.cardSm()}">
                    <div class="xt-h5">Lorem Ipsum</div>
                    <address class="xt-p font-sm not-italic">Street Lorem Ipsum 42, 00134 City, Nation</address>
                  </div>
                  <div class="${classes.cardSm()} mt-auto pt-0">
                    <button
                      type="button"
                      class="listing-action xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
                    >
                      More info
                    </button>
                  </div>
                </div>

                <div
                  class="*** listing-item-back *** relative h-full xt-card ${classes.cardRadius()} ${classes.cardDefault()}"
                >
                  <button
                    type="button"
                    class="xt-button *** xt-dismiss *** absolute z-last top-0 right-0 p-5 text-2xl"
                    aria-label="Close"
                  >
                    ${classes.iconX()}
                  </button>
                  <div class="${classes.cardSm()}">
                    <div class="xt-h5">Contacts</div>
                    <div class="xt-p font-sm">
                      <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a><br />
                      <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a><br />
                    </div>
                    <div class="xt-h5">Timetable</div>
                    <div class="xt-p font-sm">
                      <strong>Monday:</strong> 15:30–19:30<br />
                      <strong>Tuesday:</strong> 10:00–13:00, 15:30–19:30<br />
                      <strong>Wednesday:</strong> 10:00–13:00, 15:30–19:30<br />
                      <strong>Thursday:</strong> 10:00–13:00, 15:30–19:30<br />
                      <strong>Friday:</strong> 10:00–13:00, 15:30–19:30<br />
                      <strong>Saturday:</strong> 10:00–19:30<br />
                      <strong>Sunday:</strong> 10:00–13:00, 15:30–19:30
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full md:w-6/12 lg:w-4/12">
            <div class="*** listing-item *** block w-full">
              <div class="*** listing-item-inner *** h-full">
                <div
                  class="*** listing-item-front *** absolute inset-0 z-10 xt-card ${classes.cardRadius()} ${classes.cardDefault()}"
                >
                  <div class="xt-media-container bg-gray-500 w-full rounded-t-md h-40">
                    <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                  </div>
                  <div class="${classes.cardSm()}">
                    <div class="xt-h5">Lorem Ipsum</div>
                    <address class="xt-p font-sm not-italic">Street Lorem Ipsum 42, 00134 City, Nation</address>
                  </div>
                  <div class="${classes.cardSm()} mt-auto pt-0">
                    <button
                      type="button"
                      class="listing-action xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
                    >
                      More info
                    </button>
                  </div>
                </div>

                <div
                  class="*** listing-item-back *** relative h-full xt-card ${classes.cardRadius()} ${classes.cardDefault()}"
                >
                  <button
                    type="button"
                    class="xt-button *** xt-dismiss *** absolute z-last top-0 right-0 p-5 text-2xl"
                    aria-label="Close"
                  >
                    ${classes.iconX()}
                  </button>
                  <div class="${classes.cardSm()}">
                    <div class="xt-h5">Contacts</div>
                    <div class="xt-p font-sm">
                      <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a><br />
                      <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a><br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full md:w-6/12 lg:w-4/12">
            <div class="*** listing-item *** block w-full">
              <div class="*** listing-item-inner *** h-full">
                <div
                  class="*** listing-item-front *** absolute inset-0 z-10 xt-card ${classes.cardRadius()} ${classes.cardDefault()}"
                >
                  <div class="xt-media-container bg-gray-500 w-full rounded-t-md h-40">
                    <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                  </div>
                  <div class="${classes.cardSm()}">
                    <div class="xt-h5">Lorem Ipsum</div>
                    <address class="xt-p font-sm not-italic">Street Lorem Ipsum 42, 00134 City, Nation</address>
                  </div>
                  <div class="${classes.cardSm()} mt-auto pt-0">
                    <button
                      type="button"
                      class="listing-action xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
                    >
                      More info
                    </button>
                  </div>
                </div>

                <div
                  class="*** listing-item-back *** relative h-full xt-card ${classes.cardRadius()} ${classes.cardDefault()}"
                >
                  <button
                    type="button"
                    class="xt-button *** xt-dismiss *** absolute z-last top-0 right-0 p-5 text-2xl"
                    aria-label="Close"
                  >
                    ${classes.iconX()}
                  </button>
                  <div class="${classes.cardSm()}">
                    <div class="xt-h5">Contacts</div>
                    <div class="xt-p font-sm">
                      <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a><br />
                      <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a><br />
                    </div>
                    <div class="xt-h5">Timetable</div>
                    <div class="xt-p font-sm">
                      <strong>Monday:</strong> 15:30–19:30<br />
                      <strong>Tuesday:</strong> 10:00–13:00, 15:30–19:30<br />
                      <strong>Wednesday:</strong> 10:00–13:00, 15:30–19:30<br />
                      <strong>Thursday:</strong> 10:00–13:00, 15:30–19:30<br />
                      <strong>Friday:</strong> 10:00–13:00, 15:30–19:30<br />
                      <strong>Saturday:</strong> 10:00–19:30<br />
                      <strong>Sunday:</strong> 10:00–13:00, 15:30–19:30
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
