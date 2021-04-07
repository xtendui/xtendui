import React from 'react'
export default function component() {
  return (
    <div>
      <p>
        Example <mark>highlight text</mark>.
      </p>

      <p>
        Example <del>deleted text</del>.
      </p>

      <p>
        Example <u>underline text</u>.
      </p>

      <p>
        Example <small>small text</small>.
      </p>

      <p>
        Example <strong>bold text</strong>.
      </p>

      <p>
        Example <em>italic text</em>.
      </p>

      <p>
        Example <code>code text</code>.
      </p>

      <p>
        Example <abbr title="Lorem Ipsum">abbreviation text</abbr>.
      </p>

      <blockquote className="mb-4 xt-mb-auto pt-4 text-center">
        <p className="xt-h4">&quot;This line rendered as blockquote title.&ldquo;</p>
        <p>This line rendered as blockquote text.</p>
        <footer className="text-sm text-gray-700">
          —This line rendered as, <cite>blockquote footer</cite>
        </footer>
      </blockquote>
    </div>
  )
}
