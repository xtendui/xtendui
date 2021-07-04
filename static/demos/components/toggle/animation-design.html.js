const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div
    class="xt-list xt-list-3 items-center"
    data-xt-toggle="{ elements: '[data-xt-toggle-el]', targets: '[data-xt-toggle-tr]', duration: 500 }"
  >
    <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-el>Toggle 0</button>

    <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-el>Toggle 1</button>

    <div class="*** xt-toggle *** group" data-xt-toggle-tr>
      <div class="xt-toggle-inner">
        <div
          class="*** xt-design *** rounded-full shadow *** transition duration-300 opacity-0 -translate-x-4 group-in:opacity-100 group-in:translate-x-0 group-out:translate-x-4 ***"
        ></div>
        <div class="py-2.5 px-3.5 text-xs font-semibold *** transition duration-300 opacity-0 group-in:opacity-100 ***">
          Target 0
        </div>
      </div>
    </div>

    <div class="*** xt-toggle *** group" data-xt-toggle-tr>
      <div class="xt-toggle-inner">
        <div
          class="*** xt-design *** rounded-full shadow *** transition duration-300 opacity-0 -translate-x-4 group-in:opacity-100 group-in:translate-x-0 group-out:translate-x-4 ***"
        ></div>
        <div class="py-2.5 px-3.5 text-xs font-semibold *** transition duration-300 opacity-0 group-in:opacity-100 ***">
          Target 1
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
