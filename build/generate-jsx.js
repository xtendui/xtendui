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
      // refs
      const refs = html.match(/id="ref--(.*?)"/g)
      let str = `import React from 'react'
`
      // js
      const jsGlob = new glob.Glob(`${src}.js`, (er, jsSources) => {
        if (!jsSources.length) {
          str += `
class Demo extends React.Component {`
        } else {
          const jsSource = jsSources[0]
          const jsText = fs.readFileSync(jsSource, 'utf8')
          // automatic check of refs
          if (!refs) {
            // not found any ref in html
            console.error('Jsx generator found custom javascript and no html "ref--"')
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
              console.error('Jsx generator found custom javascript with no matching html "ref--"')
              process.exit(1)
            }
          }
          // ##IMPORTSSTART and ##IMPORTSEND
          const imports = jsText.match(/\/\*##IMPORTSSTART\*\/\n([\S\s]*?)\/\*##IMPORTSEND\*\/\n/g)
          if (imports) {
            for (const meta of imports.entries()) {
              str += meta[1].replace(/\/\*##IMPORTSSTART\*\/\n/g, '').replace(/\/\*##IMPORTSEND\*\/\n/g, '')
            }
          }
          str += `
class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    this.object = this.ref.current
`
          // ##COMPONENTDIDMOUNTSTART and ##COMPONENTDIDMOUNTEND
          const mounts = jsText.match(
            /[ ]*\/\*##COMPONENTDIDMOUNTSTART\*\/\n([\S\s]*?)[ ]*\/\*##COMPONENTDIDMOUNTEND\*\/\n/g
          )
          if (mounts) {
            for (const meta of mounts.entries()) {
              str += meta[1]
                .replace(/[ ]*\/\*##COMPONENTDIDMOUNTSTART\*\/\n/g, '')
                .replace(/[ ]*\/\*##COMPONENTDIDMOUNTEND\*\/\n/g, '')
            }
          }
          str += `  }

  componentWillUnmount() {
`
          // ##COMPONENTDIDUNMOUNTSTART and ##COMPONENTDIDUNMOUNTEND
          const unmount = jsText.match(
            /[ ]*\/\*##COMPONENTDIDUNMOUNTSTART\*\/\n([\S\s]*?)[ ]*\/\*##COMPONENTDIDUNMOUNTEND\*\/\n/g
          )
          if (unmount) {
            for (const meta of unmount.entries()) {
              str += meta[1]
                .replace(/[ ]*\/\*##COMPONENTDIDUNMOUNTSTART\*\/\n/g, '')
                .replace(/[ ]*\/\*##COMPONENTDIDUNMOUNTEND\*\/\n/g, '')
            }
          }
          str += `  }

`
          // ##METHODSSTART and ##METHODSEND
          const methods = jsText.match(/[ ]*\/\*##METHODSSTART\*\/\n([\S\s]*?)[ ]*\/\*##METHODSEND\*\/\n/g)
          if (methods) {
            for (const meta of methods.entries()) {
              str += meta[1].replace(/[ ]*\/\*##METHODSSTART\*\/\n/g, '').replace(/[ ]*\/\*##METHODSEND\*\/\n/g, '')
            }
          }
        }
      })
      jsGlob.on('end', () => {
        str += `
  render() {
    return (
`
        if (refs) {
          str += `      <div ref={this.ref}>
`
        }
        html = html.replace(/class="/g, 'className="')
        if (refs) {
          // remove first and last line including ref
          html = html.split('\n').slice(2, -2).join('\n')
        } else {
          // remove first and last line
          html = html.split('\n').slice(1, -1).join('\n')
        }
        str += indentString(html, 4)
        if (refs) {
          str += `
      </div>`
        }
        str += `
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
