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
    <div class="w-full p-8 md:p-10 lg:p-12 bg-gray-200">
      <nav class="breadcrumbs leading-none truncate">
        <a href="#" class="xt-button text-xs py-2 px-0 text-black ${classes.buttonText()}"> Home </a>
        <span class="xt-separator xt-separator-slash mx-2"></span>
        <a href="#" class="xt-button text-xs py-2 px-0 text-black ${classes.buttonText()}">
          Lorem ipsum dolor sit amet
        </a>
        <span class="xt-separator xt-separator-slash mx-2"></span>
        <div class="xt-button text-xs py-2 px-0 text-black ${classes.buttonText()} pointer-events-none">
          Lorem ipsum
        </div>
      </nav>

      <h1 class="xt-h2  mt-4">Lorem ipsum dolor sit amet</h1>
    </div>
  </div>
`

export const object = {
  html: html,
}
