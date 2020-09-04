const cssSource = (demo, nameOverride, type = '.css') => {
  return require(`!!raw-loader!xtend-library/src/${demo.path}${type}`).default
}

const jsSource = (demo, nameOverride, type = '.js') => {
  return require(`!!raw-loader!xtend-library/src/${demo.path}${type}`).default
}

const jsxSource = (demo, nameOverride, type = '.jsx') => {
  return require(`!!raw-loader!xtend-library/src/${demo.type}${type}`).default
}

export { cssSource, jsSource, jsxSource }
