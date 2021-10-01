const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 flex-col">
      <nav class="xt-list *** xt-list-1 *** flex-col *** max-w-xs ***">
        <a
          href="#"
          type="button"
          class="xt-button *** ${classes.groupButtonSm()} *** rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${classes.buttonTextAnim()}">
          Lorem ipsum dolor sit amet
        </a>

        <a
          href="#"
          type="button"
          class="xt-button *** ${classes.groupButtonSm()} *** rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${classes.buttonTextAnim()}">
          Consectetur adipiscing elit
        </a>

        <a
          href="#"
          type="button"
          class="xt-button *** ${classes.groupButtonSm()} *** rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${classes.buttonTextAnim()}"
          >Mauris mattis</a
        >

        <a
          href="#"
          type="button"
          class="xt-button *** ${classes.groupButtonSm()} *** rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${classes.buttonTextAnim()}"
          >Purus odio</a
        >

        <a
          href="#"
          type="button"
          class="xt-button *** ${classes.groupButtonSm()} *** rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${classes.buttonTextAnim()}">
          Et dictum felis vestibulum sed
        </a>
      </nav>

      <nav class="xt-list *** xt-list-2 *** flex-col *** max-w-sm ***">
        <a
          href="#"
          type="button"
          class="xt-button *** ${classes.groupButtonMd()} *** rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${classes.buttonTextAnim()}">
          Lorem ipsum dolor sit amet
        </a>

        <a
          href="#"
          type="button"
          class="xt-button *** ${classes.groupButtonMd()} *** rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${classes.buttonTextAnim()}">
          Consectetur adipiscing elit
        </a>

        <a
          href="#"
          type="button"
          class="xt-button *** ${classes.groupButtonMd()} *** rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${classes.buttonTextAnim()}"
          >Mauris mattis</a
        >

        <a
          href="#"
          type="button"
          class="xt-button *** ${classes.groupButtonMd()} *** rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${classes.buttonTextAnim()}"
          >Purus odio</a
        >

        <a
          href="#"
          type="button"
          class="xt-button *** ${classes.groupButtonMd()} *** rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${classes.buttonTextAnim()}">
          Et dictum felis vestibulum sed
        </a>
      </nav>

      <nav class="xt-list *** xt-list-3 *** flex-col *** max-w-md ***">
        <a
          href="#"
          type="button"
          class="xt-button *** ${classes.groupButtonLg()} *** rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${classes.buttonTextAnim()}">
          Lorem ipsum dolor sit amet
        </a>

        <a
          href="#"
          type="button"
          class="xt-button *** ${classes.groupButtonLg()} *** rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${classes.buttonTextAnim()}">
          Consectetur adipiscing elit
        </a>

        <a
          href="#"
          type="button"
          class="xt-button *** ${classes.groupButtonLg()} *** rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${classes.buttonTextAnim()}"
          >Mauris mattis</a
        >

        <a
          href="#"
          type="button"
          class="xt-button *** ${classes.groupButtonLg()} *** rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${classes.buttonTextAnim()}"
          >Purus odio</a
        >

        <a
          href="#"
          type="button"
          class="xt-button *** ${classes.groupButtonLg()} *** rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${classes.buttonTextAnim()}">
          Et dictum felis vestibulum sed
        </a>
      </nav>
    </div>
  </div>
`

export const object = {
  html: html,
}
