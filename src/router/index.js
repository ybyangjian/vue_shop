import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../components/user/Users.vue'
import Rights from '../components/power/Rights.vue'
import Roles from '../components/power/Roles.vue'
import Cate from '../components/goods/Cate.vue'

Vue.use(VueRouter)

const routes = [
  // 重定向到login
  { path: '/', redirect: 'login' },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: Welcome },
      // 用户列表
      { path: '/users', component: Users },
      // 权限列表
      { path: '/rights', component: Rights },
      { path: '/roles', component: Roles },
      { path: '/categories', component: Cate }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 添加路由导航守卫
router.beforeEach((to, from, next) => {
  /**
   * to 将要访问的页面
   * from 从哪个页面访问而来
   */
  if (to.path === '/login') {
    return next()
  }
  // 获取token进行判断
  const token = sessionStorage.getItem('token')
  if (!token) {
    return next('/login')
  }
  next()
})

export default router