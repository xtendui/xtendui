import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="list list-default list-space-small align-items-center">

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      bottom left
    </button>
    <div class="drop drop-default drop-bottom drop-left">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">
          <ul class="list list-drop">
            <li>
              <button type="button">
                Lorem ipsum dolor
              </button>
            </li>
            <li>
              <button type="button">
                Dolor sit
              </button>
            </li>
            <li>
              <button type="button">
                Amet
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      bottom right
    </button>
    <div class="drop drop-default drop-bottom drop-right">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">
          <ul class="list list-drop">
            <li>
              <button type="button">
                Lorem ipsum dolor
              </button>
            </li>
            <li>
              <button type="button">
                Dolor sit
              </button>
            </li>
            <li>
              <button type="button">
                Amet
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      bottom center
    </button>
    <div class="drop drop-default drop-bottom drop-center">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">
          <ul class="list list-drop">
            <li>
              <button type="button">
                Lorem ipsum dolor
              </button>
            </li>
            <li>
              <button type="button">
                Dolor sit
              </button>
            </li>
            <li>
              <button type="button">
                Amet
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      top left
    </button>
    <div class="drop drop-default drop-top drop-left">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">
          <ul class="list list-drop">
            <li>
              <button type="button">
                Lorem ipsum dolor
              </button>
            </li>
            <li>
              <button type="button">
                Dolor sit
              </button>
            </li>
            <li>
              <button type="button">
                Amet
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      top right
    </button>
    <div class="drop drop-default drop-top drop-right">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">
          <ul class="list list-drop">
            <li>
              <button type="button">
                Lorem ipsum dolor
              </button>
            </li>
            <li>
              <button type="button">
                Dolor sit
              </button>
            </li>
            <li>
              <button type="button">
                Amet
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      top center
    </button>
    <div class="drop drop-default drop-top drop-center">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">
          <ul class="list list-drop">
            <li>
              <button type="button">
                Lorem ipsum dolor
              </button>
            </li>
            <li>
              <button type="button">
                Dolor sit
              </button>
            </li>
            <li>
              <button type="button">
                Amet
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      left middle
    </button>
    <div class="drop drop-default drop-left drop-middle">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">
          <ul class="list list-drop">
            <li>
              <button type="button">
                Lorem ipsum dolor
              </button>
            </li>
            <li>
              <button type="button">
                Dolor sit
              </button>
            </li>
            <li>
              <button type="button">
                Amet
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      right middle
    </button>
    <div class="drop drop-default drop-right drop-middle">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">
          <ul class="list list-drop">
            <li>
              <button type="button">
                Lorem ipsum dolor
              </button>
            </li>
            <li>
              <button type="button">
                Dolor sit
              </button>
            </li>
            <li>
              <button type="button">
                Amet
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      center middle
    </button>
    <div class="drop drop-default drop-center drop-middle">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">
          <ul class="list list-drop">
            <li>
              <button type="button">
                Lorem ipsum dolor
              </button>
            </li>
            <li>
              <button type="button">
                Dolor sit
              </button>
            </li>
            <li>
              <button type="button">
                Amet
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      before top
    </button>
    <div class="drop drop-default drop-before drop-top">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">
          <ul class="list list-drop">
            <li>
              <button type="button">
                Lorem ipsum dolor
              </button>
            </li>
            <li>
              <button type="button">
                Dolor sit
              </button>
            </li>
            <li>
              <button type="button">
                Amet
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      before bottom
    </button>
    <div class="drop drop-default drop-before drop-bottom">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">
          <ul class="list list-drop">
            <li>
              <button type="button">
                Lorem ipsum dolor
              </button>
            </li>
            <li>
              <button type="button">
                Dolor sit
              </button>
            </li>
            <li>
              <button type="button">
                Amet
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      before middle
    </button>
    <div class="drop drop-default drop-before drop-middle">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">
          <ul class="list list-drop">
            <li>
              <button type="button">
                Lorem ipsum dolor
              </button>
            </li>
            <li>
              <button type="button">
                Dolor sit
              </button>
            </li>
            <li>
              <button type="button">
                Amet
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      after top
    </button>
    <div class="drop drop-default drop-after drop-top">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">
          <ul class="list list-drop">
            <li>
              <button type="button">
                Lorem ipsum dolor
              </button>
            </li>
            <li>
              <button type="button">
                Dolor sit
              </button>
            </li>
            <li>
              <button type="button">
                Amet
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      after bottom
    </button>
    <div class="drop drop-default drop-after drop-bottom">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">
          <ul class="list list-drop">
            <li>
              <button type="button">
                Lorem ipsum dolor
              </button>
            </li>
            <li>
              <button type="button">
                Dolor sit
              </button>
            </li>
            <li>
              <button type="button">
                Amet
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      after middle
    </button>
    <div class="drop drop-default drop-after drop-middle">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">
          <ul class="list list-drop">
            <li>
              <button type="button">
                Lorem ipsum dolor
              </button>
            </li>
            <li>
              <button type="button">
                Dolor sit
              </button>
            </li>
            <li>
              <button type="button">
                Amet
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      right contain-bottom
    </button>
    <div class="drop drop-default drop-right drop-contain-bottom">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">
          <ul class="list list-drop">
            <li>
              <button type="button">
                Lorem ipsum dolor
              </button>
            </li>
            <li>
              <button type="button">
                Dolor sit
              </button>
            </li>
            <li>
              <button type="button">
                Amet
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      right contain-top
    </button>
    <div class="drop drop-default drop-right drop-contain-top">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">
          <ul class="list list-drop">
            <li>
              <button type="button">
                Lorem ipsum dolor
              </button>
            </li>
            <li>
              <button type="button">
                Dolor sit
              </button>
            </li>
            <li>
              <button type="button">
                Amet
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      left contain-bottom
    </button>
    <div class="drop drop-default drop-left drop-contain-bottom">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">
          <ul class="list list-drop">
            <li>
              <button type="button">
                Lorem ipsum dolor
              </button>
            </li>
            <li>
              <button type="button">
                Dolor sit
              </button>
            </li>
            <li>
              <button type="button">
                Amet
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      left contain-top
    </button>
    <div class="drop drop-default drop-left drop-contain-top">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">
          <ul class="list list-drop">
            <li>
              <button type="button">
                Lorem ipsum dolor
              </button>
            </li>
            <li>
              <button type="button">
                Dolor sit
              </button>
            </li>
            <li>
              <button type="button">
                Amet
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      before contain-bottom
    </button>
    <div class="drop drop-default drop-before drop-contain-bottom">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">
          <ul class="list list-drop">
            <li>
              <button type="button">
                Lorem ipsum dolor
              </button>
            </li>
            <li>
              <button type="button">
                Dolor sit
              </button>
            </li>
            <li>
              <button type="button">
                Amet
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      before contain-top
    </button>
    <div class="drop drop-default drop-before drop-contain-top">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">
          <ul class="list list-drop">
            <li>
              <button type="button">
                Lorem ipsum dolor
              </button>
            </li>
            <li>
              <button type="button">
                Dolor sit
              </button>
            </li>
            <li>
              <button type="button">
                Amet
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      after contain-bottom
    </button>
    <div class="drop drop-default drop-after drop-contain-bottom">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">
          <ul class="list list-drop">
            <li>
              <button type="button">
                Lorem ipsum dolor
              </button>
            </li>
            <li>
              <button type="button">
                Dolor sit
              </button>
            </li>
            <li>
              <button type="button">
                Amet
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      after contain-top
    </button>
    <div class="drop drop-default drop-after drop-contain-top">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">
          <ul class="list list-drop">
            <li>
              <button type="button">
                Lorem ipsum dolor
              </button>
            </li>
            <li>
              <button type="button">
                Dolor sit
              </button>
            </li>
            <li>
              <button type="button">
                Amet
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</div>
`
