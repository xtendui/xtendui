//////////////////////
// import
//////////////////////
/*
import "@babel/polyfill";
import "gsap/TweenMax";
import "gsap/ScrollToPlugin";
import "bezier-easing";
import Xt from "../../../../src/scripts/xtend";

//////////////////////
// call only if in browser mode
// https://www.gatsbyjs.org/docs/debugging-html-builds/#how-to-check-if-code-classlanguage-textwindowcode-is-defined
//////////////////////

if (typeof window !== 'undefined') {

  //////////////////////
  // vars
  //////////////////////

  window.easeIn = new Ease(BezierEasing(.36, 0, 0, 1));
  window.easeOut = new Ease(BezierEasing(1, 0, .64, 1));
  window.easeInOut = new Ease(BezierEasing(.68, .13, .25, 1));

  //////////////////////
  // anchors and sidebar
  //////////////////////

  // .make-line

  for (let el of document.querySelectorAll('.site-article > h2, .site-article > h3')) {
    el.classList.add('make-line');
  }
  for (let el of document.querySelectorAll('.make-line')) {
    el.innerHTML = '<span class="line">' + el.innerHTML + '</span>';
    el.innerHTML = '<span class="line-container">' + el.innerHTML + '</span>';
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
    el.innerHTML = '<a href="#' + id + '" aria-label="Anchor to ' + el.textContent + '" tabindex="-1">' + el.innerHTML + '</a>';
    el.classList.add('make-anchor');
    el.append(Xt.createElement('<span class="site-article-anchor"><span class="btn"><span class="icon-link" aria-hidden="true"></span></span></span>'));
  }

  // .site-aside-text

  for (let el of document.querySelectorAll('.site-aside-text > .btn:not(.different)')) {
    let container = Xt.parents(el, '.site-aside-text')[0];
    for (let element of document.querySelectorAll('.site-article > h2, .site-article > h3')) {
      if (element.tagName === 'H2') {
        let appendItem = Xt.createElement('<div class="site-aside-sub-container"></div>');
        container.append(appendItem);
        appendItem.append(Xt.createElement('<a href="#' + element.getAttribute('id') + '" class="btn btn--nodesign btn--site-aside-sub" aria-label="Anchor to ' + element.textContent + '"><span>' + element.textContent + '</span></a>'));
        appendItem.append(Xt.createElement('<div class="site-aside-subsub collapse--height"></div>'));
      } else if (element.tagName === 'H3') {
        let subs = container.querySelectorAll('.site-aside-subsub');
        subs[subs.length - 1].append(Xt.createElement('<a href="#' + element.getAttribute('id') + '" class="btn btn--nodesign btn--site-aside-subsub" aria-label="Anchor to ' + element.textContent + '"><span>' + element.textContent + '</span></a>'));
      }
    }
  }

  for (let el of document.querySelectorAll('.site-aside-text')) {
    Xt.init('xt-toggle', el, {
      "elements": ".site-aside-sub-container",
      "targets": ".site-aside-subsub",
      "on": "mouseenter",
      "off": "mouseleave",
      "instant": true,
      "min": 0,
      "max": "Infinity"
    });
  }

  // activateAsideScroll

  const activateAsideScroll = function (els, scrollTop) {
    const dist = Xt.windowHeight / 5;
    for (let el of els) {
      let href = el.getAttribute('href');
      if (href) {
        let target = document.querySelectorAll(href);
        if (target.length) {
          let rect = target[0].getBoundingClientRect();
          let top = rect.top + scrollTop;
          let bottom = Infinity;
          if (scrollTop >= top - dist && scrollTop < bottom - dist) {
            if (!el.classList.contains('active')) {
              for (let element of els) {
                if (element === el) {
                  element.classList.add('active', 'open');
                } else {
                  element.classList.remove('active', 'open');
                }
              }
            }
          }
        }
      }
    }
  };

  addEventListener('scroll', function (e) {
    let scrollTop = document.documentElement.scrollTop;
    let sub = document.querySelectorAll('.btn--site-aside-sub');
    sub = Array.from(sub).filter(x => !Xt.parents(x, '.xt-clone').length); // filter out parent
    activateAsideScroll(sub, scrollTop);
    let subsub = document.querySelectorAll('.btn--site-aside-sub + .site-aside-subsub .btn--site-aside-subsub');
    subsub = Array.from(subsub).filter(x => !Xt.parents(x, '.xt-clone').length); // filter out parent
    activateAsideScroll(subsub, scrollTop);
  });

  //////////////////////
  // others
  //////////////////////

  // .demo-cols

  for (let element of document.querySelectorAll('.demo-cols')) {
    for (let [i, el] of element.querySelectorAll('[class^=\'col--\'], [class*=\' col--\']').entries()) {
      el.setAttribute('data-index', i);
    }
  }

  // .demo-cols-nested

  for (let element of document.querySelectorAll('.demo-cols-nested [class^=\'col--\'], .demo-cols-nested [class*=\' col--\']')) {
    for (let [i, el] of element.querySelectorAll('[class^=\'col--\'], [class*=\' col--\']').entries()) {
      el.setAttribute('data-index', i);
    }
  }

  //////////////////////

}
*/
