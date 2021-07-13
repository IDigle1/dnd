import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/pages/StartMenu.vue').default
    },
    {
      path: '/create-server',
      name: 'create-server',
      component: require('@/pages/CreateServer.vue').default
    },
    {
      path: '/create-person',
      name: 'create-person',
      component: require('@/pages/CreatePerson.vue').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
