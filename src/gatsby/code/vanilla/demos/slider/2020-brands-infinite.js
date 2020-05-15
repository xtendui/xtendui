import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="slider demo--2020-brands-infinite">

    <div class="slides">
        <ul class="slides-inner">

            <li class="slide">
                <div class="slide-inner">
                    <div class="slide_item">
                        <div class="slide_item_content">
                            Lorem
                        </div>
                        <div class="slide_item_content">
                            ipsum
                        </div>
                        <div class="slide_item_content">
                            dolor sit amet
                        </div>
                        <div class="slide_item_content">
                            consectetur
                        </div>
                        <div class="slide_item_content">
                            adipiscing elit
                        </div>
                        <div class="slide_item_content">
                            Nunc
                        </div>
                        <div class="slide_item_content">
                            tempus
                        </div>
                        <div class="slide_item_content">
                            laoreet
                        </div>
                        <div class="slide_item_content">
                            leo sit amet iaculis
                        </div>
                        <div class="slide_item_content">
                            Lorem
                        </div>
                        <div class="slide_item_content">
                            ipsum
                        </div>
                        <div class="slide_item_content">
                            dolor sit amet
                        </div>
                        <div class="slide_item_content">
                            consectetur
                        </div>
                        <div class="slide_item_content">
                            adipiscing elit
                        </div>
                        <div class="slide_item_content">
                            Nunc
                        </div>
                        <div class="slide_item_content">
                            tempus
                        </div>
                        <div class="slide_item_content">
                            laoreet
                        </div>
                        <div class="slide_item_content">
                            leo sit amet iaculis
                        </div>
                    </div>
                </div>
            </li>

        </ul>
    </div>

    <nav class="slider-pagination display-none">
        <button type="button" class="btn btn-default xt-ignore" data-xt-pag title="Slide xt-num">
        </button>
    </nav>

</div>

<div class="slider demo--2020-brands-infinite demo--2020-brands-infinite--factor">

    <div class="slides">
        <ul class="slides-inner">

            <li class="slide">
                <div class="slide-inner">
                    <div class="slide_item">
                        <div class="slide_item_content">
                            Lorem
                        </div>
                        <div class="slide_item_content">
                            ipsum
                        </div>
                        <div class="slide_item_content">
                            dolor sit amet
                        </div>
                        <div class="slide_item_content">
                            consectetur
                        </div>
                        <div class="slide_item_content">
                            adipiscing elit
                        </div>
                        <div class="slide_item_content">
                            Nunc
                        </div>
                        <div class="slide_item_content">
                            tempus
                        </div>
                        <div class="slide_item_content">
                            laoreet
                        </div>
                        <div class="slide_item_content">
                            leo sit amet iaculis
                        </div>
                        <div class="slide_item_content">
                            Lorem
                        </div>
                        <div class="slide_item_content">
                            ipsum
                        </div>
                        <div class="slide_item_content">
                            dolor sit amet
                        </div>
                        <div class="slide_item_content">
                            consectetur
                        </div>
                        <div class="slide_item_content">
                            adipiscing elit
                        </div>
                        <div class="slide_item_content">
                            Nunc
                        </div>
                        <div class="slide_item_content">
                            tempus
                        </div>
                        <div class="slide_item_content">
                            laoreet
                        </div>
                        <div class="slide_item_content">
                            leo sit amet iaculis
                        </div>
                    </div>
                </div>
            </li>

        </ul>
    </div>

    <nav class="slider-pagination display-none">
        <button type="button" class="btn btn-default xt-ignore" data-xt-pag title="Slide xt-num">
        </button>
    </nav>

</div>
`
