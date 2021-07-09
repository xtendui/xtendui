const fs = require('fs')
const del = require('del')
const path = require('path')
const glob = require('glob')
const writeFile = require('write')
const indentString = require('indent-string')
const test = false
/*
test = true
console.log(test)
*/

;(async () => {
  await del(['static/demos/**/**.jsx'])
  new glob.Glob('static/demos/**/**.html.js', (er, files) => {
    for (const file of files) {
      const name = path.basename(file, '.html.js')
      const dir = path.dirname(file)
      const src = `${dir}/${name}`
      let html = require('esm')(module)(path.resolve(`${src}.html.js`)).object.html
      let strImports = ''
      let strMount = ''
      let strMethods = ''
      // refs
      const refs = html.match(/class="demo--(.*?)"/g)
      html = html.replace(/(?<=class="demo--(.*?))"/g, '-react"')
      // jsx comments
      html = html.replace(/<!--(.*)-->/g, (_, str) => `{/*${str}*/}`)
      // js
      const jsGlob = new glob.Glob(`${src}.js`, (er, jsSources) => {
        if (jsSources.length) {
          const jsSource = jsSources[0]
          const jsText = fs.readFileSync(jsSource, 'utf8')
          // automatic check of refs
          const refsJs = jsText.match(/(?!'\.)demo--[^' ]*/g)
          if (refsJs) {
            let found = 0
            for (const refJs of refsJs.entries()) {
              const checkJs = refJs[1].split("'").join('').replace('.', '')
              for (const refHtml of refs.entries()) {
                const checkHtml = refHtml[1].split('"').join('').replace('class=', '')
                if (checkJs === checkHtml) {
                  found++
                }
              }
            }
            if (!refs) {
              // not found any ref in html
              console.error(`Jsx generator found custom javascript and no html demo-- in ${file}`)
              process.exit(1)
            }
            if (found < refsJs.length || found < refs.length) {
              // not found ref in html with match
              console.error(`Jsx generator found custom javascript with no matching html demo-- in ${file}`)
              //process.exit(1)
            }
          }
          // imports
          const imports = jsText.match(/([\s\S]+)(?=^Xt.mount)/gm)
          if (imports) {
            for (const meta of imports.entries()) {
              strImports += meta[1]
            }
          } else {
            strImports = `${jsText}\n`
          }
          // mounts
          const mounts = jsText.match(/(?<= {2}mount:(.*?)$).*([\S\s]*?)[ ]*(?=^\s\s\})/gm)
          if (mounts) {
            for (const meta of mounts.entries()) {
              strMount += meta[1]
            }
            strMount = strMount.replace(/^ {2}/gm, '')
          }
          // methods
          const methods = jsText.match(/(?<=^}\)\n)([\s\S]+)/gm)
          if (methods) {
            for (const meta of methods.entries()) {
              strMethods += meta[1]
            }
          }
          // remove xt if not used
          const xts = strMethods.match(/(Xt\.)/g)
          if (!xts) {
            strImports = strImports.replace(/(import { Xt } from 'xtendui'\n)/g, '')
          }
        }
      })
      jsGlob.on('end', () => {
        if (strMount) {
          html = html.replace(/(?<=class="demo--(.*?))"/g, '" ref={ref}')
        }
        // test
        if (test && refs) {
          html = html.replace(
            /(^ {2}<div *.+)/gm,
            `$1<button onClick={() => setCount(count + 1)}>You clicked {count} times</button>`
          )
        }
        // react stuff
        html = html.replace(/class="/g, 'className="')
        html = html.replace(/checked/g, 'defaultChecked')
        html = html.replace(/value/g, 'defaultValue')
        html = html.replace(/selected/g, '')
        html = html.replace(/playsinline/g, 'playsInline')
        html = html.replace(/autoplay/g, 'autoPlay')
        html = html.replace(/frameborder/g, 'frameBorder')
        // str
        const str = `import React${
          strMount !== '' ? `${refs ? `, { useRef, useEffect${test ? `, useState` : ''} }` : ''}` : ''
        } from 'react'
${strImports}export default function demo() {${
          strMount !== ''
            ? `${test && refs ? 'const [count, setCount] = useState(0)' : ''}
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])
`
            : ''
        }
  return (${indentString(html, 2)}  )
}${
          strMount !== ''
            ? `

/* mount */

const mount = ({ ref }) => {${strMount}}`
            : ''
        }
${strMethods !== '' ? `${strMethods}` : ''}`
        const destination = `${src}.jsx`
        writeFile(destination, str)
      })
    }
  })
})()
