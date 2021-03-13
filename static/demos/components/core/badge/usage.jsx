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
        <div className="xt-badge text-xs py-2 px-3.5 text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200">
          Lorem ipsum
        </div>
      </div>
    )
  }
}

export default Demo
