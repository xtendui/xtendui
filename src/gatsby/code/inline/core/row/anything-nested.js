import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<ul class="row">
  <li>
    <ul class="row">
      <li>
        <ul class="row" style="flex-direction: column">
          <li>
            Lorem ipsum dolor sit amet.
          </li>
          <li>
            consectetur adipiscing elit.
          </li>
          <li>
            Cras placerat pellentesque pulvinar.
          </li>
        </ul>
      </li>
      <li>
        consectetur adipiscing elit.
      </li>
      <li>
        Cras placerat pellentesque pulvinar.
      </li>
    </ul>
  </li>
  <li>
    <ul class="row">
      <li>
        Lorem ipsum dolor sit amet.
      </li>
      <li>
        consectetur adipiscing elit.
      </li>
      <li>
        Cras placerat pellentesque pulvinar.
      </li>
    </ul>
  </li>
</ul>
`
