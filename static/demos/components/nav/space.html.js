const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <nav class="xt-list *** xt-list-2 *** flex-col">
      <a
        href="#"
        type="button"
        class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
      >
        Lorem ipsum dolor sit amet
      </a>

      <a
        href="#"
        type="button"
        class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
      >
        Consectetur adipiscing elit
      </a>

      <a
        href="#"
        type="button"
        class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
        >Mauris mattis</a
      >

      <a
        href="#"
        type="button"
        class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
        >purus odio</a
      >

      <a
        href="#"
        type="button"
        class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
      >
        Et dictum felis vestibulum sed
      </a>

      <div data-xt-drop>
        <div data-xt-drop-element>
          <button
            type="button"
            class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
          >
            ${classes.iconEdit({ classes: 'xt-icon mr-2' })} Edit
          </button>

          <div class="xt-drop p-3" data-xt-drop-target>
            <div class="xt-card w-64 rounded${classes.dropCardRadius()} shadow-drop ${classes.dropCardDefault()}">
              <nav class="xt-list flex-col ${classes.groupMd()}">
                <a
                  href="#"
                  class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
                >
                  ${classes.iconCopy({ classes: 'xt-icon mr-2' })} Copy
                </a>
                <a
                  href="#"
                  class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
                >
                  ${classes.iconCode({ classes: 'xt-icon mr-2' })} Code
                </a>
                <a
                  href="#"
                  class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
                >
                  ${classes.iconMaximize({ classes: 'xt-icon mr-2' })} Full
                </a>
              </nav>
            </div>
            <div class="xt-arrow -inset-1 m-3 w-3 h-3 bg-white"></div>
          </div>
        </div>
      </div>
    </nav>
  </div>
`

export const object = {
  html: html,
}
