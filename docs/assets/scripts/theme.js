//////////////////////
// Init xtend
//////////////////////

import XtUtil from '../../../scripts/xtend-utils';
XtUtil.initAll();

//////////////////////
// others
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

var elements = document.querySelectorAll('.site-article > h2, .site-article > h3'); //.filter(':parents(.demo)')
XtUtil.forEach(elements, function (element, i) {
  element.classList.add('make-line');
  var id = element.textContent.replace(/\s+/g, '-').toLowerCase();
  element.setAttribute('id', id);
  element.innerHTML = '<a href="#' + id + '">' + element.innerHTML + '</a>';
  element.classList.add('make-anchor');
  var append = createElementFromHTML('<span class="site-article-anchor"><div class="button"><span class="icon-link" aria-hidden="true"></span></div></span>')
  element.append(append);
});
function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes
  return div.firstChild;
}