const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div
      class="xt-card ${classes.cardMd()} rounded${classes.cardRadius()} ${classes.textWhite()} ${classes.cardPrimary()}"
    >
      <div>
        <div class="${classes.hBlock()}">Text</div>

        ${classes.iconSearch()}

        <div class="${classes.hBlock()}">Primary</div>

        ${classes.iconSearch({ classes: '*** text-primary-50 ***' })}
        ${classes.iconSearch({ classes: '*** text-primary-100 ***' })}
        ${classes.iconSearch({ classes: '*** text-primary-200 ***' })}
        ${classes.iconSearch({ classes: '*** text-primary-300 ***' })}
        ${classes.iconSearch({ classes: '*** text-primary-400 ***' })}
        ${classes.iconSearch({ classes: '*** text-primary-500 ***' })}
        ${classes.iconSearch({ classes: '*** text-primary-600 ***' })}
        ${classes.iconSearch({ classes: '*** text-primary-700 ***' })}
        ${classes.iconSearch({ classes: '*** text-primary-800 ***' })}
        ${classes.iconSearch({ classes: '*** text-primary-900 ***' })}

        <div class="${classes.hBlock()}">White opacity</div>

        ${classes.iconSearch({ classes: '*** text-white text-opacity-0 ***' })}
        ${classes.iconSearch({ classes: '*** text-white text-opacity-25 ***' })}
        ${classes.iconSearch({ classes: '*** text-white text-opacity-50 ***' })}
        ${classes.iconSearch({ classes: '*** text-white text-opacity-75 ***' })}
        ${classes.iconSearch({ classes: '*** text-white text-opacity-100 ***' })}
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
