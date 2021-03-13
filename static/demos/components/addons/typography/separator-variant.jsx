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
        Lorem ipsum <span className="xt-separator xt-separator-dash mx-2 text-primary-500"></span> dolor sit amet
        <span className="xt-separator xt-separator-slash mx-2 text-primary-500"></span> Lorem ipsum
        <span className="xt-separator xt-separator-pipe mx-2 text-primary-500"></span> dolor sit amet
        <span className="xt-separator xt-separator-point mx-2 text-primary-500"></span> Lorem ipsum
        <span className="xt-separator xt-separator-arrow mx-2 text-primary-500"></span> dolor sit amet.
      </div>
    )
  }
}

export default Demo
