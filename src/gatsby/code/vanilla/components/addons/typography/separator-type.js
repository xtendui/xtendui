import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
Lorem ipsum <span class="xt-separator xt-separator-dash mx-2"></span> dolor sit amet <span class="xt-separator xt-separator-slash mx-2"></span> Lorem ipsum <span class="xt-separator xt-separator-pipe mx-2"></span> dolor sit amet <span class="xt-separator xt-separator-point mx-2"></span> Lorem ipsum <span class="xt-separator xt-separator-arrow mx-2"></span> dolor sit amet.
`
