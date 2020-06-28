import React from 'react'

class DocFullscreen extends React.Component {
  render() {
    return (
      <>
        <div
          id="gatbsy_open-full-trigger"
          data-xt-toggle="{ targets: '#gatbsy_open-full', closeInside: ':scope > .btn-close', autoClose: false, scrollbar: true }"
        ></div>
        <div className="toggle-block" id="gatbsy_open-full">
          <div className="btn btn-close" aria-label="Close"></div>
          <div className="card-content" id="gatbsy_open-full-content"></div>
        </div>
      </>
    )
  }
}

export default DocFullscreen
