/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017-2022 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/master/LICENSE.txt)
 */

module.exports = {
  transitionDelay: {
    0: '0ms',
  },
  transitionDuration: {
    DEFAULT: '500ms',
    0: '0ms',
  },
  transitionTimingFunction: {
    DEFAULT: 'cubic-bezier(.23,1,.32,1)', // out-quint
    in: 'cubic-bezier(.755,.05,.855,.06)', // in-quint
    out: 'cubic-bezier(.23,1,.32,1)', // out-quint
    'in-out': 'cubic-bezier(.86,0,.07,1)', // in-out-quint
    'in-sine': 'cubic-bezier(.47,0,.745,.715)',
    'out-sine': 'cubic-bezier(.39,.575,.565,1)',
    'in-out-sine': 'cubic-bezier(.445,.05,.55,.95)',
    'in-quad': 'cubic-bezier(.55,.085,.68,.53)',
    'out-quad': 'cubic-bezier(.25,.46,.45,.94)',
    'in-out-quad': 'cubic-bezier(.455,.03,.515,.955)',
    'in-cubic': 'cubic-bezier(.55,.055,.675,.19)',
    'out-cubic': 'cubic-bezier(.215,.61,.355,1)',
    'in-out-cubic': 'cubic-bezier(.645,.045,.355,1)',
    'in-quart': 'cubic-bezier(.895,.03,.685,.22)',
    'out-quart': 'cubic-bezier(.165,.84,.44,1)',
    'in-out-quart': 'cubic-bezier(.77,0,.175,1)',
    'in-quint': 'cubic-bezier(.755,.05,.855,.06)',
    'out-quint': 'cubic-bezier(.23,1,.32,1)',
    'in-out-quint': 'cubic-bezier(.86,0,.07,1)',
    'in-expo': 'cubic-bezier(.95,.05,.795,.035)',
    'out-expo': 'cubic-bezier(.19,1,.22,1)',
    'in-out-expo': 'cubic-bezier(1,0,0,1)',
    'in-circ': 'cubic-bezier(.6,.04,.98,.335)',
    'out-circ': 'cubic-bezier(.075,.82,.165,1)',
    'in-out-circ': 'cubic-bezier(.785,.135,.15,.86)',
    'in-back': 'cubic-bezier(.6,-.28,.735,.045)',
    'out-back': 'cubic-bezier(.175,.885,.32,1.275)',
    'in-out-back': 'cubic-bezier(.68,-.55,.265,1.55)',
  },
  animation: {
    'xt-spinner': 'xt-spinner 1500ms infinite',
    'xt-filler-x': 'xt-filler-x 1500ms infinite',
    'xt-filler-y': 'xt-filler-y 1500ms infinite',
  },
  keyframes: theme => ({
    'xt-spinner': {
      '0%': {
        strokeDashoffset: '628',
        transform: 'rotateY(0deg) rotateZ(-90deg)',
        animationTimingFunction: theme('transitionTimingFunction.in'),
      },
      '50%': {
        strokeDashoffset: '0',
        transform: 'rotateY(0deg) rotateZ(90deg)',
      },
      '50.0001%': {
        strokeDashoffset: '0',
        transform: 'rotateY(180deg) rotateZ(90deg)',
        animationTimingFunction: theme('transitionTimingFunction.out'),
      },
      '100%': {
        strokeDashoffset: '628',
        transform: 'rotateY(180deg) rotateZ(-90deg)',
      },
    },
    'xt-filler-x': {
      '0%': {
        left: '0',
        width: '0',
        animationTimingFunction: theme('transitionTimingFunction.in'),
      },
      '50%': {
        left: '0',
        width: '100%',
        animationTimingFunction: theme('transitionTimingFunction.out'),
      },
      '100%': {
        left: '100%',
        width: '0',
      },
    },
    'xt-filler-y': {
      '0%': {
        top: '0',
        height: '0',
        animationTimingFunction: theme('transitionTimingFunction.in'),
      },
      '50%': {
        top: '0',
        height: '100%',
        animationTimingFunction: theme('transitionTimingFunction.out'),
      },
      '100%': {
        top: '100%',
        height: '0',
      },
    },
  }),
  component: {
    // instant animations on components init and reinit
    '.xt-body:not(.xt-optout-initial)': {
      '.initial': {
        '&, *': {
          transitionDuration: 'initial !important',
          transitionDelay: 'initial !important',
          animationDuration: 'initial !important',
          animationDelay: 'initial !important',
          animationIterationCount: '1 !important',
        },
      },
    },
    // instant animations accessibility
    '@media (prefers-reduced-motion: reduce), (update: slow)': {
      '.xt-body:not(.xt-optout-prm)': {
        '*': {
          transitionDuration: 'initial !important',
          transitionDelay: 'initial !important',
          animationDuration: 'initial !important',
          animationDelay: 'initial !important',
          animationIterationCount: '1 !important',
        },
      },
    },
  },
}
