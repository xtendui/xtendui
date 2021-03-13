import React from 'react'

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    this.object = this.ref.current
  }

  componentWillUnmount() {}

  render() {
    return (
      <div ref={this.ref}>
        <div className="demo--parallax-multiple">
          <h1 className="xt-h1 h-screen">Scroll down</h1>

          <div className="box box-0 bg-primary-500 w-24 h-24"></div>

          <h1 className="xt-h1 h-screen">Scroll up</h1>
        </div>
      </div>
    )
  }
}

export default Demo
