import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
Lorem ipsum <span class="separator separator-dash mx-2"></span> dolor sit amet <span class="separator separator-slash mx-2"></span> Lorem ipsum <span class="separator separator-pipe mx-2"></span> dolor sit amet <span class="separator separator-point mx-2"></span> Lorem ipsum <span class="separator separator-arrow mx-2"></span> dolor sit amet.
`
