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
        <div
          className="xt-tooltip p-2 in-tooltip relative inline-block"
          data-xt-tooltip="{ closeOutside: false, classSkip: false }"
        >
          <div className="relative text-xs py-2 px-3.5 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>
    )
  }
}

export default Demo
