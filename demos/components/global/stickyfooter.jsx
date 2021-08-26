import React from 'react'
export default function demo() {
  return (
    <div className="demo--stickyfooter-react">
      <div className="*** flex flex-col xt-min-h-screen ***">
        <header>
          <div className="xt-card p-6 sm:p-8 text-sm text-white xt-links-inverse bg-primary-500">
            <div className="xt-h4">Header</div>
          </div>
        </header>

        <main className="*** flex flex-col flex-auto ***">
          <div className="xt-card p-6 sm:p-8 text-sm text-gray-900 xt-links-default bg-gray-100">
            <div className="xt-h4">Main</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
        </main>

        <footer>
          <div className="xt-card p-6 sm:p-8 text-sm text-white xt-links-inverse bg-primary-500">
            <div className="xt-h4">Footer</div>
          </div>
        </footer>
      </div>
    </div>
  )
}
