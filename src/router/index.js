import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import BasicControl from '../pages/demo/BasicControl'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/BasicControl',
      name: 'BasicControl',
      component: BasicControl
    }
  ]
})
