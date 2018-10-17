
function inputNumberValidate(val) {
  let group = this;
  let input = group.querySelectorAll('input')[0];
  let addEl = group.querySelectorAll('.group-number-add')[0];
  let removeEl = group.querySelectorAll('.group-number-remove')[0];
  // disabled
  addEl.removeAttribute('disabled');
  removeEl.removeAttribute('disabled');
  // check min and max
  let inputMin = parseFloat(input.getAttribute('data-min')) || 0;
  let inputMax = parseFloat(input.getAttribute('data-max')) || Infinity;
  if (val <= inputMin) {
    val = inputMin;
    removeEl.setAttribute('disabled', 'disabled');
  }
  if (val >= inputMax) {
    val = inputMax;
    addEl.setAttribute('disabled', 'disabled');
  }
  // set value
  input.value = val;
  input.dispatchEvent(new CustomEvent('keyup', {detail: {skip: true}}));
  input.dispatchEvent(new CustomEvent('change', {detail: {skip: true}}));
}

function inputNumberChange(step, e) {
  if (!e || !e.detail || !e.detail.skip) {
    let group = this;
    let input = group.querySelectorAll('input')[0];
    let val = parseFloat(input.value);
    val = val + step;
    inputNumberValidate.bind(group)(val);
  }
}

function inputNumberInit(container) {
  for (let [i, group] of container.querySelectorAll('.group-number-line, .group-number-stack').entries()) {
    // init
    inputNumberChange.bind(group, 0)();
    // add
    let addStep = 1;
    let addHandler = inputNumberChange.bind(group, addStep);
    let addEl = group.querySelectorAll('.group-number-add')[0];
    addEl.removeEventListener('click', addHandler)
    addEl.addEventListener('click', addHandler);
    // remove
    let removeStep = -1;
    let removeHandler = inputNumberChange.bind(group, removeStep);
    let removeEl = group.querySelectorAll('.group-number-remove')[0];
    removeEl.removeEventListener('click', removeHandler);
    removeEl.addEventListener('click', removeHandler);
    // change
    let input = group.querySelectorAll('input')[0];
    let inputHandler = inputNumberChange.bind(group, 0);
    input.removeEventListener('change', inputHandler);
    input.addEventListener('change', inputHandler);
  }
}

inputNumberInit(document);
