import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import App from './App.vue'

import './assets/css/app.scss'

Vue.config.productionTip = false

//api
import apis from '@/api/index'
Vue.prototype.$api = apis

//axios 全局配置
// require('@/utils/customaxios.js')

//全局组件
import Bottom from "./components/Bottom";
Vue.component('footer-bottom', Bottom)

Vue.use(ElementUI)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
