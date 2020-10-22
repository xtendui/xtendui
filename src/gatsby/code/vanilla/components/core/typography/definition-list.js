import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<dl>
  <dt class="font-bold">
    Lorem ipsum dolor sit amet.
  </dt>
  <dd class="mt-1 mb-3 mb-lc text-sm">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in laoreet tellus, nec commodo massa. Aenean ut ex at ex pellentesque efficitur.
  </dd>
  <dt class="font-bold">
    Lorem ipsum dolor sit amet.
  </dt>
  <dd class="mt-1 mb-3 mb-lc text-sm">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in laoreet tellus, nec commodo massa. Aenean ut ex at ex pellentesque efficitur.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in laoreet tellus, nec commodo massa. Aenean ut ex at ex pellentesque efficitur.</p>
  </dd>
</dl>

<dl class="flex flex-row flex-wrap">
  <dt class="md:w-1/5 font-bold ellipsis">
    Lorem ipsum dolor sit amet.
  </dt>
  <dd class="mt-1 mb-3 mb-lc text-sm md:mt-0 md:w-4/5 md:pl-3">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in laoreet tellus, nec commodo massa. Aenean ut ex at ex pellentesque efficitur.
  </dd>
  <dt class="md:w-1/5 font-bold">
    Lorem ipsum dolor sit amet.
  </dt>
  <dd class="mt-1 mb-3 mb-lc text-sm md:mt-0 md:w-4/5 md:pl-3">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in laoreet tellus, nec commodo massa. Aenean ut ex at ex pellentesque efficitur.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in laoreet tellus, nec commodo massa. Aenean ut ex at ex pellentesque efficitur.</p>
  </dd>
</dl>
`
