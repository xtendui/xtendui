import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<img class="icon icon-md" src="/icons/icon-search.svg" loading="eager" alt=""/>

<img class="icon icon-md" src="/icons/icon-close.svg" loading="eager" alt=""/>

<img class="icon icon-md" src="/icons/icon-arrow-left.svg" loading="eager" alt=""/>

<img class="icon icon-md" src="/icons/icon-arrow-right.svg" loading="eager" alt=""/>

<img class="icon icon-md" src="/icons/icon-chevron-left.svg" loading="eager" alt=""/>

<img class="icon icon-md" src="/icons/icon-chevron-right.svg" loading="eager" alt=""/>
`
