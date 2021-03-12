import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
const name = path.basename(filename, '.js')
export const demo = {
  name: name,
  dirs: dirs,
}
