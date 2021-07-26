import React from 'react'
import 'xtendui'
import 'xtendui/src/form'

export default function demo() {
  return (
    <div>
      <div className="xt-row xt-row-6">
        <div className="w-full md:w-6/12">
          <label className="*** xt-card *** rounded-md text-black xt-links-default transform transition bg-gray-100 hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200 cursor-pointer">
            <div className="py-8 px-9 text-base">
              <div className="xt-h4">Lorem ipsum</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
              <input
                type="checkbox"
                className="xt-check xt-checkbox rounded-md text-primary-500 bg-gray-200 border border-transparent transition-all"
                name="checkbox-card-0"
                defaultChecked
                disabled
              />
            </div>
          </label>
        </div>

        <div className="w-full md:w-6/12">
          <label className="*** xt-card *** rounded-md text-black xt-links-default transform transition bg-gray-100 hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200 cursor-pointer">
            <div className="py-8 px-9 text-base">
              <div className="xt-h4">Lorem ipsum</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
              <input
                type="checkbox"
                className="xt-check xt-checkbox rounded-md text-primary-500 bg-gray-200 border border-transparent transition-all"
                name="checkbox-card-1"
              />
            </div>
          </label>
        </div>

        <div className="w-full md:w-6/12">
          <label className="*** xt-card *** rounded-md text-black xt-links-default transform transition bg-gray-100 hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200 cursor-pointer *** focus-within:outline-browser ***">
            <div className="py-8 px-9 text-base">
              <div className="xt-h4">Lorem ipsum</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
              <input
                type="radio"
                className="xt-check xt-radio rounded-full text-primary-500 bg-gray-200 border border-transparent transition-all sr-only"
                name="radio-card"
                defaultChecked
              />
            </div>
          </label>
        </div>

        <div className="w-full md:w-6/12">
          <label className="*** xt-card *** rounded-md text-black xt-links-default transform transition bg-gray-100 hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200 cursor-pointer  *** focus-within:outline-browser ***">
            <div className="py-8 px-9 text-base">
              <div className="xt-h4">Lorem ipsum</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
              <input
                type="radio"
                className="xt-check xt-radio rounded-full text-primary-500 bg-gray-200 border border-transparent transition-all sr-only"
                name="radio-card"
              />
            </div>
          </label>
        </div>

        <div className="w-full md:w-6/12">
          <label className="*** xt-card *** rounded-md text-black xt-links-default transform transition bg-gray-100 hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200 cursor-pointer">
            <div className="py-8 px-9 text-base">
              <div className="xt-h4">Lorem ipsum</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
              <input
                type="radio"
                className="xt-check xt-switch rounded-full text-primary-500 bg-gray-200 border border-transparent transition-all"
                name="switch-card"
                defaultChecked
              />
            </div>
          </label>
        </div>

        <div className="w-full md:w-6/12">
          <label className="*** xt-card *** rounded-md text-black xt-links-default transform transition bg-gray-100 hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200 cursor-pointer">
            <div className="py-8 px-9 text-base">
              <div className="xt-h4">Lorem ipsum</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
              <input
                type="radio"
                className="xt-check xt-switch rounded-full text-primary-500 bg-gray-200 border border-transparent transition-all"
                name="switch-card"
              />
            </div>
          </label>
        </div>
      </div>
    </div>
  )
}
