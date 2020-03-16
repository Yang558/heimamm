//导入 Vue
import Vue from 'vue'
//导入 vue-router
import VueRouter from 'vue-router'
//导入index.vue
import Login from '../views/login/index.vue'
//使用vue-router
Vue.use(VueRouter)
// 创建一个新的 vue-router 对象
var router = new VueRouter({
    //添加路由的规则
    routes: [
        {path:'/login',
        component:Login}
    ]
})

//将新的对象暴露出去
export default router