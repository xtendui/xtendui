import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function Demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--fade-matchmedia-react" ref={ref}>
      <div className="xt-row xt-row-6">
        <div className="w-full">
          <div className="*** xt-card *** rounded-2xl p-6 sm:p-8 text-sm text-gray-900 xt-links-default bg-gray-100">
            <div className="xt-h5">Lorem ipsum</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="*** xt-card *** rounded-2xl p-6 sm:p-8 text-sm text-gray-900 xt-links-default bg-gray-100">
            <div className="xt-h5">Lorem ipsum</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
        </div>

        <div className="w-full md:w-6/12">
          <div className="*** xt-card *** rounded-2xl p-6 sm:p-8 text-sm text-gray-900 xt-links-default bg-gray-100">
            <div className="xt-h5">Lorem ipsum</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
        </div>

        <div className="w-full md:w-6/12">
          <div className="*** xt-card *** rounded-2xl p-6 sm:p-8 text-sm text-gray-900 xt-links-default bg-gray-100">
            <div className="xt-h5">Lorem ipsum</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
        </div>

        <div className="w-full md:w-6/12">
          <div className="*** xt-card *** rounded-2xl p-6 sm:p-8 text-sm text-gray-900 xt-links-default bg-gray-100">
            <div className="xt-h5">Lorem ipsum</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
        </div>

        <div className="w-full md:w-6/12">
          <div className="*** xt-card *** rounded-2xl p-6 sm:p-8 text-sm text-gray-900 xt-links-default bg-gray-100">
            <div className="xt-h5">Lorem ipsum</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
        </div>

        <div className="w-6/12 sm:w-4/12">
          <div className="*** xt-card *** rounded-2xl p-6 sm:p-8 text-sm text-gray-900 xt-links-default bg-gray-100">
            <div className="xt-h5">Lorem ipsum</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
        </div>

        <div className="w-6/12 sm:w-4/12">
          <div className="*** xt-card *** rounded-2xl p-6 sm:p-8 text-sm text-gray-900 xt-links-default bg-gray-100">
            <div className="xt-h5">Lorem ipsum</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
        </div>

        <div className="w-6/12 sm:w-4/12">
          <div className="*** xt-card *** rounded-2xl p-6 sm:p-8 text-sm text-gray-900 xt-links-default bg-gray-100">
            <div className="xt-h5">Lorem ipsum</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
        </div>

        <div className="w-6/12 sm:w-4/12">
          <div className="*** xt-card *** rounded-2xl p-6 sm:p-8 text-sm text-gray-900 xt-links-default bg-gray-100">
            <div className="xt-h5">Lorem ipsum</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
        </div>

        <div className="w-6/12 sm:w-4/12">
          <div className="*** xt-card *** rounded-2xl p-6 sm:p-8 text-sm text-gray-900 xt-links-default bg-gray-100">
            <div className="xt-h5">Lorem ipsum</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
        </div>

        <div className="w-6/12 sm:w-4/12">
          <div className="*** xt-card *** rounded-2xl p-6 sm:p-8 text-sm text-gray-900 xt-links-default bg-gray-100">
            <div className="xt-h5">Lorem ipsum</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

/* mountFade */

const mountFade = ({ ref }) => {
  // check if already done for content added dinamically

  const items = ref.querySelectorAll('.xt-card:not(.faded)')
  for (const item of items) {
    item.classList.add('faded')
  }

  // match media

  /***/
  ScrollTrigger.matchMedia({
    '(max-width: 767px)': () => {
      // fade

      ScrollTrigger.batch(items, {
        onEnter: batch => {
          gsap.killTweensOf(batch)
          gsap.set(batch, {
            opacity: 0,
          })
          gsap.to(batch, {
            opacity: 1,
            duration: 0.5,
            ease: 'quart.out',
            stagger: index => {
              return Math.min(0.6, index * 0.15)
            },
          })
        },
        onLeave: batch => {
          gsap.killTweensOf(batch)
          gsap.to(batch, {
            opacity: 0,
            duration: 0.5,
            ease: 'quart.out',
            stagger: index => {
              return Math.min(0.6, index * 0.15)
            },
          })
        },
        onEnterBack: batch => {
          gsap.killTweensOf(batch)
          gsap.set(batch, {
            opacity: 0,
          })
          gsap.to(batch, {
            opacity: 1,
            duration: 0.5,
            ease: 'quart.out',
            stagger: index => {
              return Math.min(0.6, index * 0.15)
            },
          })
        },
        onLeaveBack: batch => {
          gsap.killTweensOf(batch)
          gsap.to(batch, {
            opacity: 0,
            duration: 0.5,
            ease: 'quart.out',
            stagger: index => {
              return Math.min(0.6, index * 0.15)
            },
          })
        },
      })
    },
    '(min-width: 640px)': () => {
      // fade

      for (const trigger of items) {
        gsap.set(trigger, {
          opacity: 1,
        })
      }
    },
  })
  /***/

  // unmount

  return () => {}
}

/* mount */

const mount = ({ ref }) => {
  const unmountFade = mountFade({ ref })

  // unmount

  return () => {
    unmountFade()
  }
}
