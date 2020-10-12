import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<img class="icon icon-md" src="/icons/search.svg" loading="eager" alt=""/>

<img class="icon icon-md" src="/icons/x.svg" loading="eager" alt=""/>

<img class="icon icon-md" src="/icons/arrow-left.svg" loading="eager" alt=""/>

<img class="icon icon-md" src="/icons/arrow-right.svg" loading="eager" alt=""/>

<img class="icon icon-md" src="/icons/chevron-left.svg" loading="eager" alt=""/>

<img class="icon icon-md" src="/icons/chevron-right.svg" loading="eager" alt=""/>
`
