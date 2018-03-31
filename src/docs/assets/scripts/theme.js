//////////////////////
// xtend
//////////////////////

import XtUtil from '../../../scripts/xtend-utils';
import Xt from "../../../scripts/xtend";

XtUtil.initAll();

//////////////////////
// docs
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
  XtUtil.forEach(els, function (el, i) {
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

var activateAsideScroll = function (elements, scrollTop) {
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
  XtUtil.forEach(items, function (item, k) {
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
    /*
    var clipboard = new Clipboard('.btn-clipboard', {
      target: function(trigger) {
        return $(trigger).parents('.demo').find('.demo-item.active .demo-code-body-item.active .hljs')[0];
      }
    });
    clipboard.on('success', function(e) {
      e.clearSelection();
      //$(e.trigger).attr('data-original-title', 'Done').tooltip('show');
    });
    clipboard.on('error', function(e) {
      //$(e.trigger).attr('data-original-title', 'Error: copy manually').tooltip('show');
    });
    */
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
      setTimeout( function(item) {
        item.classList.add('populated');
      }, 0, item);
    }
  });
};

// populateInline
var populateInline = function (item, id) {
  var elements = item.querySelectorAll('.demo-source');
  XtUtil.forEach(elements, function (element, z) {
    populateSources(item, element, id, z);
    if (!item.classList.contains('demo-preview')) {
      element.style.display = none;
    }
  });
  new Xt(item, {
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
    // replace entities
    text = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    // replace json quotes
    text = text.replace(/("{)/g, '\'{').replace(/(}")/g, '}\'');
    // replace quote entities
    text = text.replace(/&quot;:/g, '&quot;:'); // add spacing for white-space: pre-wrap;
    text = text.replace(/&quot;/g, '"');
    // replace empty quotes
    text = text.replace(/=""/g, '');
  }
  return text;
}

// init demos

var elements = document.querySelectorAll('.demo');
XtUtil.forEach(elements, function (element, i) {
  populateDemo(element, i);
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
  new Xt(element, {
    "elements": ".demo-tabs-left .btn",
    "targets": ".demo-item",
    "min": 1
  });
});