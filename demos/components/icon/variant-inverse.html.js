const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="text-white xt-links-inverse py-4 px-6 bg-primary-500">
      <div class="${classes.hBlock()} text-black bg-gray-200 text-center">Text</div>

      ${classes.iconSearch()}

      <div class="${classes.hBlock()} text-black bg-gray-200 text-center">Primary</div>

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

      <div class="${classes.hBlock()} text-black bg-gray-200 text-center">White opacity</div>

      ${classes.iconSearch({ classes: '*** text-white text-opacity-0 ***' })}
      ${classes.iconSearch({ classes: '*** text-white text-opacity-25 ***' })}
      ${classes.iconSearch({ classes: '*** text-white text-opacity-50 ***' })}
      ${classes.iconSearch({ classes: '*** text-white text-opacity-75 ***' })}
      ${classes.iconSearch({ classes: '*** text-white text-opacity-100 ***' })}
    </div>
  </div>
`

export const object = {
  html: html,
}
