import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-default list-space-2 items-center text-inverse"
  style="padding: 1rem 1.5rem; background: #0078ff;">

  <a href="#">
    link inverse
  </a>

  <a href="#" class="link link-none">
    link inverse none
  </a>

  <div class="list list-default list-space-2 items-center text-default"
    style="padding: 1rem 1.5rem; background: #ffffff;">

    <a href="#">
      link default
    </a>

    <a href="#" class="link link-none">
      link default none
    </a>

  </div>

</div>
`
