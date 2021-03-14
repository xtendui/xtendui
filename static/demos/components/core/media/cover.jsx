import React from 'react'

class Demo extends React.Component {
  render() {
    return (
      <div ref={this.ref}>
        <div className="xt-media-container bg-gray-200 xt-ratio-37.5">
          <div className="xt-media-inner">
            <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
          </div>
        </div>
      </div>
    )
  }
}

export default Demo
