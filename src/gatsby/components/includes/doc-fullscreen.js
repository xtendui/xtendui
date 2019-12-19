import React from 'react'

class DocFullscreen extends React.Component {
  render() {
    return (
      <>
        <div
          id="toggle_open-full-trigger"
          data-xt-toggle="{ targets: '#toggle_open-full', closeInside: ':scope > .btn-close', classHtml: 'toggle_open-full-open', autoClose: true, scrollbar: true }"
        ></div>
        <div className="toggle-block" id="toggle_open-full">
          <div className="btn btn-close" aria-label="Close"></div>
          <div className="card-content" id="toggle_open-full-content"></div>
        </div>
      </>
    )
  }
}

export default DocFullscreen
