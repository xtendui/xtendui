const moduleParents = Object.values(require.cache).filter(m => m.children && m.children.includes(module))
let resolve
if (moduleParents.length) {
  resolve = moduleParents[0].resolve
}

const classes = resolve
  ? require(`${resolve}components/snippets/classes`).classes
  : require('components/snippets/classes').classes

const html = /* HTML */ `
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
