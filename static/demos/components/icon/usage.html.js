const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3">
      ${classes.iconSearch({ classes: '*** xt-icon ***' })} ${classes.iconX({ classes: '*** xt-icon ***' })}
      ${classes.iconArrowLeft({ classes: '*** xt-icon ***' })} ${classes.iconArrowRight({ classes: '*** xt-icon ***' })}
      ${classes.iconArrowUp({ classes: '*** xt-icon ***' })} ${classes.iconArrowDown({ classes: '*** xt-icon ***' })}
      ${classes.iconChevronLeft({ classes: '*** xt-icon ***' })}
      ${classes.iconChevronRight({ classes: '*** xt-icon ***' })}
      ${classes.iconChevronUp({ classes: '*** xt-icon ***' })}
      ${classes.iconChevronDown({ classes: '*** xt-icon ***' })} ${classes.iconLocate({ classes: '*** xt-icon ***' })}
      ${classes.iconPackage({ classes: '*** xt-icon ***' })} ${classes.iconGithub({ classes: '*** xt-icon ***' })}
      ${classes.iconLink({ classes: '*** xt-icon ***' })} ${classes.iconCode({ classes: '*** xt-icon ***' })}
      ${classes.iconMaximize({ classes: '*** xt-icon ***' })} ${classes.iconExternal({ classes: '*** xt-icon ***' })}
      ${classes.iconCopy({ classes: '*** xt-icon ***' })}
    </div>
  </div>
`

export const object = {
  html: html,
}
