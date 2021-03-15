import React from 'react'

class Demo extends React.Component {
  render() {
    return (
      <div ref={this.ref}>
        <nav className="breadcrumbs leading-none truncate">
          <a
            href="#"
            className="xt-button text-xs py-2 px-0 text-black font-sans font-semibold leading-snug tracking-wider uppercase hover:text-opacity-60 active:text-opacity-100 transition">
            {' '}
            Home{' '}
          </a>
          <span className="xt-separator xt-separator-slash mx-2"></span>
          <a
            href="#"
            className="xt-button text-xs py-2 px-0 text-black font-sans font-semibold leading-snug tracking-wider uppercase hover:text-opacity-60 active:text-opacity-100 transition">
            Lorem ipsum dolor sit amet
          </a>
          <span className="xt-separator xt-separator-slash mx-2"></span>
          <div className="xt-button text-xs py-2 px-0 text-black font-sans font-semibold leading-snug tracking-wider uppercase hover:text-opacity-60 active:text-opacity-100 transition pointer-events-none">
            Lorem ipsum
          </div>
        </nav>
      </div>
    )
  }
}

export default Demo
