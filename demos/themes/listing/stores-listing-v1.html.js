const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--stores-listing-v1">
    <div class="*** listing *** py-10">
      <div class="container">
        <div class="xt-row xt-row-6 xt-row-stretch">
          <div class="w-full md:w-6/12 lg:w-4/12">
            <div class="*** listing-item *** block w-full">
              <div class="*** listing-item-inner *** h-full transition ease-in-out-quad">
                <div
                  class="*** listing-item-front *** absolute inset-0 z-10 xt-card rounded${classes.cardRadius()} ${classes.textDefault()} ${classes.cardGray()}">
                  <div class="xt-media-container bg-gray-200 w-full rounded-t${classes.cardRadius()} h-40">
                    <img class="xt-media object-cover" src="/img.jpg" loading="lazy" alt="" />
                  </div>
                  <div class="${classes.cardSm()}">
                    <div class="xt-h5">Lorem Ipsum</div>
                    <address class="xt-p font-sm not-italic">Street 42, 00134 City, Nation</address>
                  </div>
                  <div class="${classes.cardSm()} mt-auto pt-0">
                    <button
                      type="button"
                      class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
                      data-node-action>
                      More info
                    </button>
                  </div>
                </div>

                <div
                  class="*** listing-item-back *** relative h-full min-h-[22rem] xt-card rounded${classes.cardRadius()} ${classes.textDefault()} ${classes.cardGray()}">
                  <button
                    type="button"
                    class="xt-button *** xt-dismiss *** absolute z-above top-0 right-0 p-5 text-2xl"
                    aria-label="Close">
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
              <div class="*** listing-item-inner *** h-full transition ease-in-out-quad">
                <div
                  class="*** listing-item-front *** absolute inset-0 z-10 xt-card rounded${classes.cardRadius()} ${classes.textDefault()} ${classes.cardGray()}">
                  <div class="xt-media-container bg-gray-200 w-full rounded-t${classes.cardRadius()} h-40">
                    <img class="xt-media object-cover" src="/img-alt.jpg" loading="lazy" alt="" />
                  </div>
                  <div class="${classes.cardSm()}">
                    <div class="xt-h5">Lorem Ipsum</div>
                    <address class="xt-p font-sm not-italic">Street Lorem Ipsum 42, 00134 City, Nation</address>
                  </div>
                  <div class="${classes.cardSm()} mt-auto pt-0">
                    <button
                      type="button"
                      class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
                      data-node-action>
                      More info
                    </button>
                  </div>
                </div>

                <div
                  class="*** listing-item-back *** relative h-full min-h-[22rem] xt-card rounded${classes.cardRadius()} ${classes.textDefault()} ${classes.cardGray()}">
                  <button
                    type="button"
                    class="xt-button *** xt-dismiss *** absolute z-above top-0 right-0 p-5 text-2xl"
                    aria-label="Close">
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
              <div class="*** listing-item-inner *** h-full transition ease-in-out-quad">
                <div
                  class="*** listing-item-front *** absolute inset-0 z-10 xt-card rounded${classes.cardRadius()} ${classes.textDefault()} ${classes.cardGray()}">
                  <div class="xt-media-container bg-gray-200 w-full rounded-t${classes.cardRadius()} h-40">
                    <img class="xt-media object-cover" src="/img.jpg" loading="lazy" alt="" />
                  </div>
                  <div class="${classes.cardSm()}">
                    <div class="xt-h5">Lorem Ipsum</div>
                    <address class="xt-p font-sm not-italic">Street Lorem Ipsum 42, 00134 City, Nation</address>
                  </div>
                  <div class="${classes.cardSm()} mt-auto pt-0">
                    <button
                      type="button"
                      class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
                      data-node-action>
                      More info
                    </button>
                  </div>
                </div>

                <div
                  class="*** listing-item-back *** relative h-full min-h-[22rem] xt-card rounded${classes.cardRadius()} ${classes.textDefault()} ${classes.cardGray()}">
                  <button
                    type="button"
                    class="xt-button *** xt-dismiss *** absolute z-above top-0 right-0 p-5 text-2xl"
                    aria-label="Close">
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
              <div class="*** listing-item-inner *** h-full transition ease-in-out-quad">
                <div
                  class="*** listing-item-front *** absolute inset-0 z-10 xt-card rounded${classes.cardRadius()} ${classes.textDefault()} ${classes.cardGray()}">
                  <div class="xt-media-container bg-gray-200 w-full rounded-t${classes.cardRadius()} h-40">
                    <img class="xt-media object-cover" src="/img-alt.jpg" loading="lazy" alt="" />
                  </div>
                  <div class="${classes.cardSm()}">
                    <div class="xt-h5">Lorem Ipsum</div>
                    <address class="xt-p font-sm not-italic">Street Lorem Ipsum 42, 00134 City, Nation</address>
                  </div>
                  <div class="${classes.cardSm()} mt-auto pt-0">
                    <button
                      type="button"
                      class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
                      data-node-action>
                      More info
                    </button>
                  </div>
                </div>

                <div
                  class="*** listing-item-back *** relative h-full min-h-[22rem] xt-card rounded${classes.cardRadius()} ${classes.textDefault()} ${classes.cardGray()}">
                  <button
                    type="button"
                    class="xt-button *** xt-dismiss *** absolute z-above top-0 right-0 p-5 text-2xl"
                    aria-label="Close">
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
              <div class="*** listing-item-inner *** h-full transition ease-in-out-quad">
                <div
                  class="*** listing-item-front *** absolute inset-0 z-10 xt-card rounded${classes.cardRadius()} ${classes.textDefault()} ${classes.cardGray()}">
                  <div class="xt-media-container bg-gray-200 w-full rounded-t${classes.cardRadius()} h-40">
                    <img class="xt-media object-cover" src="/img.jpg" loading="lazy" alt="" />
                  </div>
                  <div class="${classes.cardSm()}">
                    <div class="xt-h5">Lorem Ipsum</div>
                    <address class="xt-p font-sm not-italic">Street Lorem Ipsum 42, 00134 City, Nation</address>
                  </div>
                  <div class="${classes.cardSm()} mt-auto pt-0">
                    <button
                      type="button"
                      class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
                      data-node-action>
                      More info
                    </button>
                  </div>
                </div>

                <div
                  class="*** listing-item-back *** relative h-full min-h-[22rem] xt-card rounded${classes.cardRadius()} ${classes.textDefault()} ${classes.cardGray()}">
                  <button
                    type="button"
                    class="xt-button *** xt-dismiss *** absolute z-above top-0 right-0 p-5 text-2xl"
                    aria-label="Close">
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
