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
    <button
      type="button"
      class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}"
      data-xt-drop="{ targets: '#drop--unique-1, #drop--unique-2' }"
    >
      drop
    </button>

    <div class="xt-drop p-4" id="drop--unique-1">
      <div class="xt-card w-64 py-3.5 rounded-md shadow-drop ${classes.cardWhite()}">
        <nav class="xt-list flex-col">
          <a href="#" class="xt-button text-2xs py-1.5 px-6 ${classes.buttonDefaultDrop()}">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </a>
          <button type="button" class="xt-button text-2xs py-1.5 px-6 ${classes.buttonDefaultDrop()}">Dolor sit</button>
          <button type="button" class="xt-button text-2xs py-1.5 px-6 ${classes.buttonDefaultDrop()}">Amet</button>
        </nav>
      </div>
    </div>

    <div class="xt-drop p-4" id="drop--unique-2" data-xt-position="right-end">
      <div class="xt-card w-64 rounded-md shadow-drop ${classes.cardWhite()}">
        <button type="button" class="xt-button xt-dismiss absolute top-0 right-0 p-5 text-xl" aria-label="Close">
          ${classes.iconX()}
        </button>
        <div class="${classes.cardSm()}">
          <div class="xt-h5">Lorem ipsum</div>
          <p>
            <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
            velit eu tristique mollis.
          </p>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
