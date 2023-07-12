'use client'

import React, { useLayoutEffect } from 'react'

export default function Layout({ children }) {
  // no useEffect cause bugs demos hash
  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      require('src/app/assets/scripts/setup')
    }
  }, [])
  return <>{children}</>
}
