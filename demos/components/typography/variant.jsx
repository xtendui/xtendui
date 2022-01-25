import React from 'react'
export default function demo() {
  return (
    <div>
      <div className="xt-card p-7 sm:p-9 text-base rounded-2xl *** text-white xt-links-inverse *** bg-primary-500">
        <h2>Lorem Ipsum</h2>

        <p>
          <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam suscipit,
          velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
          vitae magna eget, vehicula scelerisque elit.
        </p>

        <div className="xt-card p-7 sm:p-9 text-base rounded-2xl *** text-gray-900 xt-links-default *** bg-white">
          <h2>Lorem Ipsum</h2>

          <p>
            <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam suscipit,
            velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
            vitae magna eget, vehicula scelerisque elit.
          </p>
        </div>
      </div>
    </div>
  )
}