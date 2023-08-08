const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="flex-auto max-w-3xl mx-auto">
    <div class="xt-card rounded${classes.cardRadius()} ${classes.textInverse()} ${classes.cardPrimary()}">
      <div class="relative" data-xt-toggle="{ min: 1, duration: 500, queue: false }">
        <div
          class="*** ${classes.cardSm()} off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** *** transition scale-95 opacity-0 in:delay-200 in:scale-100 in:opacity-100 out:scale-105 ***"
          data-xt-toggle-target
          data-xt-group="initial">
          <div class="xt-h5 flex items-center justify-between">
            <div>Collection</div>
            <button type="button" class="hidden" data-xt-toggle-element data-xt-group="initial"></button>
          </div>

          <div class="-mx-3.5">
            <nav aria-label="Navigation" class="xt-list xt-list-1 flex-col">
              <button
                type="button"
                class="xt-button ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-between text-left ${classes.buttonTextAnim()}"
                data-xt-toggle-element
                data-xt-group="cat-0">
                Man ${classes.iconChevronRight({ classes: 'xt-icon text-xl -my-1' })}
              </button>
              <button
                type="button"
                class="xt-button ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-between text-left ${classes.buttonTextAnim()}"
                data-xt-toggle-element
                data-xt-group="cat-1">
                Woman ${classes.iconChevronRight({ classes: 'xt-icon text-xl -my-1' })}
              </button>
              <a
                href="/"
                class="xt-button ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-between text-left ${classes.buttonTextAnim()}">
                Kid
              </a>
            </nav>
          </div>
        </div>

        <div
          class="*** ${classes.cardSm()} off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** *** transition scale-95 opacity-0 in:delay-200 in:scale-100 in:opacity-100 out:scale-105 ***"
          data-xt-toggle-target
          data-xt-group="cat-0">
          <div class="xt-h5 flex items-center justify-between">
            <div>Man</div>
            <button
              type="button"
              class="xt-button -mr-3.5 ${classes.buttonSm()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonTextAnim()}"
              data-xt-toggle-element
              data-xt-group="initial">
              ${classes.iconChevronLeft({ classes: 'xt-icon mr-2 text-lg' })} Back
            </button>
          </div>

          <div class="-mx-3.5">
            <nav aria-label="Navigation" class="xt-list xt-list-1 flex-col">
              <button
                type="button"
                class="xt-button ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-between text-left ${classes.buttonTextAnim()}"
                data-xt-toggle-element
                data-xt-group="cat-0a">
                Shirt ${classes.iconChevronRight({ classes: 'xt-icon text-xl -my-1' })}
              </button>
              <button
                type="button"
                class="xt-button ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-between text-left ${classes.buttonTextAnim()}"
                data-xt-toggle-element
                data-xt-group="cat-0b">
                Pant ${classes.iconChevronRight({ classes: 'xt-icon text-xl -my-1' })}
              </button>
              <a
                href="/"
                class="xt-button ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-between text-left ${classes.buttonTextAnim()}">
                Jacket
              </a>
              <a
                href="/"
                class="xt-button ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-between text-left ${classes.buttonTextAnim()}">
                Underwear
              </a>
            </nav>
          </div>
        </div>

        <div
          class="*** ${classes.cardSm()} off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** *** transition scale-95 opacity-0 in:delay-200 in:scale-100 in:opacity-100 out:scale-105 ***"
          data-xt-toggle-target
          data-xt-group="cat-0a">
          <div class="xt-h5 flex items-center justify-between">
            <div>Man Shirt</div>
            <button
              type="button"
              class="xt-button ${classes.buttonSm()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonTextAnim()}"
              data-xt-toggle-element
              data-xt-group="cat-0">
              ${classes.iconChevronLeft({ classes: 'xt-icon mr-2 text-lg' })} Back
            </button>
          </div>

          <div class="-mx-3.5">
            <nav aria-label="Navigation" class="xt-list xt-list-1 flex-col">
              <a
                href="/"
                class="xt-button ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-between text-left ${classes.buttonTextAnim()}">
                T-Shirt
              </a>
              <a
                href="/"
                class="xt-button ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-between text-left ${classes.buttonTextAnim()}">
                Polo
              </a>
            </nav>
          </div>
        </div>

        <div
          class="*** ${classes.cardSm()} off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** *** transition scale-95 opacity-0 in:delay-200 in:scale-100 in:opacity-100 out:scale-105 ***"
          data-xt-toggle-target
          data-xt-group="cat-0b">
          <div class="xt-h5 flex items-center justify-between">
            <div>Man Pant</div>
            <button
              type="button"
              class="xt-button ${classes.buttonSm()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonTextAnim()}"
              data-xt-toggle-element
              data-xt-group="cat-0">
              ${classes.iconChevronLeft({ classes: 'xt-icon mr-2 text-lg' })} Back
            </button>
          </div>

          <div class="-mx-3.5">
            <nav aria-label="Navigation" class="xt-list xt-list-1 flex-col">
              <a
                href="/"
                class="xt-button ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-between text-left ${classes.buttonTextAnim()}">
                Jeans
              </a>
              <a
                href="/"
                class="xt-button ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-between text-left ${classes.buttonTextAnim()}">
                Short
              </a>
            </nav>
          </div>
        </div>

        <div
          class="*** ${classes.cardSm()} off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** *** transition scale-95 opacity-0 in:delay-200 in:scale-100 in:opacity-100 out:scale-105 ***"
          data-xt-toggle-target
          data-xt-group="cat-1">
          <div class="xt-h5 flex items-center justify-between">
            <div>Woman</div>
            <button
              type="button"
              class="xt-button -mr-3.5 ${classes.buttonSm()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonTextAnim()}"
              data-xt-toggle-element
              data-xt-group="initial">
              ${classes.iconChevronLeft({ classes: 'xt-icon mr-2 text-lg' })} Back
            </button>
          </div>

          <div class="-mx-3.5">
            <nav aria-label="Navigation" class="xt-list xt-list-1 flex-col">
              <a
                href="/"
                class="xt-button ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-between text-left ${classes.buttonTextAnim()}">
                Shirt
              </a>
              <a
                href="/"
                class="xt-button ${classes.groupButtonLg()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-between text-left ${classes.buttonTextAnim()}">
                Pant
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
  container: true,
  gradient: true,
}
