import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/StartMenu.vue').default
    },
    {
      path: '/create-server',
      name: 'create-server',
      component: require('@/components/CreateServer.vue').default
    },
    {
      path: '/create-person',
      name: 'create-person',
      component: require('@/components/CreatePerson.vue').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
