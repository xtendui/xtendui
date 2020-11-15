const cssSource = (demo, type = '.css') => {
  return require(`!!raw-loader!xtendui/src/${demo.path}${type}`).default
}

const jsSource = (demo, type = '.js') => {
  return require(`!!raw-loader!xtendui/src/${demo.path}${type}`).default
}

const jsxSource = (demo, type = '.jsx') => {
  return require(`!!raw-loader!xtendui/src/${demo.type}${type}`).default
}

export { cssSource, jsSource, jsxSource }
