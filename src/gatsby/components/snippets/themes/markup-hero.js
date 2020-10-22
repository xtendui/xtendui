const img = require('components/snippets/img').default
const imgAlt = require('components/snippets/img').alt

export default () => {
  return `
<div class="slides">
  <nav class="slides-inner">

    <div class="slide">
      <div class="hero hero--center hero--big">
        <div class="hero_inner">
          <div class="hero_asset">
            ${img({ classes: 'object-cover object-center', loading: 'eager' })}
          </div>
          <div class="hero_content">
            <a href="#" class="hero_content_inner">
              <div class="h1">
                Lorem ipsum
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="slide">
      <div class="hero hero--center">
        <div class="hero_inner">
          <div class="hero_asset">
            ${imgAlt({ classes: 'object-cover object-center', loading: 'eager' })}
          </div>
          <div class="hero_content">
            <a href="#" class="hero_content_inner">
              <div class="h1">
                Lorem ipsum dolor sit amet
              </div>
              <div class="list list-4">
                <div class="btn">
                    Lorem ipsum
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="slide">
      <div class="hero">
        <div class="hero_inner">
          <div class="hero_asset">
            ${img({ classes: 'object-cover object-center', loading: 'eager' })}
          </div>
          <div class="hero_content">
            <a href="#" class="hero_content_inner">
              <div class="h1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="slide">
      <div class="hero">
        <div class="hero_inner">
          <div class="hero_asset">
            ${imgAlt({ classes: 'object-cover object-center', loading: 'eager' })}
          </div>
          <div class="hero_content">
            <div class="hero_content_inner">
              <div class="h1">
                Lorem ipsum dolor sit amet
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
              <div class="list list-4">
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

    <div class="slide">
      <div class="hero hero--middle hero--left">
        <div class="hero_inner">
          <div class="hero_asset">
            ${img({ classes: 'object-cover object-center', loading: 'eager' })}
          </div>
          <div class="hero_content">
            <div class="hero_content_inner">
              <div class="h1">
                Lorem ipsum dolor sit amet
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
              <div class="list list-4">
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

    <div class="slide">
      <div class="hero hero--middle hero--right">
        <div class="hero_inner">
          <div class="hero_asset">
            ${imgAlt({ classes: 'object-cover object-center', loading: 'eager' })}
          </div>
          <div class="hero_content">
            <div class="hero_content_inner">
              <div class="h1">
                Lorem ipsum dolor sit amet
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
              <div class="list list-4">
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

  </nav>
</div>
`
}
