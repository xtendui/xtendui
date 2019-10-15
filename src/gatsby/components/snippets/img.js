export default function (width = 400, height = 150) {
  return `<svg class="full" width="${width}" height="${height}"><rect width="100%" height="100%" fill="#7a7e8e"></rect><text x="50%" y="50%" fill="#ffffff" dy=".3em">Image ${width} x ${height}</text></svg>`
}
