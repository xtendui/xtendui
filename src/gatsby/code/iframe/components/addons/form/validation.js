import React from 'react'
import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const labelDefault = require('components/snippets/classes/label-default').default
const inputDefault = require('components/snippets/classes/input-default').default

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: true,
  full: false,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<form>
  <div class="row row-space-x-4 row-space-y-3">

    <div class="w-full">
      <label class="label mb-4 ${labelDefault()}">
        Email
      </label>
      <input type="email" class="input ${inputDefault()} " placeholder="Email" required>
    </div>

    <div class="w-full">
      <label class="label mb-4 ${labelDefault()}">
        Number
      </label>
      <input type="email" class="input ${inputDefault()} " placeholder="Number" required min="1" max="10">
    </div>

    <div class="w-full">
      <label class="label mb-4 ${labelDefault()}">
        Letters
      </label>
      <input type="text" class="input ${inputDefault()} " placeholder="Letter" required pattern="[A-Za-z]+">
    </div>

    <div class="w-full">
      <label class="label mb-4 ${labelDefault()}">
        Custom constrain
      </label>
      <input type="text" class="input ${inputDefault()} demo--validation-custom-constrain" placeholder="Custom" required>
    </div>

    <script>
      function validationCustom (e) {
          var item = e.target
          var constraints = ['^(CH-)?\\\\d{4}$', 'Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950'];
          var constraint = new RegExp(constraints[0], '');
          if (constraint.test(item.value)) {
              item.setCustomValidity('');
          } else {
              item.setCustomValidity(constraints[1]);
          }
      }
      var items = document.querySelectorAll('.demo--validation-custom-constrain')
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        item.addEventListener('input', validationCustom);
      }
    </script>

    <div class="w-full">
      <label class="label mb-4 ${labelDefault()}">
        File
      </label>
      <input type="file" class="input ${inputDefault()}" required/>
    </div>

    <div class="w-full">
      <label class="label mb-4 ${labelDefault()}">
        Textarea
      </label>
      <textarea class="input ${inputDefault()}" placeholder="Textarea" required></textarea>
    </div>

    <div class="w-full">
      <label class="label mb-4 ${labelDefault()}">
        Select
      </label>
      <select class="input ${inputDefault()}" required>
        <option selected value="">Select an option</option>
        <option>Test</option>
        <option>Test</option>
        <option>Test</option>
      </select>
    </div>

    <div class="w-full">
      <label class="label mb-4 ${labelDefault()}" required>
        Select multiple
      </label>
      <select class="input ${inputDefault()}" multiple>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>

    <div class="w-full">
      <input type="checkbox" id="check-validation" name="check-validation" required>
      <label class="label ${labelDefault()}" for="check-validation">
        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
      </label>
    </div>

    <div class="w-full">
      <input type="radio" id="radio-default-0" name="radio-validation" required>
      <label class="label ${labelDefault()}" for="radio-validation-0">
        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
      </label>
    </div>

    <div class="w-full">
      <input type="radio" id="radio-default-0" name="radio-validation" required>
      <label class="label ${labelDefault()}" for="radio-validation-1">
        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
      </label>
    </div>

    <div class="w-full">
      <button type="submit" class="btn btn-medium ${btnPrimary()}">
        submit
      </button>
    </div>

  </div>
</form>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
