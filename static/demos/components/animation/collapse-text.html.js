const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-row xt-row-6">
      <div class="w-full md:w-6/12">
        <div id="demo--collapse-text-target" class="mb-6 text-lg h-20 ** overflow-hidden transition-all **">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis purus odio, et dictum felis vestibulum
          sed. Morbi sodales ex sed dui posuere, a tempor purus consectetur. Curabitur vitae leo at magna aliquam
          pellentesque. Nam sed neque in risus volutpat maximus. Sed vitae enim vehicula, lacinia orci at, pretium
          nulla. Cras tincidunt quis ipsum et luctus. Cras venenatis, justo in euismod lacinia, urna leo hendrerit enim,
          sit amet gravida nunc lectus id augue. Nullam dolor nibh, commodo at commodo eget, iaculis non diam. Ut at
          rhoncus massa. Sed placerat tincidunt nisl, eu consequat neque pretium at. Cras et facilisis leo. Mauris justo
          elit, porttitor sed pellentesque vitae, imperdiet nec ante. Nulla quis tempus risus, a aliquet ligula.
        </div>

        <button
          type="button"
          class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonDefault()} group"
          data-xt-toggle="{ targets: '#demo--collapse-text-target', collapseHeight: 'targets', duration: 500 }"
        >
          <span class="group-on:hidden"> Show more </span>
          <span class="hidden group-on:block"> Show less </span>
        </button>
      </div>

      <div class="w-full md:w-6/12">
        <div id="demo--collapse-text-on-target" class="mb-6 text-lg h-20 ** overflow-hidden transition-all ** ** on **">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis purus odio, et dictum felis vestibulum
          sed. Morbi sodales ex sed dui posuere, a tempor purus consectetur. Curabitur vitae leo at magna aliquam
          pellentesque. Nam sed neque in risus volutpat maximus. Sed vitae enim vehicula, lacinia orci at, pretium
          nulla. Cras tincidunt quis ipsum et luctus. Cras venenatis, justo in euismod lacinia, urna leo hendrerit enim,
          sit amet gravida nunc lectus id augue. Nullam dolor nibh, commodo at commodo eget, iaculis non diam. Ut at
          rhoncus massa. Sed placerat tincidunt nisl, eu consequat neque pretium at. Cras et facilisis leo. Mauris justo
          elit, porttitor sed pellentesque vitae, imperdiet nec ante. Nulla quis tempus risus, a aliquet ligula.
        </div>

        <button
          type="button"
          class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonDefault()} group"
          data-xt-toggle="{ targets: '#demo--collapse-text-on-target', collapseHeight: 'targets', duration: 500 }"
        >
          <span class="group-on:hidden"> Show more </span>
          <span class="hidden group-on:block"> Show less </span>
        </button>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
