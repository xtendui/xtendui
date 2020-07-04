const img = require('components/snippets/img').default
const imgAlt = require('components/snippets/img').alt

export default () => {
  return `
<div class="slides">
  <ul class="slides-inner">

    <li class="slide">
      <div class="slide-inner">
      
        <div class="hero hero--center hero--big">
          <div class="hero_inner">
            <div class="hero_asset">
              ${img({ classes: 'media-cover', loading: 'eager' })}
            </div>
            <div class="hero_content">
              <a href="#" class="hero_content_inner">
                <div class="hero_text">
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
      
        <div class="hero hero--center">
          <div class="hero_inner">
            <div class="hero_asset">
              ${imgAlt({ classes: 'media-cover', loading: 'eager' })}
            </div>
            <div class="hero_content">
              <div class="container">
                <a href="#" class="hero_content_inner">
                  <div class="hero_text">
                    <h2 class="h1">
                      Lorem ipsum dolor sit amet
                    </h2>
                  </div>
                  <div class="hero_actions">
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
      
        <div class="hero">
          <div class="hero_inner">
            <div class="hero_asset">
              ${img({ classes: 'media-cover', loading: 'eager' })}
            </div>
            <div class="hero_content">
              <div class="container">
                <a href="#" class="hero_content_inner">
                  <div class="hero_text">
                    <h2 class="h1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </h2>
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
      
        <div class="hero">
          <div class="hero_inner">
            <div class="hero_asset">
              ${imgAlt({ classes: 'media-cover', loading: 'eager' })}
            </div>
            <div class="hero_content">
              <div class="container">
                <div class="hero_content_inner">
                  <div class="hero_text">
                    <h2 class="h1">
                      Lorem ipsum dolor sit amet
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
                  </div>
                  <div class="hero_actions">
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

    <li class="slide">
      <div class="slide-inner">
      
        <div class="hero hero--middle hero--left">
          <div class="hero_inner">
            <div class="hero_asset">
              ${img({ classes: 'media-cover', loading: 'eager' })}
            </div>
            <div class="hero_content">
              <div class="container">
                <div class="hero_content_inner">
                  <div class="hero_text">
                    <h2 class="h1">
                      Lorem ipsum dolor sit amet
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
                  </div>
                  <div class="hero_actions">
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

    <li class="slide">
      <div class="slide-inner">
      
        <div class="hero hero--middle hero--right">
          <div class="hero_inner">
            <div class="hero_asset">
              ${img({ classes: 'media-cover', loading: 'eager' })}
            </div>
            <div class="hero_content">
              <div class="container">
                <div class="hero_content_inner">
                  <div class="hero_text">
                    <h2 class="h1">
                      Lorem ipsum dolor sit amet
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
                  </div>
                  <div class="hero_actions">
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

  </ul>
</div>
`
}
