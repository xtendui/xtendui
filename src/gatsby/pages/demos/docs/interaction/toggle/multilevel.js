import React from "react"
import path from "path";

import DemoVanillaIframe from "components/demo-vanilla-iframe"

const demo = {
  name: path.basename(__filename, '.js'),
  js: false,
  css: true,
  full: false
}
demo.htmlSource = `
<div class="multilevel"
     data-xt-toggle='{"elements": "#multilevel-tab-reset, .multilevel-tab .multilevel-list button", "targets": ".multilevel-tab", "min": 1}'>

  <nav role="navigation" class="multilevel-tab">

    <div class="multilevel-title-wrapper">
      <div class="multilevel-title">
        <span>Products</span>
      </div>
      <button type="button" class="btn btn--secondary-empty btn--none multilevel-reset display--none" id="multilevel-tab-reset">
        <span>Back</span>
      </button>
    </div>

    <ul class="list-block list-space--none multilevel-list">
      <li>
        <button type="button" class="btn" data-xt-group="cat-0">
          <span>Category 0</span>
        </button>
      </li>
      <li>
        <button type="button" class="btn" data-xt-group="cat-1">
          <span>Category 1</span>
        </button>
      </li>
      <li>
        <a href="#" class="btn">
          <span>Link 0</span>
        </a>
      </li>
      <li>
        <a href="#" class="btn">
          <span>Link 1</span>
        </a>
      </li>
    </ul>

    <div class="multilevel-title-wrapper">
      <div class="multilevel-title">
        <span>About</span>
      </div>
    </div>
    <ul class="list-block list-space--none multilevel-list">
      <li>
        <a href="#" class="btn">
          <span>Link 0</span>
        </a>
      </li>
      <li>
        <a href="#" class="btn">
          <span>Link 1</span>
        </a>
      </li>
    </ul>

  </nav>

  <nav role="navigation" class="multilevel-tab" data-xt-group="cat-0">

    <div class="multilevel-title-wrapper">
      <div class="multilevel-title">
        <span>Category 0</span>
      </div>
      <button type="button" class="btn btn--secondary-empty btn--none multilevel-reset">
        <span>Back</span>
      </button>
    </div>

    <ul class="list-block list-space--none multilevel-list">
      <li>
        <button type="button" class="btn" data-xt-group="cat-0a">
          <span>Category 0a</span>
        </button>
      </li>
      <li>
        <button type="button" class="btn" data-xt-group="cat-0b">
          <span>Category 0b</span>
        </button>
      </li>
      <li>
        <a href="#" class="btn">
          <span>Link 0</span>
        </a>
      </li>
      <li>
        <a href="#" class="btn">
          <span>Link 1</span>
        </a>
      </li>
    </ul>

  </nav>

  <nav role="navigation" class="multilevel-tab" data-xt-group="cat-0a">

    <div class="multilevel-title-wrapper">
      <div class="multilevel-title">
        <span>Category 0a</span>
      </div>
      <button type="button" class="btn btn--secondary-empty btn--none multilevel-reset">
        <span>Back</span>
      </button>
    </div>

    <ul class="list-block list-space--none multilevel-list">
      <li>
        <a href="#" class="btn">
          <span>Link 0</span>
        </a>
      </li>
      <li>
        <a href="#" class="btn">
          <span>Link 1</span>
        </a>
      </li>
    </ul>

  </nav>

  <nav role="navigation" class="multilevel-tab" data-xt-group="cat-0b">

    <div class="multilevel-title-wrapper">
      <div class="multilevel-title">
        <span>Category 0b</span>
      </div>
      <button type="button" class="btn btn--secondary-empty btn--none multilevel-reset">
        <span>Back</span>
      </button>
    </div>

    <ul class="list-block list-space--none multilevel-list">
      <li>
        <a href="#" class="btn">
          <span>Link 0</span>
        </a>
      </li>
      <li>
        <a href="#" class="btn">
          <span>Link 1</span>
        </a>
      </li>
    </ul>

  </nav>

  <nav role="navigation" class="multilevel-tab" data-xt-group="cat-1">

    <div class="multilevel-title-wrapper">
      <div class="multilevel-title">
        <span>Category 1</span>
      </div>
      <button type="button" class="btn btn--secondary-empty btn--none multilevel-reset">
        <span>Back</span>
      </button>
    </div>

    <ul class="list-block list-space--none multilevel-list">
      <li>
        <a href="#" class="btn">
          <span>Link 0</span>
        </a>
      </li>
      <li>
        <a href="#" class="btn">
          <span>Link 1</span>
        </a>
      </li>
    </ul>

  </nav>

</div>
`

class Page extends React.Component {
  componentDidMount() {
    if (demo.js) {
      require("./" + demo.name + ".source.js")
    }
  }

  render() {
    if (demo.js) {
      demo.jsSource = require("!!raw-loader!./" + demo.name + ".source.js").default
    }
    if (demo.css) {
      demo.cssSource = require("!!raw-loader!./" + demo.name + ".source.less").default
      demo.css = demo.css ? require("!raw-loader!less-loader!./" + demo.name + ".source.less").default : null
    }
    return (
      <DemoVanillaIframe demo={demo}/>
    )
  }
}

export default Page
