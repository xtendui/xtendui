const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 flex-col">
      <nav class="xt-list *** xt-list-1 ***">
        <div class="inline-flex mr-auto">
          <a
            href="#"
            class="xt-button *** ${classes.buttonSm()} *** rounded-l${classes.groupButtonRadius()} ${classes.buttonDefault()}"
          >
            Clear
          </a>
          <a
            href="#"
            class="xt-button *** ${classes.buttonSm()} *** rounded-r${classes.groupButtonRadius()} ${classes.buttonPrimary()}"
          >
            Submit
          </a>
        </div>

        <a
          href="#"
          class="xt-button *** ${classes.buttonSm()} *** rounded${classes.buttonRadius()} ${classes.buttonDefault()}"
        >
          Back
        </a>

        <a
          href="#"
          class="xt-button *** ${classes.buttonSm()} *** rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
        >
          Edit
        </a>
      </nav>

      <nav class="xt-list *** xt-list-2 ***">
        <div class="inline-flex mr-auto">
          <a
            href="#"
            class="xt-button *** ${classes.buttonMd()} *** rounded-l${classes.groupButtonRadius()} ${classes.buttonDefault()}"
          >
            Clear
          </a>
          <a
            href="#"
            class="xt-button *** ${classes.buttonMd()} *** rounded-r${classes.groupButtonRadius()} ${classes.buttonPrimary()}"
          >
            Submit
          </a>
        </div>

        <a
          href="#"
          class="xt-button *** ${classes.buttonMd()} *** rounded${classes.buttonRadius()} ${classes.buttonDefault()}"
        >
          Back
        </a>

        <a
          href="#"
          class="xt-button *** ${classes.buttonMd()} *** rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
        >
          Edit
        </a>
      </nav>

      <nav class="xt-list *** xt-list-3 ***">
        <div class="inline-flex mr-auto">
          <a
            href="#"
            class="xt-button *** ${classes.buttonLg()} *** rounded-l${classes.groupButtonRadius()} ${classes.buttonDefault()}"
          >
            Clear
          </a>
          <a
            href="#"
            class="xt-button *** ${classes.buttonLg()} *** rounded-r${classes.groupButtonRadius()} ${classes.buttonPrimary()}"
          >
            Submit
          </a>
        </div>

        <a
          href="#"
          class="xt-button *** ${classes.buttonLg()} *** rounded${classes.buttonRadius()} ${classes.buttonDefault()}"
        >
          Back
        </a>

        <a
          href="#"
          class="xt-button *** ${classes.buttonLg()} *** rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
        >
          Edit
        </a>
      </nav>
    </div>
  </div>
`

export const object = {
  html: html,
}
