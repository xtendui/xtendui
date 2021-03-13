const moduleParents = Object.values(require.cache).filter(m => m.children && m.children.includes(module))
let resolve
if (moduleParents.length) {
  resolve = moduleParents[0].resolve
}

const classes = resolve
  ? require(`${resolve}components/snippets/classes`).classes
  : require('components/snippets/classes').classes

const html = /* HTML */ `
  <div id="ref--">
    <div class="xt-row xt-row-6">
      <div class="w-full md:w-6/12">
        <label class="xt-card rounded-md ${classes.cardDefaultInteractive()}">
          <div class="${classes.cardMd()}">
            <div class="xt-h4">Lorem ipsum</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
            <input type="checkbox" class="xt-check xt-checkbox rounded-md ${classes.checkDefault()}" checked disabled />
          </div>
        </label>
      </div>

      <div class="w-full md:w-6/12">
        <label class="xt-card rounded-md ${classes.cardDefaultInteractive()}">
          <div class="${classes.cardMd()}">
            <div class="xt-h4">Lorem ipsum</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
            <input type="checkbox" class="xt-check xt-checkbox rounded-md ${classes.checkDefault()}" />
          </div>
        </label>
      </div>

      <div class="w-full md:w-6/12">
        <label class="xt-card rounded-md ${classes.cardDefaultInteractive()}">
          <div class="${classes.cardMd()}">
            <div class="xt-h4">Lorem ipsum</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
            <input
              type="radio"
              class="xt-check xt-radio rounded-full ${classes.radioDefault()}"
              name="radio-card"
              checked
            />
          </div>
        </label>
      </div>

      <div class="w-full md:w-6/12">
        <label class="xt-card rounded-md ${classes.cardDefaultInteractive()}">
          <div class="${classes.cardMd()}">
            <div class="xt-h4">Lorem ipsum</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
            <input type="radio" class="xt-check xt-radio rounded-full ${classes.radioDefault()}" name="radio-card" />
          </div>
        </label>
      </div>

      <div class="w-full md:w-6/12">
        <label class="xt-card rounded-md ${classes.cardDefaultInteractive()}">
          <div class="${classes.cardMd()}">
            <div class="xt-h4">Lorem ipsum</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
            <input
              type="radio"
              class="xt-check xt-switch rounded-full ${classes.switchDefault()}"
              name="switch-card"
              checked
            />
          </div>
        </label>
      </div>

      <div class="w-full md:w-6/12">
        <label class="xt-card rounded-md ${classes.cardDefaultInteractive()}">
          <div class="${classes.cardMd()}">
            <div class="xt-h4">Lorem ipsum</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
            <input type="radio" class="xt-check xt-switch rounded-full ${classes.switchDefault()}" name="switch-card" />
          </div>
        </label>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
