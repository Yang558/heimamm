// 导入 vue
import Vue from 'vue'
// 导入 App.vue
import App from './App.vue'
// 导入 router
import router from './router'
//导入element-ui
import ElementUI from 'element-ui';
//导入element-ui样式
import 'element-ui/lib/theme-chalk/index.css';
//导入index.css
import app from './style/index.css'
//使用element-ui
Vue.use(ElementUI);
//使用app
Vue.use(app)
Vue.config.productionTip = false

//创建一个新的 vue 实例
new Vue({
  router: router, //将路由对象挂载
  render: h => h(App),
}).$mount('#app')
