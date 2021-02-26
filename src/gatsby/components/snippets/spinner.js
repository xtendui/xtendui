export default ({ classes = null, dimension = 120, radius = 100, dash = 628 }) => {
  classes = classes ? ` ${classes}` : ''
  return `<svg viewBox="0 0 ${dimension * 2} ${
    dimension * 2
  }" class="absolute" preserveAspectRatio="xMinYMin meet"><circle class="stroke-current origin-center opacity-25" fill="none" stroke-width="30" cx="${dimension}" cy="${dimension}" r="${radius}" stroke-dasharray="${dash}" stroke-dashoffset="0" pathLength="${dash}"/></svg><svg viewBox="0 0 ${
    dimension * 2
  } ${
    dimension * 2
  }"><circle class="stroke-current origin-center relative${classes}" fill="none" stroke-width="30" cx="${dimension}" cy="${dimension}" r="${radius}" stroke-dasharray="${dash}" stroke-dashoffset="${dash}" pathLength="${dash}"/></svg>`
}
