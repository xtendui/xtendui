import React from 'react'

const classes = require('src/gatsby/templates/snippets/classes').classes

function DocFullscreen() {
  return (
    <>
      <div id="gatsby_open-full-trigger"></div>
      <div id="gatsby_open-full" className="off:hidden out:pointer-events-none" aria-label="Fullscreen Demo">
        <div>
          <button
            type="button"
            id="gatsby_open-full_close"
            className={`xt-button xt-dismiss absolute z-above top-0 right-0 ${classes.textInverse()} rounded-md border-primary-500 bg-primary-500 hover:text-opacity-75 hover:border-primary-600 hover:bg-primary-600`}
            aria-label="Close"
            data-xt-tooltip-element
            dangerouslySetInnerHTML={{ __html: classes.iconX() }}></button>
          <div className="xt-tooltip xt-tooltip--gatsby p-2 group" data-xt-tooltip-target>
            <div
              className={`xt-card ${classes.tooltipSm()} rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()} transition duration-300 opacity-0 translate-y-2 group-in:opacity-100 group-in:translate-y-0`}>
              Close Fullscreen
            </div>
          </div>
        </div>
        <div className="xt-card-content" id="gatsby_open-full-content"></div>
      </div>
    </>
  )
}

export default DocFullscreen
