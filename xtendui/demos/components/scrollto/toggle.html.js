const classes = require('src/app/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--scrollto-toggle">
    <br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br />
    <div class="max-w-xl mx-auto">
      <div class="${classes.hBlock()}"><code>scrollto: true</code> and <code>scrolltoInit: true</code></div>
      <div
        data-xt-toggle="{ collapseHeight: 'targets', min: 1, queue: false, duration: 500, scrollto: true, scrolltoInit: true }">
        <div class="xt-list xt-list-3 justify-center">
          <a
            role="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
            data-xt-toggle-element>
            #0
          </a>
          <a
            role="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
            data-xt-toggle-element>
            #1
          </a>
          <a
            role="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
            data-xt-toggle-element>
            #2
          </a>
        </div>

        <div class="mt-3">
          <div
            class="*** off:hidden out:pointer-events-none overflow-hidden transition-all ***"
            data-xt-toggle-target
            data-xt-hash="anchor-0">
            <div
              class="*** xt-card *** rounded${classes.cardRadius()} ${classes.cardSm()} ${classes.textDefault()} ${classes.cardGray()}">
              <div class="xt-h5">#0</div>
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
                orci at, pretium nulla.
              </p>
            </div>
          </div>

          <div
            class="*** off:hidden out:pointer-events-none overflow-hidden transition-all ***"
            data-xt-toggle-target
            data-xt-hash="anchor-1">
            <div
              class="*** xt-card *** rounded${classes.cardRadius()} ${classes.cardSm()} ${classes.textDefault()} ${classes.cardGray()}">
              <div class="xt-h5">#1</div>
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

          <div
            class="*** off:hidden out:pointer-events-none overflow-hidden transition-all ***"
            data-xt-toggle-target
            data-xt-hash="anchor-2">
            <div
              class="*** xt-card *** rounded${classes.cardRadius()} ${classes.cardSm()} ${classes.textDefault()} ${classes.cardGray()}">
              <div class="xt-h5">#2</div>
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
        </div>
      </div>
    </div>
    <br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br />
    <div class="max-w-xl mx-auto" id="demo--scrollto-toggle-query">
      <div class="${classes.hBlock()}"><code>scrollto: Query</code></div>
      <div
        data-xt-toggle="{ collapseHeight: 'targets', min: 1, queue: false, duration: 500, scrollto: '#demo--scrollto-toggle-query' }">
        <div class="xt-list xt-list-3 justify-center">
          <a
            role="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
            data-xt-toggle-element>
            #0a
          </a>
          <a
            role="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
            data-xt-toggle-element>
            #1a
          </a>
          <a
            role="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
            data-xt-toggle-element>
            #2a
          </a>
        </div>

        <div class="mt-3">
          <div
            class="*** off:hidden out:pointer-events-none overflow-hidden transition-all ***"
            data-xt-toggle-target
            data-xt-hash="anchor-0a">
            <div
              class="*** xt-card *** rounded${classes.cardRadius()} ${classes.cardSm()} ${classes.textDefault()} ${classes.cardGray()}">
              <div class="xt-h5">#0a</div>
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
                orci at, pretium nulla.
              </p>
            </div>
          </div>

          <div
            class="*** off:hidden out:pointer-events-none overflow-hidden transition-all ***"
            data-xt-toggle-target
            data-xt-hash="anchor-1a">
            <div
              class="*** xt-card *** rounded${classes.cardRadius()} ${classes.cardSm()} ${classes.textDefault()} ${classes.cardGray()}">
              <div class="xt-h5">#1a</div>
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

          <div
            class="*** off:hidden out:pointer-events-none overflow-hidden transition-all ***"
            data-xt-toggle-target
            data-xt-hash="anchor-2a">
            <div
              class="*** xt-card *** rounded${classes.cardRadius()} ${classes.cardSm()} ${classes.textDefault()} ${classes.cardGray()}">
              <div class="xt-h5">#2a</div>
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
        </div>
      </div>
    </div>
    <br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br />
    <div class="max-w-xl mx-auto">
      <div class="${classes.hBlock()}"><code>scrollto: Type</code></div>
      <div data-xt-toggle="{ collapseHeight: 'targets', min: 1, queue: false, duration: 500, scrollto: 'elements' }">
        <div class="xt-list xt-list-3 justify-center">
          <a
            role="button"
            class="xt-button w-full my-3 ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
            data-xt-toggle-element>
            #0b
          </a>
          <div
            class="*** off:hidden out:pointer-events-none overflow-hidden transition-all ***"
            data-xt-toggle-target
            data-xt-hash="anchor-0b">
            <div
              class="*** xt-card *** rounded${classes.cardRadius()} ${classes.cardSm()} ${classes.textDefault()} ${classes.cardGray()}">
              <div class="xt-h5">#0b</div>
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
                orci at, pretium nulla.
              </p>
            </div>
          </div>

          <a
            role="button"
            class="xt-button w-full my-3 ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
            data-xt-toggle-element>
            #1b
          </a>

          <div
            class="*** off:hidden out:pointer-events-none overflow-hidden transition-all ***"
            data-xt-toggle-target
            data-xt-hash="anchor-1b">
            <div
              class="*** xt-card *** rounded${classes.cardRadius()} ${classes.cardSm()} ${classes.textDefault()} ${classes.cardGray()}">
              <div class="xt-h5">#1b</div>
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

          <a
            role="button"
            class="xt-button w-full my-3 ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
            data-xt-toggle-element>
            #2b
          </a>

          <div
            class="*** off:hidden out:pointer-events-none overflow-hidden transition-all ***"
            data-xt-toggle-target
            data-xt-hash="anchor-2b">
            <div
              class="*** xt-card *** rounded${classes.cardRadius()} ${classes.cardSm()} ${classes.textDefault()} ${classes.cardGray()}">
              <div class="xt-h5">#2b</div>
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
        </div>
      </div>
    </div>
    <br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br />
  </div>
`

export const object = {
  html: html,
  container: true,
}
