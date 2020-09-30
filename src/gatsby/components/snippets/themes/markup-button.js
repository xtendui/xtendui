const btnDefault = require('components/snippets/classes/btn-default').default
const btnPrimary = require('components/snippets/classes/btn-primary').default

export default () => {
  return `
<div class="list list-space-2 items-center">

  <button type="button" class="btn btn-md ${btnDefault()}">
    button
  </button>

  <button type="button" class="btn btn-md ${btnPrimary()}">
    button primary
  </button>

  <button type="button" class="btn btn-md">
    button text
  </button>

  <button type="button" class="btn btn-md link">
    button link
  </button>

</div>
`
}
