let isIE9 = false
let isIE = false

try {
  const browser = navigator.appName
  const bVersion = navigator.appVersion
  const version = bVersion.split(';')

  if (version[1]) {
    const trimVersion = version[1].replace(/[ ]/g, '')
    if (browser === 'Microsoft Internet Explorer' || 'ActiveXObject' in window)
      isIE = true
    if (browser === 'Microsoft Internet Explorer' && trimVersion === 'MSIE9.0')
      isIE9 = true
  }
} catch (e) {
  console.error(e)
}

const install = function (Vue, options = {}) {

  Vue.prototype.$isIE = isIE;
  Vue.prototype.$isIE9 = isIE9;
}

export default install