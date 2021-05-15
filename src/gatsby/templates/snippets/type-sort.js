export const typeSort = (a, b) => {
  let first = 0
  let last = 0
  if (b.title === 'Introduction') {
    // a is less than b by some ordering criterion
    first += 2
  }
  if (b.title === 'Global') {
    // a is less than b by some ordering criterion
    first += 1
  }
  if (a.title === 'By Component') {
    // a is less than b by some ordering criterion
    first += 1
  }
  if (a.title === 'Introduction') {
    // a is greater than b by the ordering criterion
    last += 2
  }
  if (a.title === 'Global') {
    // a is greater than b by the ordering criterion
    last += 1
  }
  if (b.title === 'By Component') {
    // a is greater than b by the ordering criterion
    last += 1
  }
  // a must be equal to b
  return first >= last ? 1 : -1
}
