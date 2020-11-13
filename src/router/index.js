import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/view/Home"
import List from "@/view/List"
import My from "@/view/My"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
    , {
      path: '/my',
      name: 'My',
      component: My
    }
  ],
  mode: "history"

})
