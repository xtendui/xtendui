import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<ul>
  <li>
    <p><strong>Lorem ipsum dolor sit amet.</strong></p>
    <ul>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in laoreet tellus, nec commodo massa. Aenean ut ex at ex pellentesque efficitur.</li>
    </ul>
  </li>
  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in laoreet tellus, nec commodo massa. Aenean ut ex at ex pellentesque efficitur.</li>
  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in laoreet tellus, nec commodo massa. Aenean ut ex at ex pellentesque efficitur. Maecenas pulvinar mauris eget pharetra elementum.</li>
</ul>

<ol>
  <li>
    <p><strong>Lorem ipsum dolor sit amet.</strong></p>
    <ol>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in laoreet tellus, nec commodo massa. Aenean ut ex at ex pellentesque efficitur.</li>
    </ol>
  </li>
  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in laoreet tellus, nec commodo massa. Aenean ut ex at ex pellentesque efficitur.</li>
  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in laoreet tellus, nec commodo massa. Aenean ut ex at ex pellentesque efficitur. Maecenas pulvinar mauris eget pharetra elementum.</li>
</ol>
`
