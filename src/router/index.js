import Vue from 'vue'
// 1. 引入路由包  
import Router from 'vue-router'
// 2. 注册路由
Vue.use(Router)

// 3. 引入注册定义好的组件 相当于../src   
import Home from '@/components/tabbar/Home'
import Member from '@/components/tabbar/Member'
import Cart from '@/components/tabbar/Cart'
import Search from '@/components/tabbar/Search'
import NewsList from '@/components/news/NewsList'
import NewsInfo from '@/components/news/NewsInfo'
import PhotoList from '@/components/photos/PhotoList'
import PhotoInfo from '@/components/photos/PhotoInfo'


// 4. 实例化路由并配置路由规则  
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/member',
      component: Member
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/home/newslist',
      component: NewsList
    },
    {
      path: '/home/newsinfo/:id',
      component: NewsInfo
    },
    {
      path: '/home/photolist',
      component: PhotoList
    },
    {
      path: '/home/photoinfo/:id',
      component: PhotoInfo
    }
  ],
  // 设置路由高亮的样式  
  linkActiveClass: 'mui-active'
})
