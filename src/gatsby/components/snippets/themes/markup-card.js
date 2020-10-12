const cardDefault = require('components/snippets/classes/card-default').default
const cardPrimary = require('components/snippets/classes/card-primary').default
const btnDefault = require('components/snippets/classes/btn-default').default
const btnPrimary = require('components/snippets/classes/btn-primary').default

export default () => {
  return `
<div class="row row-3">

    <div class="w-full md:w-6/12">
      <a role="button" class="card ${cardDefault()}">
        <div class="card-block card-block-md">
          <div class="h4">Lorem ipsum dolor sit amet</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
        </div>
      </a>
    </div>

    <div class="w-full md:w-6/12">
      <a role="button" class="card ${cardPrimary()}">
        <div class="card-block card-block-md">
          <div class="h4">Lorem ipsum dolor sit amet</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
        </div>
      </a>
    </div>

    <div class="w-full md:w-6/12">
      <div class="card ${cardDefault()}">
        <div class="card-block card-block-md">
          <div class="h4">Lorem ipsum dolor sit amet</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          <button type="button" class="btn btn-md ${btnPrimary()}">
            primary
          </button>
        </div>
      </div>
    </div>

    <div class="w-full md:w-6/12">
      <div class="card ${cardPrimary()}">
        <div class="card-block card-block-md">
          <div class="h4">Lorem ipsum dolor sit amet</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          <button type="button" class="btn btn-md ${btnDefault()}">
            default
          </button>
        </div>
      </div>
    </div>

</div>
`
}
