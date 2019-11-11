import React from 'react'

class DocFullscreen extends React.Component {
  render() {
    return (
      <>
        <div className="toggle-block" id="toggle--open-full" data-xt-toggle="{ eventLimit: '#toggle--open-full-content', classHtml: 'toggle--open-full--open' }">
          <div className="btn btn-close" aria-label="Close"></div>
          <div className="card-content" id="toggle--open-full-content"></div>
        </div>
      </>
    )
  }
}

export default DocFullscreen
