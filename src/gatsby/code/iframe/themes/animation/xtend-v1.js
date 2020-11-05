import React from 'react'
import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const btnDefault = require('components/snippets/classes/btn-default').default
const cardDefault = require('components/snippets/classes/card-default').default
const cardPrimary = require('components/snippets/classes/card-primary').default
const btnDefaultDrop = require('components/snippets/classes/btn-default-drop').default
const cardDefaultDrop = require('components/snippets/classes/card-default-drop').default
const cardDefaultDropList = require('components/snippets/classes/card-default-drop-list').default
const cardDefaultOverlay = require('components/snippets/classes/card-default-overlay').default
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

  <button type="button" class="btn btn-md transform ease-in-out-sine duration-300 hover:-translate-y-1 active:translate-y-0">
    btn
  </button>

  <button type="button" class="btn btn-md text-black links-default rounded-md bg-gray-200 transform ease-in-out-sine duration-300 border hover:bg-gray-300 hover:border-gray-400 hover:shadow-lg hover:-translate-y-1 active:bg-gray-400 active:shadow-sm active:translate-y-0">
    default
  </button>

  <button type="button" class="btn btn-md text-white links-inverse rounded-md bg-accent-500 transform ease-in-out-sine duration-300 border hover:bg-accent-600 hover:border-accent-700 hover:shadow-lg hover:-translate-y-1 active:bg-accent-700 active:shadow-sm active:translate-y-0">
    primary
  </button>

  <button type="button" class="btn btn-md link transform ease-in-out-sine duration-300 hover:-translate-y-1 active:translate-y-0">
    link
  </button>

  <button type="button" class="btn btn-md text-reset transform ease-in-out-sine duration-300 hover:-translate-y-1 active:translate-y-0">
    text
  </button>

</div>

<div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">
  Drop
</div>

<div class="list list-2 items-center">

  <div class="drop-container" data-xt-drop>

    <button type="button" class="btn btn-md text-white links-inverse rounded-md bg-accent-500 transform ease-in-out-sine duration-300 border hover:bg-accent-600 hover:border-accent-700 hover:shadow-lg hover:-translate-y-1 active:bg-accent-700 active:shadow-sm active:translate-y-0">
      list
    </button>

    <div class="drop group">
      <div class="drop-inner">
        <div class="w-64 py-3 ${cardDefaultDropList()}">
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

    <button type="button" class="btn btn-md text-white links-inverse rounded-md bg-accent-500 transform ease-in-out-sine duration-300 border hover:bg-accent-600 hover:border-accent-700 hover:shadow-lg hover:-translate-y-1 active:bg-accent-700 active:shadow-sm active:translate-y-0">
      card
    </button>

    <div class="drop">
      <div class="drop-inner">
        <div class="card w-80 ${cardDefaultDrop()}">
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
    <button type="button" class="btn btn-primary">
      overlay full
    </button>
    <div class="overlay overlay-default overlay-screen overlay-size-full">
      <div class="overlay-container max-w-5xl">
        <div class="overlay-inner">
          <div class="overlay-design"></div>

            <div class="card card-overlay">
              <div class="card-design"></div>
              <div class="btn btn-close p-5 text-2xl" aria-label="Close">
                ${iconX()}
              </div>
              <div class="card-inner">
                <div class="card-content">
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
    </div>
  </div>

  <div data-xt-overlay>
    <button type="button" class="btn btn-primary">
      overlay menu left
    </button>
    <div class="overlay overlay-default max-w-md-left overlay-close-outside">
      <div class="overlay-container max-w-5xl">
        <div class="overlay-inner">
          <div class="overlay-design"></div>

          <div class="card card-overlay"
            style="align-items: stretch;">
            <div class="card-design"></div>
            <div class="btn btn-close p-5 text-2xl" aria-label="Close">
              ${iconX()}
            </div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-item card-item--menu">
                  <div class="list">
                    <button type="button" class="btn btn-primary btn-tall btn-squared">
                      Menu
                    </button>
                    <button type="button" class="btn btn-primary btn-tall btn-squared">
                      Info
                    </button>
                    <button type="button" class="btn btn-primary btn-tall btn-squared">
                      Account
                    </button>
                  </div>
                </div>
                <div class="media-container" style="padding-bottom: 37.5%;">
                  <div class="media-inner">
                    <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
                  </div>
                </div>
                <div class="card-item">
                  <div class="h4">Lorem ipsum</div>
                  <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
                </div>
                <div class="card-item card-block-side"
                  style="margin-top: auto">
                  <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  <div data-xt-overlay>
    <button type="button" class="btn btn-primary">
      overlay contact
    </button>
    <div class="overlay overlay-default overlay-close-outside">
      <div class="overlay-container max-w-5xl">
        <div class="overlay-inner">
          <div class="overlay-design"></div>

          <div class="card card-overlay"
            style="align-items: stretch;">
            <div class="card-design"></div>
            <div class="btn btn-close p-5 text-2xl" aria-label="Close">
              ${iconX()}
            </div>
            <div class="card-inner">
              <div class="card-content">

                <div class="card-item-nested card-item card-group-sm card-item--order">

                  <div class="card-item">

                    <div class="h4">
                      Contact us
                    </div>

                    <form>

                      <div class="row row-form">
                        <div class="col-form-double">
                          <div class="form-group">
                            <label class="form-label">
                              Name
                            </label>
                            <input type="text" class="form-item" placeholder="Name" required>
                          </div>
                        </div>
                        <div class="col-form-double">
                          <div class="form-group">
                            <label class="form-label">
                              Surname
                            </label>
                            <input type="text" class="form-item" placeholder="Surname" required>
                          </div>
                        </div>
                      </div>

                      <div class="row row-form">
                        <div class="col-form-double">
                          <div class="form-group">
                            <label class="form-label">
                              Email
                            </label>
                            <input type="email" class="form-item" placeholder="Email" required>
                          </div>
                        </div>
                        <div class="col-form-double">
                          <div class="form-group">
                            <label class="form-label">
                              Telephone
                            </label>
                            <input type="text" class="form-item" placeholder="Telephone" required>
                          </div>
                        </div>
                      </div>

                      <div class="form-group">
                        <label class="form-label">
                          Select an option
                        </label>
                        <select class="form-item" required>
                          <option selected value="">Select an option</option>
                          <option>Option 1</option>
                          <option>Option 2</option>
                          <option>Option 3</option>
                        </select>
                      </div>

                      <div class="form-group">
                        <label class="form-label">
                          Textarea
                        </label>
                        <textarea class="form-item h-24 resize-vertical duration-150" placeholder="Textarea" required></textarea>
                      </div>

                      <div class="form-group">
                        <input type="checkbox" id="check-contact" name="check-contact" required>
                        <label class="form-label" for="check-contact">
                        <span>
                          I <strong>read and accept</strong> the <a href="#" target="_blank">sales conditions</a> and the <a href="#" target="_blank">privacy policy</a>.
                        </label>
                      </div>

                      <button type="submit" class="btn btn-primary btn-wide">
                        Send
                      </button>

                    </form>

                  </div>

                  <div class="card-item card-block-side sm:w-5/12"
                    style="display: flex; flex-direction: column">
                    <div class="card-item">
                      <p class="h5">
                        Didn't find what you was looking for?
                      </p>
                      <p>
                         Contact our customer service at <a href="tel:+39333010101">+39 333 010101</a> or email us at <a href="mailto:info@info.com">info@info.com</a>.
                      </p>
                    </div>
                    <div class="media-container" style="padding-bottom: 100%; margin-top: auto;">
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
    </div>
  </div>

  <div data-xt-overlay>
    <button type="button" class="btn btn-primary">
      overlay newsletter
    </button>
    <div class="overlay overlay-default overlay-size-sm overlay-close-outside">
      <div class="overlay-container max-w-5xl">
        <div class="overlay-inner">
          <div class="overlay-design"></div>

          <div class="card card-overlay"
            style="align-items: stretch;">
            <div class="card-design"></div>
            <div class="btn btn-close p-5 text-2xl" aria-label="Close">
              ${iconX()}
            </div>
            <div class="card-inner">
              <div class="card-content">

                <div class="card-item-nested card-item card-group-sm">

                  <div class="card-item sm:w-5/12">
                    <div class="media-container full-y" style="padding-bottom: 37.5%;">
                      <div class="media-inner">
                        <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
                      </div>
                    </div>
                  </div>

                  <div class="card-item">

                    <div class="h4">
                      Subscribe to our newsletter
                    </div>

                    <form>

                      <div class="form-group">
                        <label class="form-label">
                          Email
                        </label>
                        <input type="email" class="form-item" placeholder="Email" required>
                      </div>

                      <div class="form-group-inline">

                        <label class="form-label">
                          Select an option
                        </label>

                        <div class="form-group">
                          <input type="radio" id="radio-newsletter-0" name="radio-newsletter" required>
                          <label class="form-label" for="radio-newsletter-0">
                            Option 1
                          </label>
                        </div>

                        <div class="form-group">
                          <input type="radio" id="radio-newsletter-1" name="radio-newsletter" required>
                          <label class="form-label" for="radio-valinewsletterdation-1">
                            Option 2
                          </label>
                        </div>

                      </div>

                      <div class="form-group">
                        <input type="checkbox" id="check-newsletter" name="check-newsletter" required>
                        <label class="form-label" for="check-newsletter">
                        <span>
                          I <strong>read and accept</strong> the <a href="#" target="_blank">sales conditions</a> and the <a href="#" target="_blank">privacy policy</a>.
                        </label>
                      </div>

                      <button type="submit" class="btn btn-primary btn-wide">
                        Subscribe
                      </button>

                    </form>

                  </div>

                </div>

                <div class="card-item card-block-side card-sm">
                  <p>Receive <strong>free discount</strong> periodically on all our products.</p>
                </div>

              </div>
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
      <a role="button" class="card ${cardDefault()}">
        <div class="card-md">
          <div class="h4">Lorem ipsum dolor sit amet</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
        </div>
      </a>
    </div>

    <div class="w-full md:w-6/12">
      <a role="button" class="card ${cardPrimary()}">
        <div class="card-md">
          <div class="h4">Lorem ipsum dolor sit amet</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
        </div>
      </a>
    </div>

    <div class="w-full md:w-6/12">
      <div class="card ${cardDefault()}">
        <div class="card-md">
          <div class="h4">Lorem ipsum dolor sit amet</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          <button type="button" class="btn btn-md ${btnPrimary()}">
            primary
          </button>
        </div>
      </div>
    </div>

    <div class="w-full md:w-6/12">
      <div class="card ${cardPrimary()}">
        <div class="card-md">
          <div class="h4">Lorem ipsum dolor sit amet</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          <button type="button" class="btn btn-md ${btnDefault()}">
            default
          </button>
        </div>
      </div>
    </div>

</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
