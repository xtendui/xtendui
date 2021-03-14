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
        <div className="site-wrapper">
          <header className="site-header">
            <div className="xt-card text-sm py-6 px-7 text-white xt-links-inverse bg-primary-500">
              <div className="xt-h4">Header</div>
            </div>
          </header>

          <main className="site-main">
            <div className="xt-card text-sm py-6 px-7 text-black xt-links-default bg-gray-200">
              <div className="xt-h4">Main</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
                velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
                vitae magna eget, vehicula scelerisque elit.
              </p>
            </div>
          </main>

          <footer className="site-footer">
            <div className="xt-card text-sm py-6 px-7 text-white xt-links-inverse bg-primary-500">
              <div className="xt-h4">Footer</div>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}

export default Demo
