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
        <div className="xt-row xt-row-6">
          <div className="w-full md:w-6/12">
            <div className="xt-card rounded-md text-black xt-links-default">
              <div className="text-base">
                <div className="xt-h4">Default</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-6/12">
            <div className="xt-card rounded-md text-primary-600">
              <div className="text-base">
                <div className="xt-h4">Primary</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Demo
