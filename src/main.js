import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

// 导入全局样式表
import './assets/css/global.css'

//导入字体图标
import './assets/fonts/iconfont.css'

//导入elementui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// table全局注册
import TreeTable from 'vue-table-with-tree-grid'
import axios from 'axios'
// 配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'

// axios拦截器,为每一个请求都添加了token做为请求头
axios.interceptors.request.use(config => {
  config.headers.Authorization = sessionStorage.getItem('token')
  return config
})

Vue.prototype.$http = axios

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.component('tree-table', TreeTable)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')