const fs = require('fs')
const del = require('del');
const path = require('path')
const glob = require('glob')
const writeFile = require('write')
const indentString = require('indent-string')

new glob.Glob('static/**/**.html', (er, files) => {
  for (const file of files) {
    const name = path.basename(file, '.html')
    const dir = path.dirname(file)
    const src = dir + '/' + name
    let str = `import React from 'react'
`
    const jsGlob = new glob.Glob(`${src}.js`, (er, jsSources) => {
      for (const jsSource of jsSources) {
        try {
          const jsText = fs.readFileSync(jsSource, 'utf8')
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
          str += `
  render() {
    return (
      <div ref={this.ref}>
`
        } catch (err) {
          console.error(err)
        }
      }
    })
    jsGlob.on('end', () => {
      const html = require('esm')(module)(path.resolve(`${src}.html`)).default
      str += indentString(
        html
          .replace(/^export default const html(.*)\n/gm, '')
          .replace(/class="/g, 'className="')
          .split('\n')
          .slice(2, -2)
          .join('\n'),
        6
      )
      str += `
      </div>
    )
  }
}

export default Demo
`
      const destination = `${src}.jsx`
      console.log('\nGenerating React', destination)
      writeFile(destination, str)
    })
  }
})
