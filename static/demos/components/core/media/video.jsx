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
        <div className="xt-media-container bg-gray-200 xt-ratio-56.2">
          <div className="xt-media-inner">
            <video
              className="xt-media"
              poster="/placeholder-1080.jpg"
              preload="metadata"
              muted
              playsinline
              loop
              autoPlay
            >
              <source type="video/mp4" src="/placeholder-1080.mp4" />
            </video>
          </div>
        </div>
      </div>
    )
  }
}

export default Demo
