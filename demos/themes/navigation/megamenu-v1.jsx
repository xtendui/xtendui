import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/drop'
import gsap from 'gsap'

export default function Demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--megamenu-v1-react" ref={ref}>
      <div className="*** megamenu ***">
        <div
          className="*** megamenu-backdrop *** xt-backdrop z-below off:hidden out:pointer-events-none bg-black transition opacity-0 in:opacity-25"
          data-xt-duration="500"></div>

        <div className="relative bg-primary-500 text-white xt-links-inverse">
          {/* switcher for demo purpose remove this */}
          <form className="text-sm container pt-10">
            <label className="cursor-pointer inline-flex items-baseline">
              <input
                type="checkbox"
                aria-label="Use mouse events"
                className="xt-check xt-checkbox rounded-md bg-gray-200 border border-transparent transition-all checked:bg-primary-500"
                defaultChecked
              />
              <span className="ml-4">Use mouse events</span>
            </label>
          </form>

          <span className="*** megamenu-line *** absolute top-0 left-0 bg-white" data-drop-line></span>

          <div className="container">
            <div className="xt-list -mx-4">
              <div>
                <a
                  href="/"
                  className="xt-button text-sm py-6 px-4 button--line text-white xt-links-inverse font-medium leading-snug tracking-wider uppercase opacity-75 hover:opacity-100 on:opacity-100"
                  data-xt-drop-element>
                  Menu #1
                </a>

                <div className="*** xt-drop *** xt-drop-static" data-xt-drop-target>
                  <div className="*** relative ***" data-xt-drop-inner>
                    <div className="*** xt-design *** shadow-lg bg-black"></div>
                    <div className="*** xt-drop-content ***">
                      <div className="pt-16 pb-24 text-white xt-links-inverse">
                        <div className="container">
                          <a href="/" className="xt-button w-full text-left justify-start py-4 px-0 text-3xl">
                            Lorem ipsum
                          </a>
                          <a href="/" className="xt-button w-full text-left justify-start py-4 px-0 text-3xl">
                            Dolor sit amet
                          </a>
                          <a href="/" className="xt-button w-full text-left justify-start py-4 px-0 text-3xl">
                            Consectetur adipiscing elit
                          </a>
                          <a href="/" className="xt-button w-full text-left justify-start py-4 px-0 text-3xl">
                            Morbi nec mauris est
                          </a>
                          <a href="/" className="xt-button xt-link text-lg mt-6 py-2 px-0">
                            {' '}
                            Show all{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="/"
                  className="xt-button text-sm py-6 px-4 button--line text-white xt-links-inverse font-medium leading-snug tracking-wider uppercase opacity-75 hover:opacity-100 on:opacity-100"
                  data-xt-drop-element>
                  Menu #2
                </a>

                <div className="*** xt-drop *** xt-drop-static" data-xt-drop-target>
                  <div className="*** relative ***" data-xt-drop-inner>
                    <div className="*** xt-design *** shadow-lg bg-primary-500"></div>
                    <div className="*** xt-drop-content ***">
                      <div className="pt-16 pb-24 text-white xt-links-inverse">
                        <div className="container">
                          <a href="/" className="xt-button w-full text-left justify-start py-4 px-0 text-3xl">
                            Lorem ipsum
                          </a>
                          <a href="/" className="xt-button w-full text-left justify-start py-4 px-0 text-3xl">
                            Dolor sit amet
                          </a>
                          <a href="/" className="xt-button xt-link text-lg mt-6 py-2 px-0">
                            {' '}
                            Show all{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="/"
                  className="xt-button text-sm py-6 px-4 button--line text-white xt-links-inverse font-medium leading-snug tracking-wider uppercase opacity-75 hover:opacity-100 on:opacity-100"
                  data-xt-drop-element>
                  Menu #3
                </a>

                <div className="*** xt-drop *** xt-drop-static" data-xt-drop-target>
                  <div className="*** relative ***" data-xt-drop-inner>
                    <div className="*** xt-design *** shadow-lg bg-gray-100"></div>
                    <div className="*** xt-drop-content ***">
                      <div className="pt-16 pb-24 text-gray-900 xt-links-default ">
                        <div className="container">
                          <div className="xt-row xt-row-x-8">
                            <div className="w-full md:w-6/12">
                              <a href="/" className="xt-button w-full text-left justify-start py-4 px-0 text-3xl">
                                Lorem ipsum
                              </a>
                              <a href="/" className="xt-button w-full text-left justify-start py-4 px-0 text-3xl">
                                Dolor sit amet
                              </a>
                              <a href="/" className="xt-button w-full text-left justify-start py-4 px-0 text-3xl">
                                Consectetur adipiscing elit
                              </a>
                              <a href="/" className="xt-button w-full text-left justify-start py-4 px-0 text-3xl">
                                Morbi nec mauris est
                              </a>
                            </div>
                            <div className="w-full md:w-6/12">
                              <a href="/" className="xt-button w-full text-left justify-start py-4 px-0 text-3xl">
                                Dolor sit amet
                              </a>
                              <a href="/" className="xt-button w-full text-left justify-start py-4 px-0 text-3xl">
                                Consectetur adipiscing elit
                              </a>
                              <a href="/" className="xt-button w-full text-left justify-start py-4 px-0 text-3xl">
                                Morbi nec mauris est
                              </a>
                              <a href="/" className="xt-button xt-link text-lg mt-6 py-2 px-0">
                                {' '}
                                Show all{' '}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="/"
                className="xt-button text-sm py-6 px-4 button--line text-white xt-links-inverse font-medium leading-snug tracking-wider uppercase opacity-75 hover:opacity-100 on:opacity-100">
                Link #4
              </a>

              <a
                href="/"
                className="xt-button text-sm py-6 px-4 button--line text-white xt-links-inverse font-medium leading-snug tracking-wider uppercase opacity-75 hover:opacity-100 on:opacity-100">
                Link #5
              </a>
            </div>
          </div>
        </div>

        <div className="container py-10">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est. Etiam egestas efficitur
            semper. Donec imperdiet eget justo at pellentesque. Proin a ultricies orci. Vivamus ut scelerisque lorem.
            Suspendisse lobortis consequat magna ut ultricies. Duis consequat vitae justo nec commodo. Vestibulum id
            eros eu sapien aliquam feugiat. Aenean id accumsan orci, nec elementum ex. Fusce a dolor in lacus facilisis
            vulputate vitae vitae nunc. Phasellus odio quam, semper in finibus at, consequat quis lacus. Sed varius sem
            commodo tellus pretium, posuere pharetra mauris elementum. Nunc et aliquam velit, quis suscipit justo. Ut ac
            pretium massa. Aenean ullamcorper mollis urna eu pharetra.
          </p>
          <p>
            Proin eget lectus pharetra, pretium nunc sed, pulvinar nibh. Quisque ac tellus ac mi posuere tristique. Ut
            dictum elit sed facilisis rutrum. In sagittis ac ante at blandit. Sed at felis fermentum, semper lorem sed,
            sagittis lacus. Cras justo massa, molestie sit amet lacinia a, luctus ac velit. Cras tristique, urna in
            hendrerit laoreet, nisi sem interdum urna, rutrum elementum nisl turpis id est.
          </p>
          <p>
            Morbi eget odio nibh. Pellentesque consectetur vitae libero ac blandit. Ut et lectus id diam pretium mattis
            ac at massa. Sed sagittis fermentum dictum. Nulla interdum justo vitae orci pharetra congue. Nullam enim
            dui, tempor ac dapibus in, maximus eget orci. Pellentesque mollis felis vel sapien sagittis luctus. Etiam
            vitae condimentum ligula. Cras blandit vehicula arcu fermentum blandit. Ut eu urna finibus felis bibendum
            tincidunt at vitae ante.
          </p>
          <p>
            Vestibulum tempus nunc sed varius pellentesque. Fusce feugiat non ex eu consequat. Donec neque ligula,
            vehicula et felis at, imperdiet malesuada odio. Quisque metus felis, consequat et mollis sit amet, malesuada
            ac quam. Phasellus eu cursus purus. Nullam eleifend auctor ipsum eu semper. Morbi volutpat tortor lectus,
            vitae ullamcorper nibh congue ut. In hac habitasse platea dictumst. Mauris a est at enim hendrerit porttitor
            sit amet vitae felis. Morbi sollicitudin urna at dignissim gravida. Aliquam in quam sapien.
          </p>
          <p>
            Maecenas pharetra ante id tortor scelerisque, id vehicula nibh finibus. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia Curae; Praesent et ante et mauris condimentum tempus. Donec
            efficitur sodales lobortis. In eu mi nec arcu lacinia aliquet vel et dolor. Integer feugiat mauris non erat
            hendrerit, eu sollicitudin tellus vestibulum. Duis convallis malesuada nunc vel imperdiet. Donec in ligula
            et nisl vestibulum lobortis vitae in nunc. Morbi non lorem nibh. Mauris blandit viverra interdum. In
            bibendum orci vel molestie vulputate.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est. Etiam egestas efficitur
            semper. Donec imperdiet eget justo at pellentesque. Proin a ultricies orci. Vivamus ut scelerisque lorem.
            Suspendisse lobortis consequat magna ut ultricies. Duis consequat vitae justo nec commodo. Vestibulum id
            eros eu sapien aliquam feugiat. Aenean id accumsan orci, nec elementum ex. Fusce a dolor in lacus facilisis
            vulputate vitae vitae nunc. Phasellus odio quam, semper in finibus at, consequat quis lacus. Sed varius sem
            commodo tellus pretium, posuere pharetra mauris elementum. Nunc et aliquam velit, quis suscipit justo. Ut ac
            pretium massa. Aenean ullamcorper mollis urna eu pharetra.
          </p>
          <p>
            Proin eget lectus pharetra, pretium nunc sed, pulvinar nibh. Quisque ac tellus ac mi posuere tristique. Ut
            dictum elit sed facilisis rutrum. In sagittis ac ante at blandit. Sed at felis fermentum, semper lorem sed,
            sagittis lacus. Cras justo massa, molestie sit amet lacinia a, luctus ac velit. Cras tristique, urna in
            hendrerit laoreet, nisi sem interdum urna, rutrum elementum nisl turpis id est.
          </p>
          <p>
            Morbi eget odio nibh. Pellentesque consectetur vitae libero ac blandit. Ut et lectus id diam pretium mattis
            ac at massa. Sed sagittis fermentum dictum. Nulla interdum justo vitae orci pharetra congue. Nullam enim
            dui, tempor ac dapibus in, maximus eget orci. Pellentesque mollis felis vel sapien sagittis luctus. Etiam
            vitae condimentum ligula. Cras blandit vehicula arcu fermentum blandit. Ut eu urna finibus felis bibendum
            tincidunt at vitae ante.
          </p>
          <p>
            Vestibulum tempus nunc sed varius pellentesque. Fusce feugiat non ex eu consequat. Donec neque ligula,
            vehicula et felis at, imperdiet malesuada odio. Quisque metus felis, consequat et mollis sit amet, malesuada
            ac quam. Phasellus eu cursus purus. Nullam eleifend auctor ipsum eu semper. Morbi volutpat tortor lectus,
            vitae ullamcorper nibh congue ut. In hac habitasse platea dictumst. Mauris a est at enim hendrerit porttitor
            sit amet vitae felis. Morbi sollicitudin urna at dignissim gravida. Aliquam in quam sapien.
          </p>
          <p>
            Maecenas pharetra ante id tortor scelerisque, id vehicula nibh finibus. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia Curae; Praesent et ante et mauris condimentum tempus. Donec
            efficitur sodales lobortis. In eu mi nec arcu lacinia aliquet vel et dolor. Integer feugiat mauris non erat
            hendrerit, eu sollicitudin tellus vestibulum. Duis convallis malesuada nunc vel imperdiet. Donec in ligula
            et nisl vestibulum lobortis vitae in nunc. Morbi non lorem nibh. Mauris blandit viverra interdum. In
            bibendum orci vel molestie vulputate.
          </p>
        </div>
      </div>
    </div>
  )
}

/* mountDrops */

const mountDrops = ({ ref }) => {
  // vars

  const megamenu = ref.querySelector('.megamenu')
  const backdrop = ref.querySelector('.megamenu-backdrop')

  const contentXOn = -40
  const contentXOff = -40
  const contentTime = 0.5
  const contentDelayOn = 0.25
  const contentEase = 'quint.out'

  const designTime = 0.5
  const designDelayOff = 0.1 // fix opacity when changing fast
  const designEase = 'expo.out'

  const innerTime = 0.5
  const innerEase = 'expo.out'

  let innerHeightFinal = 0
  let innerHeightCache = 0

  // init

  /***/
  let self = new Xt.Drop(megamenu, {
    mouseParent: true,
    queue: false,
    duration: 500,
    preventEvent: true,
    // activated by switcher
    //on: 'mouseenter focus',
    //off: 'mouseleave',
    //delay: 150,
  })
  /***/

  // setup

  for (const tr of self.targets) {
    const inner = tr.querySelector('[data-xt-drop-inner]')
    gsap.set(inner, {
      height: 0,
    })
  }

  // on

  const on = e => {
    const tr = e.target
    // useCapture event propagation check
    if (self.targets.includes(tr)) {
      // backdrop
      if (backdrop) {
        Xt.on({ el: backdrop })
      }
      // content
      const content = tr.querySelector('.xt-drop-content')
      gsap.killTweensOf(content)
      gsap.set(content, {
        x: contentXOn * self.direction,
        opacity: 0,
      })
      gsap.to(content, {
        x: 0,
        opacity: 1,
        duration: contentTime,
        delay: contentDelayOn,
        ease: contentEase,
      })
      // design
      const design = tr.querySelector('.xt-design')
      gsap.killTweensOf(design)
      gsap.set(design, {
        opacity: 1,
      })
      // inner
      const inner = tr.querySelector('[data-xt-drop-inner]')
      gsap.killTweensOf(inner)
      gsap.set(inner, {
        height: '',
      })
      const innerHeight = inner.clientHeight
      innerHeightFinal = innerHeight
      gsap.set(inner, {
        height: innerHeightCache,
      })
      gsap
        .to(inner, {
          height: innerHeight,
          duration: innerTime,
          ease: innerEase,
        })
        .eventCallback('onUpdate', () => {
          innerHeightCache = inner.clientHeight
        })
      /***/
      // when sequential interaction
      if (self.direction) {
        // not current targets
        for (const tr of self.targets.filter(x => !self.hasCurrent({ el: x }))) {
          // inner
          const inner = tr.querySelector('[data-xt-drop-inner]')
          gsap.killTweensOf(inner)
          gsap.set(inner, {
            height: innerHeightCache,
          })
          gsap.to(inner, {
            height: innerHeightFinal,
            duration: innerTime,
            ease: innerEase,
          })
        }
      }
      /***/
    }
  }

  self.container.addEventListener('on.xt.drop', on, true) // useCapture event propagation

  // off

  const off = e => {
    const tr = e.target
    // useCapture event propagation check
    if (self.targets.includes(tr)) {
      // backdrop
      if (backdrop) {
        Xt.off({ el: backdrop })
      }
      // content
      const content = tr.querySelector('.xt-drop-content')
      gsap.killTweensOf(content)
      gsap.to(content, {
        x: contentXOff * self.direction * -1,
        opacity: 0,
        duration: contentTime,
        ease: contentEase,
      })
      // design
      const design = tr.querySelector('.xt-design')
      gsap.killTweensOf(design)
      gsap.to(design, {
        opacity: 0,
        duration: designTime,
        ease: designEase,
        delay: designDelayOff,
      })
      /***/
      // when not sequential interaction
      if (!self.direction) {
        // inner
        const inner = tr.querySelector('[data-xt-drop-inner]')
        gsap.killTweensOf(inner)
        gsap
          .to(inner, {
            height: 0,
            duration: innerTime,
            ease: innerEase,
          })
          .eventCallback('onUpdate', () => {
            innerHeightCache = inner.clientHeight
          })
      }
      /***/
    }
  }

  self.container.addEventListener('off.xt.drop', off, true) // useCapture event propagation

  // leave

  const leave = e => {
    const tr = e.target
    // enhancement when want to close the drop on mouseleave also when using 'click'
    if (self.options.on === 'click') {
      tr.dispatchEvent(new CustomEvent('off.trigger.xt.drop'))
    }
  }

  for (const tr of self.targets) {
    tr.addEventListener('mouseleave', leave)
  }

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}

/* mountLine */

const mountLine = ({ ref }) => {
  // vars

  const megamenu = ref.querySelector('.megamenu')
  const btns = ref.querySelectorAll('.button--line')
  const drops = ref.querySelectorAll('[data-xt-drop-element]')
  const line = ref.querySelector('.megamenu-line')

  const dropDelay = 150
  const lineHeight = 7
  const lineTime = 0.5
  const lineEase = 'quint.out'
  let lineFirst = true
  /***/
  let btnOn = false
  /***/

  // enter

  const enter = e => {
    let el = e.target
    /***/
    if (e.type === 'on.xt.drop') {
      el = el.parentNode.querySelector(':scope > .button--line')
    } else {
      btnOn = true
    }
    /***/
    // line
    const lineX = el.offsetLeft
    const lineY = el.offsetTop + el.offsetHeight
    const lineWidth = el.offsetWidth
    if (lineFirst) {
      gsap.set(line, {
        x: lineX,
        y: lineY,
        width: lineWidth,
        height: 0,
        opacity: 0,
      })
      lineFirst = false
    }
    gsap.to(line, {
      x: lineX,
      y: lineY - lineHeight,
      width: lineWidth,
      height: lineHeight,
      opacity: 1,
      duration: lineTime,
      ease: lineEase,
    })
  }

  for (const btn of btns) {
    btn.addEventListener('mouseenter', enter)
  }

  for (const drop of drops) {
    drop.addEventListener('on.xt.drop', enter)
  }

  // leave

  const leave = e => {
    let el = e.target
    /***/
    if (e.type === 'off.xt.drop') {
      el = el.parentNode.querySelector(':scope > .button--line')
    } else {
      btnOn = false
    }
    /***/
    /***/
    // same delay as drop
    /***/
    setTimeout(() => {
      /***/
      // when one button still hover
      if (btnOn) {
        return
      }
      /***/
      // check open drops
      const self = Xt.get({ name: 'xt-drop', el: megamenu })
      const dropBtnActive = self.elements.filter(x => self.hasCurrent({ el: x }))[0]
      if (dropBtnActive) {
        /***/
        // when one drop still open
        /***/
        const lineX = dropBtnActive.offsetLeft
        const lineY = dropBtnActive.offsetTop + dropBtnActive.offsetHeight
        const lineWidth = dropBtnActive.offsetWidth
        gsap.to(line, {
          x: lineX,
          y: lineY - lineHeight,
          width: lineWidth,
          height: lineHeight,
          opacity: 1,
          duration: lineTime,
          ease: lineEase,
        })
      } else {
        /***/
        // when no drop still open
        /***/
        const lineY = el.offsetTop + el.offsetHeight
        lineFirst = true
        gsap.to(line, {
          y: lineY,
          height: 0,
          opacity: 0,
          duration: lineTime,
          ease: lineEase,
        })
      }
    }, dropDelay)
  }

  for (const btn of btns) {
    btn.addEventListener('mouseleave', leave)
  }

  for (const drop of drops) {
    drop.addEventListener('off.xt.drop', leave)
  }

  // unmount

  return () => {}
}

/* mountSwitcher */

const mountSwitcher = ({ ref }) => {
  /* switcher for demo purpose remove this */

  // vars

  const megamenu = ref.querySelector('.megamenu')
  const switcher = ref.querySelector('input[type="checkbox"]')

  // change

  const change = () => {
    const self = Xt.get({ name: 'xt-drop', el: megamenu })
    if (self) {
      if (switcher.checked) {
        self.options.on = 'mouseenter focus'
        self.options.off = 'mouseleave'
        self.options.delay = 150
      } else {
        self.options.on = 'click'
        self.options.off = 'click'
        self.options.delay = false
      }
      self.destroy({ weak: true })
      self.reinit()
    }
  }

  switcher.addEventListener('change', change)

  requestAnimationFrame(() => {
    change()
  })

  // unmount

  return () => {}
}

/* mount */

const mount = ({ ref }) => {
  const unmountDrops = mountDrops({ ref })
  const unmountLine = mountLine({ ref })
  const unmountSwitcher = mountSwitcher({ ref })

  // unmount

  return () => {
    unmountDrops()
    unmountLine()
    unmountSwitcher()
  }
}
