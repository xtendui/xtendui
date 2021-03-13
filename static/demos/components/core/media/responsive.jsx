import React from 'react'

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    this.object = this.ref.current
  }

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
