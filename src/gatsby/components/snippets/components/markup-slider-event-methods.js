export default () => {
  return `
<div class="slides">
  <nav class="slides-inner" id="demo--slider-events-targets">

    <div class="slide col-6 col-4-sm">
      <div class="slide-inner">

        <div class="card card-slide">
          <div class="card-design"></div>
          <div class="card-inner">
            <div class="card-content">
              <div class="card-block card-item">
                <div class="card-title">1</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="slide col-6 col-4-sm">
      <div class="slide-inner">

        <div class="card card-slide">
          <div class="card-design"></div>
          <div class="card-inner">
            <div class="card-content">
              <div class="card-block card-item">
                <div class="card-title">2</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="slide col-6 col-4-sm">
      <div class="slide-inner">

        <div class="card card-slide">
          <div class="card-design"></div>
          <div class="card-inner">
            <div class="card-content">
              <div class="card-block card-item">
                <div class="card-title">3</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="slide col-7 col-5-sm">
      <div class="slide-inner">

        <div class="card card-slide">
          <div class="card-design"></div>
          <div class="card-inner">
            <div class="card-content">
              <div class="card-block card-item">
                <div class="card-title">4</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="slide col-7 col-5-sm">
      <div class="slide-inner">

        <div class="card card-slide">
          <div class="card-design"></div>
          <div class="card-inner">
            <div class="card-content">
              <div class="card-block card-item">
                <div class="card-title">5</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </nav>
</div>

<nav class="slider-pagination slider-navigation">
  <button type="button" class="btn btn-default" data-xt-nav="-1" title="Previous slide">
    <span class="icon-xt-chevron-left icon-left"></span> prev
  </button>
  <button type="button" class="btn btn-default xt-ignore" data-xt-pag title="Slide xt-num">
  </button>
  <button type="button" class="btn btn-default" data-xt-nav="1" title="Next slide">
    next <span class="icon-xt-chevron-right icon-right"></span>
  </button>
</nav>
`
}
