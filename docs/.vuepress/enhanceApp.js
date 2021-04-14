import BelloUI from '../../src/index.js'
import "../../src/styles/index.scss"

import utils from '../../src/utils/ie.js'

export default ({
  Vue,
  options,
  router
}) => {
  Vue.use(BelloUI)
  Vue.use(utils)
  window.that = Vue.prototype
}