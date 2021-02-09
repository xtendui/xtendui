import path from 'path'
const h1Display = require('components/snippets/classes/headers').h1Display
const h1 = require('components/snippets/classes/headers').h1
const h2 = require('components/snippets/classes/headers').h2
const h3 = require('components/snippets/classes/headers').h3
const h4 = require('components/snippets/classes/headers').h4
const h5 = require('components/snippets/classes/headers').h5
const h6 = require('components/snippets/classes/headers').h6
const hBlock = require('components/snippets/classes/headers').hBlock

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="${h1Display()}">
  Lorem ipsum dolor sit amet
</div>

<p>
  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
</p>

<div class="${h1()}">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit
</div>

<p>
  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
</p>

<div class="${h2()}">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit
</div>

<p>
  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
</p>

<div class="${h3()}">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit
</div>

<p>
  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
</p>

<div class="${h4()}">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit
</div>

<p>
  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
</p>

<div class="${h5()}">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit
</div>

<p>
  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
</p>

<div class="${h6()}">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit
</div>

<p>
  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
</p>

<div class="${h6()} ${hBlock()} rounded-md text-black bg-gray-200 text-center">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit
</div>

<p>
  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
</p>
`
