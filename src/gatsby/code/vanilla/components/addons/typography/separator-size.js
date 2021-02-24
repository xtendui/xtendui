import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">
  Size xs
</div>

Lorem ipsum <span class="xt-separator xt-separator-dash mx-2 text-xs"></span> dolor sit amet <span class="xt-separator xt-separator-slash mx-2 text-xs"></span> Lorem ipsum <span class="xt-separator xt-separator-pipe mx-2 text-xs"></span> dolor sit amet <span class="xt-separator xt-separator-point mx-2 text-xs"></span> Lorem ipsum <span class="xt-separator xt-separator-arrow mx-2 text-xs"></span> dolor sit amet.

<div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">
  Size xl
</div>

Lorem ipsum <span class="xt-separator xt-separator-dash mx-2 text-xl"></span> dolor sit amet <span class="xt-separator xt-separator-slash mx-2 text-xl"></span> Lorem ipsum <span class="xt-separator xt-separator-pipe mx-2 text-xl"></span> dolor sit amet <span class="xt-separator xt-separator-point mx-2 text-xl"></span> Lorem ipsum <span class="xt-separator xt-separator-arrow mx-2 text-xl"></span> dolor sit amet.
`
