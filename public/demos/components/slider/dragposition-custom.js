import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
if (typeof window !== 'undefined') {
  gsap.registerPlugin(MotionPathPlugin)
}

/* mountSlider */

const mountSlider = ({ ref }) => {
  // vars

  const slider = ref.querySelector('.xt-slider')
  let dragDuration
  const dragEase = 'quart.out'

  // init

  /***/
  let self = new Xt.Slider(slider, {
    duration: () => dragDuration * 1000,
    //dragposition: true,
    mode: 'absolute',
    loop: true,
  })
  /***/

  // dragposition (set internal position to resume animation mid dragging)

  const dragposition = () => {
    // duration depending on instant and dragger size
    dragDuration = self.drag._instant ? 0 : Math.max(0.5, Math.min(1, Math.log(self.drag.size / 400)))
    // position animation to keep updated with animation
    gsap.killTweensOf(self.drag)
    gsap.to(self.drag, {
      _position: self.drag._final,
      duration: dragDuration,
      ease: dragEase,
    })
    // dragger animation
    /*
    gsap.killTweensOf(self.dragger)
    gsap.to(self.dragger, {
      x: self.drag._final,
      duration: self.drag._dragging ? 0.5 : dragDuration,
      ease: dragEase,
    })
    */
    for (const tr of self.targets) {
      tr.classList.add('xt-slide-absolute')
      const index = Array.from(tr.parentNode.children).indexOf(tr)
      const width = Xt.dataStorage.get(tr, `${self.ns}TrWidth`)
      const position = width * index
      const start = (position - self.drag._position) / self.drag.sizeContent
      const end = (position - self.drag._final) / self.drag.sizeContent
      //console.log(position, self.drag.sizeContent, end)
      gsap.to(tr, {
        duration: self.drag._dragging ? 0.5 : dragDuration,
        ease: dragEase,
        motionPath: {
          path: 'M9,100c0,0,18.53-41.58,49.91-65.11c30-22.5,65.81-24.88,77.39-24.88c33.87,0,57.55,11.71,77.05,28.47c23.09,19.85,40.33,46.79,61.71,69.77c24.09,25.89,53.44,46.75,102.37,46.75c22.23,0,40.62-2.83,55.84-7.43c27.97-8.45,44.21-22.88,54.78-36.7c14.35-18.75,16.43-36.37,16.43-36.37',
          start: start,
          end: end,
          //autoRotate: true,
          //fromCurrent: false,
          //useRadians: true,
        },
      })
    }
  }

  self.dragger.addEventListener('dragposition.xt.slider', dragposition)

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}

/* mount */

Xt.mount({
  matches: '.demo--slider-dragposition',
  mount: ({ ref }) => {
    const unmountSlider = mountSlider({ ref })

    // unmount

    return () => {
      unmountSlider()
    }
  },
})
