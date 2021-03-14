import React from 'react'

class Demo extends React.Component {
  render() {
    return (
      <div ref={this.ref}>
        <div className="xt-list xt-list-3 items-center">
          <div className="xt-media-container bg-gray-200" style="padding-bottom: 20%;"></div>

          <div className="xt-media-container bg-gray-300" style="padding-bottom: 20%;"></div>

          <div className="xt-media-container bg-gray-600" style="padding-bottom: 20%;"></div>
        </div>
      </div>
    )
  }
}

export default Demo
