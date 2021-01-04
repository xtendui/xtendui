import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-2">

  <img class="icon icon-md" src="/icons/search.svg" loading="lazy" alt=""/>

  <img class="icon icon-md" src="/icons/x.svg" loading="lazy" alt=""/>

  <img class="icon icon-md" src="/icons/arrow-left.svg" loading="lazy" alt=""/>

  <img class="icon icon-md" src="/icons/arrow-right.svg" loading="lazy" alt=""/>

  <img class="icon icon-md" src="/icons/arrow-up.svg" loading="lazy" alt=""/>

  <img class="icon icon-md" src="/icons/arrow-down.svg" loading="lazy" alt=""/>

  <img class="icon icon-md" src="/icons/chevron-left.svg" loading="lazy" alt=""/>

  <img class="icon icon-md" src="/icons/chevron-right.svg" loading="lazy" alt=""/>

  <img class="icon icon-md" src="/icons/chevron-up.svg" loading="lazy" alt=""/>

  <img class="icon icon-md" src="/icons/chevron-down.svg" loading="lazy" alt=""/>

  <img class="icon icon-md" src="/icons/locate.svg" loading="lazy" alt=""/>

  <img class="icon icon-md" src="/icons/github.svg" loading="lazy" alt=""/>

  <img class="icon icon-md" src="/icons/package.svg" loading="lazy" alt=""/>

  <img class="icon icon-md" src="/icons/link.svg" loading="lazy" alt=""/>

  <img class="icon icon-md" src="/icons/code.svg" loading="lazy" alt=""/>

  <img class="icon icon-md" src="/icons/maximize.svg" loading="lazy" alt=""/>

  <img class="icon icon-md" src="/icons/external-link.svg" loading="lazy" alt=""/>

  <img class="icon icon-md" src="/icons/copy.svg" loading="lazy" alt=""/>

</div>
`
