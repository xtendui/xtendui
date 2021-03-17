const fs = require('fs')
const del = require('del')
const path = require('path')
const glob = require('glob')
const writeFile = require('write')
const indentString = require('indent-string')

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
      let strUnmount = ''
      let strMethods = ''
      // refs
      const refs = html.match(/id="ref--(.*?)"/g)
      // js
      const jsGlob = new glob.Glob(`${src}.js`, (er, jsSources) => {
        if (jsSources.length) {
          const jsSource = jsSources[0]
          const jsText = fs.readFileSync(jsSource, 'utf8')
          // automatic check of refs
          if (!refs) {
            // not found any ref in html
            console.error(`Jsx generator found custom javascript and no html "ref--" in ${file}`)
            process.exit(1)
          }
          const refsJs = jsText.match(/'#ref--(.*?)'/g)
          if (refsJs) {
            let found = 0
            for (const refJs of refsJs.entries()) {
              const checkJs = refJs[1].split("'").join('').replace('#', '')
              for (const refHtml of refs.entries()) {
                const checkHtml = refHtml[1].split('"').join('').replace('id=', '')
                if (checkJs === checkHtml) {
                  found++
                }
              }
            }
            if (found !== refsJs.length || found !== refs.length) {
              // not found ref in html with match
              console.error(`Jsx generator found custom javascript with no matching html "ref--" in ${file}`)
              process.exit(1)
            }
          }
          // ##IMPORTSTART and ##IMPORTEND
          const imports = jsText.match(/\/\*##IMPORTSTART\*\/\n([\S\s]*?)\/\*##IMPORTEND\*\/\n/g)
          if (imports) {
            for (const meta of imports.entries()) {
              strImports += meta[1].replace(/\/\*##IMPORTSTART\*\/\n/g, '').replace(/\/\*##IMPORTEND\*\/\n/g, '')
            }
            // remove ##
            strImports = strImports.replace(/\n*[ ]*\/\*##(.*)*/g, '')
          }
          // ##MOUNTSTART and ##MOUNTEND
          const mounts = jsText.match(/[ ]*\/\*##MOUNTSTART\*\/\n([\S\s]*?)[ ]*\/\*##MOUNTEND\*\/\n/g)
          if (mounts) {
            for (const meta of mounts.entries()) {
              strMount += meta[1]
            }
            // remove ##
            strMount = strMount.replace(/\n*[ ]*\/\*##(.*)*/g, '')
          }
          // ##UNMOUNTSTART and ##UNMOUNTEND
          const unmount = jsText.match(/[ ]*\/\*##UNMOUNTSTART\*\/\n([\S\s]*?)[ ]*\/\*##UNMOUNTEND\*\/\n/g)
          if (unmount) {
            for (const meta of unmount.entries()) {
              strUnmount += meta[1]
            }
            // remove ##
            strUnmount = strUnmount.replace(/\n*[ ]*\/\*##(.*)*/g, '')
          }
          // ##METHODSTART and ##METHODEND
          const methods = jsText.match(/[ ]*\/\*##METHODSTART\*\/\n([\S\s]*?)[ ]*\/\*##METHODEND\*\/\n/g)
          if (methods) {
            for (const meta of methods.entries()) {
              strMethods += meta[1]
            }
            // remove ##
            strMethods = strMethods.replace(/\n*[ ]*\/\*##(.*)*/g, '')
          }
        }
      })
      jsGlob.on('end', () => {
        html = html.replace(/class="/g, 'className="')
        if (refs) {
          // remove first and last line including ref
          html = html.split('\n').slice(2, -2).join('\n')
        } else {
          // remove first and last line
          html = html.split('\n').slice(1, -1).join('\n')
        }
        let str = `import React from 'react'
${strImports}
class Demo extends React.Component {${
          strMount !== ''
            ? `
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    this.object = this.ref.current${strMount}  }
${
  strUnmount !== ''
    ? `
  componentWillUnmount() {
${strUnmount}  }`
    : ''
}
${
  strMethods !== ''
    ? `
${strMethods}`
    : ''
}`
            : ''
        }
  render() {
    return (
${refs ? '      <div ref={this.ref}>\n' : ''}${indentString(html, 4)}${refs ? '\n      </div>' : ''}
    )
  }
}

export default Demo
`
        const destination = `${src}.jsx`
        writeFile(destination, str)
      })
    }
  })
})()
