import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="card card-default">
  <div class="card-design"></div>
  <div class="card-inner">
    <div class="card-content">
      <div class="card-block card-item">
        <div class="h4 card-title">Lorem ipsum dolor sit amet</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
      </div>
      <span class="loader loader-x loader-size-x loader-mouse demo--loader-mouse-filler">
        <span class="filler">
          <span></span><span></span>
        </span>
      </span>
    </div>
  </div>
</div>
`
