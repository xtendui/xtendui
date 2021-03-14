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
        <div className="xt-row xt-row-6 demo--fade-distance">
          <div className="w-full">
            <div className="xt-card rounded-md text-sm py-6 px-7 text-black xt-links-default bg-gray-200">
              <div className="xt-h5">Lorem ipsum</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
            </div>
          </div>

          <div className="w-full">
            <div className="xt-card rounded-md text-sm py-6 px-7 text-black xt-links-default bg-gray-200">
              <div className="xt-h5">Lorem ipsum</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
            </div>
          </div>

          <div className="w-full md:w-6/12">
            <div className="xt-card rounded-md text-sm py-6 px-7 text-black xt-links-default bg-gray-200">
              <div className="xt-h5">Lorem ipsum</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
            </div>
          </div>

          <div className="w-full md:w-6/12">
            <div className="xt-card rounded-md text-sm py-6 px-7 text-black xt-links-default bg-gray-200">
              <div className="xt-h5">Lorem ipsum</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
            </div>
          </div>

          <div className="w-full md:w-6/12">
            <div className="xt-card rounded-md text-sm py-6 px-7 text-black xt-links-default bg-gray-200">
              <div className="xt-h5">Lorem ipsum</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
            </div>
          </div>

          <div className="w-full md:w-6/12">
            <div className="xt-card rounded-md text-sm py-6 px-7 text-black xt-links-default bg-gray-200">
              <div className="xt-h5">Lorem ipsum</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
            </div>
          </div>

          <div className="w-6/12 sm:w-4/12">
            <div className="xt-card rounded-md text-sm py-6 px-7 text-black xt-links-default bg-gray-200">
              <div className="xt-h5">Lorem ipsum</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
            </div>
          </div>

          <div className="w-6/12 sm:w-4/12">
            <div className="xt-card rounded-md text-sm py-6 px-7 text-black xt-links-default bg-gray-200">
              <div className="xt-h5">Lorem ipsum</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
            </div>
          </div>

          <div className="w-6/12 sm:w-4/12">
            <div className="xt-card rounded-md text-sm py-6 px-7 text-black xt-links-default bg-gray-200">
              <div className="xt-h5">Lorem ipsum</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
            </div>
          </div>

          <div className="w-6/12 sm:w-4/12">
            <div className="xt-card rounded-md text-sm py-6 px-7 text-black xt-links-default bg-gray-200">
              <div className="xt-h5">Lorem ipsum</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
            </div>
          </div>

          <div className="w-6/12 sm:w-4/12">
            <div className="xt-card rounded-md text-sm py-6 px-7 text-black xt-links-default bg-gray-200">
              <div className="xt-h5">Lorem ipsum</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
            </div>
          </div>

          <div className="w-6/12 sm:w-4/12">
            <div className="xt-card rounded-md text-sm py-6 px-7 text-black xt-links-default bg-gray-200">
              <div className="xt-h5">Lorem ipsum</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Demo
