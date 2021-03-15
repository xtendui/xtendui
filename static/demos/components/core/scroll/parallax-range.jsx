import React from 'react'

class Demo extends React.Component {
  render() {
    return (
      <div ref={this.ref}>
        <div className="demo--parallax-range">
          <div className="box box-0 bg-primary-500 w-24 h-24 my-96"></div>
        </div>
      </div>
    )
  }
}

export default Demo
