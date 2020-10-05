const img = require('components/snippets/img').default
const imgAlt = require('components/snippets/img').alt

export default () => {
  return `
<div class="listing-page">
  <div class="container">
    <div class="listing-page_inner">
      <div class="row">

        <div class="listing-page_col">
          <a href="#" class="card listing-page_item">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-asset">
                  ${img({})}
                </div>
                <div class="card-block card-item">
                  <div class="h4">
                    Lorem Ipsum
                  </div>
                  <div class="listing-page_price">
                    3.772,00 €
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="listing-page_col">
          <a href="#" class="card listing-page_item">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-asset">
                  ${imgAlt({})}
                </div>
                <div class="card-block card-item">
                  <div class="h4">
                    Dolor sit amet
                  </div>
                  <div class="listing-page_price">
                    2.150,00 €
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="listing-page_col">
          <a href="#" class="card listing-page_item">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-asset">
                  ${img({})}
                </div>
                <div class="card-block card-item">
                  <div class="h4">
                    Consectetur adipiscing elit
                  </div>
                  <div class="listing-page_price">
                    1.520,00 €
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="listing-page_col">
          <a href="#" class="card listing-page_item">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-asset">
                  ${imgAlt({})}
                </div>
                <div class="card-block card-item">
                  <div class="h4">
                    Lorem Ipsum
                  </div>
                  <div class="listing-page_price">
                    3.772,00 €
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="listing-page_col">
          <a href="#" class="card listing-page_item">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-asset">
                  ${img({})}
                </div>
                <div class="card-block card-item">
                  <div class="h4">
                    Dolor sit amet
                  </div>
                  <div class="listing-page_price">
                    2.150,00 €
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="listing-page_col">
          <a href="#" class="card listing-page_item">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-asset">
                  ${imgAlt({})}
                </div>
                <div class="card-block card-item">
                  <div class="h4">
                    Consectetur adipiscing elit
                  </div>
                  <div class="listing-page_price">
                    1.520,00 €
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="listing-page_col">
          <a href="#" class="card listing-page_item">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-asset">
                  ${img({})}
                </div>
                <div class="card-block card-item">
                  <div class="h4">
                    Lorem Ipsum
                  </div>
                  <div class="listing-page_price">
                    3.772,00 €
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="listing-page_col">
          <a href="#" class="card listing-page_item">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-asset">
                  ${imgAlt({})}
                </div>
                <div class="card-block card-item">
                  <div class="h4">
                    Dolor sit amet
                  </div>
                  <div class="listing-page_price">
                    2.150,00 €
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="listing-page_col listing-page_col--big">
          <a href="#" class="card listing-page_item">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-asset">
                  ${img({})}
                </div>
                <div class="card-block card-item">
                  <div class="h4">
                    Lorem Ipsum
                  </div>
                  <div class="listing-page_price">
                    3.772,00 €
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="listing-page_col listing-page_col--big">
          <a href="#" class="card listing-page_item">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-asset">
                  ${imgAlt({})}
                </div>
                <div class="card-block card-item">
                  <div class="h4">
                    Dolor sit amet
                  </div>
                  <div class="listing-page_price">
                    2.150,00 €
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

      </div>
    </div>
  </div>
</div>
`
}
