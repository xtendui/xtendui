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
        <div className="bg-primary-500 py-5 px-6">
          <div className="xt-list xt-list-3 items-center text-white xt-links-inverse">
            <a href="#"> link </a>

            <a href="#" className="text-white text-opacity-75 underline"> link custom </a>

            <button type="button" className="xt-button xt-link">link button</button>

            <div className="xt-link">link class</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Demo
