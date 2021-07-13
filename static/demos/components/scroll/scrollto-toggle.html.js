const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--scrollto-toggle">
    <br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br />
    <div class="max-w-xl mx-auto">
      <div class="${classes.hBlock()} text-black bg-gray-100 text-center"><code>scrollto: true</code></div>
      <div data-xt-toggle="{ collapseHeight: 'targets', queue: false, duration: 500, scrollto: true }">
        <div class="xt-list xt-list-3 justify-center">
          <a
            class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
            data-xt-toggle-element
          >
            #0
          </a>
          <a
            class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
            data-xt-toggle-element
          >
            #1
          </a>
          <a
            class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
            data-xt-toggle-element
          >
            #2
          </a>
        </div>

        <div class="mt-3">
          <div
            class="*** off:hidden out:pointer-events-none overflow-hidden transition-all ***"
            data-xt-toggle-target
            data-xt-hash="anchor-0"
          >
            <div class="*** xt-card *** ${classes.cardRadius()} ${classes.cardSm()} ${classes.cardDefault()}">
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
            data-xt-hash="anchor-1"
          >
            <div class="*** xt-card *** ${classes.cardRadius()} ${classes.cardSm()} ${classes.cardDefault()}">
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
            data-xt-hash="anchor-2"
          >
            <div class="*** xt-card *** ${classes.cardRadius()} ${classes.cardSm()} ${classes.cardDefault()}">
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
      <div class="${classes.hBlock()} text-black bg-gray-100 text-center"><code>scrollto: 'Query'</code></div>
      <div
        data-xt-toggle="{ collapseHeight: 'targets', queue: false, duration: 500, scrollto: '#demo--scrollto-toggle-query' }"
      >
        <div class="xt-list xt-list-3 justify-center">
          <a
            class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
            data-xt-toggle-element
          >
            #0a
          </a>
          <a
            class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
            data-xt-toggle-element
          >
            #1a
          </a>
          <a
            class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
            data-xt-toggle-element
          >
            #2a
          </a>
        </div>

        <div class="mt-3">
          <div
            class="*** off:hidden out:pointer-events-none overflow-hidden transition-all ***"
            data-xt-toggle-target
            data-xt-hash="anchor-0a"
          >
            <div class="*** xt-card *** ${classes.cardRadius()} ${classes.cardSm()} ${classes.cardDefault()}">
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
            data-xt-hash="anchor-1a"
          >
            <div class="*** xt-card *** ${classes.cardRadius()} ${classes.cardSm()} ${classes.cardDefault()}">
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
            data-xt-hash="anchor-2a"
          >
            <div class="*** xt-card *** ${classes.cardRadius()} ${classes.cardSm()} ${classes.cardDefault()}">
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
      <div class="${classes.hBlock()} text-black bg-gray-100 text-center"><code>scrollto: 'Type'</code></div>
      <div data-xt-toggle="{ collapseHeight: 'targets', queue: false, duration: 500, scrollto: 'elements' }">
        <div class="xt-list xt-list-3 justify-center">
          <a
            class="xt-button w-full my-3 ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
            data-xt-toggle-element
          >
            #0b
          </a>
          <div
            class="*** off:hidden out:pointer-events-none overflow-hidden transition-all ***"
            data-xt-toggle-target
            data-xt-hash="anchor-0b"
          >
            <div class="*** xt-card *** ${classes.cardRadius()} ${classes.cardSm()} ${classes.cardDefault()}">
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
            class="xt-button w-full my-3 ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
            data-xt-toggle-element
          >
            #1b
          </a>

          <div
            class="*** off:hidden out:pointer-events-none overflow-hidden transition-all ***"
            data-xt-toggle-target
            data-xt-hash="anchor-1b"
          >
            <div class="*** xt-card *** ${classes.cardRadius()} ${classes.cardSm()} ${classes.cardDefault()}">
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
            class="xt-button w-full my-3 ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
            data-xt-toggle-element
          >
            #2b
          </a>

          <div
            class="*** off:hidden out:pointer-events-none overflow-hidden transition-all ***"
            data-xt-toggle-target
            data-xt-hash="anchor-2b"
          >
            <div class="*** xt-card *** ${classes.cardRadius()} ${classes.cardSm()} ${classes.cardDefault()}">
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
      <br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br />
    </div>
  </div>
`

export const object = {
  html: html,
  container: true,
}
