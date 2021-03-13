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
    <form class="text-sm">
      <div class="xt-row xt-row-x-6 xt-row-y-4">
        <div class="w-full">
          <label class="xt-label mb-3 ${classes.labelDefault()}"> Textarea autosize </label>
          <textarea
            class="xt-input xt-textarea rounded-md ${classes.inputDefault()} overflow-hidden resize-none"
            aria-label="Textarea autosize"
            data-xt-textareaautosize
          ></textarea>
        </div>
      </div>
    </form>
  </div>
`

export const object = {
  html: html,
}
