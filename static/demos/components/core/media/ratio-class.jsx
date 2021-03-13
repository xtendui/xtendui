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
        <div className="xt-media-container bg-gray-200 xt-ratio-50 md:xt-ratio-75 lg:xt-ratio-50">
          <div className="xt-media-inner">
            <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
          </div>
        </div>
      </div>
    )
  }
}

export default Demo
