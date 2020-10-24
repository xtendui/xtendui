import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<h1 class="h1-display">
  Lorem ipsum dolor sit amet
</h1>

<p>
  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
</p>

<h1>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit
</h1>

<p>
  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
</p>

<h2>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit
</h2>

<p>
  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
</p>

<h3>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit
</h3>

<p>
  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
</p>

<h4>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit
</h4>

<p>
  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
</p>

<h5>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit
</h5>

<p>
  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
</p>

<h6>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit
</h6>

<p>
  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
</p>

<div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit
</div>

<h3 class="h6 sm:h5 md:h4">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit
</h6>
`
