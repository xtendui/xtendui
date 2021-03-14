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
        <div className="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">Align items</div>

        <div className="xt-list xt-list-3 items-center">
          <button type="button" className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
            align items<br />default <svg xmlns="http://www.w3.org/2000/svg" className="xt-icon text-xl -my-1 ml-2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>

          <button type="button" className="xt-button text-xs py-2 px-3.5 rounded-md items-center text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
            align items<br />center <svg xmlns="http://www.w3.org/2000/svg" className="xt-icon text-xl -my-1 ml-2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>

          <button type="button" className="xt-button text-xs py-2 px-3.5 rounded-md items-start text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
            align items<br />items-start <svg xmlns="http://www.w3.org/2000/svg" className="xt-icon text-xl -my-1 ml-2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>

          <button type="button" className="xt-button text-xs py-2 px-3.5 rounded-md items-end text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
            align items<br />items-end <svg xmlns="http://www.w3.org/2000/svg" className="xt-icon text-xl -my-1 ml-2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
        </div>

        <div className="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">Justify content</div>

        <div className="xt-list xt-list-3 items-center">
          <button type="button" className="xt-button text-xs py-2 px-3.5 rounded-md w-full text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
            justify content<br />default <svg xmlns="http://www.w3.org/2000/svg" className="xt-icon text-xl -my-1 ml-2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>

          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md w-full justify-start text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
            justify content<br />items-start <svg xmlns="http://www.w3.org/2000/svg" className="xt-icon text-xl -my-1 ml-2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>

          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md w-full justify-center text-center text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
            justify content<br />items-center + text-center <svg xmlns="http://www.w3.org/2000/svg" className="xt-icon text-xl -my-1 ml-2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>

          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md w-full justify-end text-right text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
            justify content<br />items-end + text-right <svg xmlns="http://www.w3.org/2000/svg" className="xt-icon text-xl -my-1 ml-2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>

          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md w-full justify-between text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
            justify content<br />between <svg xmlns="http://www.w3.org/2000/svg" className="xt-icon text-xl -my-1 ml-2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>

          <button type="button" className="xt-button text-xs py-2 px-3.5 rounded-md w-full text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
            margin<br />auto <svg xmlns="http://www.w3.org/2000/svg" className="xt-icon text-xl -my-1 ml-2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="xt-icon text-xl -my-1 ml-auto" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>
    )
  }
}

export default Demo
