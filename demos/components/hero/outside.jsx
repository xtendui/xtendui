import React from 'react'
export default function demo() {
  return (
    <div>
      <div className="hero relative overflow-hidden">
        <div className="xt-media-container bg-gray-500 w-full h-96">
          <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
        </div>
        <div className="flex relative">
          <a href="#" className="relative px-8 py-16 md:px-24 lg:py-20 xl:py-24 mx-auto max-w-2xl text-center group">
            <h2 className="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">Lorem ipsum</h2>
            <h3 className="xt-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.
            </h3>
            <div className="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600">
              Lorem ipsum
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
