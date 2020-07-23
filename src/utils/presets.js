const palette = require(`./palette`).default

module.exports = {
  palette,
  mq: {
    flipper: `@media(max-width:280px)`,
    oldPhone: `@media(max-width:340px)`,
    mobile: `@media (max-width: 450px)`,
    phablet: `@media (max-width: 576px)`,
    tablet: `@media (max-width: 999px)`,
    desktop: `@media (min-width: 1000px)`,
    xl: `@media (max-width: 2000)`,
    xxl: `@media (min-width: 2001px)`,
  },
  animation: {
    curveDefault: `cubic-bezier(0.4, 0, 02, 1)`,
    curveExpo: `cubic-bezier(.17, .67, .83, .67)`,
    speedDefault: `200ms`,
    speedFast: `100ms`,
    speedSlow: `350ms`,
  },
  elevation: {
    raised: 10,
    overlay: 20,
  },
  gutter: {
    mobile: `1px`,
    default: `1.25rem`,
    tablet: `2.5rem`,
    desktop: `3.75rem`,
  },
  offset: `44vw`,
  offsetXxl: `50rem`,

  browserAlign: {

    edge: `@supports (-ms-ime-align: auto)`

  },

}