const classes = require('src/gatsby/templates/snippets/classes').classes

const buttonRadius = () => `-xl`
const buttonAnim = () =>
  `transition hover:bg-white hover:text-primary-500 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500`
const cardRadius = () => `-2xl`

const html = /* HTML */ `
  <div>
    <div class="max-w-3xl mx-auto">
      <div data-xt-toggle="{ min: 1, duration: 500 }">
        <div class="xt-row xt-row-4 md:xt-row-8">
          <div class="w-full md:w-4/12">
            <div
              class="xt-card rounded${cardRadius()} ${classes.textBlack()} ${classes.cardWhite()} bg-opacity-80 ${classes.bgBlur()}"
            >
              <nav class="xt-list xt-list-1 flex-col p-3">
                <a
                  href="#"
                  type="button"
                  class="xt-button flex-auto ${classes.groupButtonMd()} rounded${buttonRadius()} ${classes.groupButton()} ${buttonAnim()}"
                  data-xt-toggle-element
                  data-xt-hash="description"
                >
                  Description
                </a>
                <a
                  href="#"
                  type="button"
                  class="xt-button flex-auto ${classes.groupButtonMd()} rounded${buttonRadius()} ${classes.groupButton()} ${buttonAnim()}"
                  data-xt-toggle-element
                  data-xt-hash="features"
                >
                  Features
                </a>
                <a
                  href="#"
                  type="button"
                  class="xt-button flex-auto ${classes.groupButtonMd()} rounded${buttonRadius()} ${classes.groupButton()} ${buttonAnim()}"
                  data-xt-toggle-element
                  data-xt-hash="accessories"
                  >Accessories</a
                >
              </nav>
            </div>
          </div>

          <div class="w-full md:w-8/12">
            <div
              class="*** off:hidden out:pointer-events-none transition opacity-0 -translate-y-4 in:opacity-100 in:translate-y-0 out:translate-y-4 ***"
              data-xt-toggle-target
            >
              <div
                class="xt-card rounded${classes.cardRadius()} ${classes.cardSm()} ${classes.textBlack()} ${classes.cardWhite()}"
              >
                <div class="xt-h5">Description</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis purus odio, et dictum felis
                  vestibulum sed. Morbi sodales ex sed dui posuere, a tempor purus consectetur. Curabitur vitae leo at
                  magna aliquam pellentesque. Nam sed neque in risus volutpat maximus. Sed vitae enim vehicula, lacinia
                  orci at, pretium nulla. Cras tincidunt quis ipsum et luctus. Cras venenatis, justo in euismod lacinia,
                  urna leo hendrerit enim, sit amet gravida nunc lectus id augue. Nullam dolor nibh, commodo at commodo
                  eget, iaculis non diam. Ut at rhoncus massa. Sed placerat tincidunt nisl, eu consequat neque pretium
                  at. Cras et facilisis leo. Mauris justo elit, porttitor sed pellentesque vitae, imperdiet nec ante.
                  Nulla quis tempus risus, a aliquet ligula.
                </p>
              </div>
            </div>

            <div
              class="*** off:hidden out:pointer-events-none transition opacity-0 -translate-y-4 in:opacity-100 in:translate-y-0 out:translate-y-4 ***"
              data-xt-toggle-target
            >
              <div
                class="xt-card rounded${classes.cardRadius()} ${classes.cardSm()} ${classes.textBlack()} ${classes.cardWhite()}"
              >
                <div class="xt-h5">Features</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.
                </p>
              </div>
            </div>

            <div
              class="*** off:hidden out:pointer-events-none transition opacity-0 -translate-y-4 in:opacity-100 in:translate-y-0 out:translate-y-4 ***"
              data-xt-toggle-target
            >
              <div
                class="xt-card rounded${classes.cardRadius()} ${classes.cardSm()} ${classes.textBlack()} ${classes.cardWhite()}"
              >
                <div class="xt-h5">Accessories</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis purus odio, et dictum felis
                  vestibulum sed. Morbi sodales ex sed dui posuere, a tempor purus consectetur. Curabitur vitae leo at
                  magna aliquam pellentesque. Nam sed neque in risus volutpat maximus. Sed vitae enim vehicula, lacinia
                  orci at, pretium nulla. Cras tincidunt quis ipsum et luctus. Cras venenatis, justo in euismod lacinia,
                  urna leo hendrerit enim, sit amet gravida nunc lectus id augue. Nullam dolor nibh, commodo at commodo
                  eget, iaculis non diam. Ut at rhoncus massa. Sed placerat tincidunt nisl, eu consequat neque pretium
                  at. Cras et facilisis leo. Mauris justo elit, porttitor sed pellentesque vitae, imperdiet nec ante.
                  Nulla quis tempus risus, a aliquet ligula.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis purus odio, et dictum felis
                  vestibulum sed. Morbi sodales ex sed dui posuere, a tempor purus consectetur. Curabitur vitae leo at
                  magna aliquam pellentesque. Nam sed neque in risus volutpat maximus. Sed vitae enim vehicula, lacinia
                  orci at, pretium nulla. Cras tincidunt quis ipsum et luctus. Cras venenatis, justo in euismod lacinia,
                  urna leo hendrerit enim, sit amet gravida nunc lectus id augue. Nullam dolor nibh, commodo at commodo
                  eget, iaculis non diam. Ut at rhoncus massa. Sed placerat tincidunt nisl, eu consequat neque pretium
                  at. Cras et facilisis leo. Mauris justo elit, porttitor sed pellentesque vitae, imperdiet nec ante.
                  Nulla quis tempus risus, a aliquet ligula.
                </p>
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
  container: true,
  gradient: true,
}
