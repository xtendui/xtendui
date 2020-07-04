const img = require('components/snippets/img').default
const imgAlt = require('components/snippets/img').alt

export default () => {
  return `
<div class="slides">
  <ul class="slides-inner">

    <li class="slide slide--center slide--big">
      <div class="slide-inner">
        <div class="slide_item">
          <div class="slide_item_inner">
            <div class="slide_item_asset">
              ${img({ classes: 'media-cover', loading: 'eager' })}
            </div>
            <div class="slide_item_content">
              <a href="#" class="slide_item_content_inner">
                <div class="slide_item_text">
                  <h2 class="h1">
                    Lorem ipsum
                  </h2>
                </div>
              </a>
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
                <div class="slide_item_content_inner">
                  <div class="slide_item_text">
                    <h2 class="h1">
                      Dolor sit amet
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
                  </div>
                  <div class="slide_item_actions">
                    <div class="list">
                      <a href="#" class="btn">
                        Lorem ipsum
                      </a>
                      <a href="#" class="btn">
                        Dolor sit amet
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>

    <li class="slide slide--center">
      <div class="slide-inner">
        <div class="slide_item">
          <div class="slide_item_inner">
            <div class="slide_item_asset">
              ${img({ classes: 'media-cover', loading: 'eager' })}
            </div>
            <div class="slide_item_content">
              <div class="container">
                <a href="#" class="slide_item_content_inner">
                  <div class="slide_item_text">
                    <h2 class="h1">
                      Consectetur adipiscing elit
                    </h2>
                  </div>
                  <div class="slide_item_actions">
                    <div class="list">
                      <div class="btn">
                          Lorem ipsum
                      </div>
                    </div>
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
                  <div class="slide_item_text">
                    <h2 class="h1">
                      Nam iaculis magna eu consectetur condimentum
                    </h2>
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
`
}
