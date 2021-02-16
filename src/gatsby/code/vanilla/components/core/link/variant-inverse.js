import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="bg-primary-500 py-5 px-6">
  <div class="xt-list xt-list-3 items-center text-white xt-links-inverse">

    <a href="#">
      link
    </a>

    <a href="#" class="text-white text-opacity-75 underline">
      link custom
    </a>

    <button type="button" class="xt-button xt-link">
      link button
    </button>

    <div class="xt-link">
      link class
    </div>

  </div>
</div>
`
