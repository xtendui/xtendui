const img = require('components/snippets/img').default
const imgAlt = require('components/snippets/img').alt

export default () => {
  return `
<div class="slider">

  <div class="slides">
    <ul class="slides-inner">

      <li class="slide">
        <div class="slide-inner">
          <div class="slide_item">
            <div class="slide_item_inner">
              <div class="slide_item_asset">
                ${img({ classes: 'media-cover', loading: 'eager' })}
              </div>
              <div class="slide_item_content">
                <div class="container">
                  <a href="#" class="slide_item_content_inner">
                    <h2 class="h1">
                      Lorem ipsum
                    </h2>
                    <div class="btn">
                        Discover
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li class="slide">
        <div class="slide-inner">
          <div class="slide_item">
            <div class="slide_item_inner">
              <div class="slide_item_asset">
                ${imgAlt({ classes: 'media-cover', loading: 'eager' })}
              </div>
              <div class="slide_item_content">
                <div class="container">
                  <a href="#" class="slide_item_content_inner">
                    <h2 class="h1">
                      Dolor sit amet
                    </h2>
                    <div class="btn">
                        Discover
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li class="slide">
        <div class="slide-inner">
          <div class="slide_item">
            <div class="slide_item_inner">
              <div class="slide_item_asset">
                ${img({ classes: 'media-cover', loading: 'eager' })}
              </div>
              <div class="slide_item_content">
                <div class="container">
                  <a href="#" class="slide_item_content_inner">
                    <h2 class="h1">
                      Consectetur adipiscing elit
                    </h2>
                    <div class="btn">
                        Discover
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li class="slide">
        <div class="slide-inner">
          <div class="slide_item">
            <div class="slide_item_inner">
              <div class="slide_item_asset">
                ${imgAlt({ classes: 'media-cover', loading: 'eager' })}
              </div>
              <div class="slide_item_content">
                <div class="container">
                  <a href="#" class="slide_item_content_inner">
                    <h2 class="h1">
                      Nam iaculis magna eu consectetur condimentum
                    </h2>
                    <div class="btn">
                        Discover
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </aid>
        </div>
      </li>

    </ul>
  </div>

  <nav class="slider-pagination display-none">
    <button type="button" class="btn btn-default xt-ignore" data-xt-pag title="Slide xt-num">
    </button>
  </nav>

  <div class="slider-navigation-sides slider-navigation-sides-prev" data-xt-nav="-1" aria-label="previous slide">
    <div class="slider-navigation-sides-btn">
      <span><span class="icon-xt-chevron-left"></span></span>
    </div>
  </div>

  <div class="slider-navigation-sides slider-navigation-sides-next" data-xt-nav="1" aria-label="next slide">
    <div class="slider-navigation-sides-btn">
      <span><span class="icon-xt-chevron-right"></span></span>
    </div>
  </div>

</div>
`
}
