import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import InEdit from '@/components/InEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/edit',
      name: 'InEdit',
      component: InEdit
    }
  ]
})
