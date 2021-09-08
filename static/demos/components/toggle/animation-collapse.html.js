const classes = require('src/gatsby/templates/snippets/classes').classes

const toggle = () =>
  `xt-button *** w-full justify-start text-left *** ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonLower()} ${classes.buttonGray()} ${classes.buttonTextAnim()}`
const cardSize = () =>
  `py-5 px-3 *** transition opacity-0 -translate-x-4 group-in:opacity-100 group-in:translate-x-0 group-out:translate-x-4 ***`

const html = /* HTML */ `
  <div>
    <div data-xt-toggle="{ collapseHeight: 'targets', queue: false, duration: 500 }">
      <div class="*** xt-list xt-list-3 flex-col ***">
        <div>
          <a role="button" class="${toggle()} on ***" data-xt-toggle-element>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </a>

          <div
            class="*** off:hidden out:pointer-events-none overflow-hidden transition-all group ***"
            data-xt-toggle-target
          >
            <div class="xt-card ${cardSize()}">
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
            </div>
          </div>
        </div>

        <div>
          <a role="button" class="${toggle()}" data-xt-toggle-element>
            Mauris mattis purus odio, et dictum felis vestibulum sed. Morbi sodales ex sed dui posuere, a tempor purus
            consectetur.
          </a>

          <div
            class="*** off:hidden out:pointer-events-none overflow-hidden transition-all group ***"
            data-xt-toggle-target
          >
            <div class="xt-card ${cardSize()}">
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
                eget, iaculis non diam. Ut at rhoncus massa. Sed placerat tincidunt nisl, eu consequat neque pretium at.
                Cras et facilisis leo. Mauris justo elit, porttitor sed pellentesque vitae, imperdiet nec ante. Nulla
                quis tempus risus, a aliquet ligula.
              </p>
            </div>
          </div>
        </div>

        <div>
          <a href="#" type="button" class="${toggle()}" data-xt-toggle-element>
            Cras tincidunt quis ipsum et luctus. Cras venenatis, justo in euismod lacinia, urna leo hendrerit enim, sit
            amet gravida nunc lectus id augue.
          </a>

          <div
            class="*** off:hidden out:pointer-events-none overflow-hidden transition-all group ***"
            data-xt-toggle-target
          >
            <div class="xt-card ${cardSize()}">
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
}
