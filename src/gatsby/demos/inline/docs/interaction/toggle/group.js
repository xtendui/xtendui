export const htmlSource = `
  <div class="list list-space--small align-items--center" data-xt-toggle>
    <button type="button" class="btn" data-xt-group="0">
      <span>Group 0</span>
    </button>
    <button type="button" class="btn">
      <span>Toggle 0</span>
    </button>
    <button type="button" class="btn" data-xt-group="0">
      <span>Group 0</span>
    </button>
    <button type="button" class="btn">
      <span>Toggle 1</span>
    </button>
    <button type="button" class="btn" data-xt-group="1">
      <span>Group 1</span>
    </button>
    <button type="button" class="btn" data-xt-group="1">
      <span>Group 1</span>
    </button>
    <div class="alert toggle--block">
      <div class="alert_content">
        Target 0
      </div>
    </div>
    <div class="alert toggle--block" data-xt-group="0">
      <div class="alert_content">
        Group 0
      </div>
    </div>
    <div class="alert toggle--block" data-xt-group="1">
      <div class="alert_content">
        Group 1
      </div>
    </div>
    <div class="alert toggle--block" data-xt-group="0">
      <div class="alert_content">
        Group 0
      </div>
    </div>
    <div class="alert toggle--block">
      <div class="alert_content">
        Target 1
      </div>
    </div>
  </div>
`
