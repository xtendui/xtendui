import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<h1>
  h1. Lorem Ipsum
</h1>

<h2>
  h2. Lorem Ipsum
</h2>

<h3>
  h3. Lorem Ipsum
</h3>

<h4>
  h4. Lorem Ipsum
</h4>

<h5>
  h5. Lorem Ipsum
</h5>

<h6>
  h6. Lorem Ipsum
</h6>

<h6>
  h6. Lorem Ipsum
</h6>

<div class="h5 h-block rounded-md bg-gray-200 text-center">
  h5. Lorem Ipsum
</div>

<h3 class="h6 sm:h5 md:h4">
  responsive. Lorem Ipsum
</h6>
`
