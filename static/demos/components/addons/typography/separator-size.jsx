import React from 'react'

class Demo extends React.Component {
  render() {
    return (
      <div ref={this.ref}>
        <div className="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">Size xs</div>
        Lorem ipsum <span className="xt-separator xt-separator-dash mx-1 text-xs"></span> dolor sit amet
        <span className="xt-separator xt-separator-slash mx-1 text-xs"></span> Lorem ipsum
        <span className="xt-separator xt-separator-pipe mx-1 text-xs"></span> dolor sit amet
        <span className="xt-separator xt-separator-point mx-1 text-xs"></span> Lorem ipsum
        <span className="xt-separator xt-separator-arrow mx-1 text-xs"></span> dolor sit amet.
        <div className="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">Size xl</div>
        Lorem ipsum <span className="xt-separator xt-separator-dash mx-3 text-xl"></span> dolor sit amet
        <span className="xt-separator xt-separator-slash mx-3 text-xl"></span> Lorem ipsum
        <span className="xt-separator xt-separator-pipe mx-3 text-xl"></span> dolor sit amet
        <span className="xt-separator xt-separator-point mx-3 text-xl"></span> Lorem ipsum
        <span className="xt-separator xt-separator-arrow mx-3 text-xl"></span> dolor sit amet.
      </div>
    )
  }
}

export default Demo
