const resolve = module.parent && module.parent.resolve ? module.parent.resolve : ''
const classes = resolve ? require(resolve + 'components/snippets/classes').classes : require('components/snippets/classes').classes

const html = `
<div id="ref--toggle-animation-js-multiple">
  <div class="xt-list xt-list-3 items-center demo--toggle-animation-js-multiple">
    <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
      Toggle 0
    </button>

    <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
      Toggle 1
    </button>

    <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">
      Target 0
    </div>

    <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">
      Target 1
    </div>
  </div>
</div>
`

export const object = {
  html: html,
}
