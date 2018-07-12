
function init() {
  new XtFade(document.documentElement, {
    // options
  });
}

if (document.readyState !== 'loading') {
  init();
} else if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', init);
}
