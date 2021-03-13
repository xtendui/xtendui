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
        <div className="demo--parallax-range">
          <div className="box box-0 bg-primary-500 w-24 h-24 my-96"></div>
        </div>
      </div>
    )
  }
}

export default Demo
