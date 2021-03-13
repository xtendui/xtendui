const classes = require('src/gatsby/components/snippets/classes').classes

const html = `
  <div id="ref--">
    <div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">Sizes</div>

    ${classes.iconSearch({ classes: 'text-xs' })} ${classes.iconSearch({ classes: 'text-base' })}
    ${classes.iconSearch({ classes: 'text-xl' })}

    <div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">
      Custom size and stroke
    </div>

    ${classes.iconSearch({ classes: 'w-auto h-6 stroke-1' })} ${classes.iconSearch({ classes: 'w-auto h-10 stroke-1' })}
    ${classes.iconSearch({ classes: 'w-auto h-16 stroke-1' })}
  </div>
`

export const object = {
  html: html,
}
