const classes = require('src/gatsby/templates/snippets/classes').classes

const tabsRadius = () => `-full`
const tabsAnim = () =>
  `transition hover:bg-white hover:text-primary-500 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500`

const html = /* HTML */ `
  <div class="demo--tabs-implementation-v3">
    <div class="max-w-xl mx-auto">
      <div class="*** xt-sticky ***" data-node-sticky>
        <div
          class="xt-card p-1.5 rounded${tabsRadius()} ${classes.textDefault()} ${classes.cardWhite()} bg-opacity-80 ${classes.bgBlur()}">
          <nav class="*** xt-list xt-list-1 flex-col md:flex-row md:flex-nowrap ***">
            <a
              href="#description"
              class="xt-button *** flex-auto *** ${classes.buttonSm()} rounded${tabsRadius()} ${classes.buttonUpper()} ${tabsAnim()}">
              ${classes.iconFile({ classes: 'xt-icon text-base opacity-50 mr-2' })} Description
            </a>
            <a
              href="#features"
              class="xt-button *** flex-auto *** ${classes.buttonSm()} rounded${tabsRadius()} ${classes.buttonUpper()} ${tabsAnim()}">
              ${classes.iconFiletext({ classes: 'xt-icon text-base opacity-50 mr-2' })} Features
            </a>
            <a
              href="#accessories"
              class="xt-button *** flex-auto *** ${classes.buttonSm()} rounded${tabsRadius()} ${classes.buttonUpper()} ${tabsAnim()}"
              >${classes.iconPackage({ classes: 'xt-icon text-base opacity-50 mr-2' })} Accessories</a
            >
            <a
              href="#manuals"
              type="button"
              class="xt-button *** flex-auto *** ${classes.buttonSm()} rounded${tabsRadius()} ${classes.buttonUpper()} ${tabsAnim()}"
              >${classes.iconDownload({ classes: 'xt-icon text-base opacity-50 mr-2' })} Manuals</a
            >
          </nav>
        </div>
      </div>

      <div class="mt-3" data-node-sticky-endtrigger>
        <div class="xt-card rounded${classes.cardRadius()} ${classes.textDefault()} ${classes.cardWhite()}">
          <div class="*** ${classes.cardSm()} border-t border-gray-200 ***" id="description">
            <div class="xt-h5">Description</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis purus odio, et dictum felis
              vestibulum sed. Morbi sodales ex sed dui posuere, a tempor purus consectetur. Curabitur vitae leo at magna
              aliquam pellentesque. Nam sed neque in risus volutpat maximus. Sed vitae enim vehicula, lacinia orci at,
              pretium nulla. Cras tincidunt quis ipsum et luctus. Cras venenatis, justo in euismod lacinia, urna leo
              hendrerit enim, sit amet gravida nunc lectus id augue. Nullam dolor nibh, commodo at commodo eget, iaculis
              non diam. Ut at rhoncus massa. Sed placerat tincidunt nisl, eu consequat neque pretium at. Cras et
              facilisis leo. Mauris justo elit, porttitor sed pellentesque vitae, imperdiet nec ante. Nulla quis tempus
              risus, a aliquet ligula.
            </p>
          </div>

          <div class="*** ${classes.cardSm()} border-t border-gray-200 ***" id="features">
            <div class="xt-h5">Features</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>

          <div class="*** ${classes.cardSm()} border-t border-gray-200 ***" id="accessories">
            <div class="xt-h5">Accessories</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis purus odio, et dictum felis
              vestibulum sed. Morbi sodales ex sed dui posuere, a tempor purus consectetur. Curabitur vitae leo at magna
              aliquam pellentesque. Nam sed neque in risus volutpat maximus. Sed vitae enim vehicula, lacinia orci at,
              pretium nulla. Cras tincidunt quis ipsum et luctus. Cras venenatis, justo in euismod lacinia, urna leo
              hendrerit enim, sit amet gravida nunc lectus id augue. Nullam dolor nibh, commodo at commodo eget, iaculis
              non diam. Ut at rhoncus massa. Sed placerat tincidunt nisl, eu consequat neque pretium at. Cras et
              facilisis leo. Mauris justo elit, porttitor sed pellentesque vitae, imperdiet nec ante. Nulla quis tempus
              risus, a aliquet ligula.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis purus odio, et dictum felis
              vestibulum sed. Morbi sodales ex sed dui posuere, a tempor purus consectetur. Curabitur vitae leo at magna
              aliquam pellentesque. Nam sed neque in risus volutpat maximus. Sed vitae enim vehicula, lacinia orci at,
              pretium nulla. Cras tincidunt quis ipsum et luctus. Cras venenatis, justo in euismod lacinia, urna leo
              hendrerit enim, sit amet gravida nunc lectus id augue. Nullam dolor nibh, commodo at commodo eget, iaculis
              non diam. Ut at rhoncus massa. Sed placerat tincidunt nisl, eu consequat neque pretium at. Cras et
              facilisis leo. Mauris justo elit, porttitor sed pellentesque vitae, imperdiet nec ante. Nulla quis tempus
              risus, a aliquet ligula.
            </p>
          </div>

          <div class="*** ${classes.cardSm()} border-t border-gray-200 ***" id="manuals">
            <div class="xt-h5">Manuals</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis purus odio, et dictum felis
              vestibulum sed. Morbi sodales ex sed dui posuere, a tempor purus consectetur. Curabitur vitae leo at magna
              aliquam pellentesque. Nam sed neque in risus volutpat maximus. Sed vitae enim vehicula, lacinia orci at,
              pretium nulla. Cras tincidunt quis ipsum et luctus. Cras venenatis, justo in euismod lacinia, urna leo
              hendrerit enim, sit amet gravida nunc lectus id augue. Nullam dolor nibh, commodo at commodo eget, iaculis
              non diam. Ut at rhoncus massa. Sed placerat tincidunt nisl, eu consequat neque pretium at. Cras et
              facilisis leo. Mauris justo elit, porttitor sed pellentesque vitae, imperdiet nec ante. Nulla quis tempus
              risus, a aliquet ligula.
            </p>
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
