const iconX = require('components/snippets/icons').iconX

export default () => {
  return `
<div class="list list-2 items-center">

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      drop
    </button>
    <div class="drop drop-default">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">

          <nav class="list flex-col list-drop">
            <button type="button">
              Lorem ipsum dolor
            </button>
            <button type="button">
              Dolor sit
            </button>
            <button type="button">
              Amet
            </button>
          </nav>

        </div>
      </div>
    </div>
  </div>

  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn-primary">
      drop card
    </button>
    <div class="drop drop-default">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">

          <div class="card card-drop">
            <div class="card-design"></div>
            <div class="btn btn-close p-5 text-xl" aria-label="Close">
              ${iconX()}
            </div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-item">
                  <div class="h4">Primary</div>
                  <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
                  <a href="#" class="btn btn-primary">
                    Button
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

</div>
`
}
