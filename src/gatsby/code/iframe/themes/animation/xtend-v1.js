import React from 'react'
import path from 'path'
const classesDefault =
  'text-black links-default rounded-md bg-gray-200 border-transparent transform ease-out-quint duration-500 border hover:bg-gray-300 hover:border-gray-400 hover:shadow-lg hover:-translate-y-1 active:bg-gray-400 active:shadow-sm active:translate-y-0'
const classesPrimary =
  'text-white links-inverse rounded-md bg-accent-500 border-transparent transform ease-out-quint duration-500 border hover:bg-accent-600 hover:border-accent-700 hover:shadow-lg hover:-translate-y-1 active:bg-accent-700 active:shadow-sm active:translate-y-0'
const cardDefault =
  'rounded-md bg-white shadow-lg transform ease-out-quint duration-500 delay-200 opacity-0 scale-50 group-active:delay-0 group-active:opacity-100 group-active:scale-100'
const btnDefaultDrop = require('components/snippets/classes/btn-default-drop').default
const btnCloseOutside = require('components/snippets/classes/btn-close-outside').default
const labelDefault = require('components/snippets/classes/label-default').default
const inputDefault = require('components/snippets/classes/input-default').default
const checkDefault = require('components/snippets/classes/form-check-default').default
const radioDefault = require('components/snippets/classes/form-radio-default').default
const iconX = require('components/snippets/icons').iconX

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: true,
  full: false,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">
  Button
</div>

<div class="list list-2 items-center">

  <button type="button" class="btn btn-md transform ease-out-quint duration-500 hover:-translate-y-1 active:translate-y-0">
    btn
  </button>

  <button type="button" class="btn btn-md ${classesDefault}">
    default
  </button>

  <button type="button" class="btn btn-md ${classesPrimary}">
    primary
  </button>

  <button type="button" class="btn btn-md link transform ease-out-quint duration-500 hover:-translate-y-1 active:translate-y-0">
    link
  </button>

  <button type="button" class="btn btn-md text-reset transform ease-out-quint duration-500 hover:-translate-y-1 active:translate-y-0">
    text
  </button>

</div>

<div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">
  Drop
</div>

<div class="list list-2 items-center">

  <div class="drop-container" data-xt-drop>

    <button type="button" class="btn btn-md text-white links-inverse rounded-md bg-accent-500 border-transparent border-transparent transform ease-out-quint duration-500 border hover:bg-accent-600 hover:border-accent-700 hover:shadow-lg hover:-translate-y-1 active:bg-accent-700 active:shadow-sm active:translate-y-0">
      list
    </button>

    <div class="drop group duration-700">  <!-- needed for animation time, put max animation time -->
      <div class="drop-inner">
        <div class="design-setup ${cardDefault}"></div>
        <div class="w-64 py-3 text-black links-default transform ease-out-quint duration-500 delay-0 opacity-0 -translate-y-2 group-active:delay-300 group-active:opacity-100 group-active:translate-y-0">
          <nav class="list flex-col">
            <a href="#" class="btn btn-sm ${btnDefaultDrop()}">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </a>
            <button type="button" class="btn btn-sm ${btnDefaultDrop()}">
              Dolor sit
            </button>
            <button type="button" class="btn btn-sm ${btnDefaultDrop()}">
              Amet
            </button>
          </nav>
        </div>
      </div>
    </div>

  </div>

  <div class="drop-container" data-xt-drop>

    <button type="button" class="btn btn-md ${classesPrimary}">
      card
    </button>

    <div class="drop group duration-700">  <!-- needed for animation time, put max animation time -->
      <div class="drop-inner">
        <div class="design-setup ${cardDefault}"></div>
        <div class="card w-80 text-black links-default transform ease-out-quint duration-500 delay-0 opacity-0 -translate-y-2 group-active:delay-300 group-active:opacity-100 group-active:translate-y-0">
          <div class="btn btn-close p-5 text-xl" aria-label="Close">
            ${iconX()}
          </div>
          <div class="card-md">
            <div class="h4">Lorem ipsum</div>
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          </div>
        </div>
      </div>
    </div>

  </div>

</div>

<div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">
  Overlay
</div>

<div class="list list-2 items-center">

  <div data-xt-overlay>
    <button type="button" class="btn btn-md ${classesPrimary}">
      screen image full
    </button>
    <div class="overlay overlay-screen group duration-700">  <!-- needed for animation time, put max animation time -->
      <div class="overlay-container">
        <div class="overlay-inner">

          <div class="design-setup ${cardDefault}"></div>

          <div class="card items-center justify-center text-black links-default transform ease-out-quint duration-500 delay-0 opacity-0 -translate-y-2 group-active:delay-300 group-active:opacity-100 group-active:translate-y-0">
            <div class="btn btn-close p-5 text-2xl fixed z-top" aria-label="Close">
              ${iconX()}
            </div>
            <div class="media-container" style="padding-bottom: 100%;">
              <div class="media-inner">
                <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  <div data-xt-overlay>

    <button type="button" class="btn btn-md ${classesPrimary}">
      left blocks
    </button>

    <div class="overlay overlay-screen group duration-700">  <!-- needed for animation time, put max animation time -->
      <div class="overlay-container max-w-md ml-0 mr-auto">
        <div class="overlay-inner">

          <div class="design-setup ${cardDefault}"></div>

          <div class="card text-black links-default transform ease-out-quint duration-500 delay-0 opacity-0 -translate-y-2 group-active:delay-300 group-active:opacity-100 group-active:translate-y-0">
            <div class="btn btn-close p-5 text-2xl" aria-label="Close">
              ${iconX()}
            </div>
            <div class="bg-accent-500">
              <button type="button" class="btn btn-md text-white links-inverse bg-accent-500 border-transparent transform ease-out-quint duration-500 border hover:bg-accent-600 hover:border-accent-700 hover:shadow-lg hover:translate-y-1 active:bg-accent-700 active:shadow-sm active:translate-y-0">
                Menu
              </button>
              <button type="button" class="btn btn-md text-white links-inverse bg-accent-500 border-transparent transform ease-out-quint duration-500 border hover:bg-accent-600 hover:border-accent-700 hover:shadow-lg hover:translate-y-1 active:bg-accent-700 active:shadow-sm active:translate-y-0">
                Info
              </button>
              <button type="button" class="btn btn-md text-white links-inverse bg-accent-500 border-transparent transform ease-out-quint duration-500 border hover:bg-accent-600 hover:border-accent-700 hover:shadow-lg hover:translate-y-1 active:bg-accent-700 active:shadow-sm active:translate-y-0">
                Account
              </button>
            </div>
            <div class="media-container" style="padding-bottom: 37.5%;">
              <div class="media-inner">
                <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
              </div>
            </div>
            <div class="card-md">
              <div class="h4">Lorem ipsum</div>
              <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
            </div>
            <div class="card-sm bg-gray-500 mt-auto">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>

  <div data-xt-overlay>

    <button type="button" class="btn btn-md ${classesPrimary}">
      contact
    </button>

    <div class="overlay group duration-700">  <!-- needed for animation time, put max animation time -->
      <div class="overlay-container max-w-5xl">
        <div class="overlay-inner">

          <div class="design-setup rounded-md lg:rounded-tr-none bg-white shadow-lg transform ease-out-quint duration-500 delay-200 opacity-0 scale-50 group-active:delay-0 group-active:opacity-100 group-active:scale-100"></div>

          <div class="card text-black links-default transform ease-out-quint duration-500 delay-0 opacity-0 -translate-y-2 group-active:delay-300 group-active:opacity-100 group-active:translate-y-0">
            <div class="btn btn-close p-5 text-2xl ${btnCloseOutside()} md:p-3 md:right-auto md:left-100" aria-label="Close">
              ${iconX()}
            </div>

            <div class="lg:card-group">

              <div class="card-md md:card-lg text-sm lg:w-7/12">
                <div class="h4">
                  Contact us
                </div>
                <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam.</p>
                <form class="text-lg">
                  <div class="row row-x-4 row-y-3">

                    <div class="w-full lg:w-6/12">
                      <label class="form-label mb-4 ${labelDefault()}">
                        Name
                      </label>
                      <input type="text" class="form-item ${inputDefault()}" placeholder="Input">
                    </div>

                    <div class="w-full lg:w-6/12">
                      <label class="form-label mb-4 ${labelDefault()}">
                        Surname
                      </label>
                      <input type="text" class="form-item ${inputDefault()}" placeholder="Input">
                    </div>

                    <div class="w-full lg:w-6/12">
                      <label class="form-label mb-4 ${labelDefault()}">
                        Email
                      </label>
                      <input type="text" class="form-item ${inputDefault()}" placeholder="Input">
                    </div>

                    <div class="w-full lg:w-6/12">
                      <label class="form-label mb-4 ${labelDefault()}">
                        Telephone
                      </label>
                      <input type="text" class="form-item ${inputDefault()}" placeholder="Input">
                    </div>

                    <div class="w-full">
                      <label class="form-label mb-4 ${labelDefault()}">
                        Subject
                      </label>
                      <select class="form-item form-select ${inputDefault()}">
                        <option selected value="">Select an option</option>
                        <option>Test</option>
                        <option>Test</option>
                        <option>Test</option>
                      </select>
                    </div>

                    <div class="w-full">
                      <label class="form-label mb-4 ${labelDefault()}">
                        Textarea
                      </label>
                      <textarea class="form-item ${inputDefault()} h-24 resize-vertical duration-150" placeholder="Textarea"></textarea>
                    </div>

                    <div class="w-full">
                      <label class="form-label-check">
                        <input type="checkbox" class="form-check form-checkbox ${checkDefault()}">
                        <span class="ml-3">
                          I <strong>read and accept</strong> the <a href="#" target="_blank" rel="noopener">sales conditions</a> and the <a href="#" target="_blank" rel="noopener">privacy policy</a>.
                        </span>
                      </label>
                    </div>

                    <div class="w-full">
                      <button type="submit" class="btn btn-md ${classesPrimary}">
                        Send
                      </button>
                    </div>

                  </div>
                </form>
              </div>

              <div class="lg:w-5/12 flex flex-col">
                <div class="card-md bg-gray-300 flex-full text-sm">
                  <p class="h5">
                    Didn't find what you was looking for?
                  </p>
                  <p>
                      Contact our customer service at <a href="tel:+39333010101">+39 333 010101</a> or email us at <a href="mailto:info@info.com">info@info.com</a>.
                  </p>
                </div>
                <div class="media-container rounded-b-md lg:rounded-bl-none lg:rounded-br-md" style="padding-bottom: 100%;">
                  <div class="media-inner">
                    <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>

  </div>

  <div data-xt-overlay>

    <button type="button" class="btn btn-md ${classesPrimary}">
      newsletter
    </button>

    <div class="overlay group duration-700">  <!-- needed for animation time, put max animation time -->
      <div class="overlay-container max-w-5xl">
        <div class="overlay-inner">

          <div class="design-setup rounded-md lg:rounded-tr-none bg-white shadow-lg transform ease-out-quint duration-500 delay-200 opacity-0 scale-50 group-active:delay-0 group-active:opacity-100 group-active:scale-100"></div>

          <div class="card text-black links-default transform ease-out-quint duration-500 delay-0 opacity-0 -translate-y-2 group-active:delay-300 group-active:opacity-100 group-active:translate-y-0">
            <div class="btn btn-close p-5 text-2xl ${btnCloseOutside()} md:p-3 md:right-auto md:left-100" aria-label="Close">
              ${iconX()}
            </div>

            <div class="lg:card-group">

              <div class="lg:w-5/12 flex flex-col">
                <div class="media-container flex-full rounded-t-md lg:rounded-tr-none" style="padding-bottom: 100%;">
                  <div class="media-inner">
                    <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
                  </div>
                </div>
              </div>

              <div class="card-md md:card-lg text-sm lg:w-7/12">
                <div class="h4">
                  Subscribe to our newsletter
                </div>
                <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam.</p>
                <form class="text-lg">
                  <div class="row row-x-4 row-y-3">

                    <div class="w-full">
                      <label class="form-label mb-4 ${labelDefault()}">
                        Email
                      </label>
                      <input type="text" class="form-item ${inputDefault()}" placeholder="Input">
                    </div>

                    <div class="w-full">

                      <label class="form-label mb-4 ${labelDefault()}">
                        Subject
                      </label>

                      <div class="row row-x-4 row-y-1">

                        <div class="w-full sm:w-auto">
                          <label class="form-label-check">
                            <input type="radio" class="form-check form-radio ${radioDefault()}" name="radio-usage" checked>
                            <span class="ml-3">
                              Option 1
                            </span>
                          </label>
                        </div>

                        <div class="w-full sm:w-auto">
                          <label class="form-label-check">
                            <input type="radio" class="form-check form-radio ${radioDefault()}" name="radio-usage">
                            <span class="ml-3">
                              Option 2
                            </span>
                          </label>
                        </div>

                        <div class="w-full sm:w-auto">
                          <label class="form-label-check">
                            <input type="radio" class="form-check form-radio ${radioDefault()}" name="radio-usage">
                            <span class="ml-3">
                              Option 3
                            </span>
                          </label>
                        </div>

                      </div>

                    </div>

                    <div class="w-full">
                      <label class="form-label-check">
                        <input type="checkbox" class="form-check form-checkbox ${checkDefault()}">
                        <span class="ml-3">
                          I <strong>read and accept</strong> the <a href="#" target="_blank" rel="noopener">sales conditions</a> and the <a href="#" target="_blank" rel="noopener">privacy policy</a>.
                        </span>
                      </label>
                    </div>

                    <div class="w-full">
                      <button type="submit" class="btn btn-md ${classesPrimary}">
                        Subscribe
                      </button>
                    </div>

                  </div>
                </form>
              </div>

            </div>

            <div class="card-sm rounded-b-md bg-gray-300 text-xs">
              <p>
                Receive <strong>free discount</strong> periodically on all our products.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>

  </div>

</div>

<div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">
  Card
</div>

<div class="row row-3">

  <div class="w-full md:w-6/12">
    <a role="button" class="card ${classesDefault}">
      <div class="card-md">
        <div class="h4">Default</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
      </div>
    </a>
  </div>

  <div class="w-full md:w-6/12">
    <a role="button" class="card ${classesPrimary}">
      <div class="card-md">
        <div class="h4">Primary</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
      </div>
    </a>
  </div>

</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
