import Vue from 'vue'
import Router from 'vue-router'
import main from '@/views/main'
import home from '@/views/home'
import product from '@/views/product'
import select from '@/views/select'
import cart from '@/views/cart'
import user from '@/views/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main,
      redirect: '/index',
      children: [
        {
          path: 'index',
          name: '首页',
          component: home
        },
        {
          path: 'product',
          name: '商品',
          component: product
        },
        {
          path: 'select',
          name: '分类',
          component: select
        },
        {
          path: 'cart',
          name: '购物车',
          component: cart
        },
        {
          path: 'user',
          name: '我的',
          component: user
        }
      ]
    }
  ]
})
