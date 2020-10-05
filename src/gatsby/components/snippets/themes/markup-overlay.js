const img = require('components/snippets/img').default

export default () => {
  return `
<div class="list list-space-2 items-center">

  <div data-xt-overlay>
    <button type="button" class="btn btn-primary">
      overlay full
    </button>
    <div class="overlay overlay-default overlay-screen overlay-size-full">
      <div class="overlay-container max-w-4xl">
        <div class="overlay-inner">
          <div class="overlay-design"></div>

            <div class="card card-overlay">
              <div class="card-design"></div>
              <div class="btn btn-close p-5" aria-label="Close"><span class="icon-close"></span></div>
              <div class="card-inner">
                <div class="card-content">
                  <div class="card-asset">
                    ${img({ classes: 'object-cover object-center', ratio: '100%' })}
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
    <div class="overlay overlay-default overlay-position-left overlay-close-outside">
      <div class="overlay-container max-w-4xl">
        <div class="overlay-inner">
          <div class="overlay-design"></div>

          <div class="card card-overlay"
            style="align-items: stretch;">
            <div class="card-design"></div>
            <div class="btn btn-close p-5" aria-label="Close"><span class="icon-close"></span></div>
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
                <div class="card-asset">
                  ${img({ classes: 'object-cover object-center', ratio: '37.5%' })}
                </div>
                <div class="card-block card-item">
                  <div class="h4">Lorem ipsum</div>
                  <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
                </div>
                <div class="card-block card-item card-block-side"
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
      <div class="overlay-container max-w-4xl">
        <div class="overlay-inner">
          <div class="overlay-design"></div>

          <div class="card card-overlay"
            style="align-items: stretch;">
            <div class="card-design"></div>
            <div class="btn btn-close p-5" aria-label="Close"><span class="icon-close"></span></div>
            <div class="card-inner">
              <div class="card-content">

                <div class="card-item-nested card-item card-group-sm card-item--order">

                  <div class="card-block card-item">

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
                    <div class="card-block card-item">
                      <p class="h5">
                        Didn't find what you was looking for?
                      </p>
                      <p>
                         Contact our customer service at <a href="tel:+39333010101">+39 333 010101</a> or email us at <a href="mailto:info@info.com">info@info.com</a>.
                      </p>
                    </div>
                    <div class="card-asset"
                      style="margin-top: auto">
                      ${img({ classes: 'object-cover object-center', ratio: '100%', loading: 'eager' })}
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
      <div class="overlay-container max-w-4xl">
        <div class="overlay-inner">
          <div class="overlay-design"></div>

          <div class="card card-overlay"
            style="align-items: stretch;">
            <div class="card-design"></div>
            <div class="btn btn-close p-5" aria-label="Close"><span class="icon-close"></span></div>
            <div class="card-inner">
              <div class="card-content">

                <div class="card-item-nested card-item card-group-sm">

                  <div class="card-item sm:w-5/12">
                    <div class="card-asset full-y">
                      ${img({ classes: 'object-cover object-center', ratio: '37.5%', loading: 'eager' })}
                    </div>
                  </div>

                  <div class="card-block card-item">

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

                <div class="card-block card-item card-block-side card-block-sm text-sm">
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
`
}
