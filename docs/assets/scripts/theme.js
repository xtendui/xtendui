//////////////////////
// docs
//////////////////////

// highlight

var els = document.querySelectorAll('pre code');
for (var el of els) {
  el.innerHTML = el.innerHTML.replace(/^\s+|\s+$/g, ''); // remove newline at start and end
  window.hljs.highlightBlock(el);
}

// .make-line

var els = document.querySelectorAll('.site-article > h2, .site-article > h3');
for (var el of els) {
  el.classList.add('make-line');
}
var els = document.querySelectorAll('.make-line');
for (var el of els) {
  el.innerHTML = '<span class="line">' + el.innerHTML + '</div>';
  el.innerHTML = '<span class="line-container">' + el.innerHTML + '</div>';
}

// .make-anchor

var els = document.querySelectorAll('.site-article > h2, .site-article > h3');
for (var el of els) {
  el.classList.add('make-line');
  var id = el.textContent.replace(/\s+/g, '-').toLowerCase();
  el.setAttribute('id', id);
  el.innerHTML = '<a href="#' + id + '">' + el.innerHTML + '</a>';
  el.classList.add('make-anchor');
  var append = XtUtil.createElement('<span class="site-article-anchor"><div class="btn"><span class="icon-link" aria-hidden="true"></span></div></span>');
  el.append(append);
}

// .site-aside-text

var els = document.querySelectorAll('.site-aside-text > .btn:not(.different)');
for (var el of els) {
  var container = XtUtil.parents(el, '.site-aside-text')[0];
  var elements = document.querySelectorAll('.site-article > h2');
  for (var element of elements) {
    var append = XtUtil.createElement('<a href="#' + element.getAttribute('id') + '" class="btn btn-secondary-alt btn-small site-aside-sub">' + element.textContent + '</a>');
    container.append(append);
    var append = XtUtil.createElement('<div class="site-aside-subsub"></div>');
    container.append(append);
  }
  var elements = document.querySelectorAll('.site-article > h3');
  for (var element of elements) {
    var append = XtUtil.createElement('<a href="#' + element.getAttribute('id') + '" class="btn btn-secondary-alt btn-tiny">' + element.textContent + '</a>');
    var item = container.querySelectorAll('.site-aside-subsub');
    item[item.length - 1].append(append);
  }
}

// activateAsideScroll

var activateAsideScroll = function (els, scrollTop) {
  for (var el of els) {
    var href = el.getAttribute('href');
    if (href) {
      var target = document.querySelectorAll(href);
      var rect = target[0].getBoundingClientRect();
      var top = rect.top;
      var bottom = Infinity;
      if (scrollTop >= top && scrollTop < bottom) {
        if (!el.classList.contains('active')) {
          for (var element of els) {
            element.classList.remove('active');
          }
          el.classList.add('active');
        }
      } else {
        if (el.classList.contains('active')) {
          el.classList.remove('active');
        }
      }
    }
  }
};
window.addEventListener('scroll', function (e) {
  var scrollTop = document.documentElement.scrollTop;
  var sub = document.querySelectorAll('.btn.site-aside-sub'); // .filter(':parents(.xt-ignore)');
  activateAsideScroll(sub, scrollTop);
  var subsub = document.querySelectorAll('.btn.site-aside-sub.active + .site-aside-subsub .btn'); // .filter(':parents(.xt-ignore)');
  activateAsideScroll(subsub, scrollTop);
});

//////////////////////
// demos
//////////////////////

// populateDemo

var populateDemo = function (container, i) {
  var items = container.querySelectorAll('.demo-item');
  // multiple elements
  var prepend = XtUtil.createElement('<div class="demo-tabs"><div class="demo-tabs-left"></div><div class="demo-tabs-right"></div></div>');
  container.prepend(prepend);
  var append = XtUtil.createElement('<button type="button" class="btn btn-secondary-alt btn-fullscreen" data-toggle="tooltip" data-placement="top" title="Open fullscreen"><span class="icon-enlarge2"></span></button>');
  container.querySelectorAll('.demo-tabs-right')[0].append(append);
  // single element and no demo tabs
  if (items.length === 1) { // && !$items.hasClass('demo-preview') && !$items.attr('data-iframe')
    items[0].style.display = 'block';
    container.querySelectorAll('.demo-tabs')[0].style.display = 'none';
  }
  // loop items
  for (var [k, item] of items.entries()) {
    // populate tabs
    var name = item.getAttribute('data-name');
    if (items.length === 1) {
      if (!item.getAttribute('data-name')) {
        name = 'demo';
      }
    } else {
      if (!item.getAttribute('data-name')) {
        name = 'demo #' + k;
      }
    }
    var appendBtn = XtUtil.createElement('<button type="button" class="btn btn-secondary-alt">' + name + '</button>');
    var btn = container.querySelectorAll('.demo-tabs-left')[0].append(appendBtn);
    btn = container.querySelectorAll('.demo-tabs-left .btn')[k];
    /*
    // iframe append
    if ($item.attr('data-iframe')) {
      $item.append('<iframe data-src="' + $item.attr('data-iframe') + '" frameborder="0"></iframe>');
    }
    */
    // tabs
    var id = 'iframe' + i + k;
    var appendItem = XtUtil.createElement('<div class="demo-code"><div class="demo-code-tabs"><div class="demo-code-tabs-left"></div><div class="demo-code-tabs-right"><button type="button" class="btn btn-secondary-alt btn-clipboard" data-toggle="tooltip" data-placement="top" title="Copy to clipboard">copy</button></div></div><div class="demo-code-body"></div></div>');
    item.append(appendItem);
    // https://github.com/zenorocha/clipboard.js/
    var clipboard = new Clipboard('.btn-clipboard', {
      target: function(trigger) {
        return XtUtil.parents(trigger, '.demo')[0].querySelectorAll('.demo-item.active .demo-code-body-item.active .hljs')[0];
      }
    });
    clipboard.on('success', function(e) {
      e.clearSelection();
      //$(e.trigger).attr('data-original-title', 'Done').tooltip('show');
    });
    clipboard.on('error', function(e) {
      //$(e.trigger).attr('data-original-title', 'Error: copy manually').tooltip('show');
    });
    // inject iframe
    if (item.getAttribute('data-iframe')) {
      /*
      var $iframe = $item.find('> iframe');
      var initIframe = function() {
        if (!$iframe.attr('src')) {
          $item.addClass('demo-iframe');
          $iframe.attr('id', id);
          $iframe.attr('src', $iframe.attr('data-src'));
          $iframe.on('load', function(e){
            populateIframe($item, $iframe, id);
            window.resizeIframe(id);
            $iframe[0].contentWindow.init();
            // .populated fix scroll
            setTimeout( function($item) {
              $item.addClass('populated');
            }, 0, $item);
          });
        }
      };
      if (k === 0) {
        initIframe();
      }
      // iframe resize on show
      $item.on('on', function(e, obj) {
        if (e.target === this) {
          window.resizeIframe(id);
          if (k !== 0) {
            initIframe();
          }
        }
      });
      */
    } else {
      populateInline(item, id);
      // .populated fix scroll
      setTimeout(function (item) {
        item.classList.add('populated');
      }, 0, item);
    }
  }
};

// populateInline
var populateInline = function (item, id) {
  var els = item.querySelectorAll('.demo-source');
  for (var [z, el] of els.entries()) {
    populateSources(item, el, id, z);
    if (!item.classList.contains('demo-preview')) {
      el.style.display = none;
    }
  }
  new XtToggle(item, {
    "elements": ".demo-code-tabs-left .btn",
    "targets": ".demo-code-body-item",
    "min": 1
  });
}

/*
window.resizeIframe = function(id) {
  var $iframe = $('#' + id);
  var $target = $iframe.contents().find('#body-inside');
  $target.hide().show(0); // fix scrollbars disappearing
  var h = $target.outerHeight();
  if (h !== $iframe.data('iframeHeight')) {
    $iframe.height(h);
    $iframe.data('iframeHeight', h);
  }
};
*/
/*
// populateIframe
function populateIframe($item, $iframe, id) {
  var html = $('body #body-inside', $iframe[0].contentWindow.document).html();
  var less = $('body less-style', $iframe[0].contentWindow.document).html();
  var css = $('body style[scoped]', $iframe[0].contentWindow.document).html();
  var js = $('body script', $iframe[0].contentWindow.document).html();
  // inject code
  if (html) {
    $iframe.append('<div class="demo-source" data-lang="html">' + html + '</div>');
  }
  if (less) {
    $iframe.append('<div class="demo-source" data-lang="less">' + less + '</div>');
  }
  if (js) {
    $iframe.append('<div class="demo-source" data-lang="js">' + js + '</div>');
  }
  // populate
  var $sources = $item.find('.demo-source');
  $sources.each( function(z) {
    var $source = $(this);
    populateSources($item, $source, id, z);
  });
  $item.xtToggle({"elements": ".demo-code-tabs-left .button", "targets": ".demo-code-body-item", "min": 1});
}
*/

// populateSources

var populateSources = function (item, element, id, z) {
  var lang = element.getAttribute('data-lang');
  // populate tabs
  var appendCode = XtUtil.createElement('<div class="demo-code-body-item"><pre><code></code></pre></div>');
  var codeInside = item.querySelectorAll('.demo-code-body')[0].append(appendCode);
  codeInside = item.querySelectorAll('.demo-code-body .demo-code-body-item')[z].querySelectorAll('pre code')[0];
  var appendBtn = XtUtil.createElement('<button type="button" class="btn btn-secondary-alt">' + lang + '</button>');
  var btnInside = item.querySelectorAll('.demo-code-tabs-left')[0].append(appendBtn);
  //btnInside = item.querySelectorAll('.demo-code-tabs-left').querySelectorAll('.btn')[z];
  // format code
  if (!codeInside.classList.contains('hljs')) {
    var text = formatCode(element, lang);
    text = text.replace(/^\s+|\s+$/g, ''); // remove newline at start and end
    codeInside.innerHTML = text;
    codeInside.classList.add(lang);
    window.hljs.highlightBlock(codeInside);
  }
}

// formatCode
function formatCode(source, lang) {
  var text = source.innerHTML;
  if (lang === 'css' || lang === 'js') {
    text = text.replace(/<[^>]*>/g, '');
  }
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
  return text;
}

// init demos

var els = document.querySelectorAll('.demo');
for (var [i, el] of els.entries()) {
  populateDemo(el, i);
  // enable fullscreen
  /*
  element.find('.demo-tabs-left .button').on('on', function(e, obj) {
    var $fullscreen = $(this).parents('.demo').find('.button__fullscreen');
    var iframe = $(this).parents('.demo').find('.demo-item.active').attr('data-iframe');
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
// xtend
//////////////////////

import XtUtil from '../../../scripts/xtend-utils';
import {XtToggle, XtScroll} from "../../../scripts/xtend";

XtUtil.initAll();
