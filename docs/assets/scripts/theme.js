//////////////////////
// Init xtend
//////////////////////

import XtUtil from '../../../scripts/xtend-utils';
XtUtil.initAll();

//////////////////////
// Docs
//////////////////////

// highlight

var elements = document.querySelectorAll('pre code');
XtUtil.forEach(elements, function (element, i) {
  hljs.highlightBlock(element);
});

// .make-line

var elements = document.querySelectorAll('.site-article > h2, .site-article > h3');
XtUtil.forEach(elements, function (element, i) {
  element.classList.add('make-line');
});
var elements = document.querySelectorAll('.make-line');
XtUtil.forEach(elements, function (element, i) {
  element.innerHTML = '<span class="line">' + element.innerHTML + '</div>';
  element.innerHTML = '<span class="line-container">' + element.innerHTML + '</div>';
});

// .make-anchor

var elements = document.querySelectorAll('.site-article > h2, .site-article > h3');
XtUtil.forEach(elements, function (element, i) {
  element.classList.add('make-line');
  var id = element.textContent.replace(/\s+/g, '-').toLowerCase();
  element.setAttribute('id', id);
  element.innerHTML = '<a href="#' + id + '">' + element.innerHTML + '</a>';
  element.classList.add('make-anchor');
  var append = XtUtil.createElement('<span class="site-article-anchor"><div class="btn"><span class="icon-link" aria-hidden="true"></span></div></span>');
  element.append(append);
});

// .site-aside-text

var elements = document.querySelectorAll('.site-aside-text > .btn:not(.different)');
XtUtil.forEach(elements, function (element, i) {
  var container = XtUtil.parents(element, '.site-aside-text')[0];
  var els = document.querySelectorAll('.site-article > h2');
  XtUtil.forEach(els, function (el, i) {;
    var append = XtUtil.createElement('<a href="#' + el.getAttribute('id') + '" class="btn btn-secondary-alt btn-small site-aside-sub">' + el.textContent + '</a>');
    container.append(append);
    var append = XtUtil.createElement('<div class="site-aside-subsub"></div>');
    container.append(append);
  });
  var els = document.querySelectorAll('.site-article > h3');
  XtUtil.forEach(els, function (el, i) {
    var append = XtUtil.createElement('<a href="#' + el.getAttribute('id') + '" class="btn btn-secondary-alt btn-tiny">' + el.textContent + '</a>');
    var item = container.querySelectorAll('.site-aside-subsub');
    item[item.length - 1].append(append);
  });
});

// activateAsideScroll

function activateAsideScroll(elements, scrollTop) {
  XtUtil.forEach(elements, function (element, i) {
    var href = element.getAttribute('href');
    if (href) {
      var target = document.querySelectorAll(href);
      var rect = target[0].getBoundingClientRect();
      var top = rect.top;
      var bottom = Infinity;
      if (scrollTop >= top && scrollTop < bottom) {
        if (!element.classList.contains('active')) {
          XtUtil.forEach(elements, function (el, i) {
            el.classList.remove('active');
          });
          element.classList.add('active');
        }
      } else {
        if (element.classList.contains('active')) {
          element.classList.remove('active');
        }
      }
    }
  });
}
window.addEventListener('scroll', function (e) {
  var scrollTop = document.documentElement.scrollTop;
  var sub = document.querySelectorAll('.btn.site-aside-sub'); // .filter(':parents(.xt-ignore)');
  activateAsideScroll(sub, scrollTop);
  var subsub = document.querySelectorAll('.btn.site-aside-sub.active + .site-aside-subsub .btn'); // .filter(':parents(.xt-ignore)');
  activateAsideScroll(subsub, scrollTop);
});