import React from 'react'

const classes = require('src/gatsby/templates/snippets/classes').classes

function DocFullscreen() {
  return (
    <>
      <div id="gatsby_open-full-trigger"></div>
      <div id="gatsby_open-full" className="off:hidden out:pointer-events-none">
        <button
          type="button"
          className={`xt-button xt-dismiss absolute z-above top-0 right-0 ${classes.textInverse()} rounded-md border-primary-500 bg-primary-500 hover:text-opacity-75 hover:border-primary-600 hover:bg-primary-600`}
          aria-label="Close"
          dangerouslySetInnerHTML={{ __html: classes.iconX() }}></button>
        <div className="xt-card-content" id="gatsby_open-full-content"></div>
      </div>
    </>
  )
}

export default DocFullscreen
