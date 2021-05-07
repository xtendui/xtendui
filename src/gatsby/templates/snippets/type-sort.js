export const typeSort = (a, b) => {
  if (b.title === 'Getting Started') {
    // a is less than b by some ordering criterion
    return 1
  }
  if (b.title === 'Global') {
    // a is less than b by some ordering criterion
    return 1
  }
  if (a.title === 'By Component') {
    // a is less than b by some ordering criterion
    return 1
  }
  if (a.title === 'Getting Started') {
    // a is greater than b by the ordering criterion
    return -1
  }
  if (a.title === 'Global') {
    // a is greater than b by the ordering criterion
    return -1
  }
  if (b.title === 'By Component') {
    // a is greater than b by the ordering criterion
    return -1
  }
  // a must be equal to b
  return 0
}
