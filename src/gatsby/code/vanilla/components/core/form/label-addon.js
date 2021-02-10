import path from 'path'
const labelDefault = require('components/snippets/classes/label-default').default
const inputDefault = require('components/snippets/classes/input-default').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<form class="text-sm">
  <div class="row row-x-6 row-y-4">

    <div class="w-full">
      <label class="form-label mb-3 ${labelDefault()}">
        Lorem ipsum
        <div class="ml-4">
          <div class="list list-3 items-center">
            <a href="#" class="btn link">
              link #1
            </a>
            <a href="#" class="btn link">
              link #2
            </a>
          </div>
        </div>
      </label>
      <input type="text" class="form-item rounded-md ${inputDefault()}" aria-label="Lorem ipsum"/>
    </div>

    <div class="w-full">
      <label class="form-label mb-3 ${labelDefault()}">
        Dolor sit amet
        <div class="ml-auto">
          <div class="list list-3 items-center">
            <a href="#" class="btn link">
              link #1
            </a>
            <a href="#" class="btn link">
              link #2
            </a>
          </div>
        </div>
      </label>
      <input type="text" class="form-item rounded-md ${inputDefault()}" aria-label="Dolor sit amet"/>
    </div>

    <div class="w-full">
      <div class="row row-x-6 row-y-4">

        <div class="w-full md:w-2/12 md:self-center">
          <label class="form-label flex-col ${labelDefault()}">
            Lorem ipsum
            <div class="mt-2">
              <div class="list list-3 items-center">
                <a href="#" class="btn link">
                  link #1
                </a>
                <a href="#" class="btn link">
                  link #2
                </a>
              </div>
            </div>
          </label>
        </div>

        <div class="w-full md:w-10/12">
          <input type="text" class="form-item rounded-md ${inputDefault()}" aria-label="Lorem ipsum"/>
        </div>

      </div>
    </div>

    <div class="w-full">
      <div class="row row-x-6 row-y-4">

        <div class="w-full md:w-2/12 md:self-center">
          <label class="form-label flex-col ${labelDefault()}">
            Dolor sit amet
            <div class="mt-auto">
              <div class="list list-3 items-center">
                <a href="#" class="btn link">
                  link #1
                </a>
                <a href="#" class="btn link">
                  link #2
                </a>
              </div>
            </div>
          </label>
        </div>

        <div class="w-full md:w-10/12">
          <input type="text" class="form-item rounded-md ${inputDefault()}" aria-label="Dolor sit amet"/>
        </div>

      </div>
    </div>

  </div>
</form>
`
