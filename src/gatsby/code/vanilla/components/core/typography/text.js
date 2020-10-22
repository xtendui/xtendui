import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<p>Example <mark>highlight text</mark>.</p>

<p>Example <del>deleted text</del>.</p>

<p>Example <u>underline text</u>.</p>

<p>Example <small>small text</small>.</p>

<p>Example <strong>bold text</strong>.</p>

<p>Example <em>italic text</em>.</p>

<p>Example <code>code text</code>.</p>

<p>Example <abbr title="Lorem Ipsum">abbreviation text</abbr>.</p>

<blockquote class="text-center">
  <p class="h4">"This line rendered as blockquote title."</p>
  <p>This line rendered as blockquote text.</p>
  <footer class="text-sm text-gray-700">—This line rendered as, <cite>blockquote footer</cite></footer>
</blockquote>
`
