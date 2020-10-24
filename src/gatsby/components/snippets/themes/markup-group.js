export default () => {
  return `
<div class="list list-2 items-center w-full">

  <form class="form-default flex-full" data-xt-toggle="{ elements: '.form-group > .btn', targets: '.group' }">
    <div class="form-group">
      <button type="button" class="btn btn-primary">
        group
      </button>
      <div class="group group-default">
        <div class="group-inner">
          <button type="button" class="btn btn-default btn-lg">
            ipsum
          </button>
        </div>
        <div class="group-inner">
          <input type="text" class="form-item" />
        </div>
      </div>
    </button>
  </form>

</div>
`
}
