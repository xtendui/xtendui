function url() {
  return 'http://localhost:8080/hidden/slider/'
}

async function action(page) {
  await page.click('[href="/hidden/slider/position/"]')
}

async function back(page) {
  await page.click('[href="/hidden/slider/"]')
}

module.exports = { action, back, url }
