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
        <div className="mt-7 mb-5 xt-my-auto font-sans font-black leading-none tracking-tight normal-case text-4xl md:text-5xl md:leading-none lg:text-6xl lg:leading-none">
          Lorem ipsum dolor sit amet
        </div>

        <p>
          <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
          velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
          vitae magna eget, vehicula scelerisque elit.
        </p>

        <div className="mt-7 mb-5 xt-my-auto font-sans font-bold leading-none tracking-tight normal-case text-3xl md:text-4xl md:leading-none lg:text-5xl lg:leading-none">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>

        <p>
          <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
          velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
          vitae magna eget, vehicula scelerisque elit.
        </p>

        <div className="mt-6 mb-4 xt-my-auto font-sans font-bold leading-none tracking-tight normal-case text-2xl md:text-3xl md:leading-none lg:text-4xl lg:leading-none">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>

        <p>
          <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
          velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
          vitae magna eget, vehicula scelerisque elit.
        </p>

        <div className="mt-5 mb-3 xt-my-auto font-sans font-bold leading-none tracking-tight normal-case text-xl md:text-2xl md:leading-none lg:text-3xl lg:leading-none">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>

        <p>
          <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
          velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
          vitae magna eget, vehicula scelerisque elit.
        </p>

        <div className="mt-5 mb-3 xt-my-auto font-sans font-bold leading-tight tracking-tight normal-case text-xl lg:text-2xl lg:leading-tight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>

        <p>
          <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
          velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
          vitae magna eget, vehicula scelerisque elit.
        </p>

        <div className="mt-5 mb-3 xt-my-auto font-sans font-bold leading-tight tracking-tight normal-case text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>

        <p>
          <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
          velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
          vitae magna eget, vehicula scelerisque elit.
        </p>

        <div className="mt-5 mb-3 xt-my-auto font-sans font-bold leading-tight tracking-tight normal-case text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>

        <p>
          <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
          velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
          vitae magna eget, vehicula scelerisque elit.
        </p>

        <div className="mt-5 mb-3 xt-my-auto font-sans font-bold leading-tight tracking-tight normal-case text-lg my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>

        <p>
          <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
          velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
          vitae magna eget, vehicula scelerisque elit.
        </p>
      </div>
    )
  }
}

export default Demo
