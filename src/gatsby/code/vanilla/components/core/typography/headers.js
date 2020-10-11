import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<h6 class="h1">
  h1. Lorem Ipsum
</h6>

<h6 class="h2">
  h2. Lorem Ipsum
</h6>

<h6 class="h3">
  h3. Lorem Ipsum
</h6>

<h6 class="h4">
  h4. Lorem Ipsum
</h6>

<h6 class="h5">
  h5. Lorem Ipsum
</h6>

<h6 class="h6">
  h6. Lorem Ipsum
</h6>

<div class="h5 h-block rounded-md bg-gray-200 text-center">
  h5. Lorem Ipsum
</div>
`
