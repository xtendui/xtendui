'use client'

import { usePathname } from 'next/navigation'
import LayoutDefault from 'src/app/layout-default'
import LayoutDemo from 'src/app/layout-demo'

export default function Structure({ page, children }) {
  const pathname = usePathname()

  return (
    <>
      {pathname.startsWith('/demos/') ? (
        <LayoutDemo>{children}</LayoutDemo>
      ) : (
        <LayoutDefault page={page}>{children}</LayoutDefault>
      )}
    </>
  )
}

if (typeof window !== 'undefined') {
  const hash = decodeURI(location.hash.split('#')[1])
  const items = document.querySelectorAll('.docs_access_hidden')
  if (localStorage.getItem('access') === 'clear' || hash === 'clear') {
    localStorage.setItem('access', '')
    window.access = ''
    for (const item of items) {
      item.classList.add('hidden')
    }
  } else if (localStorage.getItem('access') === 'admin' || hash === 'admin') {
    localStorage.setItem('access', 'admin')
    window.access = 'admin'
    for (const item of items) {
      item.classList.remove('hidden')
    }
  }
}
