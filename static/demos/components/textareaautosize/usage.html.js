const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <form class="text-sm">
      <div class="xt-row xt-row-x-6 xt-row-y-4">
        <div class="w-full">
          <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Textarea autosize </label>
          <textarea
            class="${classes.input()} ${classes.textarea()} ${classes.inputRadius()} ${classes.inputGray()} overflow-hidden resize-none"
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
