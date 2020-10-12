import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<img class="icon icon-md ml-2" src="/icons/search.svg" loading="eager" alt=""/>

<img class="icon icon-md ml-2" src="/icons/x.svg" loading="eager" alt=""/>

<img class="icon icon-md ml-2" src="/icons/arrow-left.svg" loading="eager" alt=""/>

<img class="icon icon-md ml-2" src="/icons/arrow-right.svg" loading="eager" alt=""/>

<img class="icon icon-md ml-2" src="/icons/arrow-up.svg" loading="eager" alt=""/>

<img class="icon icon-md ml-2" src="/icons/arrow-down.svg" loading="eager" alt=""/>

<img class="icon icon-md ml-2" src="/icons/chevron-left.svg" loading="eager" alt=""/>

<img class="icon icon-md ml-2" src="/icons/chevron-right.svg" loading="eager" alt=""/>

<img class="icon icon-md ml-2" src="/icons/chevron-up.svg" loading="eager" alt=""/>

<img class="icon icon-md ml-2" src="/icons/chevron-down.svg" loading="eager" alt=""/>

<img class="icon icon-md ml-2" src="/icons/locate.svg" loading="eager" alt=""/>

<img class="icon icon-md ml-2" src="/icons/github.svg" loading="eager" alt=""/>

<img class="icon icon-md ml-2" src="/icons/package.svg" loading="eager" alt=""/>

<img class="icon icon-md ml-2" src="/icons/link.svg" loading="eager" alt=""/>

<img class="icon icon-md ml-2" src="/icons/code.svg" loading="eager" alt=""/>

<img class="icon icon-md ml-2" src="/icons/maximize.svg" loading="eager" alt=""/>

<img class="icon icon-md ml-2" src="/icons/external-link.svg" loading="eager" alt=""/>

<img class="icon icon-md ml-2" src="/icons/copy.svg" loading="eager" alt=""/>
`
