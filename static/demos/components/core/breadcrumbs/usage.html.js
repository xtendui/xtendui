const moduleParents = Object.values(require.cache).filter(m => m.children.includes(module))
let resolve
if (moduleParents.length) {
  resolve = moduleParents[0].resolve
}

const classes = resolve
  ? require(`${resolve}components/snippets/classes`).classes
  : require('components/snippets/classes').classes

const html = /* HTML */ `
  <div id="ref--">
    <nav class="breadcrumbs leading-none truncate">
      <a href="#" class="xt-button text-xs py-2 px-0 text-black ${classes.buttonText()}"> Home </a>
      <span class="xt-separator xt-separator-slash mx-2"></span>
      <a href="#" class="xt-button text-xs py-2 px-0 text-black ${classes.buttonText()}">
        Lorem ipsum dolor sit amet
      </a>
      <span class="xt-separator xt-separator-slash mx-2"></span>
      <div class="xt-button text-xs py-2 px-0 text-black ${classes.buttonText()} pointer-events-none">Lorem ipsum</div>
    </nav>
  </div>
`

export const object = {
  html: html,
}
