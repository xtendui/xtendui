const classes = require('src/gatsby/templates/snippets/classes').classes

const itemAnim = () => 'transition opacity-0 scale-95 in:opacity-100 in:scale-100 out:scale-105'
const tabsRadius = () => `-full`
const tabsAnim = () =>
  `transition hover:bg-white hover:text-primary-500 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500`

const html = /* HTML */ `
  <div>
    <div class="max-w-xl mx-auto">
      <div data-xt-toggle="{ min: 1, duration: 500 }">
        <div
          class="xt-card p-1.5 rounded${tabsRadius()} ${classes.textDefault()} ${classes.cardWhite()} bg-opacity-80 ${classes.bgBlur()}">
          <nav aria-label="Navigation" class="*** xt-list xt-list-1 flex-col md:flex-row md:flex-nowrap ***">
            <a
              href="/"
              type="button"
              class="xt-button *** flex-auto *** ${classes.buttonSm()} rounded${tabsRadius()} ${classes.buttonUpper()} ${tabsAnim()}"
              data-xt-toggle-element
              data-xt-hash="description">
              ${classes.iconFile({ classes: 'xt-icon text-base opacity-50 mr-2' })} Description
            </a>
            <a
              href="/"
              type="button"
              class="xt-button *** flex-auto *** ${classes.buttonSm()} rounded${tabsRadius()} ${classes.buttonUpper()} ${tabsAnim()}"
              data-xt-toggle-element
              data-xt-hash="features">
              ${classes.iconFiletext({ classes: 'xt-icon text-base opacity-50 mr-2' })} Features
            </a>
            <a
              href="/"
              type="button"
              class="xt-button *** flex-auto *** ${classes.buttonSm()} rounded${tabsRadius()} ${classes.buttonUpper()} ${tabsAnim()}"
              data-xt-toggle-element
              data-xt-hash="accessories"
              >${classes.iconPackage({ classes: 'xt-icon text-base opacity-50 mr-2' })} Accessories</a
            >
            <a
              href="/"
              type="button"
              class="xt-button *** flex-auto *** ${classes.buttonSm()} rounded${tabsRadius()} ${classes.buttonUpper()} ${tabsAnim()}"
              data-xt-toggle-element
              data-xt-hash="manuals"
              >${classes.iconDownload({ classes: 'xt-icon text-base opacity-50 mr-2' })} Manuals</a
            >
          </nav>
        </div>

        <div class="mt-3">
          <div class="*** off:hidden out:pointer-events-none ${itemAnim()} ***" data-xt-toggle-target>
            <div
              class="xt-card rounded${classes.cardRadius()} ${classes.cardSm()} ${classes.textDefault()} ${classes.cardWhite()}">
              <div class="xt-h5">Description</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis purus odio, et dictum felis
                vestibulum sed. Morbi sodales ex sed dui posuere, a tempor purus consectetur. Curabitur vitae leo at
                magna aliquam pellentesque. Nam sed neque in risus volutpat maximus. Sed vitae enim vehicula, lacinia
                orci at, pretium nulla. Cras tincidunt quis ipsum et luctus. Cras venenatis, justo in euismod lacinia,
                urna leo hendrerit enim, sit amet gravida nunc lectus id augue. Nullam dolor nibh, commodo at commodo
                eget, iaculis non diam. Ut at rhoncus massa. Sed placerat tincidunt nisl, eu consequat neque pretium at.
                Cras et facilisis leo. Mauris justo elit, porttitor sed pellentesque vitae, imperdiet nec ante. Nulla
                quis tempus risus, a aliquet ligula.
              </p>
            </div>
          </div>

          <div class="*** off:hidden out:pointer-events-none ${itemAnim()} ***" data-xt-toggle-target>
            <div
              class="xt-card rounded${classes.cardRadius()} ${classes.cardSm()} ${classes.textDefault()} ${classes.cardWhite()}">
              <div class="xt-h5">Features</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
            </div>
          </div>

          <div class="*** off:hidden out:pointer-events-none ${itemAnim()} ***" data-xt-toggle-target>
            <div
              class="xt-card rounded${classes.cardRadius()} ${classes.cardSm()} ${classes.textDefault()} ${classes.cardWhite()}">
              <div class="xt-h5">Accessories</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis purus odio, et dictum felis
                vestibulum sed. Morbi sodales ex sed dui posuere, a tempor purus consectetur. Curabitur vitae leo at
                magna aliquam pellentesque. Nam sed neque in risus volutpat maximus. Sed vitae enim vehicula, lacinia
                orci at, pretium nulla. Cras tincidunt quis ipsum et luctus. Cras venenatis, justo in euismod lacinia,
                urna leo hendrerit enim, sit amet gravida nunc lectus id augue. Nullam dolor nibh, commodo at commodo
                eget, iaculis non diam. Ut at rhoncus massa. Sed placerat tincidunt nisl, eu consequat neque pretium at.
                Cras et facilisis leo. Mauris justo elit, porttitor sed pellentesque vitae, imperdiet nec ante. Nulla
                quis tempus risus, a aliquet ligula.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis purus odio, et dictum felis
                vestibulum sed. Morbi sodales ex sed dui posuere, a tempor purus consectetur. Curabitur vitae leo at
                magna aliquam pellentesque. Nam sed neque in risus volutpat maximus. Sed vitae enim vehicula, lacinia
                orci at, pretium nulla. Cras tincidunt quis ipsum et luctus. Cras venenatis, justo in euismod lacinia,
                urna leo hendrerit enim, sit amet gravida nunc lectus id augue. Nullam dolor nibh, commodo at commodo
                eget, iaculis non diam. Ut at rhoncus massa. Sed placerat tincidunt nisl, eu consequat neque pretium at.
                Cras et facilisis leo. Mauris justo elit, porttitor sed pellentesque vitae, imperdiet nec ante. Nulla
                quis tempus risus, a aliquet ligula.
              </p>
            </div>
          </div>

          <div class="*** off:hidden out:pointer-events-none ${itemAnim()} ***" data-xt-toggle-target>
            <div
              class="xt-card rounded${classes.cardRadius()} ${classes.cardSm()} ${classes.textDefault()} ${classes.cardWhite()}">
              <div class="xt-h5">Manuals</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis purus odio, et dictum felis
                vestibulum sed. Morbi sodales ex sed dui posuere, a tempor purus consectetur. Curabitur vitae leo at
                magna aliquam pellentesque. Nam sed neque in risus volutpat maximus. Sed vitae enim vehicula, lacinia
                orci at, pretium nulla. Cras tincidunt quis ipsum et luctus. Cras venenatis, justo in euismod lacinia,
                urna leo hendrerit enim, sit amet gravida nunc lectus id augue. Nullam dolor nibh, commodo at commodo
                eget, iaculis non diam. Ut at rhoncus massa. Sed placerat tincidunt nisl, eu consequat neque pretium at.
                Cras et facilisis leo. Mauris justo elit, porttitor sed pellentesque vitae, imperdiet nec ante. Nulla
                quis tempus risus, a aliquet ligula.
              </p>
            </div>
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
