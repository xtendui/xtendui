const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--collapse-text">
    <div class="xt-row xt-row-6">
      <div class="w-full md:w-6/12">
        <div class="xt-toggle-item">
          <div class="*** target--collapse *** mb-6 text-lg *** max-h-20 overflow-hidden transition-all ***">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis purus odio, et dictum felis
            vestibulum sed. Morbi sodales ex sed dui posuere, a tempor purus consectetur. Curabitur vitae leo at magna
            aliquam pellentesque. Nam sed neque in risus volutpat maximus. Sed vitae enim vehicula, lacinia orci at,
            pretium nulla. Cras tincidunt quis ipsum et luctus. Cras venenatis, justo in euismod lacinia, urna leo
            hendrerit enim, sit amet gravida nunc lectus id augue. Nullam dolor nibh, commodo at commodo eget, iaculis
            non diam. Ut at rhoncus massa. Sed placerat tincidunt nisl, eu consequat neque pretium at. Cras et facilisis
            leo. Mauris justo elit, porttitor sed pellentesque vitae, imperdiet nec ante. Nulla quis tempus risus, a
            aliquet ligula.
          </div>

          <button
            type="button"
            class="xt-button *** button--collapse *** ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonDefault()} group"
          >
            <span class="group-on:hidden"> Show more </span>
            <span class="hidden group-on:block"> Show less </span>
          </button>
        </div>
      </div>

      <div class="w-full md:w-6/12">
        <div class="xt-toggle-item">
          <div class="*** target--collapse *** mb-6 text-lg *** max-h-20 overflow-hidden transition-all *** *** on ***">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis purus odio, et dictum felis
            vestibulum sed. Morbi sodales ex sed dui posuere, a tempor purus consectetur. Curabitur vitae leo at magna
            aliquam pellentesque. Nam sed neque in risus volutpat maximus. Sed vitae enim vehicula, lacinia orci at,
            pretium nulla. Cras tincidunt quis ipsum et luctus. Cras venenatis, justo in euismod lacinia, urna leo
            hendrerit enim, sit amet gravida nunc lectus id augue. Nullam dolor nibh, commodo at commodo eget, iaculis
            non diam. Ut at rhoncus massa. Sed placerat tincidunt nisl, eu consequat neque pretium at. Cras et facilisis
            leo. Mauris justo elit, porttitor sed pellentesque vitae, imperdiet nec ante. Nulla quis tempus risus, a
            aliquet ligula.
          </div>

          <button
            type="button"
            class="xt-button *** button--collapse *** ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonDefault()} group"
          >
            <span class="group-on:hidden"> Show more </span>
            <span class="hidden group-on:block"> Show less </span>
          </button>
        </div>
      </div>

      <div class="w-full md:w-6/12">
        <div class="xt-toggle-item">
          <div class="*** target--collapse *** mb-6 text-lg *** max-h-20 overflow-hidden transition-all ***">
            This target is not overflowing so the custom javascript hides the element.
          </div>

          <button
            type="button"
            class="xt-button *** button--collapse *** ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonDefault()} group"
          >
            <span class="group-on:hidden"> Show more </span>
            <span class="hidden group-on:block"> Show less </span>
          </button>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
