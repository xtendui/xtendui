for (let [i, el] of document.querySelectorAll('.slider-container').entries()) {
  new XtSlider(el, {
    "auto": 6000,
    "autoPause": "Infinity",
    "dragOn": function(e, eInit, target) {
      //let element = this.getElementsFromTarget(target)[0];
      let xStart = eInit.clientX;
      let xCurrent = e.clientX;
      let xDist = xCurrent - xStart;
      target.style.left = xDist + 'px';
      for (let content of target.querySelectorAll(':scope > .content')) {
        content.style.left = - xDist + 'px';
      }
    },
    "dragOff": function(e, eInit, target) {
      let xMax = target.clientWidth;
      let xFinal = parseFloat(target.style.left);
      if (Math.abs(xFinal) > xMax / 2) {
        target.style.left = xMax + 'px';
        for (let content of target.querySelectorAll(':scope > .content')) {
          content.style.left = - xMax + 'px';
        }
      } else {
        target.style.left = 0 + 'px';
        for (let content of target.querySelectorAll(':scope > .content')) {
          content.style.left = 0 + 'px';
        }
      }
    }
  });
}
