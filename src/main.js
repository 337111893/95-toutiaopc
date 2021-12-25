import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios' // 引入axios
import ElementUI from 'element-ui' // 引入UI
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import '@/styles/index.less' // 引入默认样式文件
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'// 统一设置axios的请求头地址 baseURL,
Vue.prototype.$axios = 'axios'/// /所有的实例都直接共享拥有了 这个方法
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
