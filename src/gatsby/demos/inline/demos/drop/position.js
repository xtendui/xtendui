import path from 'path'

const dirs = path.dirname(__filename).split('/');
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
  css: false,
  js: false,
}

demo.htmlSource = `
<div class="list list-space--small align-items--center demo-source-from">
  
  <div class="drop_outer" data-xt-drop>
    <button type="button" class="btn btn--primary">
      <span>bottom left</span>
    </button>
    <div class="drop drop--bottom drop--left">
      <div class="drop_inner">
        <div class="drop_design"></div>
        <div class="drop_content">
          <ul class="list list--drop">
            <li>
              <button type="button">
                <span>Lorem ipsum dolor</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Dolor sit</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Amet</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="drop_outer" data-xt-drop>
    <button type="button" class="btn btn--primary">
      <span>bottom right</span>
    </button>
    <div class="drop drop--bottom drop--right">
      <div class="drop_inner">
        <div class="drop_design"></div>
        <div class="drop_content">
          <ul class="list list--drop">
            <li>
              <button type="button">
                <span>Lorem ipsum dolor</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Dolor sit</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Amet</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="drop_outer" data-xt-drop>
    <button type="button" class="btn btn--primary">
      <span>bottom center</span>
    </button>
    <div class="drop drop--bottom drop--center">
      <div class="drop_inner">
        <div class="drop_design"></div>
        <div class="drop_content">
          <ul class="list list--drop">
            <li>
              <button type="button">
                <span>Lorem ipsum dolor</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Dolor sit</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Amet</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
  <div class="drop_outer" data-xt-drop>
    <button type="button" class="btn btn--primary">
      <span>top left</span>
    </button>
    <div class="drop drop--top drop--left">
      <div class="drop_inner">
        <div class="drop_design"></div>
        <div class="drop_content">
          <ul class="list list--drop">
            <li>
              <button type="button">
                <span>Lorem ipsum dolor</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Dolor sit</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Amet</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="drop_outer" data-xt-drop>
    <button type="button" class="btn btn--primary">
      <span>top right</span>
    </button>
    <div class="drop drop--top drop--right">
      <div class="drop_inner">
        <div class="drop_design"></div>
        <div class="drop_content">
          <ul class="list list--drop">
            <li>
              <button type="button">
                <span>Lorem ipsum dolor</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Dolor sit</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Amet</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="drop_outer" data-xt-drop>
    <button type="button" class="btn btn--primary">
      <span>top center</span>
    </button>
    <div class="drop drop--top drop--center">
      <div class="drop_inner">
        <div class="drop_design"></div>
        <div class="drop_content">
          <ul class="list list--drop">
            <li>
              <button type="button">
                <span>Lorem ipsum dolor</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Dolor sit</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Amet</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
  <div class="drop_outer" data-xt-drop>
    <button type="button" class="btn btn--primary">
      <span>left middle</span>
    </button>
    <div class="drop drop--left drop--middle">
      <div class="drop_inner">
        <div class="drop_design"></div>
        <div class="drop_content">
          <ul class="list list--drop">
            <li>
              <button type="button">
                <span>Lorem ipsum dolor</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Dolor sit</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Amet</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="drop_outer" data-xt-drop>
    <button type="button" class="btn btn--primary">
      <span>right middle</span>
    </button>
    <div class="drop drop--right drop--middle">
      <div class="drop_inner">
        <div class="drop_design"></div>
        <div class="drop_content">
          <ul class="list list--drop">
            <li>
              <button type="button">
                <span>Lorem ipsum dolor</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Dolor sit</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Amet</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="drop_outer" data-xt-drop>
    <button type="button" class="btn btn--primary">
      <span>center middle</span>
    </button>
    <div class="drop drop--center drop--middle">
      <div class="drop_inner">
        <div class="drop_design"></div>
        <div class="drop_content">
          <ul class="list list--drop">
            <li>
              <button type="button">
                <span>Lorem ipsum dolor</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Dolor sit</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Amet</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
  <div class="drop_outer" data-xt-drop>
    <button type="button" class="btn btn--primary">
      <span>before top</span>
    </button>
    <div class="drop drop--before drop--top">
      <div class="drop_inner">
        <div class="drop_design"></div>
        <div class="drop_content">
          <ul class="list list--drop">
            <li>
              <button type="button">
                <span>Lorem ipsum dolor</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Dolor sit</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Amet</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="drop_outer" data-xt-drop>
    <button type="button" class="btn btn--primary">
      <span>before bottom</span>
    </button>
    <div class="drop drop--before drop--bottom">
      <div class="drop_inner">
        <div class="drop_design"></div>
        <div class="drop_content">
          <ul class="list list--drop">
            <li>
              <button type="button">
                <span>Lorem ipsum dolor</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Dolor sit</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Amet</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="drop_outer" data-xt-drop>
    <button type="button" class="btn btn--primary">
      <span>before middle</span>
    </button>
    <div class="drop drop--before drop--middle">
      <div class="drop_inner">
        <div class="drop_design"></div>
        <div class="drop_content">
          <ul class="list list--drop">
            <li>
              <button type="button">
                <span>Lorem ipsum dolor</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Dolor sit</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Amet</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
  <div class="drop_outer" data-xt-drop>
    <button type="button" class="btn btn--primary">
      <span>after top</span>
    </button>
    <div class="drop drop--after drop--top">
      <div class="drop_inner">
        <div class="drop_design"></div>
        <div class="drop_content">
          <ul class="list list--drop">
            <li>
              <button type="button">
                <span>Lorem ipsum dolor</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Dolor sit</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Amet</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="drop_outer" data-xt-drop>
    <button type="button" class="btn btn--primary">
      <span>after bottom</span>
    </button>
    <div class="drop drop--after drop--bottom">
      <div class="drop_inner">
        <div class="drop_design"></div>
        <div class="drop_content">
          <ul class="list list--drop">
            <li>
              <button type="button">
                <span>Lorem ipsum dolor</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Dolor sit</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Amet</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="drop_outer" data-xt-drop>
    <button type="button" class="btn btn--primary">
      <span>after middle</span>
    </button>
    <div class="drop drop--after drop--middle">
      <div class="drop_inner">
        <div class="drop_design"></div>
        <div class="drop_content">
          <ul class="list list--drop">
            <li>
              <button type="button">
                <span>Lorem ipsum dolor</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Dolor sit</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Amet</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
  <div class="drop_outer" data-xt-drop>
    <button type="button" class="btn btn--primary">
      <span>right contain-bottom</span>
    </button>
    <div class="drop drop--right drop--contain-bottom">
      <div class="drop_inner">
        <div class="drop_design"></div>
        <div class="drop_content">
          <ul class="list list--drop">
            <li>
              <button type="button">
                <span>Lorem ipsum dolor</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Dolor sit</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Amet</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="drop_outer" data-xt-drop>
    <button type="button" class="btn btn--primary">
      <span>right contain-top</span>
    </button>
    <div class="drop drop--right drop--contain-top">
      <div class="drop_inner">
        <div class="drop_design"></div>
        <div class="drop_content">
          <ul class="list list--drop">
            <li>
              <button type="button">
                <span>Lorem ipsum dolor</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Dolor sit</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Amet</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="drop_outer" data-xt-drop>
    <button type="button" class="btn btn--primary">
      <span>left contain-bottom</span>
    </button>
    <div class="drop drop--left drop--contain-bottom">
      <div class="drop_inner">
        <div class="drop_design"></div>
        <div class="drop_content">
          <ul class="list list--drop">
            <li>
              <button type="button">
                <span>Lorem ipsum dolor</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Dolor sit</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Amet</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="drop_outer" data-xt-drop>
    <button type="button" class="btn btn--primary">
      <span>left contain-top</span>
    </button>
    <div class="drop drop--left drop--contain-top">
      <div class="drop_inner">
        <div class="drop_design"></div>
        <div class="drop_content">
          <ul class="list list--drop">
            <li>
              <button type="button">
                <span>Lorem ipsum dolor</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Dolor sit</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Amet</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="drop_outer" data-xt-drop>
    <button type="button" class="btn btn--primary">
      <span>before contain-bottom</span>
    </button>
    <div class="drop drop--before drop--contain-bottom">
      <div class="drop_inner">
        <div class="drop_design"></div>
        <div class="drop_content">
          <ul class="list list--drop">
            <li>
              <button type="button">
                <span>Lorem ipsum dolor</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Dolor sit</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Amet</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="drop_outer" data-xt-drop>
    <button type="button" class="btn btn--primary">
      <span>before contain-top</span>
    </button>
    <div class="drop drop--before drop--contain-top">
      <div class="drop_inner">
        <div class="drop_design"></div>
        <div class="drop_content">
          <ul class="list list--drop">
            <li>
              <button type="button">
                <span>Lorem ipsum dolor</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Dolor sit</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Amet</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="drop_outer" data-xt-drop>
    <button type="button" class="btn btn--primary">
      <span>after contain-bottom</span>
    </button>
    <div class="drop drop--after drop--contain-bottom">
      <div class="drop_inner">
        <div class="drop_design"></div>
        <div class="drop_content">
          <ul class="list list--drop">
            <li>
              <button type="button">
                <span>Lorem ipsum dolor</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Dolor sit</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Amet</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="drop_outer" data-xt-drop>
    <button type="button" class="btn btn--primary">
      <span>after contain-top</span>
    </button>
    <div class="drop drop--after drop--contain-top">
      <div class="drop_inner">
        <div class="drop_design"></div>
        <div class="drop_content">
          <ul class="list list--drop">
            <li>
              <button type="button">
                <span>Lorem ipsum dolor</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Dolor sit</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Amet</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</div>
`
