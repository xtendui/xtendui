for (let [i, el] of document.querySelectorAll('.slider-container').entries()) {
  new XtSlider(el, {
    "auto": 6000,
    "autoPause": "Infinity",
    "dragOn": function(self, e, eInit, target) {
      let xStart = eInit.clientX;
      let xCurrent = e.clientX;
      let xDist = xCurrent - xStart;
      target.style.left = xDist + 'px';
      for (let content of target.querySelectorAll(':scope > .content')) {
        content.style.left = - xDist + 'px';
      }
    },
    "dragOff": function(self, e, eInit, target) {
      let xMax = target.clientWidth;
      let xFinal = parseFloat(target.style.left);
      if (Math.abs(xFinal) > xMax / 3) {
        target.style.left = 0 + 'px';
        for (let content of target.querySelectorAll(':scope > .content')) {
          content.style.left = 0 + 'px';
        }
        // finish drag
        //target.style.left = xMax + 'px';
        for (let content of target.querySelectorAll(':scope > .content')) {
          //content.style.left = - xMax + 'px';
        }
        // goto next or prev
        if (Math.sign(xFinal) < 0) {
          self.goToNext();
        } else {
          self.goToPrev();
        }
      } else {
        // reset drag
        target.style.left = 0 + 'px';
        for (let content of target.querySelectorAll(':scope > .content')) {
          content.style.left = 0 + 'px';
        }
      }
    }
  });
}
