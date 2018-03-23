/*! xtend v0.0.14 (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

console.log('xtend loaded');

// @TODO utils

function getElementIndex(node) {
  var index = 0;
  while ((node = node.previousElementSibling)) {
    index++;
  }
  return index;
}

// @TODO toggle
console.log('ccccc');
var toggles = document.querySelectorAll('[data-xt-toggle]');
Array.prototype.forEach.call(toggles, function (toggle, i) {
  var options = JSON.parse(toggle.getAttribute('data-xt-toggle'));
  var elements = options.elements ? document.querySelectorAll(options.elements) : [toggle];
  var targets = document.querySelectorAll(options.targets);
  var classes = ['active'];
  if (options.class) {
    classes.push(options.class);
  }
  var on = options.on || 'click';
  var off = options.off || null;
  Array.prototype.forEach.call(elements, function (element, i) {
    if (on) {
      element.addEventListener(on, function (e) {
        var index = getElementIndex(this);
        if (!this.classList.contains('active')) {
          this.classList.add(...classes);
          targets[index].classList.add(...classes);
        } else {
          this.classList.remove(...classes);
          targets[index].classList.remove(...classes);
        }
      });
    }
    if (off) {
      element.addEventListener(off, function (e) {
        var index = getElementIndex(this);
        if (this.classList.contains('active')) {
          this.classList.remove(...classes);
          targets[index].classList.remove(...classes);
        }
      });
    }
  });
});

/*
document.getElementsByClassName('btn-menu')[0].addEventListener('click', function (e) {
  console.log(e);
  if (this.classList.contains('active')) {
    this.classList.remove('active');
  } else {
    this.classList.add('active');
  }
});
*/