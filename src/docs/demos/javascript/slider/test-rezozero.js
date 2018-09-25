for (let [i, el] of document.querySelectorAll('.slider-container').entries()) {
  new XtSlider(el, {
    "auto": 6000,
    "autoPause": "Infinity"
  });
}
