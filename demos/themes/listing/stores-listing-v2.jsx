import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import gsap from 'gsap'

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--stores-listing-v2-react" ref={ref}>
      <div className="*** listing *** py-10">
        <div className="container">
          <div className="xt-row xt-row-6 xt-row-stretch">
            <div className="w-full md:w-6/12 lg:w-4/12">
              <div className="*** listing-item *** block relative overflow-hidden w-full group">
                <div className="*** listing-item-front *** cursor-pointer absolute inset-0 xt-card rounded-2xl">
                  <div className="xt-media-container bg-gray-200 h-40">
                    <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                  </div>
                  <div className="mt-6 flex flex-col">
                    <div className="xt-card text-sm py-0 px-7 flex-initial border-l border-gray-200">
                      <div className="xt-h5">Lorem Ipsum</div>
                      <address className="xt-p font-sm not-italic">Street 42, 00134 City, Nation</address>
                    </div>
                  </div>
                </div>

                <div className="*** listing-item-back *** min-h-[22rem] opacity-0 pointer-events-none group-on:pointer-events-auto h-full xt-card rounded-2xl">
                  <button
                    type="button"
                    className="xt-button xt-dismiss absolute z-above top-0 right-0 text-xl"
                    aria-label="Close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xt-icon "
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <div className="xt-card text-sm py-0 px-7 flex-initial border-l border-gray-200">
                    <div className="xt-h5">Contacts</div>
                    <div className="xt-p font-sm">
                      <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a>
                      <br />
                      <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a>
                      <br />
                    </div>
                    <div className="xt-h5">Timetable</div>
                    <div className="xt-p font-sm">
                      <strong>Monday:</strong> 15:30–19:30
                      <br />
                      <strong>Tuesday:</strong> 10:00–13:00, 15:30–19:30
                      <br />
                      <strong>Wednesday:</strong> 10:00–13:00, 15:30–19:30
                      <br />
                      <strong>Thursday:</strong> 10:00–13:00, 15:30–19:30
                      <br />
                      <strong>Friday:</strong> 10:00–13:00, 15:30–19:30
                      <br />
                      <strong>Saturday:</strong> 10:00–19:30
                      <br />
                      <strong>Sunday:</strong> 10:00–13:00, 15:30–19:30
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-6/12 lg:w-4/12">
              <div className="*** listing-item *** block relative overflow-hidden w-full group">
                <div className="*** listing-item-front *** cursor-pointer absolute inset-0 xt-card rounded-2xl">
                  <div className="xt-media-container bg-gray-200 h-40">
                    <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                  </div>
                  <div className="mt-6 flex flex-col">
                    <div className="xt-card text-sm py-0 px-7 flex-initial border-l border-gray-200">
                      <div className="xt-h5">Lorem Ipsum</div>
                      <address className="xt-p font-sm not-italic">Street Lorem Ipsum 42, 00134 City, Nation</address>
                    </div>
                  </div>
                </div>

                <div className="*** listing-item-back *** min-h-[22rem] opacity-0 pointer-events-none group-on:pointer-events-auto h-full xt-card rounded-2xl">
                  <button
                    type="button"
                    className="xt-button xt-dismiss absolute z-above top-0 right-0 text-xl"
                    aria-label="Close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xt-icon "
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <div className="xt-card text-sm py-0 px-7 flex-initial border-l border-gray-200">
                    <div className="xt-h5">Contacts</div>
                    <div className="xt-p font-sm">
                      <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a>
                      <br />
                      <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-6/12 lg:w-4/12">
              <div className="*** listing-item *** block relative overflow-hidden w-full group">
                <div className="*** listing-item-front *** cursor-pointer absolute inset-0 xt-card rounded-2xl">
                  <div className="xt-media-container bg-gray-200 h-40">
                    <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                  </div>
                  <div className="mt-6 flex flex-col">
                    <div className="xt-card text-sm py-0 px-7 flex-initial border-l border-gray-200">
                      <div className="xt-h5">Lorem Ipsum</div>
                      <address className="xt-p font-sm not-italic">Street Lorem Ipsum 42, 00134 City, Nation</address>
                    </div>
                  </div>
                </div>

                <div className="*** listing-item-back *** min-h-[22rem] opacity-0 pointer-events-none group-on:pointer-events-auto h-full xt-card rounded-2xl">
                  <button
                    type="button"
                    className="xt-button xt-dismiss absolute z-above top-0 right-0 text-xl"
                    aria-label="Close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xt-icon "
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <div className="xt-card text-sm py-0 px-7 flex-initial border-l border-gray-200">
                    <div className="xt-h5">Contacts</div>
                    <div className="xt-p font-sm">
                      <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a>
                      <br />
                      <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a>
                      <br />
                    </div>
                    <div className="xt-h5">Timetable</div>
                    <div className="xt-p font-sm">
                      <strong>Monday:</strong> 15:30–19:30
                      <br />
                      <strong>Tuesday:</strong> 10:00–13:00, 15:30–19:30
                      <br />
                      <strong>Wednesday:</strong> 10:00–13:00, 15:30–19:30
                      <br />
                      <strong>Thursday:</strong> 10:00–13:00, 15:30–19:30
                      <br />
                      <strong>Friday:</strong> 10:00–13:00, 15:30–19:30
                      <br />
                      <strong>Saturday:</strong> 10:00–19:30
                      <br />
                      <strong>Sunday:</strong> 10:00–13:00, 15:30–19:30
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-6/12 lg:w-4/12">
              <div className="*** listing-item *** block relative overflow-hidden w-full group">
                <div className="*** listing-item-front *** cursor-pointer absolute inset-0 xt-card rounded-2xl">
                  <div className="xt-media-container bg-gray-200 h-40">
                    <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                  </div>
                  <div className="mt-6 flex flex-col">
                    <div className="xt-card text-sm py-0 px-7 flex-initial border-l border-gray-200">
                      <div className="xt-h5">Lorem Ipsum</div>
                      <address className="xt-p font-sm not-italic">Street Lorem Ipsum 42, 00134 City, Nation</address>
                    </div>
                  </div>
                </div>

                <div className="*** listing-item-back *** min-h-[22rem] opacity-0 pointer-events-none group-on:pointer-events-auto h-full xt-card rounded-2xl">
                  <button
                    type="button"
                    className="xt-button xt-dismiss absolute z-above top-0 right-0 text-xl"
                    aria-label="Close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xt-icon "
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <div className="xt-card text-sm py-0 px-7 flex-initial border-l border-gray-200">
                    <div className="xt-h5">Contacts</div>
                    <div className="xt-p font-sm">
                      <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a>
                      <br />
                      <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-6/12 lg:w-4/12">
              <div className="*** listing-item *** block relative overflow-hidden w-full group">
                <div className="*** listing-item-front *** cursor-pointer absolute inset-0 xt-card rounded-2xl">
                  <div className="xt-media-container bg-gray-200 h-40">
                    <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                  </div>
                  <div className="mt-6 flex flex-col">
                    <div className="xt-card text-sm py-0 px-7 flex-initial border-l border-gray-200">
                      <div className="xt-h5">Lorem Ipsum</div>
                      <address className="xt-p font-sm not-italic">Street Lorem Ipsum 42, 00134 City, Nation</address>
                    </div>
                  </div>
                </div>

                <div className="*** listing-item-back *** min-h-[22rem] opacity-0 pointer-events-none group-on:pointer-events-auto h-full xt-card rounded-2xl">
                  <button
                    type="button"
                    className="xt-button xt-dismiss absolute z-above top-0 right-0 text-xl"
                    aria-label="Close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xt-icon "
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <div className="xt-card text-sm py-0 px-7 flex-initial border-l border-gray-200">
                    <div className="xt-h5">Contacts</div>
                    <div className="xt-p font-sm">
                      <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a>
                      <br />
                      <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a>
                      <br />
                    </div>
                    <div className="xt-h5">Timetable</div>
                    <div className="xt-p font-sm">
                      <strong>Monday:</strong> 15:30–19:30
                      <br />
                      <strong>Tuesday:</strong> 10:00–13:00, 15:30–19:30
                      <br />
                      <strong>Wednesday:</strong> 10:00–13:00, 15:30–19:30
                      <br />
                      <strong>Thursday:</strong> 10:00–13:00, 15:30–19:30
                      <br />
                      <strong>Friday:</strong> 10:00–13:00, 15:30–19:30
                      <br />
                      <strong>Saturday:</strong> 10:00–19:30
                      <br />
                      <strong>Sunday:</strong> 10:00–13:00, 15:30–19:30
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-6/12 lg:w-4/12">
              <div className="*** listing-item *** block relative overflow-hidden w-full group">
                <div className="*** listing-item-front *** cursor-pointer absolute inset-0 xt-card rounded-2xl">
                  <div className="xt-media-container bg-gray-200 h-40">
                    <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                  </div>
                  <div className="mt-6 flex flex-col">
                    <div className="xt-card text-sm py-0 px-7 flex-initial border-l border-gray-200">
                      <div className="xt-h5">Lorem Ipsum</div>
                      <address className="xt-p font-sm not-italic">Street Lorem Ipsum 42, 00134 City, Nation</address>
                    </div>
                  </div>
                </div>

                <div className="*** listing-item-back *** min-h-[22rem] opacity-0 pointer-events-none group-on:pointer-events-auto h-full xt-card rounded-2xl">
                  <button
                    type="button"
                    className="xt-button xt-dismiss absolute z-above top-0 right-0 text-xl"
                    aria-label="Close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xt-icon "
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <div className="xt-card text-sm py-0 px-7 flex-initial border-l border-gray-200">
                    <div className="xt-h5">Contacts</div>
                    <div className="xt-p font-sm">
                      <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a>
                      <br />
                      <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* mount */

const mount = ({ ref }) => {
  const unmountListing = mountListing({ ref })

  // unmount

  return () => {
    unmountListing()
  }
}

/* mountListing */

const mountListing = ({ ref }) => {
  // vars

  const items = ref.querySelectorAll('.listing-item')

  // click

  const on = tr => {
    if (!tr.classList.contains('on')) {
      // class
      Xt.on({ el: tr })
      // front
      const front = tr.querySelector('.listing-item-front')
      gsap.to(front, {
        opacity: 0,
        duration: 0.5,
        ease: 'expo.out',
      })
      // front
      const back = tr.querySelector('.listing-item-back')
      gsap.set(back, {
        y: 40,
        opacity: 0,
      })
      gsap.to(back, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'expo.out',
      })
    } else {
      off(tr)
    }
  }

  const off = tr => {
    if (tr.classList.contains('on')) {
      // class
      Xt.off({ el: tr })
      // front
      const front = tr.querySelector('.listing-item-front')
      gsap.set(front, {
        y: -40,
        opacity: 0,
      })
      gsap.to(front, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'expo.out',
      })
      // front
      const back = tr.querySelector('.listing-item-back')
      gsap.to(back, {
        y: 0,
        opacity: 0,
        duration: 0.5,
        ease: 'expo.out',
      })
    }
  }

  const click = e => {
    const tr = e.target.closest('.listing-item')
    // deactivate
    for (const other of Array.from(items).filter(x => x !== tr)) {
      off(other)
    }
    // activate
    on(tr)
  }

  for (const item of items) {
    item.querySelector('.listing-item-front').addEventListener('click', click)
    item.querySelector('.xt-dismiss').addEventListener('click', () => {
      off(item)
    })
  }

  // unmount

  return () => {}
}
