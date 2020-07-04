const img = require('components/snippets/img').default
const imgAlt = require('components/snippets/img').alt

export default () => {
  return `
<div class="block-listing">
  <div class="container">
    <div class="block-listing_inner">
      <div class="row">

        <div class="block-listing_col">
          <a href="#" class="card block-listing_item">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-asset">
                  ${img({})}
                </div>
                <div class="card-block card-item">
                  <div class="card-title">
                    Lorem Ipsum
                  </div>
                  <div class="block-listing_price">
                    3.772,00 €
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="block-listing_col">
          <a href="#" class="card block-listing_item">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-asset">
                  ${imgAlt({})}
                </div>
                <div class="card-block card-item">
                  <div class="card-title">
                    Dolor sit amet
                  </div>
                  <div class="block-listing_price">
                    2.150,00 €
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="block-listing_col">
          <a href="#" class="card block-listing_item">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-asset">
                  ${img({})}
                </div>
                <div class="card-block card-item">
                  <div class="card-title">
                    Consectetur adipiscing elit
                  </div>
                  <div class="block-listing_price">
                    1.520,00 €
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="block-listing_col">
          <a href="#" class="card block-listing_item">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-asset">
                  ${img({})}
                </div>
                <div class="card-block card-item">
                  <div class="card-title">
                    Lorem Ipsum
                  </div>
                  <div class="block-listing_price">
                    3.772,00 €
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="block-listing_col">
          <a href="#" class="card block-listing_item">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-asset">
                  ${imgAlt({})}
                </div>
                <div class="card-block card-item">
                  <div class="card-title">
                    Dolor sit amet
                  </div>
                  <div class="block-listing_price">
                    2.150,00 €
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="block-listing_col">
          <a href="#" class="card block-listing_item">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-asset">
                  ${img({})}
                </div>
                <div class="card-block card-item">
                  <div class="card-title">
                    Consectetur adipiscing elit
                  </div>
                  <div class="block-listing_price">
                    1.520,00 €
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="block-listing_col block-listing_col--big">
          <a href="#" class="card block-listing_item">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-asset">
                  ${img({})}
                </div>
                <div class="card-block card-item">
                  <div class="card-title">
                    Lorem Ipsum
                  </div>
                  <div class="block-listing_price">
                    3.772,00 €
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="block-listing_col block-listing_col--big">
          <a href="#" class="card block-listing_item">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-asset">
                  ${imgAlt({})}
                </div>
                <div class="card-block card-item">
                  <div class="card-title">
                    Dolor sit amet
                  </div>
                  <div class="block-listing_price">
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
