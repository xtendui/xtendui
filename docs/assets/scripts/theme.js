//////////////////////
// docs
//////////////////////

// formatCode

import {XtUtil} from "../../../scripts/xtend-utils";

const formatCode = function (source, lang) {
  let inner = Array.from(source.querySelectorAll('.demo-source-from'));
  inner = inner.filter(x => !x.querySelectorAll('.demo-source-from').length); // filter out nested
  if (inner.length) {
    source = inner[0];
  }
  let text = source.innerHTML;
  if (lang === 'css' || lang === 'js') {
    // remove <style> or <script> tag
    if (text.search(/<[^>]*>/g) !== -1) {
      text = text.replace(/<[^>]*>/g, '');
      text = text.substring(1);
    }
    // replace entities
    text = text.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
  } else if (lang === 'html') {
    if (text.match(/[&<>]/g)) {
      // replace quote entities
      text = text.replace(/&quot;/g, '"');
      // replace entities
      text = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      // replace json quotes
      text = text.replace(/("{)/g, '\'{').replace(/(}")/g, '}\'');
      // replace empty quotes
      text = text.replace(/=""/g, '');
    }
  }
  // remove tabs
  let arr = text.split('\n');
  let toRemove = arr[1].search(/\S/g);
  for (let i of arr.keys()) {
    arr[i] = arr[i].substring(toRemove);
  }
  text = arr.join('\n');
  // remove newline at start and end
  text = text.replace(/^\s+|\s+$/g, '');
  // return
  return text;
};

// highlight

for (let el of document.querySelectorAll('pre code')) {
  let lang = el.className;
  let text = formatCode(el, lang);
  // set text
  el.innerHTML = text;
  window.hljs.highlightBlock(el);
}

// .make-line

for (let el of document.querySelectorAll('.site-article > h2, .site-article > h3')) {
  el.classList.add('make-line');
}
for (let el of document.querySelectorAll('.make-line')) {
  el.innerHTML = '<div class="line">' + el.innerHTML + '</div>';
  el.innerHTML = '<div class="line-container">' + el.innerHTML + '</div>';
}

// .make-anchor

for (let el of document.querySelectorAll('.site-article > h2, .site-article > h3')) {
  el.classList.add('make-line');
  // previous h2 if h3
  let prevElement;
  if (el.tagName === 'H3') {
    prevElement = el;
    while (prevElement.previousElementSibling) {
      if (prevElement.tagName === 'H2') {
        break;
      }
      prevElement = prevElement.previousElementSibling;
    }
  }
  // id
  let id = '';
  if (prevElement) {
    id += prevElement.textContent.replace(/\s+/g, '-').toLowerCase() + '-';
  }
  id += el.textContent.replace(/\s+/g, '-').toLowerCase();
  // make-anchor
  el.setAttribute('id', id);
  el.innerHTML = '<a href="#' + id + '">' + el.innerHTML + '</a>';
  el.classList.add('make-anchor');
  el.append(XtUtil.createElement('<span class="site-article-anchor"><div class="btn"><span class="icon-link" aria-hidden="true"></span></div></span>'));
}

// .site-aside-text

for (let el of document.querySelectorAll('.site-aside-text > .btn:not(.different)')) {
  let container = XtUtil.parents(el, '.site-aside-text')[0];
  for (let element of document.querySelectorAll('.site-article > h2, .site-article > h3')) {
    if (element.tagName === 'H2') {
      let appendItem = XtUtil.createElement('<div class="site-aside-sub-container"></div>');
      container.append(appendItem);
      appendItem.append(XtUtil.createElement('<a href="#' + element.getAttribute('id') + '" class="btn btn-nodesign btn-site-aside-sub">' + element.textContent + '</a>'));
      appendItem.append(XtUtil.createElement('<div class="site-aside-subsub collapse-height"></div>'));
    } else if (element.tagName === 'H3') {
      let subs = container.querySelectorAll('.site-aside-subsub');
      subs[subs.length - 1].append(XtUtil.createElement('<a href="#' + element.getAttribute('id') + '" class="btn btn-nodesign btn-site-aside-subsub">' + element.textContent + '</a>'));
    }
  }
}

for (let el of document.querySelectorAll('.site-aside-text')) {
  new XtToggle(el, {
    "elements": ".site-aside-sub-container",
    "targets": ".site-aside-subsub",
    "on": "mouseenter",
    "off": "mouseleave",
    "min": 0,
    "max": 1
  });
}

// activateAsideScroll

const activateAsideScroll = function (els, scrollTop) {
  const dist = window.innerHeight / 5;
  for (let el of els) {
    let href = el.getAttribute('href');
    if (href) {
      let target = document.querySelectorAll(href);
      let rect = target[0].getBoundingClientRect();
      let top = rect.top + scrollTop;
      let bottom = Infinity;
      if (scrollTop >= top - dist && scrollTop < bottom - dist) {
        if (!el.classList.contains('active')) {
          for (let element of els) {
            if (element !== el) {
              element.classList.remove('active', 'open');
            } else {
              el.classList.add('active', 'open');
            }
          }
        }
      } else {
        if (el.classList.contains('active')) {
          el.classList.remove('active', 'open');
        }
      }
    }
  }
};
window.addEventListener('scroll', function (e) {
  let scrollTop = document.documentElement.scrollTop;
  let sub = Array.from(document.querySelectorAll('.btn-site-aside-sub'));
  sub = sub.filter(x => !XtUtil.parents(x, '.xt-clone').length); // filter out parent
  activateAsideScroll(sub, scrollTop);
  let subsub = Array.from(document.querySelectorAll('.btn-site-aside-sub.active + .site-aside-subsub .btn-site-aside-subsub'));
  subsub = subsub.filter(x => !XtUtil.parents(x, '.xt-clone').length); // filter out parent
  activateAsideScroll(subsub, scrollTop);
});

//////////////////////
// demos
//////////////////////

// populateDemo

const populateDemo = function (container, i) {
  let items = container.querySelectorAll('.demo-item');
  // multiple elements
  let prepend = XtUtil.createElement('<div class="demo-tabs"><div class="demo-tabs-left"></div><div class="demo-tabs-right"></div></div>');
  container.prepend(prepend);
  let append = XtUtil.createElement('<button type="button" class="btn btn-secondary-empty btn-fullscreen" data-toggle="tooltip" data-placement="top" title="Open fullscreen"><span class="icon-enlarge2"></span></button>');
  container.querySelectorAll('.demo-tabs-right')[0].append(append);
  // don't show tabs on single
  if (items.length === 1) {
    container.querySelectorAll('.demo-tabs')[0].style.display = 'none';
  }
  // loop items
  for (let [k, item] of items.entries()) {
    // populate tabs
    let name = item.getAttribute('data-name');
    if (items.length === 1) {
      if (!item.getAttribute('data-name')) {
        name = 'demo';
      }
    } else {
      if (!item.getAttribute('data-name')) {
        name = 'demo #' + k;
      }
    }
    let appendBtn = XtUtil.createElement('<button type="button" class="btn btn-secondary-empty">' + name + '</button>');
    let btn = container.querySelectorAll('.demo-tabs-left')[0].append(appendBtn);
    btn = container.querySelectorAll('.demo-tabs-left .btn')[k];
    // iframe append
    let src = item.getAttribute('data-iframe');
    let id = 'iframe' + i + k;
    if (src) {
      let appendIframe = XtUtil.createElement('<iframe data-src="' + src + '" frameborder="0" name="' + id + '"></iframe>');
      item.append(appendIframe);
    }
    // tabs
    let appendItem = XtUtil.createElement('<div class="demo-code"><div class="demo-code-tabs"><div class="demo-code-tabs-left"></div><div class="demo-code-tabs-right"><button type="button" class="btn btn-secondary-empty btn-clipboard" data-toggle="tooltip" data-placement="top" title="Copy to clipboard">copy</button></div></div><div class="demo-code-body"></div></div>');
    item.append(appendItem);
    // https://github.com/zenorocha/clipboard.js/
    let clipboard = new Clipboard('.btn-clipboard', {
      target: function (trigger) {
        return XtUtil.parents(trigger, '.demo')[0].querySelectorAll('.demo-item.active .demo-code-body-item.active .hljs')[0];
      }
    });
    clipboard.on('success', function (e) {
      e.clearSelection();
      //$(e.trigger).attr('data-original-title', 'Done').tooltip('show');
    });
    clipboard.on('error', function (e) {
      //$(e.trigger).attr('data-original-title', 'Error: copy manually').tooltip('show');
    });
    // inject iframe
    if (item.getAttribute('data-iframe')) {
      let iframe = item.querySelectorAll('iframe')[0];
      let initIframe = function() {
        if (!iframe.getAttribute('src')) {
          item.classList.add('demo-iframe');
          iframe.setAttribute('src', iframe.getAttribute('data-src'));
        }
      };
      if (k === 0) {
        initIframe();
      }
      // @TODO events revision
      iframe.parentElement.addEventListener('on', function (e) {
        if (e.target === this) {
          if (!item.classList.contains('populated')) {
            initIframe();
          } else {
            iframe.contentDocument.location.reload(true);
          }
        }
      });
      iframe.parentElement.addEventListener('off', function (e) {
        if (e.target === this) {
          iframe.classList.remove('show');
        }
      });
    } else {
      populateInline(item, id);
      // .populated fix scroll
      item.classList.add('populated');
    }
  }
};

// populateInline

const populateInline = function (item, id) {
  let els = item.querySelectorAll('.demo-source');
  for (let [z, el] of els.entries()) {
    populateSources(item, el, z);
    if (!item.classList.contains('demo-preview')) {
      el.style.display = none;
    }
    /*
    // don't show tabs on single
    if (els.length === 1) {
      item.querySelectorAll('.demo-code-tabs')[0].style.display = 'none';
    }
    */
  }
  new XtToggle(item, {
    "elements": ".demo-code-tabs-left .btn",
    "targets": ".demo-code-body-item",
    "min": 1
  });
};

// populateIframe

window.initIframe = function(name) {
  let iframe = document.documentElement.querySelectorAll('[name="' + name + '"')[0];
  iframe.classList.add('show');
  let item = XtUtil.parents(iframe, '.demo-item')[0];
  if (!item.classList.contains('populated')) {
    populateIframe(item, iframe);
    window.resizeIframe(name);
    item.classList.add('populated');
  }
}

window.resizeIframe = function(name) {
  let iframe = document.querySelectorAll('[name="' + name + '"')[0];
  if (iframe) {
    if (!iframe.contentWindow.document.body.classList.contains('full')) {
      let target = iframe.contentWindow.document.body.querySelectorAll('#body-outer')[0];
      let h = target.offsetHeight;
      if (h !== iframe.getAttribute('iframeHeight')) {
        iframe.style.height = h + 'px';
        iframe.setAttribute('iframeHeight', h);
      }
    }
  }
};

function populateIframe(item, iframe) {
  let html = iframe.contentWindow.document.body.querySelectorAll('#body-outer')[0];
  let less = iframe.contentWindow.document.body.querySelectorAll('less-style')[0];
  let css = iframe.contentWindow.document.body.querySelectorAll('style[scoped]')[0];
  let js = iframe.contentWindow.document.body.querySelectorAll('js-script')[0];
  // inject code
  if (html) {
    let appendItem = XtUtil.createElement('<div class="demo-source" data-lang="html">' + html.innerHTML + '</div>');
    iframe.append(appendItem);
  }
  if (less) {
    let appendItem = XtUtil.createElement('<div class="demo-source" data-lang="less">' + less.innerHTML + '</div>');
    iframe.append(appendItem);
  }
  if (js) {
    let appendItem = XtUtil.createElement('<div class="demo-source" data-lang="js">' + js.innerHTML + '</div>');
    iframe.append(appendItem);
  }
  // populate
  for (let [z, source] of item.querySelectorAll('.demo-source').entries()) {
    populateSources(item, source, z);
  }
  new XtToggle(item, {
    "elements": ".demo-code-tabs-left .btn",
    "targets": ".demo-code-body-item",
    "min": 1
  });
}

// populateSources

const populateSources = function (item, element, z) {
  let lang = element.getAttribute('data-lang');
  // populate tabs
  let appendCode = XtUtil.createElement('<div class="demo-code-body-item"><pre><code></code></pre></div>');
  let codeInside = item.querySelectorAll('.demo-code-body')[0].append(appendCode);
  codeInside = item.querySelectorAll('.demo-code-body .demo-code-body-item')[z].querySelectorAll('pre code')[0];
  let appendBtn = XtUtil.createElement('<button type="button" class="btn btn-secondary-empty">' + lang + '</button>');
  let btnInside = item.querySelectorAll('.demo-code-tabs-left')[0].append(appendBtn);
  //btnInside = item.querySelectorAll('.demo-code-tabs-left').querySelectorAll('.btn')[z];
  // format code
  if (!codeInside.classList.contains('hljs')) {
    let text = formatCode(element, lang);
    // set text
    codeInside.innerHTML = text;
    codeInside.classList.add(lang);
    window.hljs.highlightBlock(codeInside);
  }
};

// init demos

for (let [i, el] of document.querySelectorAll('.demo').entries()) {
  populateDemo(el, i);
  // enable fullscreen
  /*
  element.find('.demo-tabs-left .button').on('on', function(e, obj) {
    let $fullscreen = $(this).parents('.demo').find('.button__fullscreen');
    let iframe = $(this).parents('.demo').find('.demo-item.active').attr('data-iframe');
    if (iframe) {
      $fullscreen.css('display', 'block');
      $fullscreen.off('click');
      $fullscreen.on('click', function() {
        window.open(iframe, '_blank');
      });
    }
  });
  */
  // demo tabs
  new XtToggle(el, {
    "elements": ".demo-tabs-left .btn",
    "targets": ".demo-item",
    "min": 1
  });
}

//////////////////////
// others
//////////////////////

// .demo-cols

for (let element of document.querySelectorAll('.demo-cols')) {
  for (let [i, el] of element.querySelectorAll('.col').entries()) {
    el.setAttribute('data-index', i);
  }
}

// .demo-cols-nested

for (let element of document.querySelectorAll('.demo-cols-nested .col')) {
  for (let [i, el] of element.querySelectorAll('.col').entries()) {
    el.setAttribute('data-index', i);
  }
}

//////////////////////
// xtend
//////////////////////

// init all

function initAll() {
  XtUtil.initAll();
}
if (document.readyState !== 'loading') {
  initAll();
} else if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', initAll);
}