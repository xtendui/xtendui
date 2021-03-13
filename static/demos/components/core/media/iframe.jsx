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
            <iframe
              className="xt-media"
              type="text/html"
              src="https://www.youtube.com/embed/hNQFjqDvPhA?autoplay=0&showinfo=0&enablejsapi=1&rel=0"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>
    )
  }
}

export default Demo
