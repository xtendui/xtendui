import React from 'react'

class DocFullscreen extends React.Component {
  render() {
    return (
      <>
        <div id="gatsby_open-full-trigger"></div>
        <div id="gatsby_open-full" className="toggle">
          <div className="btn btn-close" aria-label="Close">
            <span className="icon-close"></span>
          </div>
          <div className="card-content" id="gatsby_open-full-content"></div>
        </div>
      </>
    )
  }
}

export default DocFullscreen
