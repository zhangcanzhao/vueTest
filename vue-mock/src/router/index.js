import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import userManage from '@/components/userManage/userManage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/userManage',
      name: 'userManage',
      component: userManage
    }
  ]
})
