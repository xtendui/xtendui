import React from 'react'

const classes = require('src/gatsby/templates/snippets/classes').classes

export default class DocFullscreen extends React.Component {
  render() {
    return (
      <>
        <div id="gatsby_open-full-trigger"></div>
        <div id="gatsby_open-full" className="off:hidden out:pointer-events-none">
          <div
            className="xt-button xt-dismiss absolute z-above top-0 right-0"
            aria-label="Close"
            dangerouslySetInnerHTML={{ __html: classes.iconX() }}></div>
          <div className="xt-card-content" id="gatsby_open-full-content"></div>
        </div>
      </>
    )
  }
}
