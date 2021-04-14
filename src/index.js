import Button from './packages/button'
import Form from './packages/form'
import FormItem from './packages/form-item'
import Input from './packages/input'
import NoData from './packages/no-data'

const components = {
  blButton: Button,
  blForm: Form,
  blFormItem: FormItem,
  blInput: Input,
  blNoData: NoData
}

const install = function (Vue, options = {}) {

  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });


  // Vue.prototype.$message = Message;
  // Vue.prototype.$notice = Notice;
}

export default install