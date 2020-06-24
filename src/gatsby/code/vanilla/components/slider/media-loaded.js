import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="slider demo--slider-media-loaded"
     data-xt-slider="{ mediaLoaded: true, mediaLoaded: true }">

  <div class="slides">
    <ul class="slides-inner">

      <li class="slide">
        <div class="slide-inner">

          <div class="media-container media-container-responsive">
            <div class="media-inner">
              <img class="media" src="/img.svg" loading="eager" alt=""/>
            </div>
          </div>
          
        </div>
      </li>

      <li class="slide">
        <div class="slide-inner">

          <div class="media-container media-container-responsive">
            <div class="media-inner">
              <img class="media" src="/img-ratio.svg" loading="eager" alt=""/>
            </div>
          </div>

        </div>
      </li>

      <li class="slide">
        <div class="slide-inner">

          <div class="media-container media-container-responsive">
            <div class="media-inner">
              <img class="media" src="/img.svg" loading="eager" alt=""/>
            </div>
          </div>
          
        </div>
      </li>

      <li class="slide">
        <div class="slide-inner">

          <div class="media-container media-container-responsive">
            <div class="media-inner">
              <img class="media" src="/img-ratio.svg" loading="eager" alt=""/>
            </div>
          </div>

        </div>
      </li>

      <li class="slide">
        <div class="slide-inner">

          <div class="media-container media-container-responsive">
            <div class="media-inner">
              <img class="media" src="/img.svg" loading="eager" alt=""/>
            </div>
          </div>
          
        </div>
      </li>

      <li class="slide">
        <div class="slide-inner">

          <div class="media-container media-container-responsive">
            <div class="media-inner">
              <img class="media" src="/img-ratio.svg" loading="eager" alt=""/>
            </div>
          </div>

        </div>
      </li>

    </ul>
  </div>

  <nav class="slider-pagination">
    <button type="button" class="btn btn-default xt-ignore" data-xt-pag title="Slide xt-num">
    </button>
  </nav>

</div>
`
