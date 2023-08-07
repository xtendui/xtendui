const classes = require('src/app/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="${classes.hBlock()}">Sizes</div>

    ${classes.iconSearch({ classes: '*** text-xs ***' })} ${classes.iconSearch({ classes: '*** text-base ***' })}
    ${classes.iconSearch({ classes: '*** text-xl ***' })}

    <div class="${classes.hBlock()}">Custom size and stroke</div>

    ${classes.iconSearch({ classes: '*** w-auto h-6 stroke-1 ***' })}
    ${classes.iconSearch({ classes: '*** w-auto h-10 stroke-1 ***' })}
    ${classes.iconSearch({ classes: '*** w-auto h-16 stroke-1 ***' })}
  </div>
`

export const object = {
  html: html,
}
