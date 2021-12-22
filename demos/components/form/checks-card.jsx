import React from 'react'
import 'xtendui'
import 'xtendui/src/form'

export default function demo() {
  return (
    <div>
      <div className="xt-row xt-row-6">
        <div className="w-full md:w-6/12">
          <label className="*** xt-card *** rounded-2xl text-gray-900 xt-links-default bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200 cursor-pointer">
            <div className="p-7 sm:p-9 text-base">
              <div className="xt-h4">Lorem ipsum</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
              <input
                type="checkbox"
                className="xt-check xt-checkbox rounded-md bg-gray-200 border border-transparent transition-all defaultChecked:bg-primary-500"
                name="checkbox-card-0"
                defaultChecked
                disabled
              />
            </div>
          </label>
        </div>

        <div className="w-full md:w-6/12">
          <label className="*** xt-card *** rounded-2xl text-gray-900 xt-links-default bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200 cursor-pointer">
            <div className="p-7 sm:p-9 text-base">
              <div className="xt-h4">Lorem ipsum</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
              <input
                type="checkbox"
                className="xt-check xt-checkbox rounded-md bg-gray-200 border border-transparent transition-all defaultChecked:bg-primary-500"
                name="checkbox-card-1"
              />
            </div>
          </label>
        </div>

        <div className="w-full md:w-6/12">
          <label className="*** xt-card *** rounded-2xl text-gray-900 xt-links-default bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200 cursor-pointer *** focus-within:outline-browser ***">
            <div className="p-7 sm:p-9 text-base">
              <div className="xt-h4">Lorem ipsum</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
              <input type="radio" className="sr-only" name="radio-card" defaultChecked />
            </div>
          </label>
        </div>

        <div className="w-full md:w-6/12">
          <label className="*** xt-card *** rounded-2xl text-gray-900 xt-links-default bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200 cursor-pointer *** focus-within:outline-browser ***">
            <div className="p-7 sm:p-9 text-base">
              <div className="xt-h4">Lorem ipsum</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
              <input type="radio" className="sr-only" name="radio-card" />
            </div>
          </label>
        </div>

        <div className="w-full md:w-6/12">
          <label className="*** xt-card *** rounded-2xl text-gray-900 xt-links-default bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200 cursor-pointer">
            <div className="p-7 sm:p-9 text-base">
              <div className="xt-h4">Lorem ipsum</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
              <input
                type="radio"
                className="xt-check xt-switch rounded-full bg-gray-200 border border-transparent transition-all defaultChecked:bg-primary-500"
                name="switch-card"
                defaultChecked
              />
            </div>
          </label>
        </div>

        <div className="w-full md:w-6/12">
          <label className="*** xt-card *** rounded-2xl text-gray-900 xt-links-default bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200 cursor-pointer">
            <div className="p-7 sm:p-9 text-base">
              <div className="xt-h4">Lorem ipsum</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
              <input
                type="radio"
                className="xt-check xt-switch rounded-full bg-gray-200 border border-transparent transition-all defaultChecked:bg-primary-500"
                name="switch-card"
              />
            </div>
          </label>
        </div>
      </div>
    </div>
  )
}
