import React from 'react'

class Demo extends React.Component {
  render() {
    return (
      <div ref={this.ref}>
        <div className="xt-list xt-list-3 items-center">
          <a href="#"> link </a>

          <a href="#" className="text-primary-500 text-opacity-75 underline">
            {' '}
            link custom{' '}
          </a>

          <button type="button" className="xt-button xt-link">
            link button
          </button>

          <div className="xt-link">link class</div>
        </div>
      </div>
    )
  }
}

export default Demo
