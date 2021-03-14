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
        <h2>Lorem Ipsum</h2>

        <p>
          <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit
          eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna
          eget, vehicula scelerisque elit.
        </p>

        <div className="text-white xt-links-inverse mt-6 py-4 px-6 bg-primary-500">
          <h2>Lorem Ipsum</h2>

          <p>
            <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit
            eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna
            eget, vehicula scelerisque elit.
          </p>
        </div>
      </div>
    )
  }
}

export default Demo
