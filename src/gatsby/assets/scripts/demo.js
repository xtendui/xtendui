import ClipboardJS from 'clipboard';
import {Xt} from 'xtend-library'
import {Toggle} from 'xtend-library/src/core/toggle/toggle'

import Prism from 'prismjs';
require('prismjs/plugins/unescaped-markup/prism-unescaped-markup');
require('prismjs/plugins/unescaped-markup/prism-unescaped-markup.css');
require('prismjs/components/prism-jsx.min');
require('prismjs/components/prism-less.min');
require('prism-themes/themes/prism-base16-ateliersulphurpool.light.css');
//require('prismjs/themes/prism-okaidia.css');
Prism.manual = true;

/**
 * demo
 */

// formatCode

const formatCode = function (source) {
  let inner = source.querySelectorAll('.demo_source--from');
  inner = Array.from(inner).filter(x => !x.querySelectorAll('.demo_source--from').length); // filter out nested
  if (inner.length) {
    source = inner[0];
  }
  let text = source.innerHTML;
  // replace
  let lang = source.getAttribute('data-lang');
  if (lang === 'html' || lang === 'language-markup' || source.classList.contains('language-markup')
    || lang === 'js' || lang === 'language-jsx' || source.classList.contains('language-jsx')
  ) {
    // replace quote entities
    text = text.replace(/&quot;/g, '"');
    // replace entities
    text = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    // replace json quotes
    text = text.replace(/("{)/g, '\'{').replace(/(}")/g, '}\'');
    // replace empty quotes
    text = text.replace(/=""/g, '');
  }
  // filter meta
  /*
  let meta = text.match(/\/\/##START([\S\s]*?)\/\/##END/);
  if (meta) {
    text = meta[1];
  }
  */
  // remove tabs
  let arr = text.split('\n');
  let search = arr[0];
  search = search.length ? search : arr[1];
  if (search) {
    let toRemove = search.search(/\S/g);
    for (let i of arr.keys()) {
      arr[i] = arr[i].substring(toRemove);
    }
    text = arr.join('\n');
  }
  // remove newline at start and end
  text = text.replace(/^\s+|\s+$/g, '');
  // return
  return text;
};

// populateBlock

const populateBlock = function () {
  for (let el of document.querySelectorAll('script[type="text/plain"][class*="language-"]')) {
    let language = el.getAttribute('class');
    el.after(Xt.createElement('<pre class="' + language + '"><code class="' + language + '">' + el.innerHTML + '</code></pre>'));
    el.remove();
  }
  for (let el of document.querySelectorAll('pre:not(.noedit) code')) {
    // set text
    el.innerHTML = formatCode(el);
    Prism.highlightElement(el);
  }
}

// populateDemo

const populateDemo = function (container, i) {
  let items = container.querySelectorAll('.demo_item');
  // multiple elements
  container.prepend(Xt.createElement('<div class="demo_tabs"><div class="demo_tabs_left"></div><div class="demo_tabs_right"></div></div>'));
  container.querySelector('.demo_tabs_right').append(Xt.createElement('<button type="button" class="btn btn--text btn--tiny btn--narrow btn--show-code" data-toggle="tooltip" data-placement="top" aria-label="Show code"><span class="icon-code icon--big"></span></button>'));
  container.querySelector('.demo_tabs_right').append(Xt.createElement('<button type="button" class="btn btn--text btn--tiny btn--narrow btn--open-full" data-toggle="tooltip" data-placement="top" aria-label="Open full"><span class="icon-maximize icon--big"></span></button>'));
  // don't show tabs on single
  /*
  if (items.length === 1) {
    container.querySelector('.demo_tabs').style.display = 'none';
  }
  */
  // loop items
  for (let [k, item] of items.entries()) {
    // populate tabs
    let name = item.getAttribute('data-iframe') ? item.getAttribute('data-iframe').split('/').pop() : null;
    name = item.getAttribute('data-name') ? item.getAttribute('data-name') : name;
    if (!name) {
      if (items.length === 1) {
        name = 'demo';
      } else {
        name = 'demo #' + k;
      }
    }
    let btn = container.querySelector('.demo_tabs_left').append(Xt.createElement('<button type="button" class="btn btn--text btn--tiny"><span>' + name + '</span></button>'));
    btn = container.querySelectorAll('.demo_tabs_left .btn')[k];
    // tabs
    item.prepend(Xt.createElement('<div class="demo_code collapse--height"><div class="demo_code_inner"><div class="demo_code_tabs"><div class="demo_code_tabs_left"></div><div class="demo_code_tabs_right"><button type="button" class="btn btn--text btn--tiny btn--clipboard" data-toggle="tooltip" data-placement="top" title="Copy to clipboard"><span>copy</span></button></div></div><div class="demo_code_body"></div></div></div>'));
    // https://github.com/zenorocha/clipboard.js/
    let clipboard = new ClipboardJS('.btn--clipboard', {
      target: function (trigger) {
        return trigger.closest('.demo').querySelector('.demo_item.active .demo_code_body_item.active .hljs');
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
      // iframe append
      let src = '/' + item.getAttribute('data-iframe');
      let id = 'iframe' + i + k;
      if (src) {
        item.append(Xt.createElement('<div class="demo_item_wrapper"><iframe data-src="' + src + '" frameborder="0" name="' + id + '"></iframe></div>'));
        item.querySelector('.demo_item_wrapper').append(Xt.createElement('\n' +
          '    <div class="loader loader--spinner">\n' +
          '      <div class="spinner">\n' +
          '        <svg viewBox="0 0 250 250" preserveAspectRatio="xMinYMin meet"><circle cx="120" cy="120" r="100" stroke-dasharray="628" stroke-dashoffset="628" pathLength="628"></circle></svg><svg viewBox="0 0 250 250" preserveAspectRatio="xMinYMin meet"><circle cx="120" cy="120" r="100" stroke-dasharray="628" stroke-dashoffset="628" pathLength="628"></circle></svg>\n' +
          '      </div>\n' +
          '    </div>\n' +
          '  </div>'));
      }
      // load
      let iframe = item.querySelector('iframe');
      item.addEventListener('on.xt', function (e) {
        if (item === e.target || item.contains(e.target)) { // @FIX on.xt and off.xt: handler triggered by child xt events
          if (!item.classList.contains('loaded')) {
            loadIframe(iframe);
          }
        }
      });
      item.addEventListener('off.xt', function (e) {
        if (item === e.target || item.contains(e.target)) { // @FIX on.xt and off.xt: handler triggered by child xt events
          item.classList.remove('loaded');
          unloadIframe(iframe);
        }
      });
    } else if (item.getAttribute('data-shadow')) {
      /* NEEDS
      // demo shadow
      let shadowId = 'shadow-root-' + i + k;
      let shadowSrc = item.getAttribute('data-shadow');
      item.append(Xt.createElement('<div class="demo_item_wrapper"><div class="demo_shadow" data-lang="html"></div></div>'));
      item.append(Xt.createElement('\n' +
        '    <div class="loader loader--spinner">\n' +
        '      <div class="spinner">\n' +
        '        <svg viewBox="0 0 250 250" preserveAspectRatio="xMinYMin meet"><circle cx="120" cy="120" r="100" stroke-dasharray="628" stroke-dashoffset="628" pathLength="628"></circle></svg><svg viewBox="0 0 250 250" preserveAspectRatio="xMinYMin meet"><circle cx="120" cy="120" r="100" stroke-dasharray="628" stroke-dashoffset="628" pathLength="628"></circle></svg>\n' +
        '      </div>\n' +
        '    </div>\n' +
        '  </div>'));
      let source = item.querySelector('.demo_shadow');
      let shadowRoot = source.attachShadow({mode: 'open'});
      // load
      if (k === 0) {
        loadShadow(shadowRoot, shadowSrc, source, shadowId, item);
        item.classList.add('inited');
      }
      // listener
      item.addEventListener('on.xt', function (e) {
        if (e.target === item) {
          if (!item.classList.contains('inited')) {
            loadShadow(shadowRoot, shadowSrc, source, shadowId, item);
            item.classList.add('inited');
          }
        }
      });
      */
    } else {
      populateInline(item);
      // .populated fix scroll
      item.classList.add('populated');
    }
  }
  // toggle code
  let demoId = 'demo_' + i;
  container.setAttribute('id', demoId);
  new Toggle(container.querySelector('.btn--show-code'), {
    "targets": "#" + demoId,
    "targetsInner": ".demo_code",
    "aria": false
  });
  let codes = container.querySelectorAll('.btn--show-code');
  for (let code of codes) {
    code.addEventListener('on.xt', function (e) {
      if (code === e.target || code.contains(e.target)) { // @FIX on.xt and off.xt: handler triggered by child xt events
        let btns = document.querySelectorAll('.btn--show-code.active');
        for (let btn of btns) {
          if (btn !== code) {
            btn.dispatchEvent(new CustomEvent('off.xt'));
          }
        }
      }
    });
  }
  // toggle fullscreen
  /*
  element.find('.demo_tabs_left .button').on('on', function(e, obj) {
    let $fullscreen = $(this).parents('.demo').find('.button__fullscreen');
    let iframe = $(this).parents('.demo').find('.demo_item.active').attr('data-iframe');
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
  new Toggle(container, {
    "elements": ".demo_tabs_left .btn",
    "targets": ".demo_item",
    "min": 1
  });
  for (let btn of container.querySelectorAll('.demo_tabs_left .btn')) {
    btn.addEventListener('off.xt', function (e) {
      if (btn === e.target || btn.contains(e.target)) { // @FIX on.xt and off.xt: handler triggered by child xt events
        container.querySelector('.btn--show-code').dispatchEvent(new CustomEvent('off.xt'));
      }
    });
  }
};

// populateInline

const populateInline = function (item) {
  let els = item.querySelectorAll('.demo_source[data-lang]');
  for (let [z, el] of els.entries()) {
    populateSources(item, el, z);
    if (!item.classList.contains('demo_preview')) {
      el.style.display = 'none';
    }
    /*
    // don't show tabs on single
    if (els.length === 1) {
      item.querySelector('.demo_code_tabs').style.display = 'none';
    }
    */
  }
  new Toggle(item, {
    "elements": ".demo_code_tabs_left .btn",
    "targets": ".demo_code_body_item",
    "min": 1
  });
};

// populateShadow

/*
const loadShadow = function (shadowRoot, shadowSrc, source, shadowId, item) {
  let request = new XMLHttpRequest();
  let populateShadow = function () {
    // shadowRoot
    source.setAttribute('id', shadowId);
    let template = document.createElement('html');
    template.innerHTML = request.responseText.trim();
    let shadowTemplate = document.adoptNode(template);
    // if shadow dom supported
    // PROBLEM react doesn't initialize inside shadow dom
    // PROBLEM querySelectorAll inside Xtend javascript doesn't query inside shadowRoot
    if (document.head.attachShadow) {
      // remove unsupported shadow dom elements
      let removes = template.querySelectorAll('link:not([rel="stylesheet"])');
      for (let remove of removes) {
        remove.remove();
      }
      item.classList.add('loaded');
      // style
      let onStylesLoaded = function() {
        // when all link[rel="stylesheet"] are loaded
        Xt.load(shadowTemplate);
        item.classList.add('loaded');
        // script
        let shadowBody = shadowTemplate.querySelector('body');
        let scripts = template.querySelectorAll('script:not([src])');
        for (let script of scripts) {
          let scriptNew = document.createElement('script');
          scriptNew.textContent = script.innerHTML.replace(/(?=.*\s)(document\.)/g, 'document.querySelector("#' + shadowId + '").shadowRoot.'); // replace document. with a query inside shadow dom
          shadowBody.appendChild(scriptNew);
          script.remove();
        }
      }
      let styles = template.querySelectorAll('link[rel="stylesheet"]');
      let stylesLoaded = 0;
      for (let style of styles) {
        if (styles.length === 0) {
          onStylesLoaded();
        } else {
          style.addEventListener('load', function () {
            stylesLoaded++;
            if (stylesLoaded === styles.length) {
              onStylesLoaded();
            }
          });
        }
      }
    }
    // shadowRoot
    shadowRoot.appendChild(shadowTemplate);
    initShadow(source, shadowRoot);
  };
  request.open('GET', shadowSrc, true);
  request.onload = populateShadow;
  request.onerror = function () {
    console.error('Error loading demo', request);
  };
  request.send();
}

window.initShadow = function (source, shadowRoot) {
  let item = source.closest('.demo_item');
  if (!item.classList.contains('populated')) {
    populateShadow(item, shadowRoot);
    item.classList.add('populated');
  }
};

const populateShadow = function (item, shadowRoot) {
  let html = shadowRoot.querySelector('#body-outer');
  let js = shadowRoot.querySelector('js-script');
  let less = shadowRoot.querySelector('less-style');
  //let css = shadowRoot.querySelector('style[scoped]');
  // inject code
  if (html) {
    item.append(Xt.createElement('<div class="demo_source xt-ignore" data-lang="html">' + html.innerHTML + '</div>'));
  }
  if (js) {
    item.append(Xt.createElement('<div class="demo_source xt-ignore" data-lang="js">' + js.innerHTML + '</div>'));
  }
  if (less) {
    item.append(Xt.createElement('<div class="demo_source xt-ignore" data-lang="less">' + less.innerHTML + '</div>'));
  }
  // populate
  for (let [z, source] of item.querySelectorAll('.demo_source[data-lang]').entries()) {
    populateSources(item, source, z);
    source.remove();
  }
  new Toggle(item, {
    "elements": ".demo_code_tabs_left .btn",
    "targets": ".demo_code_body_item",
    "min": 1
  });
}
*/

// populateIframe

const loadIframe = function (iframe) {
  iframe.setAttribute('src', iframe.getAttribute('data-src'));
}

const unloadIframe = function (iframe) {
  iframe.setAttribute('src', '');
}

if (typeof window !== 'undefined') {
  window.initIframe = function (name, htmlSource, jsSource, cssSource) {
    let src = 'iframe[name="' + name + '"]';
    let iframe = document.querySelector(src);
    iframe.contentWindow.document.querySelector('html').classList.add('iframe-inside');
    let item = iframe.closest('.demo_item');
    item.classList.add('loaded');
    if (!item.classList.contains('populated')) {
      populateIframe(item, iframe, htmlSource, jsSource, cssSource);
      item.classList.add('populated');
    }
  };
  window.resizeIframe = function (name) {
    let src = 'iframe[name="' + name + '"]';
    let iframe = document.querySelector(src);
    let container = iframe.closest('.demo');
    let wrappers = container.querySelectorAll('.demo_item_wrapper');
    if (iframe) {
      let iframeFull = iframe.contentWindow.document.documentElement.classList.contains('iframe-full');
      if (iframeFull) {
        iframe.classList.add('iframe-full');
        let target = iframe.contentWindow.document.querySelector('#body-outer');
        let h = target.offsetHeight;
        if (h !== parseFloat(iframe.dataset.iframeHeight)) {
          iframe.style.height = h + 'px';
          iframe.dataset.iframeHeight = h.toString();
        }
        for (let wrapper of wrappers) {
          wrapper.style.height = h + 'px';
        }
      } else {
        for (let wrapper of wrappers) {
          wrapper.style.height = '';
        }
      }
    }
  };
}

const populateIframe = function (item, iframe, htmlSource, jsSource, cssSource) {
  // inject code
  if (htmlSource) {
    item.append(Xt.createElement('<div class="demo_source xt-ignore" data-lang="html">' + htmlSource + '</div>'));
  }
  if (jsSource) {
    item.append(Xt.createElement('<div class="demo_source xt-ignore" data-lang="js">' + jsSource + '</div>'));
  }
  if (cssSource) {
    item.append(Xt.createElement('<div class="demo_source xt-ignore" data-lang="less">' + cssSource + '</div>'));
  }
  // populate
  let els = item.querySelectorAll('.demo_source[data-lang]');
  for (let [z, el] of els.entries()) {
    populateSources(item, el, z);
    el.remove();
  }
  new Toggle(item, {
    "elements": ".demo_code_tabs_left .btn",
    "targets": ".demo_code_body_item",
    "min": 1
  });
}

// populateSources

const populateSources = function (item, element, z) {
  let lang = element.getAttribute('data-lang');
  // set text
  if (lang === 'language-markup') {
    lang = 'html';
  } else if (lang === 'language-jsx') {
    lang = 'js';
  } else if (lang === 'language-less') {
    lang = 'less';
  }
  // populate tabs
  item.querySelector('.demo_code_body').append(Xt.createElement('<div class="demo_code_body_item"><pre class="noedit"><code></code></pre></div>'));
  item.querySelector('.demo_code_tabs_left').append(Xt.createElement('<button type="button" class="btn btn--text btn--tiny"><span>' + lang + '</span></button>'));
  // format code
  let itemInside = item.querySelectorAll('.demo_code_body .demo_code_body_item')[z];
  let codeInside = itemInside.querySelector('pre code');
  // set text
  if (lang === 'html') {
    lang = 'language-markup';
  } else if (lang === 'js') {
    lang = 'language-jsx';
  } else if (lang === 'less') {
    lang = 'language-less';
  }
  codeInside.innerHTML = formatCode(element);
  codeInside.classList.add(lang);
  Prism.highlightElement(codeInside)
};

// export

export {populateBlock, populateDemo};
