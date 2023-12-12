/* global package_json_version */

export default function Footer() {
  return (
    <div className="text-12 md:text-13 lg:text-sm">
      <div className="xt-row xt-row-1.5 text-opacity-75 justify-between flex-auto">
        <div>
          XtendUI v{package_json_version}{' '}
          <a
            href="https://github.com/xtendui/xtendui/blob/master/LICENSE.txt"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline">
            MIT
          </a>{' '}
          Docs{' '}
          <a
            href="https://github.com/xtendui/xtendui/blob/master/LICENSE-DOCS.txt"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline">
            CC-BY-4.0
          </a>{' '}
        </div>
        <div>
          © 2017 <span className="inline relative align-baseline before:content-['-']"></span>{' '}
          {new Date().getFullYear()} Riccardo Caroli
        </div>
      </div>
    </div>
  )
}
