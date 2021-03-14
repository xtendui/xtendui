import React from 'react'

class Demo extends React.Component {
  render() {
    return (
      <div ref={this.ref}>
        <div className="xt-media-container bg-gray-200">
          <div className="xt-media-inner relative">
            <img className="xt-media" src="/img.svg" loading="lazy" alt="" />
          </div>
        </div>
      </div>
    )
  }
}

export default Demo
