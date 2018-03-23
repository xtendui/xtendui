(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/*! xtend v0.0.14 (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

console.log('xtend loaded');

// @TODO utils

function getElementIndex(node) {
  var index = 0;
  while (node = node.previousElementSibling) {
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
          var _classList, _targets$index$classL;

          (_classList = this.classList).add.apply(_classList, classes);
          (_targets$index$classL = targets[index].classList).add.apply(_targets$index$classL, classes);
        } else {
          var _classList2, _targets$index$classL2;

          (_classList2 = this.classList).remove.apply(_classList2, classes);
          (_targets$index$classL2 = targets[index].classList).remove.apply(_targets$index$classL2, classes);
        }
      });
    }
    if (off) {
      element.addEventListener(off, function (e) {
        var index = getElementIndex(this);
        if (this.classList.contains('active')) {
          var _classList3, _targets$index$classL3;

          (_classList3 = this.classList).remove.apply(_classList3, classes);
          (_targets$index$classL3 = targets[index].classList).remove.apply(_targets$index$classL3, classes);
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
},{}]},{},[1])