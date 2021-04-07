import React, { useRef, useCallback } from 'react'
import { Xt } from 'xtendui'

export default function component() {
  const nodeRef = useRef(null)
  let unmount
  const ref = useCallback(ref => {
    if (nodeRef.current) {
      unmount(nodeRef.current)
    }
    nodeRef.current = ref
    if (ref !== null) {
      unmount = mount({ ref })
    }
  }, [])

  return (
    <div className="demo--jumptocontent-react" ref={ref}>
      <div className="jumptocontent xt-toggle fixed z-above left-0 py-4 w-full flex justify-center transform transition opacity-0 -translate-y-4 active:opacity-100 active:translate-y-0">
        <a
          href="#jumptocontent"
          className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
          Jump to content
        </a>
      </div>

      <div className="xt-row xt-row-6">
        <div className="w-full">
          <div className="xt-card rounded-md p-6 text-black xt-links-default bg-gray-200">
            <div className="xt-h4">Lorem ipsum</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="xt-card rounded-md p-6 text-black xt-links-default bg-gray-200">
            <div className="xt-h4">Lorem ipsum</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
        </div>

        <div className="w-full" id="jumptocontent">
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

/* mount */

const mount = ({ ref }) => {
  const unmountJumptocontents = mountJumptocontents({ ref })

  // unmount

  return () => {
    unmountJumptocontents()
  }
}

/* mountJumptocontents */

const mountJumptocontents = ({ ref }) => {
  const jumptocontents = ref.querySelectorAll('.jumptocontent')
  const unmounts = []

  for (const jumptocontent of jumptocontents) {
    // focusIn

    const focusIn = e => {
      const active = jumptocontent.contains(e.target)
      if (active) {
        Xt.animOn(jumptocontent)
      } else {
        Xt.animOff(jumptocontent)
      }
    }

    document.addEventListener('focusin', focusIn)

    // unmount

    unmounts.push(() => {
      document.removeEventListener('focusin', focusIn)
    })
  }

  // unmount

  return () => {
    for (const unmount of unmounts) {
      unmount()
    }
  }
}
