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
            <label className="xt-card rounded-md text-black xt-links-default transform transition bg-gray-200 hover:bg-gray-300 active:bg-gray-400">
              <div className="text-base py-8 px-9">
                <div className="xt-h4">Lorem ipsum</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
                  velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
                  vitae magna eget, vehicula scelerisque elit.
                </p>
                <input type="checkbox" className="xt-check xt-checkbox rounded-md border text-primary-500 border-gray-400 bg-gray-200 transition-all" checked disabled />
              </div>
            </label>
          </div>

          <div className="w-full md:w-6/12">
            <label className="xt-card rounded-md text-black xt-links-default transform transition bg-gray-200 hover:bg-gray-300 active:bg-gray-400">
              <div className="text-base py-8 px-9">
                <div className="xt-h4">Lorem ipsum</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
                  velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
                  vitae magna eget, vehicula scelerisque elit.
                </p>
                <input type="checkbox" className="xt-check xt-checkbox rounded-md border text-primary-500 border-gray-400 bg-gray-200 transition-all" />
              </div>
            </label>
          </div>

          <div className="w-full md:w-6/12">
            <label className="xt-card rounded-md text-black xt-links-default transform transition bg-gray-200 hover:bg-gray-300 active:bg-gray-400">
              <div className="text-base py-8 px-9">
                <div className="xt-h4">Lorem ipsum</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
                  velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
                  vitae magna eget, vehicula scelerisque elit.
                </p>
                <input
                  type="radio"
                  className="xt-check xt-radio rounded-full border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                  name="radio-card"
                  checked
                />
              </div>
            </label>
          </div>

          <div className="w-full md:w-6/12">
            <label className="xt-card rounded-md text-black xt-links-default transform transition bg-gray-200 hover:bg-gray-300 active:bg-gray-400">
              <div className="text-base py-8 px-9">
                <div className="xt-h4">Lorem ipsum</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
                  velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
                  vitae magna eget, vehicula scelerisque elit.
                </p>
                <input type="radio" className="xt-check xt-radio rounded-full border text-primary-500 border-gray-400 bg-gray-200 transition-all" name="radio-card" />
              </div>
            </label>
          </div>

          <div className="w-full md:w-6/12">
            <label className="xt-card rounded-md text-black xt-links-default transform transition bg-gray-200 hover:bg-gray-300 active:bg-gray-400">
              <div className="text-base py-8 px-9">
                <div className="xt-h4">Lorem ipsum</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
                  velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
                  vitae magna eget, vehicula scelerisque elit.
                </p>
                <input
                  type="radio"
                  className="xt-check xt-switch rounded-full border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                  name="switch-card"
                  checked
                />
              </div>
            </label>
          </div>

          <div className="w-full md:w-6/12">
            <label className="xt-card rounded-md text-black xt-links-default transform transition bg-gray-200 hover:bg-gray-300 active:bg-gray-400">
              <div className="text-base py-8 px-9">
                <div className="xt-h4">Lorem ipsum</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
                  velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
                  vitae magna eget, vehicula scelerisque elit.
                </p>
                <input type="radio" className="xt-check xt-switch rounded-full border text-primary-500 border-gray-400 bg-gray-200 transition-all" name="switch-card" />
              </div>
            </label>
          </div>
        </div>
      </div>
    )
  }
}

export default Demo
