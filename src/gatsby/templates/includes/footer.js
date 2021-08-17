import React from 'react'
import { useSiteMetadata } from 'src/gatsby/templates/includes/siteMetadata'

export default function Footer() {
  const { site } = useSiteMetadata()
  return (
    <div className="text-2xs md:text-xs lg:text-sm">
      <div className="xt-row xt-row-1.5 text-black text-opacity-75 justify-between flex-auto">
        <div>
          {site.siteMetadata.title} v{site.siteMetadata.version}{' '}
          <a
            href="https://github.com/xtendui/xtendui/blob/beta/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-black no-underline hover:underline">
            MIT
          </a>{' '}
          Docs{' '}
          <a
            href="https://github.com/xtendui/xtendui/blob/beta/LICENSE-DOCS"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-black no-underline hover:underline">
            CC-BY-4.0
          </a>{' '}
        </div>
        <div>
          © 2017 <span className="inline relative align-baseline before:content-['-']"></span> {new Date().getFullYear()}{' '}
          {site.siteMetadata.author}
        </div>
      </div>
    </div>
  )
}
